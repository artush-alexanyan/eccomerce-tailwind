<template>
    <div class="dashboard">
        <div class="flex justify-between items-center py-2 shadow-xl bg-white">
            <div class="flex mr-11">
                <img src="../assets/images/facebook-icon.jpg" class="h-10 w-10 ml-6" alt="">
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
                            <li class="flex justify-start items-center py-3 px-3">
                                <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                    <font-awesome-icon icon="fa-solid fa-message" />
                                </div>
                                <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                            </li>
                            <li class="flex justify-start items-center py-3 px-3">
                                <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                    <font-awesome-icon icon="fa-solid fa-message" />
                                </div>
                                <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                            </li>
                            <li class="flex justify-start items-center py-3 px-3">
                                <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                    <font-awesome-icon icon="fa-solid fa-message" />
                                </div>
                                <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                            </li>
                            <li class="flex justify-start items-center py-3 px-3">
                                <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                    <font-awesome-icon icon="fa-solid fa-message" />
                                </div>
                                <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                            </li>
                            <li class="flex justify-start items-center py-3 px-3">
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
                            <li class="flex justify-start items-center py-3 px-3">
                                <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                    <font-awesome-icon icon="fa-solid fa-message" />
                                </div>
                                <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                            </li>
                            <li class="flex justify-start items-center py-3 px-3">
                                <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                    <font-awesome-icon icon="fa-solid fa-message" />
                                </div>
                                <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                            </li>
                            <li class="flex justify-start items-center py-3 px-3">
                                <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                    <font-awesome-icon icon="fa-solid fa-message" />
                                </div>
                                <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                            </li>
                            <li class="flex justify-start items-center py-3 px-3">
                                <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                    <font-awesome-icon icon="fa-solid fa-message" />
                                </div>
                                <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                            </li>
                            <li class="flex justify-start items-center py-3 px-3">
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
                            <li class="flex justify-start items-center py-3 px-3">
                                <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                    <font-awesome-icon icon="fa-solid fa-message" />
                                </div>
                                <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                            </li>
                            <li class="flex justify-start items-center py-3 px-3">
                                <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                    <font-awesome-icon icon="fa-solid fa-message" />
                                </div>
                                <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                            </li>
                            <li class="flex justify-start items-center py-3 px-3">
                                <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                    <font-awesome-icon icon="fa-solid fa-message" />
                                </div>
                                <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                            </li>
                            <li class="flex justify-start items-center py-3 px-3">
                                <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                    <font-awesome-icon icon="fa-solid fa-message" />
                                </div>
                                <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                            </li>
                            <li class="flex justify-start items-center py-3 px-3">
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
            <button class="rounded-full h-10 w-10 bg-gray-200 flex justify-center items-center" @click="showUserInfo = !showUserInfo">
                <img 
                    class="rounded-full h-10 w-10" 
                    :src="`${isUserSigned == false ? defaultPhoto : userDetails.photo}`" 
                    alt="User avatar"
                >                
            </button>
                <div class="absolute right-0 w-96 mt-5">
                <transition name="toggle-user-info">
                    <div v-if="showUserInfo" class="bg-white shadow-xl rounded-lg py-2 border border-gray-200">
                        <ul>
                            <li class="flex justify-start items-center py-3 px-3">
                                <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                    <font-awesome-icon icon="fa-solid fa-message" />
                                </div>
                                <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                            </li>
                            <li class="flex justify-start items-center py-3 px-3">
                                <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                    <font-awesome-icon icon="fa-solid fa-message" />
                                </div>
                                <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                            </li>
                            <li class="flex justify-start items-center py-3 px-3">
                                <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                    <font-awesome-icon icon="fa-solid fa-message" />
                                </div>
                                <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                            </li>
                            <li class="flex justify-start items-center py-3 px-3">
                                <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                    <font-awesome-icon icon="fa-solid fa-message" />
                                </div>
                                <p class="text-sm font-bold mx-3">Lorem ipsum dolor sit.</p>
                            </li>
                            <li class="flex justify-start items-center py-3 px-3">
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
            </div>
        </div>       

        <div class="main lg:flex">
            <div class="sidebar h-screen lg:block hidden w-full lg:w-1/3 bg-gray-200">
                <div class="w-96 mt-5">
                    <div>
                        <ul>
                            <router-link class="flex justify-start items-center py-3 px-3" to="/user/me">
                                <button class="rounded-full h-10 w-10 bg-gray-200 flex justify-center items-center">
                                    <img 
                                        class="rounded-full h-10 w-10" 
                                        :src="`${isUserSigned == false ? defaultPhoto : userDetails.photo}`" 
                                        alt="User avatar"
                                    >                
                                </button>
                                <p class="text-sm font-bold mx-3"> {{ userDetails.userName }} </p>
                            </router-link>
                            <li class="flex justify-start items-center py-3 px-3" v-for="item in sidebarItems" :key="item.info">
                                <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                    <img :src="item.img" alt="">
                                </div>
                                <p class="text-sm font-bold mx-3"> {{ item.info }} </p>
                            </li>                                                                                                                                         
                        </ul>                       
                    </div>
                </div>
            </div>        

            <div class="content h-screen bg-gray-200 justify-center w-full md:w-2/4">
                <FbStory />
            </div> 
            <div class="sidebar h-screen  lg:block hidden w-full lg:w-1/3 bg-gray-200">
                <div class="w-96 mt-5">

                </div>
            </div>                       
        </div>     
    </div>
</template>

<script>
import UserStatus  from '../components/auth/mixins/authStatusCheck'
import AppSignOutButton from '../app-components/AppSignOutButton.vue'
import FbStory from '../e-commerce/content/FbStory.vue'

export default {
    name: 'DashBoard',
    mixins: [UserStatus],
    components: { AppSignOutButton, FbStory },
    data: () => ({
        showUserInfo: false,
        showSidebar: true,
        currentTime: '',
        sidebarItems: [
            { img: require("../assets/images/sidebar/sidebar-1.png"), info: 'Friends'},
            { img: require("../assets/images/sidebar/sidebar-2.png"), info: 'Memories'},
            { img: require("../assets/images/sidebar/sidebar-3.png"), info: 'Communities(Groups)'},
            { img: require("../assets/images/sidebar/sidebar-4.png"), info: 'Marketplace'},
            { img: require("../assets/images/sidebar/sidebar-5.png"), info: 'Watch'},
            { img: require("../assets/images/sidebar/sidebar-6.png"), info: 'Saved'},
            { img: require("../assets/images/sidebar/sidebar-7.png"), info: 'Pages'},
        ]
    }),
    watch: {
        currentTime() {
            this.getCuttentTime()
        }
    },
    methods: {
        getCuttentTime () {
            let currentDate = new Date()
            let currentDay = currentDate.getDay()
            const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]

            const currentHours = currentDate.getHours()
            const currentMinutes = currentDate.getMinutes()
            const currentSecondes = currentDate.getSeconds()

            console.log("Today is: ", daylist[currentDay])
           
            this.currentTime = "Current time is: " + currentHours + ":"  + currentMinutes + ":"  +  currentSecondes
        }
    },
    created () {
        this.getCuttentTime()
    }
}
</script>

<style scoped>
.toggle-user-info-enter-active, .toggle-user-info-leave-active {
  transition: opacity 0.5s;
}
.toggle-user-info-enter, .toggle-user-info-leave-to /* .toggle-user-info-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.serch-input::placeholder{
    padding-left: 12px;
    font-size: 14px;
}
</style>