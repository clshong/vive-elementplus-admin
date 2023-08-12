// index.vue
<template>
  <div>
    <el-scrollbar>
      <el-menu
        class="shadow bg-white/75 dark:bg-black/75 backdrop-blur-sm"
        :class="sidebar.collapse"
        :collapse="sidebar.collapse"
        router
      >
        <SidebarItem :item="item" v-for="item in items" :key="item.name" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import router from '@/router/index.js';
import { useSidebarStore } from '@/store/modules/sidebar.js';
import { useUserStore } from '@/store/modules/user.js';
import SidebarItem from './SidebarItem.vue';

const sidebar = useSidebarStore();
const useUser = useUserStore();

let items = [];

if (import.meta.env.VITE_PERMISSION_MODE === 'CONSTANT') {
  items = router.options.routes.filter(r => !r.hidden);
} else {
  items = useUser.menuRoutes;
}

items = items.sort((a, b) => (a?.meta?.order || 0) - (b?.meta?.order || 0));
</script>
<style scoped>
.el-menu {
  height: 100vh;
}
</style>
