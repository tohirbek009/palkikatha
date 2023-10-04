<script setup>
import { computed } from 'vue';

const props = defineProps({
  avatarImage: String,
  name: String,
  time: String,
  size: {
    type: String,
    default: 'medium'
  },
  imageSize: String,
})

const textSize = computed(() => {
  if (props.size === 'small') {
    return 'text-[10px] md:text-xs'
  }
  return 'text-sm'
});

const avatarImageSize = computed(() => {
  if(props.imageSize) return props.imageSize
  else return 'w-7'
});
</script>

<template>
  <div :class="['flex items-center space-x-1 uppercase', textSize]">
    <img v-if="avatarImage" :src="avatarImage" alt="" :class="avatarImageSize" class="aspect-square md:w-7 md:h-7 rounded-full">
    <i v-else class="icon-user-circle text-secondary text-2xl"></i>
    <div class="text-primary font-extrabold">{{ name }}</div>
    <div class="w-1 h-1 rounded-full bg-primaryLight"></div>
    <div class="text-primaryLight">{{ time }}</div>
  </div>
</template>