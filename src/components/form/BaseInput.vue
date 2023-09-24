<script setup>
import { ref, watch, computed } from 'vue';

const props = defineProps({
  value: String,
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String,
  errorMessage: String
});

const emits = defineEmits(['update:value']);

const modelValue = ref(props.value);
const isInputFocused = ref(false);
const visiblePassword = ref(false);

const inputType = computed(() => {
  if(props.type === 'password') {
    if(visiblePassword.value) {
      return 'text'
    } else return 'password'
  } else return props.type;
})

watch(modelValue, () => {
  emits('update:value', modelValue);
});
</script>

<template>
  <div class="search-container">
    <label 
      :for="label" 
      :class="{'text-secondary': isInputFocused, 'text-gray': !isInputFocused}"
      class=""
    >
      {{ label }}
    </label>
    <div 
      class="flex items-center justify-between h-12 py-2 pl-4 pr-2 mt-2 rounded-xl border"
      :class="{ 'border-secondary': isInputFocused, 'border-[#DAD7E4]': !isInputFocused }"
    >
      <input
        v-model="modelValue"
        :type="inputType"
        :placeholder="placeholder"
        :id="label"
        class="block outline-none placeholder:text-sm md:placeholder:text-base w-full"
        @focus="isInputFocused = true"
        @blur="isInputFocused = false"
      />
      <BaseButton
        v-if="type === 'password'"
        :color="isInputFocused ? 'secondary' : 'gray'" 
        variant="text" 
        :icon="visiblePassword ? 'icon-eye-slash' : 'icon-eye'" 
        rounded
        @click="visiblePassword = !visiblePassword"
      />
    </div>
  </div>
</template>