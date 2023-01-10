<template>
        <Header></Header>
          <router-view></router-view>
         <Footer></Footer>
  </template>
  
  <script>
   import axios from "axios";
import Header from "./layouts/Header.vue";
import HomeBanner from "./HomePageComponent/HomeBanner.vue";
import Footer from "./layouts//Footer.vue";
 export default {
   components:{Header,HomeBanner,Footer}
     
 }
  </script>
  
  <style scoped>
  
  </style>
  