import Layout from '@/layout/index.vue';

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Layout,
    redirect: '/dashboard/workbench',
    meta: {
      title: '工作台',
      icon: 'House',
      order: 1
    },

    children: [
      {
        path: 'workbench',
        name: 'workbench',
        meta: {
          title: '欢迎页',
          affix: false,
          priex: true
        },
        component: () => import('@/views/dashboard/index.vue')
      }
    ]
  }
];

export default routes;
