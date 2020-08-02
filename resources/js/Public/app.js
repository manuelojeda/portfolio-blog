import Vue from 'vue'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'
import VueDisqus from 'vue-disqus'
import store from '../store'
import './imports'

Vue.use(VueSweetalert2)

axios.defaults.headers.get['Content-Type'] = 'application/json'
axios.defaults.headers.get['Cache-Control'] = 'no-cache'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

if (navigator.languages[1] === 'es') {
  store.commit('updateLanguage', 'es')
} else {
  store.commit('updateLanguage', 'en')
}

Vue.use(VueDisqus, {
  shortname: process.env.MIX_DISQUS_WEBSITE
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store
})
