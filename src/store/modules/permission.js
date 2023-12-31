import { defineStore } from 'pinia';
import { ref } from 'vue';
import { publicRouters } from '@/router';
import { getRolePermission } from '@/api/api';
import { arrToTree } from '@/utils/util';
import Layout from '@/layout/index.vue';
import { menuHideDic, menuCacheDic } from '@/dictionary/menu';

// 给RouteRecordRaw添加_id属性

//双星号是递归解释器遍历文件和文件夹的占位符或指令。它是一个简单的递归通配符，而只有一个星号表示全部没有递归
const modules = import.meta.glob('../views/**/**.vue');
export const usePermissionStore = defineStore(
  'permission',
  () => {
    let routes = ref([]);
    let permissions = ref([]);

    function getAccessRoutes() {
      let result = getRolePermission({});
      console.log(result, 'suohga');
      let { menus, permissions } = result;

      menus.map(item => {
        if (!item.parentId) {
          item.component = Layout;
        } else {
          item.component = modules[`../views${item.component}.vue`];
        }
        item.meta = {
          title: item.title,
          icon: item.icon,
          sort: item.sort,
          cache: item.cache === menuCacheDic.trueValue,
          affix: item.menuType === '2' && item.affix === menuHideDic.trueValue,
          hidden: item.hidden === menuHideDic.trueValue,
          alwaysShow: item.menuType === '1' && item.alwaysShow === menuHideDic.trueValue
        };
      });
      // 递归处理后台返回的路由数据
      const routes = arrToTree({
        list: menus,
        id: '_id',
        pid: 'parentId',
        children: 'children'
      });

      routes.value = publicRouters.concat(routes);
      permissions.value = permissions;
      return routes;
    }

    return {
      routes,
      permissions,
      getAccessRoutes
    };
  },
  {
    persist: true
  }
);
