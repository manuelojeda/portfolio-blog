import Vue from 'vue'
import VueCompositionAPI  from '@vue/composition-api'

Vue.use(VueCompositionAPI)

import './plugins/Bootstrap'
import './imports'

new Vue({
})
  .$mount('#admin')
