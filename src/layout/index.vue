<template>
  <div class="app-wrapper">
    <!-- 左侧menu -->
    <Sidebar
      id="guide-sidebar"
      class="sidebar"
      :class="{ 'sidebar-container': !isCollapse }"
    ></Sidebar>
    <div class="main-container">
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
import { ref, provide } from 'vue';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar/index.vue';
import TagsView from './components/TagsView/index.vue';
import AppMain from './components/AppMain.vue';

const isCollapse = ref(false);
provide('isCollapse', isCollapse);
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
  background: #24b9eb;
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
.collapse-btn {
  cursor: pointer;
  margin-left: 16px;
  transition: all 0.3s;
  &.row {
    transform: rotate(90deg);
  }
}
</style>
