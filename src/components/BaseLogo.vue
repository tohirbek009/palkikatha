<script setup>
defineProps({
  type: {
    type: String,
    default: 'light'
  },
})
</script>

<template>
  <div class="flex items-center">
    <div class="mr-2.5">
      <img v-if="type === 'light'" src="/assets/icon/logo-icon-light.svg" alt="" class="w-8">
      <img v-else src="/assets/icon/logo-icon-dark.svg" alt="" class="w-8">
    </div>
    <div class="font-extrabold">
      <span :class="[{ 'text-[#514A7D]': type === 'light', 'text-[#CFCDD8]': type === 'dark' }]">palki</span>
      <span class="text-[#A09CB7]">katha</span>
    </div>
  </div>
</template>