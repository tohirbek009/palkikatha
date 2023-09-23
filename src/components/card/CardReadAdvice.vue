<script setup>
const props = defineProps({
  avatarImage: String,
  userName: String,
  time: String,
  cardTitle: String,
  solutionsCount: Number,
  likeCount: Number,
  commentCount: Number
})
</script>

<template>
  <div class="flex flex-col p-2 md:p-4 border border-light rounded-xl md:border-0">
    <div class="flex items-center justify-between">
      <BaseAvatarInfo :avatarImage="avatarImage" :name="userName" :time="time" size="small" class="text-[8px] md:text-xs"/>
      <div class="hidden md:flex">
        <BaseButton variant="text" icon="icon-bookmark-plus" color="primary"/>
        <BaseButton variant="text" icon="icon-share-network" color="primary"/>
      </div>
    </div>
    <div class="font-taviraj text-base md:text-xl my-3">{{ cardTitle }}</div>

    <div class="mt-auto">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-1 text-[10px] md:text-sm">
          <div class="w-6 h-6 rounded-full flex items-center justify-center bg-grayLightest">
            <i class="icon-lightbulb-filament"></i>
          </div>
          <div><span>{{ solutionsCount }}</span> <span class="text-gray">Solutions</span></div>
        </div>
        <BaseLikeCommentCounter :like-count="likeCount" :comment-count="commentCount" bg-transparent class="like-comment-count px-1"/>  
      </div>
      <div class="flex md:hidden space-x-2 mt-4">
        <BaseButton variant="outlined" icon="icon-bookmark-plus" color="primary"/>
        <BaseButton variant="outlined" icon="icon-share-network" color="primary"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 820px) {
  .like-comment-count {
    font-size: 8px !important;
    border: 0.5px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.05);
  }
}
</style>