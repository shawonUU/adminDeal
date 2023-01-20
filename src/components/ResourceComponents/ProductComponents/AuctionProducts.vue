<template>
    <section class="mb-4">
      <div class="container">
       <div class="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
         <div class="d-flex mb-3 align-items-baseline border-bottom sectionmenu">
           <h3 class="h5 fw-700 mb-0">
             <span class="border-bottom border-primary border-width-2 pb-3 d-inline-block" style="font-size:16px;color:black">Auction Products</span>
           </h3>
           <router-link :to="{name:'auctionProducts'}" class="ml-auto mr-0 btn btn-primary btn-sm shadow-md">View All</router-link>
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
          <swiper-slide v-for="(product, index) in auctionProducts" :key="index">  
              <div class="carousel-box">
             <div class="aiz-card-box  rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
               <span class="badge-custom">OFF <span class="box ml-1 mr-0">{{ product.discount }}</span>
               </span>
               <div class="position-relative">
                 <a  style="cursor:pointer" @click="productDetails(product.slug)">
                   <img src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" :data-src="product.thumbnail_image" class="img-fit lazyload mx-auto h-140px h-md-210px"  :alt="product.name" >
                 </a>
                 <div class="absolute-top-right aiz-p-hov-icon">
                   <a href="javascript:void(0)" onclick="addToWishList(5931)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                     <i class="la la-heart-o"></i>
                   </a>
                   <a href="javascript:void(0)" onclick="addToCompare(5931)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                     <i class="las la-sync"></i>
                   </a>
                   <a href="javascript:void(0)" onclick="showAddToCartModal(5931)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                     <i class="las la-shopping-cart"></i>
                   </a>
                 </div>
               </div>
               <div class="p-md-3 p-2 text-left">
                 <div class="fs-15">
                   <del class="fw-600 opacity-50 mr-1">{{ product.stroked_price }}</del>
                   <span class="fw-700 text-primary">{{ product.main_price }} <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-90%</span>
                   </span>
                 </div>
                    <div class="rating rating-sm mt-1">
                      <template v-for="index in 5" :key="index">
                          <i v-if="index<=product.rating" class = 'las la-star active'></i>
                          <i v-else class = 'las la-star'></i>
                      </template>
                      ({{ product.rating }})
                    </div>
                 <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
                  <a style="cursor:pointer" @click="productDetails(product.slug)"  :to="{name:'singleProduct'}" class="d-block text-reset">{{ product.name}}</a>
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
import { ratingGenerator } from '@/HelpersFunction/Helpers';
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
        auctionProducts:[],
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
        this.getAuctiontProducts(this.rootDomain);
    },
    mounted(){
   
    },
    methods: {
      getAuctiontProducts(rootDomain){
            axios.get(rootDomain+'vue/v3/products/all_auction_products')
            .then((response)=>{
                this.auctionProducts = response.data.data;
            })
      },
      getRatings(rating,maxRating=5){
           return ratingGenerator(rating,maxRating)
        },
      productDetails(slug){
      this.$router.push({
        name: "AuctionProductsDetails",
        params: {
          slug: slug
        }
      });
  },
    },
   
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