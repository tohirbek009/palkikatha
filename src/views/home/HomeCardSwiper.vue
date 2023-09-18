<script setup>
  import { Pagination } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';

  import CardPrimary from '../../components/card/CardPrimary.vue';

  const modules = [Pagination];
</script>

<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    navigation
    :space-between="18"
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
  >
    <swiper-slide>
      <CardPrimary />
    </swiper-slide>
    <swiper-slide>
      <CardPrimary />
    </swiper-slide>
    <swiper-slide>
      <CardPrimary />
    </swiper-slide>
    <swiper-slide>
      <CardPrimary />
    </swiper-slide>
    <swiper-slide>
      <CardPrimary />
    </swiper-slide>
    <swiper-slide>
      <CardPrimary />
    </swiper-slide>
  </swiper>
</template>

<style>
.swiper-pagination {
  position: initial;
  margin-top: 8px;
}
</style>