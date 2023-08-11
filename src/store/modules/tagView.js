import { defineStore } from 'pinia'

export const useTagsViewStore = defineStore('tagsView', {
  state: () => ({
    visitedViews: [],
    cachedViews: [],
  }),
  actions: {
    addView(view) {
      this.addVisitedView(view)
      this.addCachedView(view)
    },
    addVisitedView(view) {
      if (this.visitedViews.some((v) => v.path === view.path)) return
      this.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta.title || 'no-name',
        })
      )
    },
    addCachedView(view) {
      if (this.cachedViews.includes(view.name)) return
      if (view.meta.cache) {
        this.cachedViews.push(view.name)
      }
    },
    delView(view) {
      const index = this.visitedViews.findIndex((v) => v.path === view.path)
      if (index > -1) {
        this.visitedViews.splice(index, 1)
      }
      const index2 = this.cachedViews.findIndex((v) => v === view.name)
      if (index2 > -1) {
        this.cachedViews.splice(index2, 1)
      }
    },
    // 二次跳转一个页面，路由信息会发生变化，需要更新
    updateVisitedView(view) {
      const index = this.visitedViews.findIndex((v) => v.path === view.path)
      if (index > -1) {
        this.visitedViews[index] = Object.assign({}, view)
      }
    },
  },
})
