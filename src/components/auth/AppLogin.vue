<template>
    <div class="login">
        <div v-if="loading">
          <AppLoader />
        </div>
        <div class="w-full h-screen" v-else>
            <div class="flex h-full justify-center items-center">
                <div class="card border border-gray-100 rounded-3xl px-10 py-5 shadow-2xl rounded-0 text-center">
                    <h1 class="text-center text-blue-600 text-2xl my-6">Login</h1>
                    <form>
                      <label class="text-md font-bold">Email</label><br>
                      <input 
                        class="rounded-0 border-2 border-gray-50  py-2 px-15" 
                        type="text"
                      ><br>
                      <label class="text-md font-bold">Password</label><br>
                      <input 
                        class="rounded-0 border-2 border-gray-50 py-2 px-15" 
                        type="password"
                      ><br>
                      <button class="mt-5 rounded-full px-10 py-3 border text-white bg-blue-600">Login</button>                        
                    </form>
                    <p class="mt-6">
                      Don't have an account, please <router-link to="/register" class="text-blue-600">Register</router-link>
                    </p>
                    <div class="text-center mt-5">
                        <button 
                          class="rounded-full bg-black text-white text-bold flex border-2 border-gray-50 items-center text-sm px-10 justify-between uppercase"
                          @click="continueWithGmail"
                        >
                            <img src="../../assets/images/gmail.png" class="gmail_img" alt="gmail">
                            <span>continue with gmail</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Auth from './mixins/auth'
import AppLoader from '../../app-components/AppLoader.vue'

export default {
    name: 'AppRegister',
    mixins: [Auth],
    components: { AppLoader },
    data: () => ({

    }),
}
</script>

<style scoped>
.gmail_img{
  height: 50px;
}
.login{
  background-color: #f0f5f5;
}
</style>