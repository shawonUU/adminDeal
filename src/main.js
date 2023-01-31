
import { createApp } from "vue";
import App from "./App.vue";
import router from './Router';
import { createPinia } from 'pinia';
import globalData from '../global';
// import the package
import VueAwesomePaginate from "vue-awesome-paginate";
import mitt from 'mitt';
import VueCookies from 'vue-cookies'
// import the necessary css file
import "vue-awesome-paginate/dist/style.css";
const pinia = createPinia()
var app = createApp(App);
const emitter = mitt();
app.config.globalProperties.global = globalData;
app.config.globalProperties.rootDomain ='https://localhost/backend/';
<<<<<<< HEAD
app.config.globalProperties.selfDomain ='http://localhost:8080/';
=======
app.config.globalProperties.selfDomain ='http://192.168.5.17:8080/';
>>>>>>> 832fe12051a921a9d31e4f52060d720566021d23
app.config.globalProperties.emitter = emitter;
app.use(router);
app.use(pinia);
app.use(VueCookies);
app.use(VueAwesomePaginate);
app.mount("#app");