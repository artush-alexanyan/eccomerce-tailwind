<template>
  <div class="dashboard bg-gray-50 mt-14">
    <div class="main lg:flex">
      <div class="sidebar h-screen lg:block hidden w-full lg:w-1/3">
        <div class="w-96 mt-5">
          <div>
            <ul>
              <router-link
                class="flex justify-start items-center py-3 px-3 cursor-pointer"
                to="/user/me"
              >
                <button
                  class="rounded-full h-10 w-10 bg-gray-100 flex justify-center items-center"
                >
                  <img
                    class="rounded-full h-10 w-10"
                    :src="`${
                      isUserSigned == false ? defaultPhoto : userDetails.photo
                    }`"
                    alt="User avatar"
                  />
                </button>
                <p class="text-sm font-bold mx-3">{{ userDetails.userName }}</p>
              </router-link>
              <li
                class="flex justify-start items-center py-3 px-3 cursor-pointer"
                v-for="item in sidebarItems"
                :key="item.info"
              >
                <div
                  class="rounded-full h-10 w-10 flex justify-center items-center"
                >
                  <img :src="item.img" alt="" />
                </div>
                <p class="text-sm font-bold mx-3">{{ item.info }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="content h-screen justify-center w-full md:w-2/4">
        <FbStory />
      </div>
      <div class="sidebar h-screen lg:block hidden w-full lg:w-1/3"></div>
    </div>
  </div>
</template>

<script>
import UserStatus from "../components/auth/mixins/authStatusCheck";
import FbStory from "../e-commerce/content/FbStory.vue";

export default {
  name: "DashBoard",
  mixins: [UserStatus],
  components: { FbStory },
  data: () => ({
    showSidebar: true,
    sidebarItems: [
      {
        img: require("../assets/images/sidebar/sidebar-1.png"),
        info: "Friends",
      },
      {
        img: require("../assets/images/sidebar/sidebar-2.png"),
        info: "Memories",
      },
      {
        img: require("../assets/images/sidebar/sidebar-3.png"),
        info: "Communities(Groups)",
      },
      {
        img: require("../assets/images/sidebar/sidebar-4.png"),
        info: "Marketplace",
      },
      { img: require("../assets/images/sidebar/sidebar-5.png"), info: "Watch" },
      { img: require("../assets/images/sidebar/sidebar-6.png"), info: "Saved" },
      { img: require("../assets/images/sidebar/sidebar-7.png"), info: "Pages" },
    ],
}),
  methods: {

  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm =>{
  //     vm.loading = false
  //   })
  // }
};
</script>

<style scoped>
.toggle-user-info-enter-active,
.toggle-user-info-leave-active {
  transition: opacity 0.5s;
}
.toggle-user-info-enter, .toggle-user-info-leave-to /* .toggle-user-info-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.serch-input::placeholder {
  padding-left: 12px;
  font-size: 14px;
}
</style>
