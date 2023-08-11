<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :collapse="!collapse"
    :default-active="activeMenu"
    :uniqueOpened="true"
    text-color="#fff"
    active-text-color="#ccc"
    :unique-opened="true"
    router
  >
    <sidebar-item v-for="item in routes" :key="item.path" :route="item"></sidebar-item>
  </el-menu>
</template>
<script setup>
import { computed, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { filterRouters, generateMenus } from '@/utils/route';
import SidebarItem from './SidebarItem.vue';

const collapse = ref(false);

const router = useRouter();
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes());
  return generateMenus(filterRoutes);
});

// 计算高亮 menu 的方法
const route = useRoute();
const activeMenu = computed(() => {
  const { path } = route;
  return path;
});
</script>
