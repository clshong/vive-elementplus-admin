import { createRouter, createWebHashHistory } from 'vue-router';
import layout from '@/layout/index.vue';

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/components/HelloWorld.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
