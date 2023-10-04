<script setup>
import { ref } from 'vue';

import { storiesFilterItems, topStories } from '../../data/home';
import CardStory from '../../components/card/CardStory.vue';

const activeFilterItem = ref(1);

const chooseFilterItem = (filterItemId) => {
  activeFilterItem.value = filterItemId;
}
</script>

<template>
  <div class="flex flex-col justify-between border border-[#E7E5EE] rounded-2xl h-full relative">
    <div class="p-7">
      <div class="flex items-start justify-between mb-7">
        <div class="text-2xl md:text-3xl font-taviraj">
          Top Stories of the week
        </div>
        <BaseLinkText
          rightIcon="icon-caret-right"
          text="View More"
          class="hidden md:block"
        />
      </div>
      <div class="flex flex-wrap space-x-3 space-y-3 -mt-3 -ml-3">
        <BaseChip
          v-for="item in storiesFilterItems"
          :key="item.id"
          :text="item.text"
          :color="item.id === activeFilterItem ? 'primary' : 'default'"
          @click="chooseFilterItem(item.id)"
          size="large"
          clickable
          class="first:mt-3 ml-3"
        />
        <BaseChip
          text="More..." 
          size="large"
          color="primary"
          outlined
          clickable
        />
      </div>
    </div>
    <div class="flex-grow flex flex-col space-y-4 px-3 md:px-7 h-[560px] overflow-auto">
      <CardStory
        v-for="topStory in topStories"
        :key="topStory.id"
        :title="topStory.title"
        :description="topStory.description"
        :card-image-url="topStory.storyImgUrl"
        :avatar-image-url="topStory.userImgUrl"
        :user-name="topStory.userName"
        :time="topStory.time"
      />
    </div>
  </div>
</template>