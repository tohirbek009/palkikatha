<script setup>
import { computed } from 'vue';

const props = defineProps({
  value: Number,
  size: {  // small, medium and large
    type: String,
    default: 'medium'
  },
  version: {  // short or long
    type: String,
    default: 'short'
  },
  hasBackground: Boolean
})

const textSize = computed(() => {
  switch (props.size) {
    case 'small': return 'text-xs';
    case 'medium': return 'text-sm';
    case 'large': return 'text-lg'
  }
})

const textBgColors = computed(() => {
  return props.hasBackground ? 'bg-yellow text-white px-2 py-1' : 'text-yellow'
})
</script>

<template>
  <div :class="[textSize, 'font-extrabold inline-block']">
    <!-- Long Content Rating -->
    <div v-if="version === 'long'" :class="['flex items-center space-x-2', textBgColors]">
      <div class="flex items-center space-x-1">
        <i class="icon-star"></i>
        <i class="icon-star"></i>
        <i class="icon-star"></i>
        <i class="icon-star"></i>
        <i class="icon-star-half"></i>
        <div class="ml-1">{{ value }}</div>
      </div>
      <div></div>
    </div>

    <!-- Short Content Rating -->
    <div v-else :class="[textBgColors, 'flex items-center rounded-full space-x-1']">
      <i class="icon-star"></i>
      <div>{{ value }}</div>
    </div>
  </div>
</template>