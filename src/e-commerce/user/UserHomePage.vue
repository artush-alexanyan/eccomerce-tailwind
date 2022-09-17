<template>
    <div class="user-home">

        <!-- BACKGROUND IMAGE SECTION -->

        <div class="bg-image flex items-center justify-center">
            <div class="img-wrapper relative shadow-xl opacity-100">
                <img 
                    src="../../assets/images/background-image.jpg" 
                    class="object-cover h-60 md:h-96 w-[60rem] rounded-lg" 
                    alt="user-background-image"
                >
                <div class="absolute md:bottom-4 top-2 md:right-8 right-2">
                    <button class="rounded bg-white py-[0.45rem] md:px-3 px-2 flex items-center jutify-between shadow-lg">
                        <font-awesome-icon icon="fa-solid fa-camera" />
                        <p class="font-bold text-base ml-1">Edit cover photo</p>
                    </button> 
                </div>                
            </div>           
        </div>
         <!-- USER DETAILS SECTION -->

        <div class="user-details flex justify-center">
            <div class="lg:flex lg:justify-start grid justify-items-center text-center md:text-start md:w-8/12 w-full">
                <img 
                    :src="userDetails.photo" 
                    class="rounded-full h-40 w-40 shadow-lg ml-5 mt-[-2.5rem] z-0"  
                    alt="user-image"
                >
                <div class="md:ml-10">
                    <h1 class="font-bold text-xl md:text-4xl mt-5"> {{ userDetails.userName }} </h1>
                    <p class="text-gray-600 font-bold">358 friends</p>
                    <div class="lg:flex lg:justify-between grid lg:w-[39rem]">
                        <div class="flex justify-center items-center">
                            <div class="friends" v-for="img in 8" :key="img">
                                <img 
                                    :src="userDetails.photo" 
                                    class="h-8 w-8 rounded-full shadow-lg ml-[-0.25rem]" 
                                    alt="friend"
                                >
                            </div>
                        </div>
                        <div class="flex justify-center mt-3 items-center">
                            <button class="rounded bg-blue-500 text-white py-[0.25rem] px-2 flex items-center jutify-between shadow-lg">
                                <font-awesome-icon icon="fa-solid fa-camera" />
                                <p class="font-bold text-base ml-1">Add to story</p>
                            </button>  
                            <button class="rounded ml-3 bg-white py-[0.25rem] px-2 flex items-center jutify-between shadow-lg">
                                <font-awesome-icon icon="fa-solid fa-camera" />
                                <p class="font-bold text-base ml-1">Edit profil</p>
                            </button>                                                         
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
        <hr class="my-5">
    </div>
</template>

<script>
import authStatus from '../../components/auth/mixins/authStatusCheck'

export default {
    name: 'UserHome',
    mixins: [ authStatus ],
    data: () => ({

    })
}
</script>

<style>

</style>