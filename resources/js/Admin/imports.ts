import Vue from 'vue'

import AdminLayout from '@/layouts/Admin.vue'
import AdminDashboard from './pages/Dashboard.vue'
import AdminBlogIndex from './pages/Blog/Index.vue'
import AdminBlogCreate from './pages/Blog/Create.vue'
import AdminBlogEdit from './pages/Blog/Edit.vue'

Vue.component('admin-layout', AdminLayout)
Vue.component('admin-dashboard', AdminDashboard)
Vue.component('admin-blog-index', AdminBlogIndex)
Vue.component('admin-blog-edit', AdminBlogEdit)
Vue.component('admin-blog-create', AdminBlogCreate)
