<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'medium'
  },
  likeCount: {
    type: Number,
    default: 0
  },
  commentCount: {
    type: Number,
    default: 0
  },
  bgTransparent: Boolean,
})

const styleBasedOnSize = computed(() => {
  switch(props.size) {
    case 'large': return 'p-4 text-base h-13 space-x-3 rounded-xl';
    case 'small': return 'p-0 text-xs h-3 space-x-[6px] rounded'
    default: return 'p-2 text-sm h-7 space-x-2 rounded-lg'
  }
})
</script>

<template>
  <div :class="['flex items-center w-fit font-semibold', { 'bg-white': !bgTransparent }, styleBasedOnSize]">
    <div class="flex items-center">
      <i class="icon-heart text-secondary"></i>
      <div class="text-black ml-1">{{ likeCount }}</div>
    </div>
    <div class="w-px h-full bg-grayLight"></div>
    <div class="flex items-center">
      <i class="icon-chat-centered-text text-secondary"></i>
      <div class="text-black ml-1">{{ commentCount }}</div>
    </div>
  </div>
</template>