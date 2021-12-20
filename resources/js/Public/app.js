import Vue from 'vue'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'
import enableDarkMode from './Utils/enableDarkMode'
import checkBrowserLanguage from './Utils/checkBrowserLanguage'
import DarkMode from '../Public/components/DarkMode.vue'
import store from '../store'
import CompApi from '@vue/composition-api'
import './imports'

Vue.use(VueSweetalert2)

axios.defaults.headers.get['Content-Type'] = 'application/json'
axios.defaults.headers.get['Cache-Control'] = 'no-cache'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

checkBrowserLanguage()
enableDarkMode()

Vue.component('dark-mode', DarkMode)

Vue.use(CompApi)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store
})
