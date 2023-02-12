
import { createApp } from "vue";
import App from "./App.vue";
// import SellerLayout from "./components/pages/sellers/SellerLayout.vue"
import router from './Router';
import { createPinia } from 'pinia';
import globalData from '../global';
// import the package
import VueAwesomePaginate from "vue-awesome-paginate";
import mitt from 'mitt';
import VueCookies from 'vue-cookies';
// import the necessary css file
import "vue-awesome-paginate/dist/style.css";
const pinia = createPinia()
var app = createApp(App);
// var app2 = createApp(SellerLayout);
const emitter = mitt();
app.config.globalProperties.global = globalData;
app.config.globalProperties.rootDomain ='https://localhost/backend/';
app.config.globalProperties.selfDomain ='http://192.168.5.17:8080/';
app.config.globalProperties.emitter = emitter;
app.use(router);
app.use(pinia);
app.use(VueCookies);
app.use(VueAwesomePaginate);
app.mount("#app");
// app2.mount("#app2");