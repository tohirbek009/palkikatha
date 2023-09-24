<script setup>
import { ref } from 'vue';
const props = defineProps({
  text: String,
  color: {
    type: String,
    default: 'secondary'
  },
  textSize: {
    type: String,
    default: 'text-base'
  },
  rightIcon: String,
  to: {
    type: String,
    default: "#"
  }
});

const dynamicStyle = ref();

dynamicStyle.value = `text-${props.color} ${props.textSize} border-b-${props.color}`;
</script>

<template>
  <div
    class="w-fit h-fit items-center pb-1 font-bold border-b duration-150 hover:brightness-90 hover:border-b-transparent cursor-pointer"
    :class="dynamicStyle"
  >
    <span>{{ text }}</span>
    <i v-if="rightIcon" :class="rightIcon" class="ml-1.5 text-sm"></i>
  </div>
</template>