<template>
    <div class="mt-10 bg-white w-full rounded-lg shadow-lg py-2">
        <ul class="flex justify-between items-center border-b">
            <li 
                class="nav-item md:mx-4 cursor-pointer" 
                :class="currentTab === index ? 'border-b-2 border-b-blue-700': ''"
                @click="changeStoryTab(index)"
                v-for="(action, index) in userActions" :key="index"
            >
                <h4 
                    class="story-title md:text-base text-sm font-semibold 
                           text-gray-400 md:mt-4 mx-5 md:mx-10 lg:mx-14 mb-5"
                >
                    {{ action.title }}
                </h4>
            </li>
        </ul>
        <div class="tab-content" id="tabs-tabContent">
            <div v-show="currentTab === 0">
                <div class="flex md:justify-between items-center my-4">
                    <button 
                        type="button" 
                        class="rounded-full md:p-3 p-1 bg-gray-200 border flex justify-center items-center ml-2 md:ml-5" 
                        :class="page === 0 ? 'hidden' : ''"
                        @click="previoustStory"
                    >
                        <font-awesome-icon icon="fa-solid fa-arrow-left-long" class="text-gray-400" />
                    </button>                    
                    <div class="card mx-2" v-for="story in storyIt" :key="story.img">
                        <div class="card-image">
                            <img :src="story.img" class="md:h-48 md:w-28 h-32 w-24 rounded-lg border border-gray-200" alt="">
                        </div>
                    </div>
                    <button 
                        type="button" 
                        class="rounded-full md:p-3 p-1 bg-gray-200 border flex justify-center items-center mr-2 md:mr-5" 
                        :class="nextPageIconHide ? 'hidden' : ''"
                        @click="nextStory"
                    >
                        <font-awesome-icon icon="fa-solid fa-arrow-right-long"  class="text-gray-400" />
                    </button>                        
                </div>
            </div>
            <div v-show="currentTab === 1">
                <div class="flex justify-between items-center my-4">
                    <div class="card mx-2" v-for="card in 4" :key="card">
                        <div class="card-image">
                            <img src="../../assets/images/storyes/story-2.jpg" class="md:h-48 md:w-28 h-32 w-24 rounded-lg border border-gray-200" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="currentTab === 2">
                <div class="flex justify-between items-center my-4">
                    <div class="card mx-2" v-for="card in 4" :key="card">
                        <div class="card-image">
                            <img src="../../assets/images/storyes/story-1.jpg" class="md:h-48 md:w-28 h-32 w-24 rounded-lg border border-gray-200" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>                
    </div>    
</template>

<script>
export default {
    name: 'FbStory',
    data: () => ({
        currentTab: 0,
        page: 0,
        pageCount: 4,
        userActions: [ 
            {id: 0, title: 'Stories'}, 
            {id: 1, title: 'Reels'}, 
            {id: 2, title: 'Rooms'}
        ],
        storyItems: [
            { img: require("../../assets/images/storyes/story-1.jpg"), info: 'Friends'},
            { img: require("../../assets/images/storyes/story-2.jpg"), info: 'Memories'},
            { img: require("../../assets/images/storyes/story-3.jpg"), info: 'Communities(Groups)'},
            { img: require("../../assets/images/storyes/story-4.jpg"), info: 'Marketplace'},
            { img: require("../../assets/images/storyes/story-5.png"), info: 'Watch'},
            { img: require("../../assets/images/storyes/story-6.jpg"), info: 'Saved'},
            { img: require("../../assets/images/storyes/story-7.png"), info: 'Pages'},
            { img: require("../../assets/images/storyes/story-8.jpg"), info: 'Friends'},
            { img: require("../../assets/images/storyes/story-9.jpg"), info: 'Memories'},
            { img: require("../../assets/images/storyes/story-10.jpg"), info: 'Communities(Groups)'},
            { img: require("../../assets/images/storyes/story-11.jpg"), info: 'Marketplace'},
            { img: require("../../assets/images/storyes/story-12.jpg"), info: 'Watch'},
            { img: require("../../assets/images/storyes/story-13.png"), info: 'Saved'},            
        ]     
    }),
    methods: {
        changeStoryTab (index) {
           this.currentTab = index
        },
        nextStory () {
            (this.page + this.pageCount) <= this.storyItems.length ? this.page+=this.pageCount : this.page
       
        },
        previoustStory () {
            this.page >= this.pageCount ? this.page-=this.pageCount : this.page
        }        
    },
    computed: {
        storyIt () {
            return this.storyItems.slice(this.page, this.page + this.pageCount)
        },
        nextPageIconHide () {
            return this.storyItems.length - this.page === this.storyItems.length % this.pageCount
        },
    }
}
</script>

<style>

</style>