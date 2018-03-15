import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Survey from '@/components/Survey'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/Survey',
            name: 'Survey',
            component: Survey
        }
    ]
})
