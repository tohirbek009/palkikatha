<script setup>
import { onMounted } from 'vue';
import TheNavbar from './components/layout/TheNavbar.vue';
import TheSidebar from './components/layout/TheSidebar.vue';
import TheFooter from './components/layout/TheFooter.vue';

import { useWindowSize } from './store/window-size';
const windowSize = useWindowSize();

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

const handleResize = () => {
  windowSize.handleResize(window.innerWidth);
};
</script>

<template>
  <div class="h-screen flex flex-col justify-between">
    <!-- Sidebar -->
    <TheSidebar />

    <!-- Main Content -->
    <div class="pl-0 md:pl-22 lg:pl-26 pt-32 md:pt-18 lg:pt-22 w-full">
      <!-- Navbar -->
      <TheNavbar />

      <!-- Page Content -->
      <div class="px-4 py-3 md:p-6">
        <RouterView />
      </div>
    </div>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<style scoped></style>