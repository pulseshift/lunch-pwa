// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import Vuetify from 'vuetify'
import lodash from 'lodash'
import 'vuetify/dist/vuetify.min.css'

sync(store, router)

Vue.use(Vuetify)
Object.defineProperty(Vue.prototype, '$lodash', { value: lodash })

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
