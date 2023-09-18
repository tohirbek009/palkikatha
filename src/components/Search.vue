<template>
  <div class="search-container flex items-center justify-between rounded-xl h-12 pl-2 pr-4">
    <BaseButton icon="icon-sliders" color="lightest" />
    <input 
      type="text"
      class="w-full h-full ml-3 border-1 border-red-200 outline-none placeholder:text-xs md:placeholder:text-sm"
      placeholder="Search for advices, stories & articles"
    />
    <i class="icon-magnifying-glass text-secondary text-base md:text-xl"></i>
  </div>
</template>

<style>
.search-container {
  border: 1px solid rgba(36, 21, 98, 0.05);
  box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.08);
}
</style>