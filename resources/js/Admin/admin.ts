import Vue from 'vue'
import CompApi from '@vue/composition-api'

import './plugins/Bootstrap'
import './imports'

Vue.use(CompApi)

const admin = new Vue({
})
  .$mount('#admin')
