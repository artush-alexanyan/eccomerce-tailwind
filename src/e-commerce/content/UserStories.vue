<template>
    <div class="stories-user">
        <router-view></router-view> 
        <div class="flex md:justify-center items-center my-4">
            <button 
                type="button" 
                class="rounded-full md:h-10 md:w-10 bg-gray-100 flex justify-center items-center ml-5" 
                :class="page === 0 ? 'hidden' : ''"
                @click="previoustStory"
            >
                <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-gray-400" />
            </button>  
            <div 
                class="card mx-2 relative" 
                v-for="story in storyIt" 
                :key="story.img"
            >
                <router-link :to="'/user-stories/' + story.createdBy">
                    <div class="card-image cursor-pointer">
                        <img :src="story.imgUrl" class="md:h-48 md:w-28 h-32 w-24 rounded-lg border border-gray-200" alt="">
                    </div>                    
                </router-link>
                <div class="absolute text-xs bottom-2 left-1">
                    <h6 class="font-extrabold text-white z-0">{{ story.createdBy }}</h6>
                </div>
            </div>
            <button 
                type="button" 
                class="rounded-full md:h-10 md:w-10 h-7 w-7 bg-gray-100 flex justify-center items-center mr-5" 
                :class="nextPageIconHide ? 'hidden' : ''"
                @click="nextStory"
            >
                <font-awesome-icon icon="fa-solid fa-chevron-right"  class="text-gray-400" />
            </button>                        
        </div>    
        <h1 class="m-10 text-4"> {{ $route.params.id }} </h1> 
    </div>
</template>

<script>
// import firebase from '../../firebase/firebase'
import UserStatus from '../../components/auth/mixins/authStatusCheck'
import allStory from '../../mixins/getStoryItems'


export default {
    name: 'UserStories',
    mixins: [ UserStatus, allStory ],
    data: () => ({
        currentTab: 0,
        page: 0,
        pageCount: 4,
        userStories: [],  
    }),
    methods: {
        changeStoryTab (index) {
           this.currentTab = index
        },
        nextStory () {
            (this.page + this.pageCount) <= this.allUserStories.length ? this.page+=this.pageCount : this.page
       
        },
        previoustStory () {
            this.page >= this.pageCount ? this.page-=this.pageCount : this.page
        },
        // getUserStoryes () {
        //    firebase.auth().onAuthStateChanged(user => {
        //     if(user){
        //      firebase.firestore().collection('Users').doc(user.uid).collection('UserStories').doc(user.uid)
        //         .get().then(snapshot =>{
        //                 const document = snapshot.data()
        //                 console.log("Documents: ", document)
        //                 this.userStories.push(document)
        //         })
        //     }
        //   })
        // }                         
    },
    computed: {
        storyIt () {
            return this.allUserStories.slice(this.page, this.page + this.pageCount)
        },
        nextPageIconHide () {
            return this.allUserStories.length - this.page === this.allUserStories.length % this.pageCount
        }
    },
    mounted () {
        // this.getUserStoryes()
        this.getAllUserStories()
        document.addEventListener("keydown", (event) => {
            if(event.code === 'ArrowRight') {
                this.changeStoryNext ()
            }
        }),
        document.addEventListener("keydown", (event) => {
            if(event.code === 'ArrowLeft') {
                console.log("Arrowright ", event)
                this.changeStoryPrevious ()
            }
        })        
    }   
}
</script>

<style>

</style>