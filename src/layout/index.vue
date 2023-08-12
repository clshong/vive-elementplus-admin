<template>
  <div class="app-wrapper">
    <!-- 左侧menu -->
    <Sidebar
      id="guide-sidebar"
      class="sidebar"
      :class="{ 'sidebar-container': !sidebar.collapse }"
    ></Sidebar>
    <div class="main-container" :class="{ 'sidebar-container': !isCollapse }">
      <div class="fixed-header">
        <!-- 顶部 navbar -->
        <Navbar></Navbar>
        <!-- 标签 -->
        <TagsView></TagsView>
      </div>
      <!-- 内容区 -->
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar/index.vue';
import TagsView from './components/TagsView/index.vue';
import AppMain from './components/AppMain.vue';

import { useSidebarStore } from '@/store/modules/sidebar.js';
const sidebar = useSidebarStore();
</script>
<style lang="scss">
.app-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
}
.sidebar {
  position: relative;
  z-index: 2;
  // background: #24b9eb;
}
.sidebar-container {
  min-width: $base-menu-width;
}
.main-container {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
