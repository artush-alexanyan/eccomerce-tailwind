<template>
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
                <router-link to="/login">Login</router-link>
            </button>
            <button 
                class="px-5 rounded-full border-0 text-white bg-black  py-2.5 font-bold text-md mx-3"
            >
                <router-link to="/register">Register</router-link>
            </button>            
        </div>
        <div class="flex mr-10" v-if="isUserSigned == true">
            <AppSignOutButton />
        </div>        
    </div>
</template>

<script>
import UserStatus from '../components/auth/mixins/authStatusCheck'
import AppSignOutButton from './AppSignOutButton.vue'
export default {
    name: 'AppNavbar',
    mixins: [ UserStatus ],
    components: { AppSignOutButton }
}
</script>

<style>

</style>