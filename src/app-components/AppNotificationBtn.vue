<template>
    <div class="notifications">
        <div class="relative mx-2">
          <button
            class="rounded-full h-11 w-11 justify-center items-center bg-gray-50 relative"
            @click="isNotifications = !isNotifications"
          >
            <font-awesome-icon icon="fa-solid fa-bell" />
          </button>
          <div 
            class="absolute bg-blue-600 font-bold text-white rounded-full h-5 flex items-center justify-center w-5 top-0 right-0"> 
              {{ notifications.length }} 
            </div>
          <div class="absolute right-[-3.5rem] w-[29rem] shadow-2xl mt-5 rounded-3xl" v-show="isNotifications">
            <transition name="toggle-user-info">
              <div
                class="bg-white shadow-xl rounded py-2 border border-gray-200"
              >
              <p class="text-base font-bold my-4 text-blue-600">Notifications</p>
                <ul>
                  <li
                    class="py-3 px-3 cursor-pointer"
                    v-for="fr_request in notifications"
                    :key="fr_request.fromId"
                    v-show="notifications.length > 0"
                  >

                    <p class="text-sm font-bold mx-3"> 
                     <span class="text-md font-bold"> {{ fr_request.from }} </span>
                        sent you a 
                      <span class="text-md text-blue-600">{{ fr_request.title }} </span>
                    </p>
                    <div class="button-group flex justify-between items-center mx-16 my-5">
                        <button class="request rounded border border-blue-500 text-blue-500 px-5 py-2">Accept</button>
                        <button class="request rounded border border-blue-500 text-blue-500 px-5 py-2">Decline</button>
                    </div>
                  </li>
                  <p 
                    class="text-sm font-bold mx-3 text-orange" 
                    v-show="notifications.length === 0"
                > 
                    No notifications to show 
                </p>
                </ul>
                <div class="text-center my-3"></div>
              </div>
            </transition>
          </div>
        </div>
    </div>
</template>

<script>
import firebase from '../firebase/firebase'

export default {
    name: 'AppNotificationBtn',
    data: () => ({
        isNotifications: false,
        notifications: []
    }),
    methods: {
        closeDropdown(e) {
            if (!this.$el.contains(e.target)) {
                this.isNotifications = false;
            }
        },
        getNotifications () {
          this.notifications = []
          firebase.auth().onAuthStateChanged(user => {
            if(user){
              firebase.firestore().collection('Users').doc(user.uid).collection('ReceivedFriendRequests').get().then(querySnapShot => {
                querySnapShot.forEach(notific => {
                  console.log(notific.data())
                  this.notifications.push(notific.data())
                })
              })
             
            }
          })
        }        
    },
    mounted () {
         document.addEventListener("click", this.closeDropdown);
         this.getNotifications()
    }      
}
</script>

<style>

</style>