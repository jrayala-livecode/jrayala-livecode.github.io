import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index';

import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/main.css';

const app = createApp(App)

app.use(router);
app.use(store);

app.mount('#app')
