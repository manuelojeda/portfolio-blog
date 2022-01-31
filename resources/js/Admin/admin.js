import { createApp } from 'vue'
import initComponents from './imports'

const adminApp = createApp({})

initComponents(adminApp)

adminApp.mount('#admin')
