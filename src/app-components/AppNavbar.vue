<template>
    <div class="app-navbar">

        <!-- AUTHENTICATED USER NAVBAR WITH LOGIN/REGISTRATION PAGES -->

        <div 
            class="flex justify-between items-center border-b fixed top-0 w-full shadow-xl py-2" 
            v-show="isUserSigned == false"
        >
            <div class="flex jutify-between items-center ml-10 w-50">
                <button 
                    type="button" 
                    class=""
                >
                <img 
                    class="avatar h-12 w-12 rounded-full border-gray-500" 
                    alt="avatar"
                    :src="defaultPhoto"     
                >
                </button>
        
                <button 
                    type="button"
                    class="text-gray-500 bg-gray-100 hidden md:block rounded-full ml-4 px-4 py-2"
                > 
                No user signed in
                </button>           
            </div>
            <div 
                class="flex mr-10" 
                v-if="isUserSigned == false"
            >
                <button 
                    class="px-5 rounded-full border-0 text-white bg-blue-500  py-2.5 font-bold text-md mx-3"
                >
                    <router-link to="/">Login</router-link>
                </button>
                <button 
                    class="px-5 rounded-full border-0 text-white bg-black  py-2.5 font-bold text-md mx-3"
                >
                    <router-link to="/register">Register</router-link>
                </button>            
            </div>
        
        </div>

        <!-- AUTHENTICATED USER NAVBAR WITH FULL FUNCTIONALITY -->

        <div class="flex justify-between items-center py-2 shadow-xl bg-white" v-show="isUserSigned == true">
            <div class="flex mr-11">
                <router-link to="/user-dashboard">
                    <img 
                        src="../assets/images/facebook-icon.jpg" 
                        class="h-10 w-10 ml-6" 
                        alt="facebook-icon"
                    >
                </router-link>
                <input type="text" placeholder="Search Facebook" class="w-60 rounded-full bg-gray-100 py-2.5 ml-2 serch-input lg:block hidden">
            </div>            
            <div class="flex">
                <div class="md:mx-7 mx-3">
                    <button class="md:px-3 py-1 text-2xl text-black" @click="showSidebar = !showSidebar">
                        <font-awesome-icon icon="fa-solid fa-bars" />
                    </button>
                </div>
                <div class="md:mx-7 mx-3">
                    <button class="md:px-3 py-1 text-2xl text-black">
                        <font-awesome-icon icon="fa-solid fa-user" />
                    </button>
                </div>
                <div class="md:mx-7 mx-3">
                    <button class="md:px-3 py-1 text-2xl text-black">
                        <font-awesome-icon icon="fa-solid fa-message" />
                    </button>
                </div>                 
            </div>
            <div class="flex">
                <div class="relative mx-2" >
                <button class="rounded-full border-2 h-10 w-10 bg-gray-200 lg:block hidden">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                </button>
                    <div class="absolute right-0 w-96 mt-5 hidden">
                    <transition name="toggle-user-info">
                        <div v-if="showUserInfo" class="bg-white shadow-xl rounded py-2 border border-gray-200">
                            <ul>
                                <li class="flex justify-start items-center py-3 px-3 cursor-pointer">
                                    <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                        <font-awesome-icon icon="fa-solid fa-message" />
                                    </div>
                                    <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                                </li>
                                <li class="flex justify-start items-center py-3 px-3 cursor-pointer">
                                    <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                        <font-awesome-icon icon="fa-solid fa-message" />
                                    </div>
                                    <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                                </li>
                                <li class="flex justify-start items-center py-3 px-3 cursor-pointer">
                                    <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                        <font-awesome-icon icon="fa-solid fa-message" />
                                    </div>
                                    <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                                </li>
                                <li class="flex justify-start items-center py-3 px-3 cursor-pointer">
                                    <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                        <font-awesome-icon icon="fa-solid fa-message" />
                                    </div>
                                    <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                                </li>
                                <li class="flex justify-start items-center py-3 px-3 cursor-pointer">
                                    <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                        <font-awesome-icon icon="fa-solid fa-message" />
                                    </div>
                                    <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                                </li>                                                                                                                                          
                            </ul>
                            <div class="text-center my-3">
                                <AppSignOutButton />
                            </div>                          
                        </div>
                    </transition>
                    </div>
                </div> 
                <div class="relative mx-2" >
                <button class="rounded-full border-2 h-10 w-10 bg-gray-200 lg:block hidden">
                    <font-awesome-icon icon="fa-solid fa-message" />
                </button>
                    <div class="absolute right-0 w-96 mt-5 hidden">
                    <transition name="toggle-user-info">
                        <div v-if="showUserInfo" class="bg-white shadow-xl rounded py-2 border border-gray-200">
                            <ul>
                                <li class="flex justify-start items-center py-3 px-3 cursor-pointer">
                                    <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                        <font-awesome-icon icon="fa-solid fa-message" />
                                    </div>
                                    <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                                </li>
                                <li class="flex justify-start items-center py-3 px-3 cursor-pointer">
                                    <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                        <font-awesome-icon icon="fa-solid fa-message" />
                                    </div>
                                    <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                                </li>
                                <li class="flex justify-start items-center py-3 px-3 cursor-pointer">
                                    <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                        <font-awesome-icon icon="fa-solid fa-message" />
                                    </div>
                                    <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                                </li>
                                <li class="flex justify-start items-center py-3 px-3 cursor-pointer">
                                    <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                        <font-awesome-icon icon="fa-solid fa-message" />
                                    </div>
                                    <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                                </li>
                                <li class="flex justify-start items-center py-3 px-3 cursor-pointer">
                                    <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                        <font-awesome-icon icon="fa-solid fa-message" />
                                    </div>
                                    <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                                </li>                                                                                                                                          
                            </ul>
                            <div class="text-center my-3">
                                <AppSignOutButton />
                            </div>                          
                        </div>
                    </transition>
                    </div>
                </div>              
                <div class="relative mx-2" >
                <button class="rounded-full border-2 h-10 w-10 bg-gray-200 lg:block hidden">
                    <font-awesome-icon icon="fa-solid fa-bell" />
                </button>
                    <div class="absolute right-0 w-96 mt-5 hidden">
                    <transition name="toggle-user-info">
                        <div v-if="showUserInfo" class="bg-white shadow-xl rounded py-2 border border-gray-200">
                            <ul>
                                <li class="flex justify-start items-center py-3 px-3 cursor-pointer">
                                    <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                        <font-awesome-icon icon="fa-solid fa-message" />
                                    </div>
                                    <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                                </li>
                                <li class="flex justify-start items-center py-3 px-3 cursor-pointer">
                                    <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                        <font-awesome-icon icon="fa-solid fa-message" />
                                    </div>
                                    <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                                </li>
                                <li class="flex justify-start items-center py-3 px-3 cursor-pointer">
                                    <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                        <font-awesome-icon icon="fa-solid fa-message" />
                                    </div>
                                    <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                                </li>
                                <li class="flex justify-start items-center py-3 px-3 cursor-pointer">
                                    <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                        <font-awesome-icon icon="fa-solid fa-message" />
                                    </div>
                                    <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                                </li>
                                <li class="flex justify-start items-center py-3 px-3 cursor-pointer">
                                    <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                        <font-awesome-icon icon="fa-solid fa-message" />
                                    </div>
                                    <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                                </li>                                                                                                                                          
                            </ul>
                            <div class="text-center my-3">
                                <AppSignOutButton />
                            </div>                          
                        </div>
                    </transition>
                    </div>
                </div>       
                <NavAvatarBtn />                                      
            </div>
        </div>             
    </div>
</template>

<script>
import UserStatus from '../components/auth/mixins/authStatusCheck'
import NavAvatarBtn from './NavAvatarBtn.vue'
export default {
    name: 'AppNavbar',
    components: { NavAvatarBtn },
    mixins: [ UserStatus ],
    data: () => ({
        
    })
}
</script>

<style>

</style>