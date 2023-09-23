<script setup>
import { ref, watch } from 'vue';
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
  <a
    :href="to"
    class="hidden md:flex w-fit h-fit items-center pb-1 font-bold border-b duration-150 hover:brightness-90 hover:border-b-transparent"
    :class="dynamicStyle"
  >
    <span>{{ text }}</span>
    <i v-if="rightIcon" :class="rightIcon" class="ml-1.5 text-sm"></i>
  </a>
</template>