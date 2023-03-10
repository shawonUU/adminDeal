
import { createApp } from "vue";
import App from "./App.vue";
import AddToCartModal from './components/layouts/Modal/AddToCartModal.vue';
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

import Vue3Geolocation from 'vue3-geolocation';

const pinia = createPinia();
var app = createApp(App);
const emitter = mitt();
app.config.globalProperties.global = globalData;
app.config.globalProperties.rootDomain ='https://localhost/backend/';
app.config.globalProperties.selfDomain ='http://192.168.0.105:8080/';
app.config.globalProperties.emitter = emitter;

app.use(Vue3Geolocation);

app.use(router);
app.use(pinia);
app.use(VueCookies);
app.use(VueAwesomePaginate);
app.component('AddToCartModal',AddToCartModal);
app.mount("#app");