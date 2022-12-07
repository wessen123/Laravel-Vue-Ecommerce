import { createApp } from 'vue'
import './index.css'

import router from './router'
import App from './App.vue'

import store from './store'
/*import router from './router'
import currencyUSD from './filters/currency.js' */




createApp(App)
.use(store)
.use(router)
.mount('#app')
