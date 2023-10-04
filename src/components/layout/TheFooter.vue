<script setup>
import { footerItems, socialLinks } from '../../data/footer';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>

<template>
  <div class="flex mt-3 z-20">
    <div class="hidden flex-shrink-0 w-22 lg:w-26 bg-[#100738] md:flex flex-col items-center">
      <img src="/assets/img/graphics/footer-flower.png" alt="" class="mb-12 -mt-3">
      <div class="flex flex-col items-center justify-between space-y-7 mb-4">
        <div class="text-grayLightest">Follow us</div>
        <RouterLink v-for="{ icon, to } in socialLinks" :key="icon" :to="to" class="text-white">
          <i :class="['text-xl', icon]"></i>
        </RouterLink>
      </div>
    </div>
    <div class="flex-grow bg-footerBgDark pt-5 lg:pt-10">
      <div class="flex flex-col items-center px-8 mb-5 lg:hidden">
        <RouterLink to="/">
          <BaseLogo type="dark" class="mb-2" />
        </RouterLink>
        <div class="text-gray">2023 Palkikatha - All rights reserved</div>
      </div>

      <div class="w-full md:hidden px-4 my-8">
        <Disclosure 
          v-for="({ name, children }, index) in footerItems" :key="name"
          v-slot="{ open }"
        >
          <DisclosureButton 
            class="flex items-center justify-between w-full py-4 border-t border-gray font-extrabold uppercase outline-none"
            :class="open ? 'text-secondary' : 'text-white'"
          >
            <span>{{ name }}</span>
            <i :class="open ? 'rotate-0 transform' : 'rotate-180'" class="icon-caret-up text-[8px]"></i>
          </DisclosureButton>
          <DisclosurePanel class="text-white pt-2 pb-6">
            <div class="flex flex-col space-y-3">
              <RouterLink v-for="{ name, to } in children" :key="name" :to="to" class="no-underline hover:underline w-fit">{{ name }}</RouterLink>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure v-slot="{ open }">
          <DisclosureButton 
            class="flex items-center justify-between w-full py-4 border-gray font-extrabold uppercase outline-none"
            :class="open ? 'text-secondary border-t border-b-0' : 'text-white border-t border-b'"
          >
            <span>newsletter</span>
            <i :class="open ? 'rotate-0 transform' : 'rotate-180'" class="icon-caret-up text-[8px]"></i>
          </DisclosureButton>
          <DisclosurePanel class="text-white py-3 border-b border-gray">
            <div class="flex flex-col space-y-4">
              <div class="text-sm text-white">Sign up for getting latest stories and article in your inbox</div>
              <input type="email" placeholder="E-mail"
                class="border focus:border-2 border-gray outline-none bg-[#22174A] p-4 rounded-xl">
              <BaseButton text="Subscribe Now" color="secondary" size="large" class="w-fit" />
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
      <div class="hidden md:grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 pb-20 px-8">
        <RouterLink to="/" class="hidden lg:flex">
          <BaseLogo type="dark" class="mb-auto" />
        </RouterLink>
        <div v-for="({ name, children }, index) in footerItems" :key="name" :class="[{ 'mt-6 md:mt-0': index !== 0 }]">
          <div class="font-bold uppercase text-gray">{{ name }}</div>
          <div class="flex flex-col space-y-3 mt-3 md:mt-6">
            <RouterLink v-for="{ name, to } in children" :key="name" :to="to" class="text-white no-underline hover:underline w-fit">
              {{ name }}
            </RouterLink>
          </div>
        </div>
        <div class="mt-6 md:0">
          <div class="font-bold uppercase text-gray">newsletter</div>
          <div class="flex flex-col space-y-4 md:space-y-3 mt-3 md:mt-6">
            <div class="text-sm text-white">Sign up for getting latest stories and article in your inbox</div>
            <input type="email" placeholder="E-mail"
              class="border focus:border-2 border-gray outline-none bg-[#22174A] p-4 rounded-xl text-white">
            <BaseButton text="Subscribe Now" color="secondary" size="large" class="w-fit" />
          </div>
        </div>
      </div>

      <!-- Social Linkd For Mobile Responsive -->
      <div class="py-10 md:hidden">
        <div class="flex items-center justify-center space-x-6 mb-5">
          <RouterLink v-for="{ icon, to } in socialLinks" :key="icon" :to="to" class="text-white">
            <i :class="['text-3xl', icon]"></i>
          </RouterLink>
        </div>
        <div class="flex space-x-2 items-center justify-center text-white">
          <a href="#" class="no-underline hover:underline">Terms & Contions</a>
          <div class="w-0.5 h-3 bg-gray"></div>
          <a href="#" class="no-underline hover:underline">Privacy Policy</a>
        </div>
      </div>

      <div class="hidden md:flex justify-between border-t border-gray py-4 px-8">
        <div class="text-gray">2023 Palkikatha - All rights reserved</div>
        <div class="flex space-x-2 items-center text-white">
          <a href="#" class="no-underline hover:underline">Terms & Contions</a>
          <div class="w-0.5 h-3 bg-gray"></div>
          <a href="#" class="no-underline hover:underline">Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>
</template>