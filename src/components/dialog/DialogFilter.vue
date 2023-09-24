<script setup>
import { ref } from 'vue';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';

import { storiesFilterItems } from '../../data/home';

const activeFilter = ref(1);

const chooseFilterItem = (filterId) => {
  activeFilter.value = filterId;
};

// Sort By Items:
const sortByItems1 = [
  {id: 1, text: 'Most Recent First'},
  {id: 2, text: 'Most Recent Last'}
];
const sortByItems2 = [
  {id: 1, text: 'Premium Content First'},
  {id: 2, text: 'Premium Content Last'}
];

// Filter Items:
const filterTimeItems = [
  {id: 1, text: 'All Time'},
  {id: 2, text: 'Last year'},
  {id: 3, text: 'Last month'},
  {id: 4, text: 'Last week'},
  {id: 5, text: 'Yesterday'},
];
const filterCategoryItems = [
  {id: 1, text: 'Category-1'},
  {id: 2, text: 'Category-2'},
  {id: 3, text: 'Category-3'},
]
</script>

<template>
  <Popover>
    <PopoverButton class="outline-none">
      <slot name="button"></slot>
    </PopoverButton>
    <!-- <PopoverOverlay v-if="open" class="fixed inset-0 bg-black opacity-30" /> -->
    <transition 
      enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel class="absolute left-0 md:left-22 lg:left-26 right-0 top-[128px] md:top-18 lg:top-22 z-10">
          <div
            class="rounded-b-lg shadow-2xl p-6 bg-white"
          >
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div class="font-semibold mb-2">Sort by :</div>
              <div class="flex space-x-4">
                <BaseSelect class="w-full" placeholder="Most Recent" :items="sortByItems1"/>
                <BaseSelect class="w-full" placeholder="Premium Content" :items="sortByItems2"/>
              </div>
            </div>
            <div>
              <div class="font-semibold mb-2">Filter :</div>
              <div class="flex space-x-4">
                <BaseSelect class="w-full" placeholder="All Time" :items="filterTimeItems"/>
                <BaseSelect class="w-full" placeholder="All Category" :items="filterCategoryItems"/>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <div class="font-semibold mb-2">Search by Tag :</div>
            <div class="flex flex-wrap space-x-4 space-y-4 -ml-4 -mt-4">
              <BaseChip v-for="filterItem in storiesFilterItems" :key="filterItem.id" :text="filterItem.text"
                :color="filterItem.id === activeFilter ? 'orange' : 'default'" :class="[{ 'ml-4 mt-4': filterItem.id === 1 }]"
                @click="chooseFilterItem(filterItem.id)" rounded="rounded-lg" />
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>