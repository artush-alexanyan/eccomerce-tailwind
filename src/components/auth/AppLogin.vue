<template>
    <div class="login">
        <div class="w-full h-screen">
            <div class="flex h-full justify-center items-center">
                <div class="card border rounded-3xl px-10 py-5 shadow-2xl rounded-0 text-center">
                    <h1 class="text-center text-blue-500 text-2xl my-6">Login</h1>
                    <form>
                      <label class="text-md font-bold">Email</label><br>
                      <input 
                        class="rounded-0 border-2 py-2 px-15" 
                        type="text"
                      ><br>
                      <label class="text-md font-bold">Password</label><br>
                      <input 
                        class="rounded-0 border-2 py-2 px-15" 
                        type="password"
                      ><br>
                      <button class="mt-5 rounded-full px-10 py-3 border text-white bg-blue-500">Login</button>                        
                    </form>
                    <p class="mt-6">
                      Don't have an account, please <router-link to="/register" class="text-blue-500">Register</router-link>
                    </p>
                    <div class="text-center mt-5">
                        <button 
                          class="rounded-full bg-black text-white text-bold flex border-2 items-center text-sm px-10 justify-between uppercase"
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
export default {
    name: 'AppRegister',
    mixins: [Auth],
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