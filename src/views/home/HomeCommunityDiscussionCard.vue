<script setup></script>

<template>
  <div class="card-wrapper flex flex-col items-center md:items-end md:flex-row md:justify-between rounded-2xl bg-secondary text-white">
    <div class="flex flex-col items-center justify-between pt-10 pb-5 px-4 w-full md:p-10 md:items-start md:w-2/5">
      <div class="uppercase font-medium">Lovetalk hub</div>
      <div class="font-taviraj text-2xl md:text-4xl my-3">Community <br class="hidden md:block"> Discussion</div>
      <div class="text-sm md:text-base">Discover the path to lasting love and harmony with expert guidance on our relationship advice website. </div>
      <BaseButton text="Join our community" color="primary" size="large" class="mt-7 md:mt-8 w-full"/>
    </div>
    <div class="relative flex items-end w-fit">
      <img src="/src/assets/img/graphics/love-message-1.png" alt="image" class="absolute bottom-12 md:bottom-24 -right-8 md:left-6">
      <img src="/src/assets/img/graphics/love-message-2.png" alt="image" class="absolute bottom-8 left-0">
      <img src="/src/assets/img/community-discussion-card.png" alt="image" class="main-image rounded-2xl">
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  background-image: url('/src/assets/img/graphics/ellipse-right.png');
  background-repeat: no-repeat;
  background-position: bottom right;
  overflow: hidden;
}

@media (max-width: 820px) {
  .card-wrapper {
    background-image: url('/src/assets/img/graphics/ellipse-center.png');
    background-position: bottom center;
  }

  .card-wrapper .main-image {
    margin-bottom: -50px;
  }
}
</style>