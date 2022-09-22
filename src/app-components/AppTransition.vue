<template>
    <div class="transiton">
        <Transition name="fade">

        </Transition>        
    </div>
</template>

<script>
export default {
    name: 'Transition'
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>