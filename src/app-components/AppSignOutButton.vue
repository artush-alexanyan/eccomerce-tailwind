<template>
    <div class="sign-out">
        <button 
            class="px-5 rounded-full border-0 text-white bg-blue-500  py-2.5 font-bold text-md mx-3"
            @click="UserSignOut"
        >
            Sign out
        </button>    
    </div>       
</template>

<script>
import firebase from '../firebase/firebase'

export default {
    name: 'AppSignOutButton',
    data: () => ({

    }),
    methods: {
        UserSignOut () {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    console.log("Successfuly signed out")
                    this.$router.push({ name: 'AppLogin' })
            })
            .catch(err => console.log('Error during signout!', err))
        }        
    }    
}
</script>

<style>

</style>