import { createRouter, createWebHashHistory } from 'vue-router';

const modules = import.meta.glob('./modules/**/*.js', { eager: true });

let routeModuleList = [];

// 获取模块路由
Object.values(modules).forEach(key => {
  const mod = key.default || [];
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/dashboard',
    hidden: true,
    meta: {
      title: 'home'
    }
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    meta: {
      title: 'signIn'
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
  },
  {
    path: '/403',
    name: '403',
    hidden: true,
    meta: {
      title: '没有权限'
    },
    component: () => import(/* webpackChunkName: "400" */ '@/views/error-page/401.vue')
  }
];
const lastRoutes = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    hidden: true,
    meta: {
      title: '404'
    },
    component: () => import(/* webpackChunkName: "400" */ '@/views/error-page/404.vue')
  }
];

let routes = constantRoutes;

// 前端固定路由模式
if (import.meta.env.VITE_PERMISSION_MODE === 'CONSTANT') {
  routes = [...routeModuleList, ...constantRoutes];
}

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
export { constantRoutes, routeModuleList, lastRoutes };
