import Vue from 'vue'
import AdminLayout from '../layouts/Admin.vue'
import AdminDashboard from '../pages/admin/Dashboard.vue'
import AdminBlogIndex from '../pages/admin/Blog/Index.vue'
import AdminBlogCreate from '../pages/admin/Blog/Create.vue'
import AdminBlogEdit from '../pages/admin/Blog/Edit.vue'

Vue.component('admin-layout', AdminLayout)
Vue.component('admin-dashboard', AdminDashboard)
Vue.component('admin-blog-index', AdminBlogIndex)
Vue.component('admin-blog-create', AdminBlogCreate)
Vue.component('admin-blog-edit', AdminBlogEdit)
