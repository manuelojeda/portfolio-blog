import {App} from "vue";
import BlogIndex from './views/BlogIndex.vue'
import BlogEntry from './views/BlogEntry.vue'
import Error404 from './views/404.vue'

export const initComponents = (app: App<Element>): void => {
  app.component('blog-index', (BlogIndex as any))
  app.component('blog-entry', (BlogEntry as any))
  app.component('error-404', (Error404 as any))
}
