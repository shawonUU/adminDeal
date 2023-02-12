<template>
        <Header v-if="headerFooter"></Header>
        <router-view :key="$route.fullPath"></router-view>
          <!-- <router-view name="second"></router-view> -->
         <Footer v-if="headerFooter"></Footer>
</template>
  
<script>
import axios from "axios";
import Header from "./layouts/Header.vue";
import HomeBanner from "./HomePageComponent/HomeBanner.vue";
import Footer from "./layouts//Footer.vue";

 export default {
  components:{Header,HomeBanner,Footer},
  data() {
    return {
      auth:{
        isAuthenticated: false,
        user: {},
      },
      headerFooter:true
    };
  },
  created(){    
    var user = localStorage.getItem("user");
      if(user !== null){
        user = JSON.parse(user);
        this.auth.isAuthenticated = true;
        this.auth.user = user;
      }
  },
  mounted(){
    this.emitter.on("headerFooter", message => {
        this.headerFooter= message;
    });
  },
 
};
  </script>
  
  <style scoped>
  
  </style>
  