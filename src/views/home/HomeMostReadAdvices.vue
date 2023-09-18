<script setup>
import { advices } from '../../data/home';
import CardReadAdvice from '../../components/card/CardReadAdvice.vue';
</script>

<template>
  <div class="mt-20 mb-0 md:mb-10 pl-0 md:pl-5">
    <div class="flex items-end justify-between mb-10">
      <div class="text-center md:text-left">
        <div class="text-sm text-yellow mb-3">Becoming the Best You</div>
        <div class="text-3xl font-taviraj">Most Read Advices for the week</div>
      </div>
      <div
        class="hidden md:flex items-center pb-1 text-secondary font-bold border-b border-secondary cursor-pointer duration-300 hover:brightness-75 active:text-primary">
        <span>View More</span>
        <i class="icon-caret-right ml-1.5 text-sm"></i>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2 md:gap-3">
      <CardReadAdvice v-for="advice in advices" :key="advice.id" :avatar-image="advice.avatarImage"
        :user-name="advice.userName" :time="advice.time" :card-title="advice.title"
        :solutions-count="advice.solutionsCount" :like-count="advice.likeCount" :comment-count="advice.components" />
    </div>
    <BaseButton text="View More" color="secondary" size="large" variant="outlined" class="w-full md:hidden mt-3" />
  </div>
</template>