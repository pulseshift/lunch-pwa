import Vue from 'vue'
import Vuex from 'vuex'
import { subscribe } from './notification.js'
import { status } from './status.js'

Vue.use(Vuex)

export default new Vuex.Store({
    subscribe,
    status
})
