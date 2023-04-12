import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index';

import './assets/fontawesome-all.min.css';
import './assets/main.css';

const app = createApp(App)

app.use(router);
app.use(store);

app.mount('#app')
