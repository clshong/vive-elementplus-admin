import Layout from '@/layout/index.vue';

const routes = {
  path: '/permission',
  name: 'permissions',
  component: Layout,
  redirect: '/permission/index',
  meta: {
    title: '权限管理',
    icon: 'House',
    order: 99
  },
  children: [
    {
      path: 'index',
      name: 'buttonPermission',
      component: () =>
        import(/* webpackChunkName: "permission" */ '@/views/permissions-page/accountDetail.vue'),
      meta: {
        title: '按钮权限',
        affix: true
      }
    }
  ]
};

export default routes;
