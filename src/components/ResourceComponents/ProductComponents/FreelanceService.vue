<template>
    <section class="mb-4">
      <div class="container">
       <div class="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
         <div class="d-flex mb-3 align-items-baseline border-bottom sectionmenu">
           <h3 class="h5 fw-700 mb-0">
             <span class="border-bottom border-primary border-width-2 pb-3 d-inline-block" style="font-size:16px;color:black">Freelance Service</span>
           </h3>
           <router-link :to="{name:'AllFreelanceProducts'}" class="ml-auto mr-0 btn btn-primary btn-sm shadow-md">View All</router-link>
         </div>
         <div class="aiz-carousel gutters-10 half-outside-arrow" data-items="6" data-xl-items="5" data-lg-items="4" data-md-items="3" data-sm-items="2" data-xs-items="2" data-arrows='true'>
  
          <swiper
                :slidesPerView="2"
                :spaceBetween="10"
                :breakpoints="{
                  '640': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  '768': {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  '1024': {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }"
                 :navigation="true"
                :modules="modules"
                class="mySwiper"
              >
          <swiper-slide v-for="(product, index) in freelanceServiceProducts" :key="index">  
              <div class="carousel-box">
             <div class="aiz-card-box  rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
               <div class="position-relative">
                 <a  style="cursor:pointer" @click="getJobSlug(product.slug)">
                   <img src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" :data-src="product.thumbnail_image" class="img-fit lazyload mx-auto h-140px h-md-210px"  :alt="product.name" >
                 </a>
               </div>
               <div class="p-md-3 p-2 text-left">
                 <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
                  <a style="cursor:pointer" @click="getJobSlug(product.slug)"  :to="{name:'singleProduct'}" class="d-block text-reset">{{ product.name}}</a>
                 </h3>
                 <!-- <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border"> Cashback : <span class="fw-700 float-right">0</span>
                 </div> -->
               </div>
             </div>
           </div> 
          </swiper-slide>
           
        </swiper>
         
          
         </div>
       </div>
     </div>
      </section>
  
  
  
      
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/free-mode";
  import "swiper/css/pagination";
  import { FreeMode,Navigation } from "swiper";
  import { useProductStore } from "@/Store/Product";
  import { mapState, mapActions} from "pinia";
  import axios from "axios";
  export default {
    data(){
      return{
        freelanceServiceProducts:[],
        modules: [FreeMode,Navigation],
        
      }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
  
    computed:{
   
    },
    created(){
        this.getFreelanceServiceProduct(this.rootDomain);
    },
    mounted(){
   
    },
    methods: {
        getFreelanceServiceProduct(rootDomain){
            axios.get(rootDomain+'vue/v3/jobs')
            .then((response)=>{
                this.freelanceServiceProducts = response.data.data;
            })
      },
      getJobSlug(slug){
        this.$router.push({
        name: "JobDetails",
        params: {
          slug: slug
        }
      });
      }
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