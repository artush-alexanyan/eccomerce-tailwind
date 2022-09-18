<template>
    <div class="app-loader bg-white">
        <div class="h-screen w-screen flex items-center justify-center">
            <div class="">
                <img src="../assets/images/facebook-icon.jpg" alt="" class="animation">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.animation{
    height: 10rem;
}
@keyframes loader {
  0% { opacity: 0.2; }
  10% { opacity: 0.4; }
  20% { opacity: 0.6; }
  30% { opacity: 0.2; }
  40% { opacity: 0.8; }
  50% { opacity: 1; }
  60% { opacity: 0.2; }
  70% { opacity: 0.4; }
  80% { opacity: 0.6; }
  90% { opacity: 0.8; }
  100% { opacity: 1; }
}
.animation{
  animation: loader 4s;
  animation-iteration-count: 1;    
}
</style>