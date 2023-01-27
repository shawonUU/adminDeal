<template>
    <section class="mb-4">
      <div class="container">
       <div class="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
         <div class="d-flex mb-3 align-items-baseline border-bottom sectionmenu">
           <h3 class="h5 fw-700 mb-0">
             <span class="border-bottom border-primary border-width-2 pb-3 d-inline-block" style="font-size:16px;color:black">Best Selling Products</span>
           </h3>
           <a href="javascript:void(0)" class="ml-auto mr-0 btn btn-primary btn-sm shadow-md">TOP 20</a>
         </div>
         <div class="aiz-carousel gutters-10 half-outside-arrow" data-items="6" data-xl-items="5" data-lg-items="4" data-md-items="3" data-sm-items="2" data-xs-items="2" data-arrows='true'>
          <ProductBox :products="bestSellingProducts"></ProductBox>
         </div>
       </div>
     </div>
      </section>
  
  </template>
  
  <script>
  import ProductBox from "./product_box.vue";
  import axios from "axios";
  export default {
    data(){
      return{
        bestSellingProducts:[],
        
      }
    },
    components: {
      ProductBox
    },
    mounted(){
      this.getBestSellingProducts(this.rootDomain);
    },
    methods: {
        getBestSellingProducts(rootDomain){
            axios.get(rootDomain+'vue/v3/products/best-seller')
            .then((response)=>{
                this.bestSellingProducts = response.data.data;
            })
      },
    }
  }
  </script>
  
  <style>
  .swiper-button-next:after, .swiper-button-prev:after {
      background: #2eb2ff00!important;
      font-family: swiper-icons;
      font-size: 20px!important;
      text-transform: none!important;
      letter-spacing: 0;
      font-variant: initial;
      line-height: 1;
      color: #000!important;
  }
  </style>