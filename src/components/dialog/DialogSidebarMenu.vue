<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { sideMenuItems } from '../../data/sidebar';

const props = defineProps({
  show: Boolean
});

const emits = defineEmits(['update:show']);

const route = useRoute();

const currentPath = computed(() => {
  return route.path;
});

const open = ref(props.show);

watch(props, () => {
  open.value = props.show;
});

const closeMenu = () => {
  open.value = false;
  emits('update:show', false);
};
</script>

<template>
   <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-40 lg:hidden" @close="closeMenu">
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
              <button class="h-7 w-7" @click="closeMenu">
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
                @click="closeMenu"
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