<template>
    <router-view />
</template>

<script>
import {subscribe, isSubscribed} from './services'
import postSubscription from './utils/postSubscription'

export default {
    name: 'app',
    mixins: [postSubscription],
    mounted () {
        isSubscribed()
            .then(function (isSubscribed) {
                if (!isSubscribed || Notification.permission !== 'granted') {
                    subscribe()
                        .then(function (subscription) {
                            this.postSubscription(subscription)
                        }.bind(this))
                }
            }.bind(this))
    }
}
</script>

<style>
html, body {
    margin: 0; 
    padding: 0;
    height: 100%; 
    overflow: hidden
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
