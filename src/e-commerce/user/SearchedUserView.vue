<template>
    <div class="found-user-view mt-16">

        <AppLoader v-if="loading" />

        <div class="main-page" v-else>
            <!-- BACKGROUND IMAGE SECTION -->

            <div class="bg-image flex items-center justify-center">
                <div class="img-wrapper relative shadow-xl opacity-100">
                    <img 
                        src="../../assets/images/background-image.jpg" 
                        class="object-cover h-60 md:h-96 w-[60rem] rounded-lg" 
                        alt="user-background-image"
                    >              
                </div>           
            </div>
            <!-- USER DETAILS SECTION -->

            <div class="user-details flex justify-center">
                <div class="lg:flex lg:justify-start grid justify-items-center text-center md:text-start lg:w-6/12 md:w-8/12 w-full">
                    <img 
                        :src="currentUser.photo" 
                        class="rounded-full h-40 w-40 shadow-lg ml-5 mt-[-2.5rem] z-0"  
                        alt="user-image"
                    >
                    <div class="md:ml-10">
                        <h1 class="font-bold text-xl md:text-4xl mt-5"> 
                            {{ currentUser.name }} 
                        </h1>
                        <p class="text-gray-600 font-bold">
                            358 friends
                        </p>
                        <div class="lg:flex lg:justify-between grid lg:w-[39rem]">
                            <div class="flex justify-center items-center">
                                <div class="friends md:block hidden" v-for="img in 8" :key="img">
                                    <img 
                                        :src="currentUser.photo" 
                                        class="h-8 w-8 rounded-full shadow-lg ml-[-0.25rem]" 
                                        alt="friend"
                                    >
                                </div>
                            </div>
                            <div class="flex justify-center mt-3 items-center">
                                    <button 
                                        class="rounded bg-blue-600 text-white py-[0.25rem] px-2 flex items-center jutify-between shadow-lg"
                                        @click="sendFriendRequest"
                                        v-show="!isFriendRequestSent"
                                    >
                                        <font-awesome-icon icon="fa-solid fa-plus" />
                                        <p class="font-bold text-base ml-1">
                                            Add friend
                                        </p>
                                    </button>
                                    <button 
                                        class="rounded bg-blue-500 text-white py-[0.25rem] px-2 flex items-center jutify-between shadow-lg"
                                        @click="cancelFriendRequest"
                                        v-show="isFriendRequestSent"
                                    >
                                        <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
                                        <p class="font-bold text-base ml-1">
                                            Request sent
                                        </p>
                                    </button>                                        
                                <button class="rounded ml-3 bg-gray-200 py-[0.25rem] px-4 flex items-center jutify-between shadow-lg">
                                    <p class="font-bold text-base">Follow</p>
                                </button>         
                                <button class="rounded ml-3 bg-gray-200 py-[0.25rem] px-2 flex items-center jutify-between shadow-lg md:hidden">
                                    <font-awesome-icon icon="fa-solid fa-ellipsis" />
                                </button>                                                                                
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
            <hr class="my-5">              
        </div>
    </div>
</template>

<script>
import firebase from '../../firebase/firebase'
import AppLoader from '../../app-components/AppLoader.vue'

export default {
    name: 'SearchedUserView',
    components: { AppLoader },
    data: () => ({
        allUsers: [],
        currentUser: {
            id: '',
            name: '',
            photo: ''
        },
        currentUserDetails: null,
        isFriendRequestSent: false,
        loading: false
    }),
    methods: {
        getCurrentUserInfo () {
            this.loading = true
            firebase
                .firestore()
                .collection("Users")
                .get()
                .then((querySnapShot) => {
                querySnapShot.forEach((user) => {
                    this.allUsers.push(user.data())
                })
                this.allUsers.forEach(user => {
                    if(user.id === this.$route.params.id) {
                        this.currentUser.name = user.userName
                        this.currentUser.photo = user.userImg
                        this.currentUser.id = user.id
                    }
                    this.loading = false
                })
            })            
        },
        sendFriendRequest () {
            firebase.auth().onAuthStateChanged(user => {
                if(user) {
                    console.log(user)
                    firebase.firestore().collection('Users').doc(this.currentUser.id).collection('ReceivedFriendRequests').doc(user.uid).set({
                        title: 'Freiend request',
                        type: 'Received',
                        status: 'pending',
                        from: user.displayName,
                        to: this.currentUser.name,
                        fromId: user.uid,
                        toIds: this.currentUser.id
                    })
                    firebase.firestore().collection('Users').doc(user.uid).collection('SentFriendRequests').doc(this.currentUser.id).set({
                        title: 'Freiend request',
                        type: 'Sent',
                        status: 'pending',
                        from: user.displayName,
                        to: this.currentUser.name,
                        fromId: user.uid,
                        toIds: this.currentUser.id
                    })                    
                    .then(() => {
                        console.log("Request sent to", this.currentUser.name)
                        this.isFriendRequestSent = true            
                    })
                    .catch(err => console.log(err))
                }
            })            
        },
        getSentRequests () {
            firebase.auth().onAuthStateChanged(user => {
                if(user){
                  firebase.firestore().collection('Users').doc(user.uid).collection('SentFriendRequests')
                   .get().then(querySnapShot => {
                        querySnapShot.forEach(doc => {
                            if(doc.data().to === this.currentUser.name){
                                this.isFriendRequestSent = true
                            }
                            
                        })
                    })
                }
            })
        },
        cancelFriendRequest () {
            console.log("Request canceled")
            this.isFriendRequestSent = false
        },         
    },                  
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getCurrentUserInfo()
           vm.getSentRequests()
        })
    },
    created () {

    }
}
</script>

<style>

</style>