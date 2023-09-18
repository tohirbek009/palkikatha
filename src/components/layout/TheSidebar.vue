<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { sideMenuItems } from '../../data/sidebar';

const route = useRoute();
const currentPath = computed(() => {
  return route.path;
});
</script>

<template>
  <div class="hidden md:block fixed top-18 lg:top-22 left-0 w-22 lg:w-26 h-full bg-grayLightest overflow-y-auto">
    <nav class="flex flex-col space-y-2.5 mt-2.5 z-10">
      <RouterLink
        v-for="item in sideMenuItems" 
        :to="item.to"
        :key="item.to"
        :class="[
          'flex flex-col justify-center items-center group w-full h-18 text-primary font-medium border-r-4 duration-300',
          { 'border-r-transparent': currentPath !== item.to },
          { 'border-r-secondary text-secondary': currentPath === item.to }
        ]"
      >
        <i :class="[item.icon, { 'text-grayLight': currentPath !== item.to }, 'text-2xl mb-1 group-hover:text-secondary']"></i>
        <span class="group-hover:text-secondary">{{ item.name }}</span>
      </RouterLink>
    </nav>
  </div>
</template>

<style>
img > svg {
  fill: #e4e4e4 !important;
}

object svg {
  fill: red !important;
}
</style>