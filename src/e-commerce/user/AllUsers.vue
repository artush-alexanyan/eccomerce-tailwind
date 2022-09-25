<template>
    <div class="all-users mt-16">
        <div class="flex">
            <div class="sidebar h-screen xl:w-1/3 md:w-2/5 pl-5 bg-white hidden lg:block">
                <h3 class="text-3xl font-bold py-3">Search results</h3>
                <hr class="mr-5 border border-gray-100">
                <h6 class="text-base font-bold py-3">Filters</h6>
                <ul class="mt-3">
                    <li 
                        class="flex items-center justify-start my-3 mr-3" 
                        v-for="(item, index) in sidebarListItems" 
                        :key="item.text"
                        :class="index === 0 ? 'bg-gray-50 rounded-lg' : ''"
                    >
                        <button class="rounded-full h-10 w-10 bg-gray-50 flex items-center text-xl justify-center">
                            <font-awesome-icon :icon="item.icon" :class="index === 0 ? 'bg-white text-blue-600 rounded-lg' : ''" />
                        </button>
                        <span class="text-base font-semibold ml-3"> {{ item.text }} </span>
                    </li>
                </ul>
            </div>`
            <div class="content h-screen w-full flex items-start justify-center bg-gray-50 pt-16">
                <div class="card rounded-lg shadow-xl bg-white lg:w-2/3 w-full mx-5">
                    <h4 class="my-2 ml-10 font-bold text-lg">People</h4>
                    <ul class="mx-10">
                        <li 
                            class="flex justify-between items-center my-3 cursor-pointer" 
                            v-for="user in allUsers" :key="user.id"
                        >
                            <img :src="user.userImg" class="rounded-full h-12 w-12 bg-gray-300" alt="user image">
                            <div class="basic-info mx-3">
                                <h2 class="text-base font-bold ml-3 lg:mt-4"> {{ user.userName }} </h2>
                                <p class="mx-3 text-sm font-light leading-4 hidden lg:block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quos cum aut veniam repudiandae corrupti explicabo animi ut accusamus culpa.</p>
                            </div>
                            <button class="rounded-lg bg-white w-1/3 text-blue-500 flex items-center justify-center px-5 text-xs font-bold py-2 border border-blue-500">
                                {{ currentUserName === user.userName ? "View Profile" : 'Add friend' }}
                            </button>
                         </li>
                    </ul>
                    <div class="flex items-center justify-center">
                        <button class="bg-gray-100 my-5 mx-5 py-2 px-10 rounded-xl w-full text-sm font-bold">See all</button>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
import firebase from '../../firebase/firebase'

export default {
    name: 'AllUsers',
    data: () => ({
        sidebarListItems: [
            { id: 0, text: 'All', icon: 'fa-solid fa-folder', path: '' },
            { id: 1, text: 'Posts', icon: 'fa-solid fa-comment', path: '' },
            { id: 2, text: 'People', icon: 'fa-solid fa-user', path: '' },
            { id: 3, text: 'Photos', icon: 'fa-solid fa-camera', path: '' },
            { id: 4, text: 'Videos', icon: 'fa-solid fa-video', path: '' },
            { id: 5, text: 'Marketplace', icon: 'fa-solid fa-shop', path: '' },
            { id: 6, text: 'Pages', icon: 'fa-solid fa-flag', path: '' },
            { id: 7, text: 'Places', icon: 'fa-solid fa-location-pin', path: '' },
            { id: 8, text: 'Communities(Groups)', icon: 'fa-solid fa-user-group', path: '' },
            { id: 9, text: 'Eventes', icon: 'fa-solid fa-calendar-days', path: '' },
        ],
        allUsers: []        
    }),
    methods: {
        getAllUsers() {
        firebase
            .firestore()
            .collection("Users")
            .get()
            .then((querySnapShot) => {
            querySnapShot.forEach((user) => {
                this.allUsers.push(user.data());
            });
            });
        },        
    },
    computed: {
        currentUserName () {
            return firebase.auth().currentUser.multiFactor.user.displayName
        }
    },
    created () {
        this.getAllUsers()
    }
}
</script>

<style>

</style>