import './assets/main.css'
import './assets/formkit.css'

import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig(config))
app.mount('#app')
