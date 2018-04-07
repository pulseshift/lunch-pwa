// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import Vuefire from 'vuefire'
// Vue.use(Vuefire)

sync(store, router)

var SocialSharing = require('vue-social-sharing')
Vue.use(SocialSharing)

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
const root = new Vue({
    store,
    router,
    render: h => h(App)
})

document.addEventListener('DOMContentLoaded', () => {
    root.$mount('#app')
})
