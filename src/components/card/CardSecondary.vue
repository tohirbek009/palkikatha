<script setup>
import { computed } from 'vue';

import { truncateWords } from '../../utils/truncate-word';

const props = defineProps({
  bgColor: {
    type: String,
    default: 'light'
  },
  cardTitle: String,
  tagText: String,
  tagColor: String
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
  return truncateWords(props.cardTitle, 10)
})
</script>

<template>
  <div :class="['p-4 rounded-2xl', bgColor]">
    <div class="flex items-center justify-between">
      <BaseAvatarInfo name="Rahul" time="7D ago" class="text-xs"/>
      <BaseChip :text="tagText" :color="tagColor" size="small" class="uppercase" />
    </div>
    <div class="text-lg font-taviraj mt-2 mb-1">{{ truncateCardTitle }}</div>
    <div class="flex items-center space-x-1.5 mb-3">
      <img src="/src/assets/img/avatar-3.png" alt="" class="w-5 h-5 rounded-full border border-white">
      <div class="text-primary font-bold text-xs">Shruti Malhotra</div>
      <div class="text-gray font-medium text-[10px]">(43 Solutions)</div>
      <BaseRating size="small" :value="4.5" />
    </div>
    <div class="flex items-center justify-between">
      <div class="flex">
        <BaseButton variant="text" icon="icon-bookmark-plus" color="primary" size="small"/>
        <BaseButton variant="text" icon="icon-share-network" color="primary" size="small"/>
      </div>
      <BaseLikeCommentCounter :like-count="32" :comment-count="40"/>
    </div>
  </div>
</template>