<template>
    <div class="flex justify-between items-center border-b fixed top-0 w-full shadow-xl py-5">
        <div class="flex jutify-between items-center ml-10 w-50">
            <button 
                type="button" 
                class=""
            >
            <img 
                class="avatar h-12 w-12 rounded-full border-gray-500" 
                alt="avatar"
                :src="`${isUserSigned == false ? defaultPhoto : userDetails.photo}`"     
            >
            </button>
       
            <button 
                type="button"
                class="text-gray-500 bg-gray-100 hidden md:block rounded-full ml-4 px-4 py-2"
                :class="isUserSigned == false ? 'hidden' : ''"
            > 
            {{ userDetails.email }}
             <font-awesome-icon icon="fa-solid fa-chevron-down" />   
            </button>           
        </div>
        <div 
            class="flex mr-10" 
            v-if="isUserSigned == false"
        >
            <button 
                class="px-5 rounded-full border-0 text-white bg-blue-500  py-2.5 font-bold text-md mx-3"
            >
                <router-link to="/login">Login</router-link>
            </button>
            <button 
                class="px-5 rounded-full border-0 text-white bg-black  py-2.5 font-bold text-md mx-3"
            >
                <router-link to="/register">Register</router-link>
            </button>            
        </div>
        <div class="flex mr-10" v-if="isUserSigned == true">
            <button 
                class="px-5 rounded-full border-0 text-white bg-yellow-500  py-2.5 font-bold text-md mx-3"
                @click="UserSignOut"
            >
                Sign out
            </button>       
        </div>        
    </div>
</template>

<script>
import UserStatus from '../components/auth/mixins/authStatusCheck'
export default {
    name: 'AppNavbar',
    mixins: [ UserStatus ]
}
</script>

<style>

</style>