<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: String,
  color: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'medium'
  },
  rounded: {
    type: String,
    default: 'rounded-full'
  },
  outlined: Boolean
});

const textBgColors = computed(() => {
  if (props.color === 'default') {
    return props.outlined ? 'bg-transparent border border-light text-light' : 'bg-light text-primary'
  } else {
    const colors = {
      primary: ['bg-primary', 'text-primary', 'border-primary'],
      secondary: ['bg-secondary', 'text-secondary', 'border-secondary'],
      success: ['bg-success', 'text-success', 'border-success'],
      info: ['bg-info', 'text-info', 'border-info'],
      danger: ['bg-danger', 'text-danger', 'border-danger'],
      orange: ['bg-orange', 'text-orange', 'border-orange']
    }

    if (props.outlined) {
      return colors[props.color][1] + " " + colors[props.color][2] + ' bg-transparent border';
    } else {
      return colors[props.color][0] + ' text-white';
    };
  }
})

const sizing = computed(() => {
  switch (props.size) {
    case 'x-small': return 'px-2 h-6 text-[10px]'
    case 'small': return 'px-2 h-6 text-xs';
    case 'medium': return 'px-3 h-7.5 text-sm';
    case 'large': return 'px-3.5 h-9 text-base'
  }
});
</script>

<template>
  <div 
    :class="[
      'flex items-center w-fit text-center duration-300 hover:brightness-90 active:brightness-105 cursor-pointer select-none', 
      rounded,
      textBgColors, 
      sizing,
    ]">
    {{ text }}
  </div>
</template>