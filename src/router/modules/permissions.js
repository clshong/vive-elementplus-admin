import Layout from '@/layout/index.vue';

const routes = {
  path: '/permission',
  name: 'permissions',
  component: Layout,
  redirect: '/permission/index',
  meta: {
    title: 'permission',
    icon: 'ep-lock',
    order: 99
  },
  children: [
    {
      path: 'index',
      name: 'buttonPermission',
      component: () =>
        import(/* webpackChunkName: "permission" */ '@/views/permissions-page/accountDetail.vue'),
      meta: {
        title: 'permission',
        affix: true
      }
    }
  ]
};

export default routes;
