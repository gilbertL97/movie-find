<template>
        <NuxtLoadingIndicator />
        <div class="h-full w-full font-sans grid duration-0 grid-cols-[max-content_1fr] grid-rows-[1fr_max-content]">
        <!-- </div>  h-full w-full font-sans
          grid="~ lt-lg:rows-[1fr_max-content] lg:cols-[max-content_1fr]"
          of-hidden view-transition-app transition duration-0
        > -->
          <div>
            <h1 class="text-5xl">test 234567</h1>
            <slot/>
          </div>
          <SideBar class="lg:order-first" />
          <!-- <IframeModal />
          <PhotoModal /> -->
        </div>
      </template>

<script setup lang="ts">
import SideBar from '~/components/sideBar.vue';


</script>

<style lang="scss" scoped>

</style>