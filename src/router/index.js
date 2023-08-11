import { createRouter, createWebHashHistory } from 'vue-router';

export const publicRouters = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/dashboard',

    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '首页', icon: 'shouye', affix: true, sort: '99.99' }
      }
    ],
    meta: {
      sort: '99'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: '1'
    }
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRouters
});

export default router;
