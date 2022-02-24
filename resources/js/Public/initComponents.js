import BlogIndex from './views/BlogIndex.vue'
import BlogEntry from './views/BlogEntry.vue'

export const initComponents = (app) => {
  app.component('blog-index', BlogIndex)
  app.component('blog-entry', BlogEntry)
}
