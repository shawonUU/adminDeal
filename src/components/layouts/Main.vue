<template>
        <Header></Header>
          <router-view></router-view>
         <Footer></Footer>
  </template>
  
  <script>
   import axios from "axios";
import Header from "./Header.vue";
import HomeBanner from "./HomeBanner.vue";
import Footer from "./Footer.vue";
 export default {
   components:{Header,HomeBanner,Footer}
     
 }
  </script>
  
  <style scoped>
  
  </style>
  