<template>
    <div class="dashboard">
        <div class="flex justify-center align-center mt-28">
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
            <div class="text-center my-">
                <button 
                    class="text-white bg-blue-500 py-2 mb-3 px-6 rounded-full" 
                    @click="UserSignOut"
                >
                 {{ isUserSigned == false ? "Go to login page" : 'Sign out' }}   
                </button>
            </div>
            </div>            
        </div>
    </div>
</template>

<script>
import UserStatus  from '../components/auth/mixins/authStatusCheck'

export default {
    name: 'DashBoard',
    mixins: [UserStatus],
    data: () => ({
        
    })
}
</script>