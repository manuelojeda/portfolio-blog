import { createApp } from 'vue'
import { initComponents } from './initComponents'

const app = createApp({})

initComponents(app)

app.mount('#app')
