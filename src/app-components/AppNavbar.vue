<template>
  <div class="app-navbar fixed top-0 w-full">
    <!-- AUTHENTICATED USER NAVBAR WITH LOGIN/REGISTRATION PAGES -->

    <div
      class="flex justify-between items-center border-b border-b-gray-100 fixed top-0 w-full shadow-xl py-2"
      v-show="isUserSigned == false"
    >
      <div class="flex jutify-between items-center ml-10 w-50">
        <button type="button" class="">
          <img
            class="avatar h-12 w-12 rounded-full border-gray-500"
            alt="avatar"
            :src="defaultPhoto"
          />
        </button>

        <button
          type="button"
          class="text-gray-500 bg-gray-0 hidden md:block rounded-full ml-4 px-4 py-2"
        >
          No user signed in
        </button>
      </div>
      <div class="flex mr-10" v-if="isUserSigned == false">
        <button
          class="px-5 rounded-full border-0 text-white bg-blue-600 py-2.5 font-bold text-md mx-3"
        >
          <router-link to="/">Login</router-link>
        </button>
        <button
          class="px-5 rounded-full border-0 text-white bg-black py-2.5 font-bold text-md mx-3"
        >
          <router-link to="/register">Register</router-link>
        </button>
      </div>
    </div>

    <!-- AUTHENTICATED USER NAVBAR WITH FULL FUNCTIONALITY -->

    <div
      class="flex justify-between items-center py-2 shadow-xl bg-white"
      v-show="isUserSigned == true"
    >
      <div class="flex items-center mr-11">
        <router-link to="/user-dashboard">
          <img
            src="../assets/images/facebook-icon.jpg"
            class="h-10 w-10 ml-6"
            alt="facebook-icon"
          />
        </router-link>
        <div class="serch-user relative">
          <input
            type="text"
            placeholder="Search Facebook"
            class="search -60 rounded-full bg-gray-50 py-2.5 ml-2 serch-input lg:block hidden"
            v-model="serchUsers"
            @click="onSearch = !onSearch"
          />

          <div 
              class="absolute p-4 w-48 text-center rounded-md mt-4 left-4 bg-white" 
              v-show="onSearch === true && findUser.length === 0"
            >
              <p class="text-blue-500">No search result</p>
          </div>
          <div class="absolute">
            <ul
              class="mt-2 w-56 bg-white border border-gray-200 px-2 py-2 rounded-md"
              v-show="onSearch === true && findUser.length > 0"
            >
                <li
                  class="py-2 flex items-center justify-start mx-3 cursor-pointer"
                  @click="viewUser(index)"
                  v-for="(user, index) in findUser"
                  :key="user.id"                     
                >
                  <img
                    :src="user.userImg"
                    alt="user img"
                    class="h-10 w-10 rounded-full"
                  />
                  <p class="ml-4">{{ user.userName }}</p>
                </li>              
                <router-link to="/all-users">
                  <p class="my-2 text-blue-500 font-bold text-sm" @click="onSearch = false">View all</p>
                </router-link>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
      <div class="flex">
        <div class="md:mx-7 mx-3">
          <button
            class="md:px-3 py-1 text-2xl text-black"
            @click="showSidebar = !showSidebar"
          >
            <font-awesome-icon icon="fa-solid fa-bars" />
          </button>
        </div>
        <div class="md:mx-7 mx-3">
          <button class="md:px-3 py-1 text-2xl text-black">
            <font-awesome-icon icon="fa-solid fa-user" />
          </button>
        </div>
        <div class="md:mx-7 mx-3">
          <button class="md:px-3 py-1 text-2xl text-black">
            <font-awesome-icon icon="fa-solid fa-message" />
          </button>
        </div>
      </div>
      <div class="flex">
        <AppMessageBtn />
        <AppNotificationBtn />
        <NavAvatarBtn />
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase/firebase";
import UserStatus from "../components/auth/mixins/authStatusCheck";
import NavAvatarBtn from "./NavAvatarBtn.vue";
import AppNotificationBtn from "./AppNotificationBtn.vue";
import AppMessageBtn from "./AppMessageBtn.vue";
export default {
  name: "AppNavbar",
  components: { NavAvatarBtn, AppNotificationBtn, AppMessageBtn },
  mixins: [UserStatus],
  data: () => ({
    serchUsers: "",
    allUsers: [],
    onSearch: false,
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
    viewUser (index) {
      this.allUsers.forEach((user, ind) => {
        if(index === ind){
          let param = this.allUsers[ind].id
          this.onSearch = false
          this.serchUsers = ""
          console.log(param)
          this.$router.push({ path: '/user-view/' + param })
          setTimeout(() => {window.location.reload()}, 100)
        }
      })
    },
    closeInput(e) {
      if (!this.$el.contains(e.target)) {
        this.onSearch = false
        this.serchUsers = ''
      }
    },
  },
  computed: {
    findUser() {
      return this.allUsers.filter((user) => {
        return user.userName
          .toLowerCase()
          .includes(this.serchUsers.toLowerCase());
      });
    },
  },
  created() {
    this.getAllUsers();
    this.viewUser()
  },
  mounted() {
    document.addEventListener("click", this.closeInput);
  },
};
</script>

<style>
.search::placeholder {
  padding-left: 10px;
}
</style>
