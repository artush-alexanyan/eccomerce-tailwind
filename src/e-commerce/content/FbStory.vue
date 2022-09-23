<template>
    <div class="mt-10 bg-white w-full rounded-lg shadow-lg py-2">
        <ul class="flex justify-between items-center">
            <li 
                class="nav-item md:mx-4 cursor-pointer" 
                :class="currentTab === index ? 'border-b-2 border-b-blue-600': ''"
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
                <UserStories />
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
import UserStories from './UserStories.vue'

export default {
    name: 'FbStory',
    components: { UserStories },
    data: () => ({
        currentTab: 0,
        page: 0,
        pageCount: 5,
        userActions: [ 
            {id: 0, title: 'Stories'}, 
            {id: 1, title: 'Reels'}, 
            {id: 2, title: 'Rooms'}
        ],
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