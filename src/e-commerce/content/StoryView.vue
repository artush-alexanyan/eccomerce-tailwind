<template>
    <div class="story-view fixed top-0 w-full">
        <div class="story-view bg-white flex h-screen">
            <div class="story-sidebar w-1/5 h-5/6 border-gray-400 border-r bg-white hidden lg:block">
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
                    <button class="rounded-full h-20 w-20 flex items-center justify-center  ml-4 bg-gray-200">
                        <font-awesome-icon icon="fa-solid fa-plus" class="text-blue-400" />
                    </button>
                    <div class="ml-4">
                        <h6 class="font-semibold text-md">Create story</h6>
                        <p class="text-sm">Share a photo or write something</p>                        
                    </div>
                </div>
                <h5 class="mt-4 ml-4 font-bold text-lg ">All Stories</h5>
                <ul class="ml-4 story-items h-full mb-24">
                    <li 
                        class="flex items-center justify-start mt-4" 
                        :class="currentItemId === index ? 'bg-gray-100 rounded-full' : ''"
                        v-for="(story, index) in storyItems" 
                        :key="story.info"
                        @click="changeStorySidebar(index)"
                    >
                        <div class="img-wrapper border-[3px] border-blue-600 rounded-full cursor-pointer p-[0.125rem]">
                            <img 
                                :src="story.img" 
                                class="xl:h-16 xl:w-16 md:h-10 md:w-10 rounded-full" 
                                :alt="'Story item' + story.info"
                            >
                        </div>
                        <div class="ml-4">
                            <h6 class="font-semibold text-md"> {{ story.info }} </h6>
                            <p class="text-sm text-blue-400">Share a photo or write something</p>                        
                        </div>                        
                    </li>
                </ul>
            </div>
           <div class="content h-full w-full lg:w-4/5 bg-black border-4 flex justify-center">
                <div class="story-content relative">
                    <img :src="currentStoryImg" class="my-3 w-[30rem] mx-auto rounded-lg h-5/6" alt="story-image">
                    <div class="flex items-center absolute top-4 left-10 text-white">
                        <div class="flex items-center justify-center ml-10">
                            <img :src="userDetails.photo" class="h-10 w-10 rounded-full" alt="">
                            <h4 class="ml-2"> {{ currentStoryTitle }} </h4>                            
                        </div>
                    </div>
                    <div class="absolute top-[25rem] right-0">
                        <button 
                            class="h-12 w-12 rounded-full bg-gray-100  shadow-lg" 
                            :class="currentItemId === storyItems.length - 1 ? 'hidden' : ''" 
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
                            <font-awesome-icon icon="fa-solid fa-chevron-left" />
                        </button>
                    </div>                    
                    <div class="flex items-center mt-2">
                        <input type="text" class="rounded-3xl md:py-2 md:px-10 px-1 w-30 ml-4 md:w-full bg-black border-2 border-white">
                        <div class="smiles flex mr-4 ml-3">
                            <button class="smile rounded-full h-5 w-5 md:h-9 md:w-9 bg-white md:mx-1" v-for="sm in 7" :key="sm"></button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </div>
</template>

<script>
import UserStatus from '../../components/auth/mixins/authStatusCheck'

export default {
    name: 'StoryView',
    mixins: [ UserStatus ],
    page: 0,
    data: () => ({
        storyItems: [
            { id: 0, img: require("../../assets/images/storyes/story-1.jpg"), info: 'Hovhannes Shiraz'},
            { id: 1, img: require("../../assets/images/storyes/story-2.jpg"), info: 'Khachatur Abovian'},
            { id: 2, img: require("../../assets/images/storyes/story-3.jpg"), info: 'Missak Manouchian '},
            { id: 3, img: require("../../assets/images/storyes/story-4.jpg"), info: 'Paruyr Sevak'},
            { id: 4, img: require("../../assets/images/storyes/story-5.png"), info: 'Sayat-Nova'},
            { id: 5, img: require("../../assets/images/storyes/story-6.jpg"), info: 'Vahan Terian'},
            { id: 6, img: require("../../assets/images/storyes/story-7.png"), info: 'Yeghishe Charents'},
            { id: 7, img: require("../../assets/images/storyes/story-8.jpg"), info: 'Misaq Metsarenc'},
            { id: 8, img: require("../../assets/images/storyes/story-9.jpg"), info: 'Derenik Demirchyan'},
            { id: 9, img: require("../../assets/images/storyes/story-10.jpg"), info: 'Vahram Alazan'},
            { id: 10, img: require("../../assets/images/storyes/story-11.jpg"), info: 'Khachik Dashtenc'},
            { id: 11, img: require("../../assets/images/storyes/story-12.jpg"), info: 'Avetiq Isahakyan'},
            { id: 12, img: require("../../assets/images/storyes/story-13.png"), info: 'Aqsel Bakunts'},            
        ],
        currentStoryImg: '',
        currentStoryTitle: '',         
        currentItemId: null,
    }),
    methods: {
        getStoryItem () {
            console.log(this.$route.params.id)
            this.storyItems.map(item => {
                if(item.info === this.$route.params.id){
                    this.currentStoryImg = item.img
                    this.currentStoryTitle = item.info
                    this.currentItemId = item.id
                }
            })
        },
        changeStorySidebar (index) {
            this.storyItems.map((item, ind) => {
                if(index === ind) {
                    this.currentStoryImg = this.storyItems[index].img
                    this.currentStoryTitle = this.storyItems[index].info
                    this.currentItemId = this.storyItems[index].id
                }
            })
        },
        changeStoryNext () {
            if(this.currentItemId < this.storyItems.length){
                this.currentItemId++
                this.currentStoryImg = this.storyItems[this.currentItemId].img
                this.currentStoryTitle = this.storyItems[this.currentItemId].info                
            }
        },
        changeStoryPrevious () {
            if(this.currentItemId > 0){
                this.currentItemId--
                this.currentStoryImg = this.storyItems[this.currentItemId].img
                this.currentStoryTitle = this.storyItems[this.currentItemId].info                
            }
        }        
    },
beforeRouteEnter (to, from, next) { 
  next(vm => { 
    // access to component's instance using `vm` .
    // this is done because this navigation guard is called before the component is created.            
    // clear your previously populated search results.            
    // re-populate search results
    vm.getStoryItem();
  }) 
} 
}
</script>

<style>
.story-items{
    overflow: scroll;
}
</style>