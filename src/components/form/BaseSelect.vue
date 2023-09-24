<script setup>
import { ref, watch } from 'vue';
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'

const props = defineProps({
  value: [String, Number, Object],
  label: String,
  placeholder: {
    type: String,
    default: 'Select'
  },
  items: Array,
});

const emits = defineEmits(['update:value']);

const modelValue = ref(props.value);

watch(modelValue, () => {
  emits('update:value', modelValue);
});

console.log("ITEMS: ", props.items)
</script>

<template>
  <Listbox as="div" v-model="modelValue" v-slot="{ open }" class="min-w-[120px]">
    <ListboxLabel v-if="label" class="block text-sm font-medium leading-6 text-gray-900">{{ label }}</ListboxLabel>
    <div class="relative mt-2">
      <ListboxButton
        class="relative w-full rounded-md bg-white 
        py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 
        ring-inset ring-gray-300 focus:outline-none focus:ring-2 
        ring-grayLight sm:text-sm sm:leading-6"
      >
        <span class="block truncate text-gray text-base" v-if="modelValue">{{ modelValue?.text }}</span>
        <span class="block truncate text-grayLight text-base" v-else>{{ placeholder }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <i :class="open ? 'rotate-0 transform' : 'rotate-180'" class="icon-caret-up text-[6px] text-grayLight"></i>
        </span>
      </ListboxButton>

      <transition 
        leave-active-class="transition ease-in duration-100" 
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md 
          bg-white py-1 text-base shadow-lg ring-1 
          ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption 
            as="template" 
            v-if="items"
            v-for="item in items" 
            :key="item.id" 
            :value="item"
            v-slot="{ active, selected }"
          >
            <li 
              :class="[
                active ? 'bg-secondary text-white' : 'text-gray', 
                'relative cursor-pointer select-none py-2 pl-3 pr-9'
              ]"
            >
              <div class="flex items-center">
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
                  {{ item.text }}
                </span>
              </div>
            </li>
          </ListboxOption>
          <ListboxOption v-else>
            <li class="relative cursor-default select-none py-2 pl-3 pr-9 text-center text-grayLight">No Data</li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>