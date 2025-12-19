import { createApp } from 'vue'
import App from './app/App.vue'
import router from './app/router'

// Import styles
import './styles/base.css'
import './styles/animations.css'
import './styles/layout.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
