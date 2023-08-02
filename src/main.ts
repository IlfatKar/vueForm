import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { App } from '@/app'
import router from '@/app/router'
import '@/shared/config/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
