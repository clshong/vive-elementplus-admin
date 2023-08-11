import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import store from '@/store'


import layout from '@/layout/index.vue'
// import permissions from './modules/permissions'
// import third from './modules/third'
// import cssAnimation from './modules/cssAnimation'



/**
* 私有路由表
*/
export var privateRoutes = [
  // permissions,
  // third,
  // cssAnimation,
]
/**
* 公开路由表
*/
export var publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    // 注意：带有路径“/”的记录中的组件“默认”是一个不返回 Promise 的函数
    component: layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '首页', icon: 'home', affix: true },//affix=true,tagViews右侧没有关闭按钮
        hidden: false,//true不显示在侧边栏
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404.vue')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401.vue')
      }
    ]
  },
]


/**
* 初始化路由表
*/
export function resetRouter() {
  if (store.getters.hasRoles) {
    const menus = store.getters.roles
    menus.forEach(menu => {
      let url = menu.url
      let i = url.lastIndexOf('/')
      let name = url.substring(i + 1, url.length)
      router.removeRoute(name)
    })
  }

}

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes

})

export default router

