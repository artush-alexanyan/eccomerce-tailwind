<template>
    <div class="story-view">
        <div class="story-view bg-white flex">
            <div class="story-sidebar w-1/5 h-screen border-gray-400 border-r bg-white hidden lg:block">
                <div class="flex justify-start items-center">
                    <router-link to="/user-dashboard">
                        <button class="rounded-full p-3 flex items-center justify-center bg-gray-400 ml-4 mt-5">
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
                <h5 class="mt-4 ml-4 font-bold text-lg "> {{ $route.params.id }} </h5>
            </div>
           <div class="content h-screen w-full lg:w-4/5 bg-black border-4 flex justify-center">
                <div class="story-content relative">
                    <img :src="currentStoryImg" class="my-3 w-[30rem] mx-auto rounded-lg h-5/6" alt="story-image">
                    <div class="flex items-center absolute top-4 left-8 text-white">
                        <div class="flex items-center justify-center ml-10">
                            <img :src="userDetails.photo" class="h-10 w-10 rounded-full" alt="">
                            <h4 class="ml-2"> {{ currentStoryTitle }} </h4>                            
                        </div>
                    </div>
                    <div class="flex items-center mt-2">
                        <input type="text" class="rounded-3xl py-2 px-10 bg-black border-2 border-white">
                        <div class="smiles flex">
                            <button class="smile rounded-full h-9 w-9 bg-white mx-1" v-for="sm in 7" :key="sm"></button>
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
    data: () => ({
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
        ],
        currentStoryImg: '',
        currentStoryTitle: ''         
    }),
    methods: {
        getStoryItem () {
            console.log(this.$route.params.id)
            this.storyItems.map(item => {
                if(item.info === this.$route.params.id){
                    this.currentStoryImg = item.img
                    this.currentStoryTitle = item.info
                }
            })
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

</style>