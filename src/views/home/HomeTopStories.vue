<script setup>
import { storiesFilterItems, topStories } from '../../data/home';
import CardStory from '../../components/card/CardStory.vue';
</script>

<template>
  <div class="border border-grayLight rounded-2xl">
    <div class="p-7">
      <div class="flex items-start justify-between mb-7">
        <div class="text-2xl md:text-3xl font-taviraj">
          Top Stories of the week
        </div>
        <div class="hidden md:flex items-center pb-1 text-secondary font-bold border-b border-secondary cursor-pointer duration-300 hover:brightness-75 active:text-primary">
          <span>View More</span>
          <i class="icon-caret-right ml-1.5 text-sm"></i>
        </div>
      </div>
      <div class="flex flex-wrap space-x-3 space-y-3 -mt-3 -ml-3">
        <BaseChip
          v-for="item in storiesFilterItems"
          :key="item.id"
          :text="item.text" 
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
    <div class="flex flex-col space-y-4 px-3 md:px-7 h-[560px] overflow-auto">
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