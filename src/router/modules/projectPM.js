import Layout from '@/layout/index.vue';

const routes = {
  path: '/projectpm',
  name: 'projectpm',
  component: Layout,
  redirect: '/permission/iteminfo',
  meta: {
    title: '项目管理',
    icon: 'House',
    order: 99
  },
  children: [
    {
      path: 'iteminfo',
      name: 'iteminfo',
      component: () =>
        import(/* webpackChunkName: "permission" */ '@/views/projectPm/itemInfo/Index.vue.vue'),
      meta: {
        title: '项目信息库',
        affix: true
      }
    },
    {
      path: 'Server',
      name: 'itemServer',
      component: () =>
        import(/* webpackChunkName: "permission" */ '@/views/projectPm/itemServer/Index.vue'),
      meta: {
        title: '项目储备库',
        affix: true
      }
    }
  ]
};

export default routes;
