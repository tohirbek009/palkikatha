<script setup>
import { computed, onMounted, ref } from 'vue';

import { truncateWords } from '../../utils/truncate-word';
import { useWindowSize } from '../../store/window-size';

const windowSize = useWindowSize();

const props = defineProps({
  title: String,
  description: String,
  cardImageUrl: String,
  avatarImageUrl: String,
  userName: String,
  time: String
});

const truncateDescription = computed(() => {
  const maxWords = windowSize.screenWidth >= 820 ? 20 : 10;
  return truncateWords(props.description, maxWords);
});

const truncateTitle = computed(() => {
  const maxWords = windowSize.screenWidth >= 820 ? 10 : 5;
  return truncateWords(props.title, maxWords);
});
</script>

<template>
  <div class="flex space-x-3 md:space-x-7">
    <img :src="cardImageUrl" alt="" class="rounded-lg h-28 w-28 md:h-40 md:w-40">

    <div class="flex flex-grow flex-col justify-between py-1 md:py-2">
      <div class="flex justify-between items-center space-x-3">
        <div class="text-sm md:text-base font-bold">{{ truncateTitle }}</div>
        <div class="md:hidden">
          <BaseButton icon="icon-dots-three-vertical" variant="text" rounded color="primary" />
        </div>
        <div class="hidden md:flex space-x-1.5">
          <BaseButton icon="icon-share-network" variant="outlined" rounded color="primary" />
          <BaseButton icon="icon-bookmark-plus" variant="outlined" rounded color="primary" />
        </div>
      </div>

      <div class="text-gray text-xs md:text-sm my-2">{{ truncateDescription }}</div>

      <BaseAvatarInfo :avatarImage="avatarImageUrl" image-size="w-[18px]" :name="userName" :time="time" size="small" class="mt-auto"/>
    </div>
  </div>
</template> 