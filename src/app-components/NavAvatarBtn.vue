<template>
    <div class="nav-avatar-button">
        <div class="relative mx-2" >
            <button class="rounded-full h-10 w-10 bg-gray-200 flex justify-center items-center" @click="showUserInfo = !showUserInfo">
                <img 
                    class="rounded-full h-10 w-10" 
                    :src="`${isUserSigned == false ? defaultPhoto : userDetails.photo}`" 
                    alt="User avatar"
                >                
            </button>
            <div class="absolute flex justify-center right-0 md:w-80 w-52 mt-5">
                <transition name="toggle-user-info">
                    <div v-if="showUserInfo" class="bg-white  shadow-xl rounded-lg py-2 border border-gray-200">
                        <ul>
                            <li 
                                class="flex justify-start items-center py-3 px-3 cursor-pointer" 

                            >
                                <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                    <font-awesome-icon icon="fa-solid fa-user" class="font-semibold text-lg"/>
                                </div>
                                <router-link to="/user/me">
                                    <p class="text-sm font-bold text-blue-600 mx-3">Go to your page</p>
                                </router-link>
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
</template>

<script>
import AppSignOutButton from './AppSignOutButton.vue'
import UserStatus from '../components/auth/mixins/authStatusCheck'
export default {
    name: 'NavAvatarBtn',
    mixins: [ UserStatus ],
    components: { AppSignOutButton },
    data: () => ({
        showUserInfo: false,
    })    
}
</script>

<style>

</style>