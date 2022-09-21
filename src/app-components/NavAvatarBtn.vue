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
            <div class="absolute flex justify-center right-0">
                <transition name="toggle-user-info">
                    <div v-if="showUserInfo" class="bg-white md:w-96 w-72 mt-5 shadow-xl rounded-lg py-2 border border-gray-200">
                        <router-link to="/user/me">
                            <div 
                                class="card rounded-lg border mx-3 p-2 flex items-center" 
                                @click="showUserInfo = false"
                            >
                                <img 
                                    :src="userDetails.photo" 
                                    alt="avatar"
                                    class="rounded-full h-10 w-10"
                                >
                                <h1 class="text-xl font-bold ml-5"> {{ userDetails.userName }} </h1>                                
                            </div>                        </router-link>
                        <ul class="mt-5">
                            <li 
                                class="flex justify-start items-center py-3 px-3 cursor-pointer" 
                                v-for="item in dropdownItems" 
                                :key="item.title"
                                @click="showUserInfo = flase"
                            >
                                <div class="rounded-full bg-gray-100 h-10 w-10 border flex justify-center items-center">
                                    <font-awesome-icon 
                                        :icon="item.icon" 
                                        class="font-semibold text-xl"
                                    />
                                </div>
                                <router-link to="/user/me">
                                    <p class="text-base font-bold mx-3">
                                        {{ item.title }}
                                    </p>
                                </router-link>
                            </li> 
                            <AppSignOutButton />                            
                        </ul>                    
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
        dropdownItems: [
            { title: 'Settings & Privacy', icon: 'fa-solid fa-gear' },
            { title: 'Help & Support', icon: 'fa-solid fa-question' },
            { title: 'Display & accessibility', icon: 'fa-solid fa-moon' },
            { title: 'Give feedback', icon: 'fa-solid fa-message' },
        ]
    })    
}
</script>

<style>

</style>