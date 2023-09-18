<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import Search from '../Search.vue';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { sideMenuItems } from '../../data/sidebar';

const route = useRoute();

const open = ref(false);
const currentPath = computed(() => {
  return route.path;
});

const toggleMenu = () => {
  open.value = !open.value;
}
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-fit md:h-18 lg:h-22 bg-white z-10">
    <div class="flex items-center h-full">
      <div class="hidden md:flex items-center w-22 lg:w-26 h-full bg-primary cursor-pointer">
        <div class="icon-menu-bars text-2xl text-white mx-auto"></div>
      </div>

      <div
        class="flex items-center flex-grow flex-wrap md:flex-nowrap h-full px-3 py-3 md:py-0 lg:px-6 md:border-b md:border-[#E3E3E3]">
        <BaseButton icon="icon-menu-bars" color="primary" class="px-3 py-3 mr-4 md:hidden text-sm h-14" @click="toggleMenu"/>

        <RouterLink to="/">
          <BaseLogo class="text-sm md:text-2xl" />
        </RouterLink>

        <div class="flex-grow ml-3 mr-3 lg:ml-6 hidden md:block">
          <Search />
        </div>

        <div class="flex space-x-1.5 md:space-x-3 ml-auto">
          <BaseButton text="Sign Up" color="secondary" size="large" class="text-xs md:text-base" />
          <BaseButton text="Log In" append-icon="icon-sign-in" color="light" size="large" class="text-xs md:text-base" />
        </div>

        <div class="w-full mt-4 md:hidden">
          <Search />
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
      <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
        enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
        leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-50" />
      </TransitionChild>

      <div class="fixed inset-0 z-40 flex">
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0" leave-to="-translate-x-full">
          <DialogPanel class="relative flex flex-col shadow-xl h-fit bg-white">
            <div class="flex items-center px-5 py-4 space-x-4 bg-primary">
              <button class="h-7 w-7" @click="toggleMenu">
                <i class="icon-circle-xmark text-3xl text-white"></i>
              </button>
              <div class="font-medium text-base text-white">Menu</div>
            </div>

            <nav class="flex flex-col space-y-2 my-2.5 z-10">
              <RouterLink
                v-for="item in sideMenuItems" 
                :to="item.to"
                :key="item.to"
                :class="[
                  'flex items-center p-4 group font-medium border-r-4 duration-300',
                  { 'border-r-transparent': currentPath !== item.to },
                  { 'border-r-secondary text-secondary': currentPath === item.to }
                ]"
                @click="toggleMenu"
              >
                <i :class="[item.icon, { 'text-grayLight': currentPath !== item.to }, 'w-7 h-7 flex items-center justify-center text-xl group-hover:text-secondary']"></i>
                <span class="group-hover:text-secondary ml-2">{{ item.name }}</span>
              </RouterLink>
            </nav>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped>
@media (max-width: 820px) {
  button {
    height: 40px !important;
  }
}
</style>