<script setup>
import { ref } from 'vue';

import DialogFilter from './dialog/DialogFilter.vue';

const isOpenFilterDialog = ref(false);

const openFilterDialog = () => {
  isOpenFilterDialog.value = true;
};
</script>

<template>
  <div class="search-container flex items-center justify-between rounded-xl h-12 md:h-13 pl-2 pr-2">
    <DialogFilter>
      <template v-slot:button>
        <BaseButton icon="icon-sliders" color="lightest" @click="openFilterDialog"/>
      </template>
    </DialogFilter>
    <input 
      type="text"
      class="w-full h-full ml-3 border-1 outline-none placeholder:text-xs md:placeholder:text-sm"
      placeholder="Search for advices, stories & articles"
    />
    <BaseButton icon="icon-magnifying-glass" color="secondary" variant="text" />
  </div>
</template>

<style scoped>
.search-container {
  border: 1px solid rgba(36, 21, 98, 0.05);
  box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.08);
}
</style>