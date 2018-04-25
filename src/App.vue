<template>
    <router-view />
</template>

<script>
import {messaging} from './services'
import postSubscription from './utils/postSubscription'

export default {
    name: 'app',
    mixins: [postSubscription],
    mounted () {
        messaging.requestPermission().then(() => {
            console.log('Permission')
            messaging.getToken().then((currentToken) => {
                console.log('Token:')
                console.log(currentToken)
                if (currentToken) {
                    console.log('Post')
                    this.postSubscription(currentToken)
                } else {
                    console.error('Error')
                }
            }).catch((err) => {
                console.error(err)
            })
        }).catch((err) => {
            console.error(err)
        })
        messaging.onTokenRefresh(() => {
            messaging.getToken().then((refreshedToken) => {
                this.postSubscription(refreshedToken)
            }).catch((err) => {
                console.error(err)
            })
        })
        messaging.onMessage(function (payload) {
            navigator.serviceWorker.getRegistration().then((registration) => {
                const notificationTitle = payload.notification.title
                const notificationOptions = {
                    body: payload.notification.body
                }
                registration.showNotification(notificationTitle, notificationOptions)
            })
            console.log('Message received. ', payload)
        })
        // isSubscribed()
        //     .then(function (isSubscribed) {
        //         if (!isSubscribed || Notification.permission !== 'granted') {
        //             subscribe()
        //                 .then(function (subscription) {
        //                     this.postSubscription(subscription)
        //                 }.bind(this))
        //         }
        //     }.bind(this))
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
