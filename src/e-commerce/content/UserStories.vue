<template>
    <div class="stories-user">
        <router-view></router-view> 
        <div class="flex md:justify-between items-center my-4">
            <button 
                type="button" 
                class="rounded-full md:p-3 p-1 bg-gray-200 border flex justify-center items-center ml-2 md:ml-5" 
                :class="page === 0 ? 'hidden' : ''"
                @click="previoustStory"
            >
                <font-awesome-icon icon="fa-solid fa-arrow-left-long" class="text-gray-400" />
            </button>                    
            <div 
                class="card mx-2 relative" 
                v-for="story in storyIt" 
                :key="story.img"
            >
                <router-link :to="'/user-stories/' + story.info">
                    <div class="card-image cursor-pointer">
                        <img :src="story.img" class="md:h-48 md:w-28 h-32 w-24 rounded-lg border border-gray-200" alt="">
                    </div>                    
                </router-link>
                <div class="absolute text-xs bottom-2 left-1">
                    <h6 class="font-extrabold text-white z-0">{{ story.info.substring(0, 15) }}</h6>
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
        <h1 class="m-10 text-4"> {{ $route.params.id }} </h1> 
    </div>
</template>

<script>

export default {
    name: 'UserStories',
    data: () => ({
        currentTab: 0,
        page: 0,
        pageCount: 4,
        storyItems: [
            { img: require("../../assets/images/storyes/story-1.jpg"), info: 'Hovhannes Shiraz'},
            { img: require("../../assets/images/storyes/story-2.jpg"), info: 'Khachatur Abovian'},
            { img: require("../../assets/images/storyes/story-3.jpg"), info: 'Missak Manouchian '},
            { img: require("../../assets/images/storyes/story-4.jpg"), info: 'Paruyr Sevak'},
            { img: require("../../assets/images/storyes/story-5.png"), info: 'Sayat-Nova'},
            { img: require("../../assets/images/storyes/story-6.jpg"), info: 'Vahan Terian'},
            { img: require("../../assets/images/storyes/story-7.png"), info: 'Yeghishe Charents'},
            { img: require("../../assets/images/storyes/story-8.jpg"), info: 'Misaq Metsarenc'},
            { img: require("../../assets/images/storyes/story-9.jpg"), info: 'Derenik Demirchyan'},
            { img: require("../../assets/images/storyes/story-10.jpg"), info: 'Vahram Alazan'},
            { img: require("../../assets/images/storyes/story-11.jpg"), info: 'Khachik Dashtenc'},
            { img: require("../../assets/images/storyes/story-12.jpg"), info: 'Avetiq Isahakyan'},
            { img: require("../../assets/images/storyes/story-13.png"), info: 'Aqsel Bakunts'},            
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