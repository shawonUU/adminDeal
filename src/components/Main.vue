<template>
        <Header></Header>
          <router-view :key="$route.fullPath"></router-view>
          <!-- <router-view name="second"></router-view> -->
         <Footer></Footer>
</template>
  
  <script>
import axios from "axios";
import Header from "./layouts/Header.vue";
import HomeBanner from "./HomePageComponent/HomeBanner.vue";
import Footer from "./layouts//Footer.vue";

 export default {
  components:{Header,HomeBanner,Footer},
  // data() {
  //   return {
  //     activityTimestamps: []
  //   };
  // },
  // created(){
  //   let lastTime = localStorage.getItem("lastActivity");
  //   alert(lastTime);
  // },
  // destroyed() {
  //   localStorage.setItem("lastActivity","55555555");
  //   alert("The component has been destroyed");
  // }
};

  </script>
  
  <style scoped>
  
  </style>
  