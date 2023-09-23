<script setup>
import { advices } from '../../data/home';
import CardReadAdvice from '../../components/card/CardReadAdvice.vue';
</script>

<template>
  <div class="mt-6 md:mt-12 mb-0 md:mb-10 pl-0 md:pl-5">
    <div class="flex items-end justify-center md:justify-between mb-10">
      <div class="text-center md:text-left">
        <div class="text-sm text-yellow mb-3 uppercase">Becoming the Best You</div>
        <div class="text-3xl font-taviraj">Most Read Advices for the week</div>
      </div>
      <BaseLinkText
        text="View More"
        rightIcon="icon-caret-right"
        to="#"
      />
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2 md:gap-3">
      <CardReadAdvice v-for="advice in advices" :key="advice.id" :avatar-image="advice.avatarImage"
        :user-name="advice.userName" :time="advice.time" :card-title="advice.title"
        :solutions-count="advice.solutionsCount" :like-count="advice.likeCount" :comment-count="advice.components" />
    </div>
    <BaseButton text="View More" color="secondary" size="large" variant="outlined" class="w-full md:hidden mt-3" />
  </div>
</template>