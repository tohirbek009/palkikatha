<script setup>
import { ref } from 'vue';

import Search from '../Search.vue';
import DialogSidebarMenu from '../dialog/DialogSidebarMenu.vue';
import SignUpDialog from '../auth/SignUpDialog.vue';
import LoginDialog from '../auth/LoginDialog.vue';
import ForgotPasswordDialog from '../auth/ForgotPasswordDialog.vue';

const isOpenDialogSidebar = ref(false);
const isOpenDialogSignUp = ref(false);
const isOpenDialogLogin = ref(false);
const isOpenDialogForgotPass = ref(false);

const openDialogSidebar = () => {
  isOpenDialogSidebar.value = true;
};

const openSignUpDialog = () => {
  isOpenDialogSignUp.value = true;
}

const openLoginDialog = () => {
  isOpenDialogLogin.value = true;
}

const openForgotPassDialog = () => {
  isOpenDialogForgotPass.value = true;
}
</script>

<template>
  <div class="fixed top-0 left-0 w-full md:h-18 lg:h-22 z-30 bg-white">
    <div class="flex items-center h-full">
      <div class="hidden md:flex items-center w-22 lg:w-26 h-full bg-primary cursor-pointer">
        <i class="icon-menu-bars text-2xl text-white mx-auto"></i>
      </div>

      <div
        class="flex items-center flex-grow flex-wrap md:flex-nowrap h-full px-3 py-3 md:py-0 lg:px-6 md:border-b md:border-[#E3E3E3]">
        <BaseButton icon="icon-menu-bars" color="primary" class="px-3 py-3 mr-4 md:hidden text-sm h-14" @click="openDialogSidebar"/>

        <RouterLink to="/">
          <BaseLogo class="text-sm md:text-2xl" />
        </RouterLink>

        <div class="flex-grow ml-3 mr-3 lg:ml-6 hidden md:block">
          <Search />
        </div>

        <div class="flex space-x-1.5 md:space-x-3 ml-auto">
          <BaseButton text="Sign Up" color="secondary" size="large" class="text-xs md:text-base" @click="openSignUpDialog"/>
          <BaseButton text="Log In" append-icon="icon-sign-in" color="light" size="large" class="text-xs md:text-base" @click="openLoginDialog"/>
        </div>

        <div class="w-full mt-4 md:hidden">
          <Search />
        </div>
      </div>
    </div>
  </div>

  <!-- Dialogs: (Sidebar mobile menu, SignUp, Login, ForgotPassword) -->
  <DialogSidebarMenu v-model:show="isOpenDialogSidebar" />
  <SignUpDialog v-model:show="isOpenDialogSignUp" @openLoginDialog="openLoginDialog"/>
  <LoginDialog v-model:show="isOpenDialogLogin" @openSignUpDialog="openSignUpDialog" @openForgotPassDialog="openForgotPassDialog"/>
  <ForgotPasswordDialog v-model:show="isOpenDialogForgotPass" @openLoginDialog="openLoginDialog"/>
</template>

<style scoped>
@media (max-width: 820px) {
  button {
    height: 40px !important;
  }
}
</style>