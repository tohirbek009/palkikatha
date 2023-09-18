<script setup>
import { computed } from 'vue';

import { truncateWords } from '../../utils/truncate-word';

const props = defineProps({
  title: String,
  description: String,
  cardImageUrl: String,
  avatarImageUrl: String,
  userName: String,
  time: String
});

const truncateDescription = computed(() => {
  return truncateWords(props.description, 20);
});
</script>

<template>
  <div class="flex space-x-3 md:space-x-7">
    <img :src="cardImageUrl" alt="" class="rounded-lg h-auto w-28 md:min-w-[160px]">

    <div class="flex flex-grow flex-col py-1 md:py-2">
      <div class="flex justify-between items-center space-x-3">
        <div class="text-sm md:text-base font-bold">{{ title }}</div>
        <div class="md:hidden">
          <BaseButton icon="icon-dots-three-vertical" variant="text" rounded color="primary" />
        </div>
        <div class="hidden md:flex space-x-1.5">
          <BaseButton icon="icon-share-network" variant="outlined" rounded color="primary" />
          <BaseButton icon="icon-bookmark-plus" variant="outlined" rounded color="primary" />
        </div>
      </div>
      <div class="text-gray text-xs md:text-sm my-2">{{ truncateDescription }}</div>

      <BaseAvatarInfo :avatarImage="avatarImageUrl" :name="userName" :time="time" size="small" class="mt-auto"/>
    </div>
  </div>
</template> 