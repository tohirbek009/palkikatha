<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { newMenuItems, popularTags } from '../../data/sidebar';

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
    <Dialog as="div" class="relative z-40" @close="closeMenu">
      <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
        enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
        leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-50" />
      </TransitionChild>

      <div class="fixed inset-0 z-40 flex">
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0" leave-to="-translate-x-full">
          <DialogPanel class="relative flex flex-col shadow-xl h-full overflow-auto bg-white p-4 max-lg:w-full min-w-[300px]">
            <nav class="flex flex-col space-y-2 z-10">
              <div class="px-2">
                <BaseButton icon="icon-menu-bars" color="gray" variant="text" @click="closeMenu"/>
              </div>
              <div class="flex flex-col sm:max-lg:flex-row justify-between">
                <div class="flex flex-col space-y-2">
                  <RouterLink
                    v-for="item in newMenuItems[0]" 
                    :to="item.to"
                    :key="item.to"
                    :class="[
                      'flex items-center py-2 px-4 font-medium duration-300 rounded hover:bg-light',
                      { 'bg-transparent': currentPath !== item.to },
                      { 'bg-light': currentPath === item.to }
                    ]"
                    @click="closeMenu"
                  >
                    <i :class="[item.icon, 'flex items-center justify-center']"></i>
                    <span class="ml-3">{{ item.name }}</span>
                  </RouterLink>
                </div>
                <div class="max-sm:my-3 lg:my-3 border border-light"></div>
                <div class="flex flex-col space-y-2">
                  <RouterLink
                    v-for="item in newMenuItems[1]" 
                    :to="item.to"
                    :key="item.to"
                    :class="[
                      'flex items-center py-2 px-4 font-medium duration-300 rounded hover:bg-light',
                      { 'bg-transparent': currentPath !== item.to },
                      { 'bg-light': currentPath === item.to }
                    ]"
                    @click="closeMenu"
                  >
                    <i :class="[item.icon, 'flex items-center justify-center']"></i>
                    <span class="ml-3">{{ item.name }}</span>
                  </RouterLink>
                </div>
                <div class="max-sm:my-3 lg:my-3 border border-light"></div>
                <!-- Popular Tags: -->
                <div class="w-full sm:max-lg:w-[25%] flex flex-col space-y-2 my-2 pl-4">
                  <div class="font-bold mb-4">Popular Tags</div>
                  <div v-for="tag in popularTags[0]" :key="tag.name" class="flex items-center justify-between text-sm sp">
                    <div>{{ tag.name }}</div>
                    <div class="text-grayLight">{{ tag.count }}</div>
                  </div>
                </div>
                <div class="w-full sm:max-lg:w-[25%] flex flex-col space-y-2 pl-4">
                  <div v-for="tag in popularTags[1]" :key="tag.name" class="flex items-center justify-between text-sm">
                    <div>{{ tag.name }}</div>
                    <div class="text-grayLight">{{ tag.count }}</div>
                  </div>
                </div>
              </div>
            </nav>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>