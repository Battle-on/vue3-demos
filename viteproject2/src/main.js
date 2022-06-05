import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index.js'
console.log(App)
createApp(App)
    .use(router)
    .mount('#app')
