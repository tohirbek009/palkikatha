<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  bgColor: {
    type: String,
    default: 'cardBgLight'
  },
  smallerVersion: Boolean,
});

const bgColor = computed(() => {
  const colors = {
    cardBgLight: 'bg-cardBgLight',
    successLight: 'bg-successLight',
    infoLight: 'bg-infoLight',
    yellowLight: 'bg-yellowLight'
  };

  return colors[props.bgColor];
});

const activeTagId = ref(1);

const chooseTag = (tagId) => {
  activeTagId.value = tagId;
}

const tags = [ {id: 1, text: "Query"}, {id: 2, text: "Intimacy"}, {id: 3, text: "Relationship"}]
</script>

<template>
  <div :class="['flex flex-col p-6 rounded-2xl', bgColor, { 'primary-card-wrapper': !smallerVersion }]">
    <div :class="[
      'flex justify-between',
      { 'flex-col-reverse items-start space-y-5 space-y-reverse mb-2 md:mb-7 md:items-center md:flex-row md:space-y-0': !smallerVersion },
      { 'flex-col-reverse items-start space-y-5 space-y-reverse mb-2': smallerVersion }
    ]">
      <BaseAvatarInfo name="Anonymous" time="4 days ago" />
      <div :class="['flex space-x-2', { 'flex-wrap space-y-2 -ml-2 -mt-2': smallerVersion }]">
        <BaseChip 
          v-for="tag in tags"
          :key="tag.id"
          @click="chooseTag(tag.id)"
          :color="tag.id === activeTagId ? 'orange' : 'default'" 
          :text="tag.text" 
          :class="['uppercase font-bold text-xs md:text-sm', { 'ml-2 mt-2': smallerVersion && tag.id === 1 }]"
        />
      </div>
    </div>

    <div :class="[
      'font-taviraj mb-1 md:mb-2', 
      { 'text-2xl md:text-3xl': !smallerVersion, 'text-xl mt-auto': smallerVersion }
    ]">
      Should I tell my wife I know?
    </div>
    <div :class="['font-medium text-gray', { 'w-4/5 md:w-3/5 text-xs md:text-base': !smallerVersion, 'text-sm': smallerVersion }]">
      Discover the path to lasting love and harmony with expert guidance on our
      relationship advice website.
    </div>

    <!-- Avatar informations with smaller card version -->
    <div v-if="smallerVersion" class="flex flexw- items-center space-x-1 mb-6 mt-auto">
      <img src="/assets/img/avatar-2.png" alt="image" class="w-8 h-8 rounded-full border-2 border-white" />
      <div class="text-primary font-bold text-sm">Shruti Malhotra</div>
      <div class="text-gray font-medium text-sm">(43 Solutions)</div>
      <BaseRating size="small" :value="4.5" has-background />
    </div>

    <!-- Avatar informations with default card version -->
    <div v-else class="flex flex-wrap items-center mt-7 mb-12">
      <img src="/assets/img/top-story-3.png" alt="" class="w-14 h-14 md:w-18 md:h-18 rounded-full border-4 mr-2 md:mr-4 border-white">

      <div class="flex flex-col">
        <div class="text-gray text-xs md:text-sm"><span class="text-primary">43</span> Solutions</div>
        <div class="text-sm md:text-xl text-primary font-bold mr-6">Shruti Malhotra </div>
        <BaseRating version="long" :value="4.9" />
      </div>

      <div class="w-full md:w-fit mt-5 md:mt-0">
        <BaseLinkText
          text="Ask the Expert?"
          to="#"
        />
      </div>
      
    </div>

    <div class="flex space-x-2">
      <BaseButton icon="icon-bookmark-plus" size="large" variant="outlined" color="primary" />
      <BaseButton icon="icon-share-network" size="large" variant="outlined" color="primary" />
      <BaseLikeCommentCounter size="large" :like-count="32" :comment-count="40" class="like-comment-count"/>
    </div>
  </div>
</template>

<style scoped>
.primary-card-wrapper {
  background-image: url('/assets/img/graphics/primary-card-bg.png');
  background-repeat: no-repeat;
  background-position: bottom right;
}

@media (max-width: 480px) {
  .primary-card-wrapper {
    background-position: 300% 110%;
  }

  .like-comment-count {
    box-shadow: 0px 5px 11px 0px rgba(0, 0, 0, 0.14);
  }
}
</style>