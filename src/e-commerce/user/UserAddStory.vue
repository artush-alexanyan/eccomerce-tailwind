<template>
    <div class="user-add-story h-screen w-full mt-14 fixed">
        <div class="flex justify-center">
            <div class="sidebar w-1/5 h-full bg-white hidden lg:block">
                <div class="sidebar-content-wrapper border-b pb-5">
                    <div class="flex justify-start items-center py-3 mr-3">
                        <router-link to="/user-dashboard">
                            <button class="rounded-full h-10 w-10 flex items-center justify-center bg-gray-300 ml-4">
                                <font-awesome-icon icon="fa-solid fa-xmark" class="text-2xl text-white" />
                            </button>                        
                        </router-link>
                    </div>                         
                    <div class="flex justify-between items-center mx-4 mt-4">
                        <h5 class="font-extrabold text-xl ">Your story</h5>
                        <button class="rounded-full flex items-center justify-center bg-gray-100 p-2">
                            <font-awesome-icon icon="fa-solid fa-gear" class="text-xl" />
                        </button>
                    </div>
                    <div class="flex justify-start items-center mt-5 mx-4">
                        <img 
                            :src="userDetails.photo" 
                            alt="user-avatar" 
                            class="rounded-full h-14 w-14"
                        >
                        <h2 class="ml-4 text-lg font-base"> {{ userDetails.userName }} </h2>
                    </div>                    
                </div>
                <div class="edit-text h-screen" v-show="createTextStory"  >
                    <div class="grid justify-items-center mx-5 mt-3">

                        <!-- ----------- TEXTAREA -------------- -->

                        <textarea 
                            class="border border-gray-200 rounded-lg w-full h-40"
                            v-model="text"
                            placeholder="Start typing"
                        ></textarea>


                        <!-- ----------- SELECT -------------- -->

                        <div class="select border border-gray-200 rounded-lg w-full h-14 my-3 relative">
                            <div class="flex items-center justify-between h-14 mx-3 cursor-pointer" @click="showOptions = !showOptions">
                                <button class="flex items-center justify-center">
                                    <font-awesome-icon icon="fa-solid fa-a" class="text-xs mr-2 text-gray-500" />
                                    <span class="text-base">
                                        {{ defaultTextStyle === "" ? "Simple" : defoultTextToUpper }}
                                    </span>
                                </button>
                                <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-lg mr-3 text-gray-500" />                                
                            </div>
                            <div class="select-options absolute border border-gray-200 mt-1 rounded-lg w-full bg-white" v-show="showOptions">
                                <ul class="grid justify-items-start">
                                    <li 
                                        class="ml-3 text-base cursor-pointer my-[0.1rem]" 
                                        v-for="(text, index) in textStyle" 
                                        :key="text.style"
                                        @click="selectTextStyle(index)"
                                    >
                                        {{ text.style.substring(0, 1).toUpperCase() + text.style.substring(1) }}
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <!-- ----------- SELECT COLOR -------------- -->

                        <div class="colors border border-gray-200 rounded-lg w-full h-40">
                            <h4 class="text-gray-400 text-lg ml-3 mt-2">Background</h4>
                            <div class="colored-buttons grid grid-cols-8 mt-3 mx-3">
                                <div 
                                    v-for="(color, index) in colors" 
                                    :key="color.colorClass"
                                >
                                <button  
                                    class="rounded-full h-8 w-8 mt-2 cursor-pointer" 
                                    :class="'bg-' + color.colorClass"   
                                    @click="selectBgColor(index)"                             
                                >

                                </button>
                                </div>                                                       
                            </div>
                        </div>


                        <div class="button fixed bottom-0 flex justify-start my-5 items-center">
                            <button 
                                class="px-3 py-2 text-white rounded-lg bg-green" 
                                @click="showDiscardModal"
                            >
                                Discard
                            </button>   
                            <button 
                                class="px-3 py-2 ml-10 text-white rounded-lg bg-blue-500" 
                                @click="createTextStory = false"
                            >
                                Share to story
                            </button>                                                          
                        </div>
                    </div>
                </div>
            </div>
            <div class="content lg:w-4/5 w-full h-full bg-gray-50">
                <div class="content-wrapper">                   
                    <div class="flex items-center justify-center w-full h-screen">                         
                        <div class="flex" v-if="!createTextStory">
                            <div class="photo-history h-[22rem] w-56 cursor-pointer rounded-xl 
                                        shadow-xl flex justify-center items-center mx-2
                                        bg-gradient-to-r from-light-blue to-x-light-blue hover:from-pink-500 hover:to-yellow-500">
                                <div class="flex justify-center items-center">
                                    <div class="items">
                                        <button 
                                            class="h-12 w-12 rounded-full bg-white flex justify-center items-center mx-auto" 
                                            @click="$refs.file_input.click()"
                                        >
                                           <font-awesome-icon icon="fa-solid fa-image" class="text-xl" />
                                           <input type="file" ref="file_input" class="hidden">
                                        </button>
                                        <h6 class="text-xs text-white font-bold mt-3">Create a photo story</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="photo-history h-[22rem] w-56 cursor-pointer rounded-xl 
                                        shadow-xl bg-gradient-to-r flex justify-center 
                                        items-center from-light-purple to-x-light-purple mx-2">
                                <div class="flex justify-center items-center">
                                    <div class="items">
                                        <button 
                                            class="h-12 w-12 rounded-full bg-white flex justify-center items-center mx-auto" 
                                            @click="createTextStory = true"
                                        >
                                           <font-awesome-icon icon="fa-solid fa-a" class="text-xl" />
                                        </button>
                                        <h6 class="text-xs text-white font-bold mt-3">Create a text story</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center items-center h-[75%] w-2/4 border-gray-300 rounded-2xl bg-white relative" v-else>
                            <h6 class="font-semibold text-sm absolute top-2 left-8">Preview</h6>
                            <div class="rounded-2xl bg-black h-[90%] w-[80%] flex items-center justify-center">
                                <div class="rounded-lg flex items-center justify-center h-[98%] w-[60%]" :class="'bg-' + defaultBgColor">
                                    <p 
                                        class="text-white text-2xl text-center w-fit"
                                        :class="defaultTextStyle"
                                    >
                                        {{ text }}
                                    </p>                                  
                                </div>


                                    <Transition name="bounce">
                                        <div 
                                            class="transition fixed rounded-2xl shadow-2xl z-0 py-5 bg-white h-32 border border-gray-300 w-96 flex items-center justify-center" v-show="showModal"  
                                        >
                                            <div class="modal-content">
                                                <h4 class="title font-semibold text-base">Are you sure you want to discard changes?</h4>
                                                <div class="flex justify-between items-center mt-3">
                                                    <button 
                                                        class="rounded-lg  border-gray-100 bg-purple text-white px-3 py-2"
                                                        @click="discardTextStory"
                                                    >
                                                        Discard
                                                    </button>
                                                    <button 
                                                        class="rounded-lg  border-gray-100 bg-blue-600 text-white px-3 py-2" 
                                                        @click="showModal = false"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div> 
                                    </Transition>                                    
                   
  

                            </div>
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
    name: 'UserAddStory',
    mixins: [ UserStatus ],
    components: {  },
    data: () => ({
        show: true,
        createTextStory: false,
        showModal: false,
        text: 'Start typing',
        showOptions: false,
        textStyle: [ 
            { id: 0, style: 'font-bold'}, 
            { id: 1, style: 'italic'}, 
            { id: 2, style: 'underline'}, 
            { id: 3, style: 'uppercase'}, 
            { id: 4, style: 'lowercase'}, 
        ],
        colors: [
            { id: 0, colorClass: 'purple' },
            { id: 2, colorClass: 'red' },
            { id: 3, colorClass: 'blue-200' },
            { id: 4, colorClass: 'light-purple' },
            { id: 5, colorClass: 'yellow' },
            { id: 6, colorClass: 'orange' },
            { id: 8, colorClass: 'dark-red' },
            { id: 9, colorClass: 'dark-purple' },
            { id: 10, colorClass: 'dark-gray' },
            { id: 11, colorClass: 'light-green' },
            { id: 12, colorClass: 'light-cyan' },
            { id: 13, colorClass: 'yellow-green' },
            { id: 14, colorClass: 'light-pink' },
            { id: 15, colorClass: 'light-blue' },
            { id: 16, colorClass: 'tomato' },
        ],
        defaultTextStyle: '',
        defaultBgColor: 'blue-500'
    }),
    methods: {
        selectStoryImage () {
            console.log('Upload image')
            this.$refs.file_input
        },
        selectTextStyle (index) {
            this.textStyle.map((item, ind) => {
                index === ind ? this.defaultTextStyle = item.style : this.defaultTextStyle
                this.showOptions = false
            })
        },
        selectBgColor (index) {
            this.colors.map((item, ind) => {
                index === ind ? this.defaultBgColor = item.colorClass : this.defaultBgColor 
            })
        },
        discardTextStory () {
                this.defaultTextStyle = ''
                this.defaultBgColor = 'blue-500'
                this.text = "Start typing"
                setTimeout(() => { this.showModal = false }, 500)
                setTimeout(() => { this.createTextStory = false }, 1000)
        },
        showDiscardModal () {
            this.showModal = true
        }
    },
    computed: {
        defoultTextToUpper () {
            return this.defaultTextStyle.substring(0, 1).toUpperCase() + this.defaultTextStyle.substring(1)
        }
    }
}
</script>

<style scoped>
textarea::placeholder{
    padding: 10px 15px;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>