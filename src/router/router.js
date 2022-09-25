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
        },
        {
            path: '/loader',
            name: 'AppLoader',
            component: () => import('../app-components/AppLoader.vue')
        },                        
        {
            path: '/user-stories/:id',
            name: 'StoryView',
            component: () => import('../e-commerce/content/StoryView.vue') ,

        },
        {
            path: '/user-view/:id',
            name: 'SearchedUserView',
            component: () => import('../e-commerce/user/SearchedUserView.vue')
        },
        {
            path: '/all-users',
            name: 'AllUsers',
            component: () => import('../e-commerce/user/AllUsers.vue')
        },        
        {
            path: '/user/me/add-story',
            name: 'UserAddStory',
            component: () => import('../e-commerce/user/UserAddStory.vue')
        }
    ]
})

export default router