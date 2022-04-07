import {App, createApp} from 'vue'
import { initComponents } from './initComponents'

const app: App<Element> = createApp({})

initComponents(app)

app.mount('#app')
