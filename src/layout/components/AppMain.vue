<template>
  <div class="main-wrap">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" appea mode="default">
        <keep-alive :include="tagsViewStore.cachedViews">
          <component :is="Component" :key="route.path" class="app-main" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { useTagsViewStore } from '@/store/modules/tagView.js';
const tagsViewStore = useTagsViewStore();

console.log(tagsViewStore.cachedViews.toString());
</script>
<style lang="scss">
.main-wrap {
  flex: 1;
  overflow: hidden;
  position: relative;
  background: #f5f5f5;
}
.app-main {
  position: absolute;
  padding: 20px 20px 20px 20px;
  top: 20px;
  bottom: 20px;
  left: 20px;
  right: 20px;
  overflow: auto;
  background: #fff;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(60px);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(-60px);
}
.fade-transform-enter-active,
.fade-transform-leave-active {
  transition: all 0.5s;
}
</style>
