<script setup>
import { computed } from 'vue';
const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  color: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'medium'
  },
  rounded: Boolean,
  text: String,
  prependIcon: String,
  icon: String,
  appendIcon: String,
  variant: {
    type: String,
    default: 'default'
  } // Example: text, outlined, default
});

const textColor = computed(() => {
  if (props.variant === 'outlined'|| props.variant === "text") {
    return `text-${props.color}`
  }
  else if (props.color === 'light' || props.color === 'lightest') {
    return 'text-primary'
  } else {
    return 'text-white'
  }
});

const bgColor = computed(() => {
  if(props.variant === "outlined") {
    const borderColors = { 
      primary: 'border-primary', secondary: 'border-secondary',
      light: 'border-light', lightest: 'border-lightest'
    }
    return 'bg-transparent border hover:bg-grayLightest ' + borderColors[props.color]
  } else if(props.variant === "text") {
    return 'bg-transparent hover:bg-grayLightest'
  } 
  else {
    const colors = {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      light: 'bg-light',
      lightest: 'bg-lightest'
    };
    return colors[props.color];
  }
})

const stylesBasedOnSize = computed(() => {
  let style, borderRadius;
  switch(props.size) {
    case 'small': {
      style = props.icon ? "w-7 h-7" : "px-2 h-7";
      style += " text-xs"
      borderRadius = "rounded";
      break;
    };
    case 'medium': {
      style = props.icon ? "w-9 h-9" : "px-2.5 h-9";
      style += " text-sm"
      borderRadius = "rounded-lg";
      break;
    };
    case 'large': {
      style = props.icon ? "w-13 h-13" : "font-bold px-3 md:px-5 h-13";
      style += " text-base";
      borderRadius = "rounded-xl";
      break;
    };
  }

  if(props.rounded) {
    borderRadius = "rounded-full"
  }

  return style + " " + borderRadius;
})
</script>

<template>
  <button
    :type="type"
    :class="[
      `flex items-center justify-center text-base duration-300 hover:opacity-80 active:opacity-100 active:brightness-90 outline-none`,
      stylesBasedOnSize,
      bgColor,
      textColor
    ]"
  >
    <i v-if="prependIcon" :class="[prependIcon, {'mr-2.5': !!text}]"></i>
    <span v-if="text">{{ text }}</span>
    <i v-if="appendIcon" :class="[appendIcon, {'ml-2.5': !!text}]"></i>
    <!-- Case: Only Icon BTN -->
    <i v-if="icon" :class="[icon, {'ml-2.5': !!text}]"></i>
  </button>
</template>