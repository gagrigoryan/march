import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/Main'
import Auth from "../components/Auth";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/girl/:id',
            name: 'Auth',
            component: Auth,
            props: true
        }
    ]
})

