<script setup>
import { ref, watch } from 'vue';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';

const props = defineProps({
  show: Boolean
});

const emits = defineEmits(['openLoginDialog', 'update:show']);

const open = ref(props.show);

watch(props, () => {
  open.value = props.show;
});

const openLoginDialog = () => {
  emits('openLoginDialog');
  closeForgtoPassDialog();
}

const closeForgtoPassDialog = () => {
  open.value = false;
  emits('update:show', false);
}
</script>

<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-40" @close="closeForgtoPassDialog">
      <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
        enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
        leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-50" />
      </TransitionChild>

      <div class="fixed inset-0 z-40 flex">
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-y-full" enter-to="translate-y-0" leave="transition ease-in-out duration-300 transform"
          leave-from="translate-y-0" leave-to="-translate-y-full">
          <DialogPanel class="absolute left-1/2 -translate-x-1/2 top-10 z-40">
            <div class="relative flex flex-col rounded-2xl overflow-hidden form-wrapper">
              <!-- Close Button -->
              <div class="absolute right-3 top-3" @click="closeForgtoPassDialog">
                <BaseButton icon="icon-xmark" variant="outlined" class="hidden md:flex" rounded />
                <BaseButton icon="icon-xmark" variant="outlined" class="md:hidden" size="small" rounded />
              </div>

              <div id="main" class="p-6 md:p-8 bg-white">
                <div class="text-2xl md:text-4xl font-taviraj mb-4">Forgot Password?</div>
                <div class="text-lg md:text-xl mb-8 text-gray">Enter your registered email address to reset the password</div>
                <!-- Form Start -->
                <BaseInput label="E-mail" placeholder="E-mail" type="email" class="mb-6 md:mb-8" />
                <BaseButton text="Reset Password" color="secondary" size="large" class="w-full" />
                <!-- Form End -->
              </div>

              <div id="footer" class="bg-cardBgLight py-6">
                <div class="flex justify-center items-center">
                  <div class="text-base md:text-xl text-gray mr-3">Already have an account?</div>
                  <BaseLinkText text="Log in" @click="openLoginDialog" />
                </div>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style>
.form-wrapper {
  width: 30rem;
}

@media (max-width: 820px) {
  .form-wrapper {
    width: 26rem;
  }
}

@media (max-width: 480px) {
  .form-wrapper {
    width: 20rem;
  }
}
</style>