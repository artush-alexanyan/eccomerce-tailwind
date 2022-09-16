import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "AppLogin",
            component: () => import('../components/auth/AppLogin.vue')
        },
        {
            path: "/register",
            name: "AppRegister",
            component: () => import('../components/auth/AppRegister.vue')
        },
        {
            path: "/user-dashboard",
            name: "DashBoard",
            component: () => import('../e-commerce/DashBoard.vue')
        }  ,
        {
            path: "/user/me",
            name: "UserHomePage",
            component: () => import('../e-commerce/user/UserHomePage.vue')
        }                         

    ]
})

export default router