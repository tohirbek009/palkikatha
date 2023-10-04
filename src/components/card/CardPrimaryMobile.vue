<script setup>
import { computed, ref } from 'vue';

import { truncateWords } from '../../utils/truncate-word';

const props = defineProps({
  bgColor: {
    type: String,
    default: 'light'
  },
  cardTitle: String,
  tags: Array,
  activeTagId: Number,
  activeTagColor: String
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
});

const activeTagId = ref(props.activeTagId);

const chooseTag = (tagId) => {
  activeTagId.value = tagId;
};
</script>

<template>
  <div :class="['p-3 rounded-xl flex flex-col', bgColor]">
    <div class="flex flex-col">
      <div class="flex space-x-2 mb-3">
        <BaseChip 
          v-for="tag in tags"
          :key="tag.id"
          :text="tag.text"
          :color="tag.id === activeTagId ? activeTagColor : 'default'"
          @click="chooseTag(tag.id)"
          size="x-small" 
          class="uppercase" 
        />
      </div>
      <BaseAvatarInfo name="Rahul" time="7D ago" class="text-xs"/>
    </div>
    <div class="text-base font-taviraj mt-2 mb-2">{{ truncateCardTitle }}</div>
    <div class="flex items-center space-x-1.5 mb-3 mt-auto">
      <img src="/assets/img/avatar-3.png" alt="" class="w-8 h-8 rounded-full border border-white">
      <div class="flex flex-col">
        <div class="text-primary font-bold text-[10px]">Shruti Malhotra</div>
        <div class="flex items-center space-x-1">
          <BaseRating size="small" :value="4.5" />
          <div class="text-gray text-[10px]">(43 Solutions)</div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex space-x-1">
        <BaseButton variant="outlined" icon="icon-bookmark-plus" color="primary" size="small"/>
        <BaseButton variant="outlined" icon="icon-share-network" color="primary" size="small"/>
      </div>
      <BaseLikeCommentCounter :like-count="32" :comment-count="40" bg-transparent class="px-0" size="small"/>
    </div>
  </div>
</template>