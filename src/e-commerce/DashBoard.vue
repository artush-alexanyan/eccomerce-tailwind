<template>
    <div class="dashboard">
        <div class="flex justify-center items-center py-5 shadow-xl bg-gray-100">
            <div class="lg:mx-20 md:mx-10 mx-8">
                <button class="px-7 py-3 text-2xl text-black" @click="showSidebar = !showSidebar">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                </button>
            </div>
            <div class="lg:mx-20 md:mx-10 mx-8">
                <button class="px-7 py-3 text-2xl text-black" @click="showUserInfo = !showUserInfo">
                    <font-awesome-icon icon="fa-solid fa-user" />
                </button>
            </div>
            <div class="lg:mx-20 md:mx-10 mx-8">
                <button class="px-7 py-3 text-2xl text-black">
                    <font-awesome-icon icon="fa-solid fa-message" />
                </button>
            </div>            
        </div>       
        <transition name="toggle-sidebar">

            <div class="sidebar h-screen border-r-2 m-2 border-gray-100 shadow-lg w-1/5 bg-gray-100" v-show="showSidebar">
                <div class="user-info flex justify-start ml-3 align-center" v-if="showUserInfo">
                    <div class="max-w-sm rounded-xl overflow-hidden shadow-xl">
                    <img 
                        class="rounded-full mx-auto mt-3 h-32 w-32" 
                        :src="`${isUserSigned == false ? defaultPhoto : userDetails.photo}`" 
                        alt="User avatar"
                    >
                    <div class="px-6 py-4 text-center">
                        <div 
                            class="font-bold text-xl mb-2">
                                {{ isUserSigned == false ? "No user signed in" : userDetails.userName }} 
                            </div>
                        <p class="text-gray-700 text-base">
                        {{ userDetails.email }}
                        </p>
                    </div>
                    <div class="text-center my-3">
                        <AppSignOutButton />
                    </div>
                    </div>            
                </div>
            </div>
            
        </transition>
        <div class="sidebar h-screen border-l-2 ml-auto border-gray-100 shadow-lg w-4/5 bg-gray-100">

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
        showUserInfo: true,
        showSidebar: false
    }),
    methods: {

    }
}
</script>

<style scoped>
.toggle-sidebar-enter-active, .toggle-sidebar-leave-active {
  transition: opacity 1.5s;
}
.toggle-sidebar-enter, .toggle-sidebar-leave-to /* .toggle-sidebar-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>