import Layout from '@/layout/index.vue';

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Layout,
    redirect: '/dashboard/workbench',
    meta: {
      title: 'dashboard',
      icon: 'House',
      order: 1
    },

    children: [
      {
        path: 'workbench',
        name: 'workbench',
        meta: {
          title: 'workbench',
          affix: false
        },
        component: () => import('@/views/dashboard/index.vue')
      }
    ]
  }
];

export default routes;
