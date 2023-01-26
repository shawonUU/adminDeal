
import { createApp } from "vue";
import App from "./App.vue";
import router from './Router';
import { createPinia } from 'pinia';
// import the package
import VueAwesomePaginate from "vue-awesome-paginate";
import mitt from 'mitt';
// import the necessary css file
import "vue-awesome-paginate/dist/style.css";
const pinia = createPinia()
var app = createApp(App);
const emitter = mitt();
app.config.globalProperties.rootDomain ='https://localhost/backend/';
app.config.globalProperties.emitter = emitter;
app.use(router);
app.use(pinia);
app.use(VueAwesomePaginate);
app.mount("#app");