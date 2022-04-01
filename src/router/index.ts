import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router/routes';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes,
});

export default router;
