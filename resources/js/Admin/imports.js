import AdminDashboard from './pages/Dashboard.vue'
import AdminLayout from '@/layouts/Admin.vue'
import AdminBlogIndex from './pages/Blog/Index.vue'
import AdminBlogCreate from './pages/Blog/Create.vue'
import AdminBlogEdit from './pages/Blog/Edit.vue'

function initComponents(app) {
  app.component('admin-dashboard', AdminDashboard)
  app.component('admin-layout', AdminLayout)
  app.component('admin-blog-index', AdminBlogIndex)
  app.component('admin-blog-create', AdminBlogCreate)
  app.component('admin-blog-edit', AdminBlogEdit)
}

export default initComponents
