<template>
  <div class="navbar-wrap">
    <div class="navbar-lf">
      <div class="lf-btn">
        <el-icon @click="sidebar.handleCollapse">
          <component :is="sidebar.collapse ? 'Fold' : 'Expand'"></component>
        </el-icon>
      </div>
      <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item
          v-for="(item, index) in route.matched"
          :key="index"
          v-show="item.meta.title"
          :to="item.path"
        >
          <span style="margin: 0 3px">{{ item.meta.title }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="navbar-rg">
      <div class="rg-btn">
        <el-button size="small" icon="Refresh" circle @click="updateRefsh" />
        <el-button
          size="small"
          icon="FullScreen"
          circle
          @click="fullScreen"
          style="margin-right: 10px"
        />
        <el-badge :value="50" :max="99">
          <el-button size="small" icon="Bell" circle />
        </el-badge>
      </div>
      <span style="width: 24px; height: 24px; margin: 0 20px"> admin </span>
      <el-dropdown trigger="click">
        <img
          src="@/assets/avatar-ea67286d.gif"
          style="width: 24px; height: 24px; margin: 0 10px; border-radius: 50%"
        />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useSidebarStore } from '@/store/modules/sidebar.js';
const sidebar = useSidebarStore();

const route = useRoute();
const rersh = ref(false);

//刷新
const updateRefsh = () => {
  rersh.value = !rersh.value;
};
// 全屏
const fullScreen = () => {
  // DOM对象的一个属性，可以用来判断是否全屏
  const full = document.fullscreenElement;
  if (!full) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};
</script>
<style scoped lang="scss">
.navbar-wrap {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  display: flex;
  border-bottom: 1px solid #ddd;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
  .navbar-lf {
    display: flex;
    align-items: center;
    .lf-btn {
      margin: 0 20px;
      font-size: 16px;
    }
  }
  .navbar-rg {
    display: flex;
    align-items: center;
    justify-content: center;
    .rg-btn {
      width: 120px;
      color: red;
    }
    .dark-mode {
      margin-right: 20px;
    }
    .avatar-container {
      margin-right: 20px;
      .avatar-wrapper {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
  }
}
</style>
