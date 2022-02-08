import App from './components/App.vue'
import Blogs from './components/Blog/Index.vue'
import Blog from './components/Blog.vue'
import errorNotFound from './components/404.vue'

function initializeComponents(app) {
  app.component('app', App)
  app.component('blogs', Blogs)
  app.component('blog', Blog)
  app.component('error-404', errorNotFound)
}

export default initializeComponents
