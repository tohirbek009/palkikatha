<script setup>
// Home Components
import HomeTopStories from './HomeTopStories.vue';
import HomeCommunityDiscussionCard from './HomeCommunityDiscussionCard.vue';
import HomeMostReadAdvices from './HomeMostReadAdvices.vue';
import HomeCardSwiper from './HomeCardSwiper.vue';
// Card Components
import CardPrimary from '../../components/card/CardPrimary.vue';
import CardSecondary from '../../components/card/CardSecondary.vue';
import CardPrimaryMobile from '../../components/card/CardPrimaryMobile.vue';
import CardGetInvolved from '../../components/card/CardGetInvolved.vue'
</script>

<template>
  <div class="flex flex-col">
    <div class="md:hidden">
      <HomeCardSwiper />
      <div class="grid grid-cols-2 gap-2 my-5">
        <CardPrimaryMobile 
          bg-color="yellowLight"
          card-title="Following up on my intimacy problems with something or etc"
          active-tag-color="success"
          :active-tag-id="2"
          :tags="[{ id: 1, text: 'Intimacy' }, { id: 2, text: 'Discussion' }]"
        />
        <CardPrimaryMobile 
          bg-color="successLight"
          card-title="After 30 years of marriage I realized that family is more important"
          active-tag-color="danger"
          :active-tag-id="1"
          :tags="[{ id: 1, text: 'Articles' }, { id: 2, text: 'Discussion' }]"
        />
      </div>
      <BaseButton text="View More Advices" size="large" color="secondary" class="w-full"/>
    </div>
    
    <div class="flex flex-col space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0">
      <!-- Left Side (Cards) -->
      <div class="hidden md:grid grid-cols-2 gap-4 w-full xl:w-[55%] 2xl:w-3/5">
        <CardPrimary class="col-span-2" />
        <CardPrimary smaller-version bg-color="yellowLight" class="row-span-2" />
        <CardSecondary
          card-title="After 30 years of marriage I realized that family is much more important"
          tag-text="Discussion" 
          tag-color="success" 
          bg-color="successLight" 
        />
        <CardSecondary 
          card-title="After 30 years of marriage I realized that family is much more important"
          tag-text="Asticles"
          tag-color="danger"
          bg-color="infoLight" 
        />
      </div>

      <!-- Right Side (Top Stories) -->
      <div class="w-full xl:w-[45%] 2xl:w-2/5 h-100">
        <HomeTopStories />
      
        <!-- Top Stories More Button -->
        <BaseButton 
          text="View More Stories" 
          color="primary" 
          size="large" 
          variant="outlined"
          class="w-full mt-4 md:hidden"
        />
      </div>
    </div>

    <div class="flex flex-col space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0 md:mt-4">

      <!-- Left Side (Community Discussion block) -->
      <div class="hidden md:grid grid-cols-2 gap-4 w-full xl:w-[55%] 2xl:w-3/5">
        <HomeCommunityDiscussionCard class="col-span-2"/>
      </div>

      <!-- Right Side (Break-up Stories, Get Involved) -->
      <div class="w-full xl:w-[45%] 2xl:w-2/5">

        <!-- Community Discussion Card for Mobile responsive -->
        <HomeCommunityDiscussionCard class="md:hidden"/>
      
        <!-- Break-up Stories Card -->
        <div class="flex flex-col sm:flex-row py-8 px-6 bg-cardBgLight rounded-2xl h-fit mb-4">
          <div class="flex flex-col items-center sm:items-start w-full sm:w-1/2">
            <div class="font-taviraj text-2xl mb-2">Break-up Stories</div>
            <div class="text-gray text-sm font-bold text-center sm:text-start"><span class="text-black">More that 10,000</span> people already shared their story with Palkikatha</div>
          </div>
          <div class="flex items-center flex-grow pl-6 mt-5 sm:mt-0">
            <BaseButton text="Explore Stories" color="secondary" size="large" class="w-full h-14" />
          </div>
        </div>
      
        <!-- Get Involved Card -->
        <CardGetInvolved />

      </div>
    </div>
    
    <!-- Most Read Advices -->
    <HomeMostReadAdvices />
  </div>
</template>