<template>
    <div class="messages">
        <div class="relative mx-2">
          <button
            class="rounded-full h-11 w-11 justify-center items-center bg-gray-50"
            @click="isMessages = !isMessages"
          >
            <font-awesome-icon icon="fa-solid fa-message" />
          </button>
          <div class="absolute right-[-3.5rem] w-96 shadow-2xl mt-5 rounded-3xl" v-show="isMessages">
            <transition name="toggle-user-info">
              <div
                class="bg-white shadow-xl rounded py-2 border border-gray-200"
              >
              <p class="text-base font-bold my-4 text-blue-600">Messages</p>
                <ul>
                  <li
                    class="flex justify-start items-center py-3 px-3 cursor-pointer"
                    v-for="mess in messages"
                    :key="mess"
                    v-show="messages.length > 0"
                  >

                    <p class="text-sm font-bold mx-3"> {{ mess }} </p>
                  </li>
                  <p 
                    class="text-sm font-bold mx-3 text-orange" 
                    v-show="messages.length === 0"
                > 
                    No messages to show 
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
export default {
    name: 'AppNotificationBtn',
    data: () => ({
        isMessages: false,
        messages: []
    }),
    methods: {
        closeDropdown(e) {
            if (!this.$el.contains(e.target)) {
                this.isMessages = false;
            }
        },        
    },
    mounted () {
         document.addEventListener("click", this.closeDropdown);
    }      
}
</script>

<style>

</style>