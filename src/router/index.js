import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/home/Home.vue';
import DiscussionPage from '../views/DiscussionPage.vue';
import AdvicePage from '../views/AdvicePage.vue';
import StoriesPage from '../views/StoriesPage.vue';
import FAQsPage from '../views/FAQsPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/discussion',
      name: 'discussion',
      component: DiscussionPage
    },
    {
      path: '/advice',
      name: 'advice',
      component: AdvicePage
    },
    {
      path: '/stories',
      name: 'stories',
      component: StoriesPage
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQsPage
    }
  ]
})

export default router;