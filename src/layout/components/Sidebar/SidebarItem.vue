<template>
  <el-sub-menu
    :index="getPath(parentPath, item.path)"
    v-if="filteredItems && filteredItems.length > 0"
  >
    <template #title>
      <el-icon v-if="level === 0 && item.meta.icon" class="ml-1 mr-1 text-lg">
        <component :is="item.meta.icon"></component>
      </el-icon>

      <span>{{ item.meta.title }}</span>
    </template>
    <SidebarItem
      :item="item1"
      :parent-path="getPath(parentPath, item.path)"
      :level="level + 1"
      v-for="item1 in filteredItems"
    />
  </el-sub-menu>
  <el-menu-item :index="getPath(parentPath, item.path)" v-else>
    <el-icon v-if="level === 0" class="ml-1 mr-1 text-lg">
      <component :is="item.meta.icon"></component>
    </el-icon>
    <template #title>{{ item.meta.title }}</template>
  </el-menu-item>
</template>

<script setup name="SidebarItem">
import { computed } from 'vue';

const props = defineProps({
  item: { type: Object, default: () => {} },
  parentPath: { type: String, default: '' },
  level: { type: Number, default: 0 }
});

const filteredItems = computed(() => {
  if (props.item.children) return props.item.children.filter(val => !val.hidden);
  else return null;
});

function getPath(parentPath, path) {
  if (parentPath) return `${parentPath}/${path}`;
  else return path;
}
</script>
