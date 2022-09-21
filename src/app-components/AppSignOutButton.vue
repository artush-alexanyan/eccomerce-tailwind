<template>
    <div class="sign-out">
        <li 
            class="flex justify-start items-center md:py-3 px-3 cursor-pointer" 
            @click="UserSignOut"
        >
            <div class="rounded-full bg-gray-50 h-10 w-10 flex justify-center items-center">
                <font-awesome-icon 
                    icon="fa-solid fa-right-from-bracket" 
                    class="font-semibold text-xl"
                />
            </div>
            <p class="text-base font-bold mx-3">
                Log out
            </p>
        </li>
    </div>       
</template>

<script>
import firebase from '../firebase/firebase'
import UserStatus from '../components/auth/mixins/authStatusCheck'

export default {
    name: 'AppSignOutButton',
    mixins: [ UserStatus ],
    data: () => ({

    }),
    methods: {
        UserSignOut () {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    console.log("Successfuly signed out")
                    this.showUserInfo = false
                    this.$router.push({ name: 'AppLogin' })
            })
            .catch(err => console.log('Error during signout!', err))
        }        
    }    
}
</script>

<style>

</style>