import { createApp } from "vue";
import App from "./App.vue";
import router from './Router'
import { createPinia } from 'pinia'
const pinia = createPinia()
var app = createApp(App);
app.config.globalProperties.rootDomain ='https://localhost/admin/updated';
app.use(router);
app.use(pinia);
app.mount("#app");
 