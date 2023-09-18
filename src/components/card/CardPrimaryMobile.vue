<script setup>
import { computed } from 'vue';

import { truncateWords } from '../../utils/truncate-word';

const props = defineProps({
  bgColor: {
    type: String,
    default: 'light'
  },
  cardTitle: String,
  tags: Array
});

const bgColor = computed(() => {
  const colors = {
    light: 'bg-light',
    successLight: 'bg-successLight',
    infoLight: 'bg-infoLight',
    yellowLight: 'bg-yellowLight'
  };

  return colors[props.bgColor];
});

const truncateCardTitle = computed(() => {
  return truncateWords(props.cardTitle, 6)
})
</script>

<template>
  <div :class="['p-3 rounded-xl', bgColor]">
    <div class="flex flex-col">
      <div class="flex space-x-2 mb-3">
        <BaseChip 
          v-for="tag in tags"
          :key="tag.text"
          :text="tag.text"
          :color="tag.color"
          size="x-small" 
          class="uppercase" 
        />
      </div>
      <BaseAvatarInfo name="Rahul" time="7D ago" class="text-xs"/>
    </div>
    <div class="text-base font-taviraj mt-2 mb-2">{{ truncateCardTitle }}</div>
    <div class="flex items-center space-x-1.5 mb-3">
      <img src="/src/assets/img/avatar-3.png" alt="" class="w-8 h-8 rounded-full border border-white">
      <div class="flex flex-col">
        <div class="text-primary font-bold text-[10px]">Shruti Malhotra</div>
        <div class="flex items-center space-x-1">
          <BaseRating size="small" :value="4.5" />
          <div class="text-gray text-[8px]">(43 Solutions)</div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex">
        <BaseButton variant="text" icon="icon-bookmark-plus" color="primary" size="small"/>
        <BaseButton variant="text" icon="icon-share-network" color="primary" size="small"/>
      </div>
      <BaseLikeCommentCounter :like-count="32" :comment-count="40" bg-transparent class="px-0"/>
    </div>
  </div>
</template>