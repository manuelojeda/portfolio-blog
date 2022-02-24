import { createApp } from 'vue'
import axios from 'axios'
import { createPinia } from 'pinia'
import enableDarkMode from './Utils/enableDarkMode'
import initializeComponents from './imports'

axios.defaults.headers.get['Content-Type'] = 'application/json'
axios.defaults.headers.get['Cache-Control'] = 'no-cache'

enableDarkMode()

const app = createApp({})

app.use(createPinia())

initializeComponents(app)

app.mount('#app')

