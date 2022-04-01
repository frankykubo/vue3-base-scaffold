import { RouteRecordRaw } from 'vue-router';
import { mergeDeep } from '@/helpers/objects/manipulation';

export const route_index = {
  home: {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      test: false,
    },
  },
  about: {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      test: false,
    },
  },
};

const routes_arr = Object.values(mergeDeep({}, route_index)).map(elm => {
  // @ts-ignore
  if (elm.children) {
    // @ts-ignore
    elm.children = Object.values(elm.children);
  }
  return elm;
});

// @ts-ignore
export const routes: Array<RouteRecordRaw> = routes_arr;
