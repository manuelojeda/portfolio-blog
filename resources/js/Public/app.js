import { createApp } from 'vue'
import axios from 'axios'
import { createPinia } from 'pinia'
// import BootstrapVue from 'bootstrap-vue'
// import VueSweetalert2 from 'vue-sweetalert2'
import enableDarkMode from './Utils/enableDarkMode'
// import checkBrowserLanguage from './Utils/checkBrowserLanguage'
// import DarkMode from '../Public/components/DarkMode.vue'
// import store from '../store'
// import './imports'

// Vue.use(VueSweetalert2)

axios.defaults.headers.get['Content-Type'] = 'application/json'
axios.defaults.headers.get['Cache-Control'] = 'no-cache'

// Vue.config.productionTip = false
// Vue.use(BootstrapVue)

// checkBrowserLanguage()
enableDarkMode()

// Vue.component('dark-mode', DarkMode)

import App from './components/App.vue'
import Blogs from './components/Blog/Index.vue'
import Blog from './components/Blog.vue'

const app = createApp({})

app.use(createPinia())

app.component('app', App)
app.component('blogs', Blogs)
app.component('blog', Blog)

app.mount('#app')

