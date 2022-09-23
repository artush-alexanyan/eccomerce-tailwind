<template>
    <div class="story-view fixed top-0 w-full">
        <div class="story-view bg-white flex h-screen">

            <!-- SIDEBAR SECTION -->

            <div class="story-sidebar w-1/5 lg:h-5/6 md:2/3 border-gray-400 border-r bg-white hidden lg:block">
                <div class="flex justify-start items-center">
                    <router-link to="/user-dashboard">
                        <button class="rounded-full h-10 w-10 flex items-center justify-center bg-gray-400 ml-4 mt-5">
                            <font-awesome-icon icon="fa-solid fa-xmark" class="text-xl text-white" />
                        </button>                        
                    </router-link>
                    <img src="../../assets/images/facebook-icon.jpg" class="h-10 w-10 ml-4 mt-5" alt="fb-icon">
                </div>
                <h4 class="mt-4 ml-4 font-bold text-2xl ">Stories</h4>
                <div class="flex text-blue-400 ml-4 mt-3">
                    <router-link to="/archive" class="mr-1">Archive</router-link>.
                    <router-link to="/settings">Settings</router-link>
                </div>
                <h5 class="mt-4 ml-4 font-bold text-lg ">Your story</h5>
                <div class="flex items-center justify-start mt-4">
                    <router-link to="/user/me/add-story">
                        <button class="rounded-full h-20 w-20 flex items-center justify-center  ml-4 bg-gray-200">
                            <font-awesome-icon icon="fa-solid fa-plus" :fade="fade" class="text-blue-500 text-xl" />
                        </button>                        
                    </router-link>
                    <div class="ml-4">
                        <h6 class="font-semibold text-md">Create story</h6>
                        <p class="text-sm">Share a photo or write something</p>                        
                    </div>
                </div>
                <h5 class="mt-4 ml-4 font-bold text-lg ">All Stories</h5>
                <ul class="ml-4 story-items h-full mb-24">
                    <li 
                        class="flex items-center justify-start mt-4" 
                        :class="currentItemId === index ? 'bg-gray-50 rounded-full' : ''"
                        v-for="(story, index) in allUserStories" 
                        :key="story.id"
                        @click="changeStorySidebar(index)"
                    >
                        <div 
                            class="img-wrapper border-[3px] rounded-full cursor-pointer p-[0.125rem]"
                            :class="currentItemId === index? 'border-gray-300' : 'border-blue-600'"
                        >
                            <img 
                                :src="story.userPhoto" 
                                class="xl:h-16 xl:w-16 md:h-10 md:w-10 rounded-full" 
                                :alt="'Story item' + story.createdBy"
                            >
                        </div>
                        <div class="ml-4">
                            <h6 class="font-semibold text-md"> {{ story.createdBy }} </h6>
                            <p class="text-sm text-blue-400"> {{ story.id.length }} hours </p>               
                        </div>                        
                    </li>
                </ul>
            </div>

            <!-- CONTENT SECTION -->

           <div class="content h-full w-full lg:w-4/5 bg-black flex justify-center">
                <div class="story-content relative">
                    <img :src="currentStoryImg" class="my-3 w-full md:w-[30rem] mx-auto rounded-lg h-[88%]" alt="story-image">
                    <div class="flex items-center absolute top-4 left-10 text-white">
                        <div class="flex items-center justify-center ml-10">
                            <img :src="userDetails.photo" class="h-10 w-10 rounded-full" alt="">
                            <h4 class="ml-2"> {{ currentStoryTitle }} </h4>                            
                        </div>
                    </div>
                    <div class="absolute top-[25rem] right-0">
                        <button 
                            class="h-12 w-12 rounded-full bg-gray-100  shadow-lg" 
                            :class="currentItemId < allUserStories.length -1 ? '' : 'hidden'" 
                            @click="changeStoryNext"
                        >
                            <font-awesome-icon icon="fa-solid fa-chevron-right" />
                        </button>
                    </div>
                    <div class="absolute top-[25rem] left-0">
                        <button 
                            class="h-12 w-12 rounded-full bg-gray-100  shadow-lg" 
                            :class="currentItemId === 0 ? 'hidden' : ''" 
                            @click="changeStoryPrevious"
                        >
                            <font-awesome-icon icon="fa-solid fa-chevron-left" :fade="fade" />
                        </button>
                    </div>                    
                    <div class="flex items-center mt-2">
                        <input 
                            type="text" 
                            class="rounded-3xl md:py-2 md:px-10 px-1 w-30 ml-4 md:w-full bg-black border-2 border-white"
                        >
                        <div class="smiles flex mr-4 ml-3">
                            <button 
                                class="smile rounded-full h-5 w-5 md:h-9 md:w-9 bg-white md:mx-1" 
                                v-for="sm in 7" 
                                :key="sm"
                            >
                            </button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </div>
</template>

<script>
import UserStatus from '../../components/auth/mixins/authStatusCheck'
import allStory from '../../mixins/getStoryItems'

export default {
    name: 'StoryView',
    props: {
        fade: {
            type: Boolean,
            default: true
        }
    },
    mixins: [ UserStatus, allStory ],
    page: 0,
    data: () => ({
        currentStoryImg: '',
        currentStoryTitle: '',         
        currentItemId: 0,
    }),
    methods: { 
        changeStorySidebar (index) {
            this.allUserStories.map((item, ind) => {
                if(index === ind) {
                    this.currentStoryImg = this.allUserStories[index].imgUrl
                    this.currentStoryTitle = this.allUserStories[index].createdBy
                    this.currentItemId = index
                }
            })
        },
        changeStoryNext () {
            if(this.currentItemId < this.allUserStories.length){
                this.currentItemId++
                this.currentStoryImg = this.allUserStories[this.currentItemId].imgUrl
                this.currentStoryTitle = this.allUserStories[this.currentItemId].createdBy                
            }
        },
        changeStoryPrevious () {
            if(this.currentItemId > 0){
                this.currentItemId--
                this.currentStoryImg = this.allUserStories[this.currentItemId].imgUrl
                this.currentStoryTitle = this.allUserStories[this.currentItemId].createdBy                
            }
        },
    },
mounted () {
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
    document.addEventListener("keydown", (event) => {
        if(event.code === 'Escape') {
            this.$router.push({ name: 'DashBoard' })
        }
    })               
} 
}
</script>

<style>
.story-items{
    overflow: scroll;
}
</style>