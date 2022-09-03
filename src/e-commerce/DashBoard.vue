<template>
    <div class="dashboard">
        <div class="flex justify-center items-center py-5 shadow-xl bg-gray-100">
            <div class="lg:mx-20 md:mx-10 mx-8">
                <button class="px-7 py-1 text-2xl text-black" @click="showSidebar = !showSidebar">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                </button>
            </div>
            <div class="lg:mx-20 md:mx-10 mx-8">
                <button class="px-7 py-1 text-2xl text-black" @click="showUserInfo = !showUserInfo">
                    <font-awesome-icon icon="fa-solid fa-user" />
                </button>
            </div>
            <div class="lg:mx-20 md:mx-10 mx-8">
                <button class="px-7 py-1 text-2xl text-black">
                    <font-awesome-icon icon="fa-solid fa-message" />
                </button>
            </div>            
        </div>       

        <div class="main lg:flex">
            <div class="sidebar h-screen border-r-2 m-2 border-gray-100 shadow-lg w-full lg:w-1/5 bg-gray-300" v-show="showSidebar">
                <transition name="toggle-user-info">
                    <div class="user-info flex justify-center pt-3 mt-3 align-center" v-if="showUserInfo">
                        <div class="rounded-xl overflow-hidden shadow-xl bg-white">
                        <img 
                            class="rounded-full mx-auto mt-3 h-16 w-16" 
                            :src="`${isUserSigned == false ? defaultPhoto : userDetails.photo}`" 
                            alt="User avatar"
                        >
                        <div class="px-3 py-4 text-center">
                            <div 
                                class="font-bold text-md mb-2">
                                    {{ isUserSigned == false ? "No user signed in" : userDetails.userName }} 
                                </div>
                            <p class="text-gray-700 text-sm">
                            {{ userDetails.email }}
                            </p>
                        </div>
                        <div class="text-center my-3">
                            <AppSignOutButton />
                        </div>
                        </div>            
                    </div>
                </transition>
            </div>        

            <div 
                class="content h-screen m-2 border-gray-100 shadow-lg bg-gray-200"
                :class="showSidebar == true ? 'lg:w-4/5 w-full' : 'w-full' "
            >
                <h1 class="text-center py-2">Lorem ipsum dolor sit.</h1>
                <h1 class="text-center py-2">Lorem ipsum dolor sit.</h1>
                <h1 class="text-center py-2">Lorem ipsum dolor sit.</h1>
                <h1 class="text-center py-2">Lorem ipsum dolor sit.</h1>
                <h1 class="text-center py-2">Lorem ipsum dolor sit.</h1>
                <h1 class="text-center py-2">Lorem ipsum dolor sit.</h1>
                <h1 class="text-center py-2">Lorem ipsum dolor sit.</h1>
                <h1 class="text-center py-2">Lorem ipsum dolor sit.</h1>
                <h1 class="text-center py-2">Lorem ipsum dolor sit.</h1>
                <h1 class="text-center py-2">Lorem ipsum dolor sit.</h1>
                <h1 class="text-center py-2">Lorem ipsum dolor sit.</h1>
                <h1 class="text-center py-2">Lorem ipsum dolor sit.</h1>
            </div>           
        </div>     
    </div>
</template>

<script>
import UserStatus  from '../components/auth/mixins/authStatusCheck'
import AppSignOutButton from '../app-components/AppSignOutButton.vue'

export default {
    name: 'DashBoard',
    mixins: [UserStatus],
    components: { AppSignOutButton },
    data: () => ({
        showUserInfo: false,
        showSidebar: true
    }),
    methods: {

    }
}
</script>

<style scoped>
.toggle-user-info-enter-active, .toggle-user-info-leave-active {
  transition: opacity 1.5s;
}
.toggle-user-info-enter, .toggle-user-info-leave-to /* .toggle-user-info-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>