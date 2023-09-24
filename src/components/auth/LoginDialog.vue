<script setup>
import { ref, watch } from 'vue';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';

const props = defineProps({
  show: Boolean
});

const emits = defineEmits(['openSignUpDialog', 'openForgotPassDialog', 'update:show']);

const open = ref(props.show);

watch(props, () => {
  open.value = props.show;
});

const openSignUpDialog = () => {
  emits('openSignUpDialog');
  closeLoginDialog();
};

const openForgotPasswordDialog = () => {
  emits('openForgotPassDialog');
  closeLoginDialog();
}

const closeLoginDialog = () => {
  open.value = false;
  emits('update:show', false);
}
</script>

<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-40" @close="closeLoginDialog">
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
            <div class="relative flex flex-col rounded-2xl overflow-hidden login-wrapper">
              <div class="absolute right-3 top-3" @click="closeLoginDialog">
                <BaseButton icon="icon-xmark" variant="outlined" class="hidden md:flex" rounded />
                <BaseButton icon="icon-xmark" variant="outlined" class="md:hidden" size="small" rounded />
              </div>
              <div id="main" class="p-6 md:p-8 bg-white">
                <div class="text-2xl md:text-4xl font-taviraj mb-6 md:mb-8">Login to your account</div>
                <!-- Form Start -->
                <BaseInput label="E-mail" placeholder="E-mail" type="email" class="mb-4" />
                <BaseInput label="Password" placeholder="Password" type="password" class="mb-4" />
                <BaseLinkText text="Forgot Password?" @click="openForgotPasswordDialog" class="mb-4 ml-auto" />
                <BaseButton text="Log In" color="secondary" size="large" class="w-full mb-4" />
                <!-- Form End -->
                <div class="flex items-center space-x-7 px-6 md:px-12 mb-6">
                  <div class="flex-grow h-px bg-grayLight"></div>
                  <div class="text-sm text-center text-grayLight w-5">OR</div>
                  <div class="flex-grow h-px bg-grayLight"></div>
                </div>
                <div class="flex justify-between px-12">
                  <button class="outline-none scale-75 md:scale-100">
                    <img src="/assets/icon/facebook.svg" alt="">
                  </button>
                  <button class="outline-none scale-75 md:scale-100">
                    <img src="/assets/icon/google.svg" alt="">
                  </button>
                  <button class="outline-none scale-75 md:scale-100">
                    <img src="/assets/icon/linkedin.svg" alt="">
                  </button>
                </div>
              </div>

              <div id="footer" class="bg-cardBgLight py-6">
                <div class="flex justify-center items-center">
                  <div class="text-base md:text-xl text-gray mr-3">Not a member?</div>
                  <BaseLinkText text="Sing up" @click="openSignUpDialog" />
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
.login-wrapper {
  width: 30rem;
}

@media (max-width: 820px) {
  .login-wrapper {
    width: 26rem;
  }
}

@media (max-width: 480px) {
  .login-wrapper {
    width: 20rem;
  }
}
</style>