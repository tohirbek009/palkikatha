import { defineStore } from 'pinia';

export const useWindowSize = defineStore({
  id: 'window-size',
  state: () => ({
    screenWidth: window.innerWidth
  }),
  actions: {
    handleResize(windowInnerWidth) {
      this.screenWidth = windowInnerWidth;
      console.log("Size changed: ", this.screenWidth);
    }
  }
});