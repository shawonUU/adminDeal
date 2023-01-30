<template>
<section class="pt-5 mb-4 bg-white">
   <div class="container">
      <div class="row">
         <div class="col-md-6 mx-auto">
            <div class="d-flex justify-content-center">
               <img height="70" class=" lazyloaded" :src="shopDetails.logo" :alt="shopDetails.name">
               <div class="pl-4 text-left">
                  <h1 class="fw-600 h4 mb-0">{{ shopDetails.name }}
                     <span class="ml-2">
                        <i v-if="shopDetails.verified==true" class="fa fa-check-circle" style="color:green"></i>
                        <i v-else class="fa fa-times-circle" style="color:red"></i>
                     </span>
                  </h1>
                  <div class="rating rating-sm mb-1">
                     <i class="las la-star active"></i>
                     <i class="las la-star active"></i>
                     <i class="las la-star active"></i>
                     <i class="las la-star active"></i>
                     <i class="las la-star active"></i>
                  </div>
                  <div class="location opacity-60">{{ shopDetails.address }}</div>
               </div>
            </div>
         </div>
      </div>
      <div class="border-bottom mt-5"></div>
      <div class="row align-items-center">
         <div class="col-lg-6 order-2 order-lg-0">
            <ul class="list-inline mb-0 text-center text-lg-left">
               <li class="list-inline-item ">
                  <a class="text-reset d-inline-block fw-600 fs-15 p-3  border-bottom border-primary border-width-2 " href="https://admindeal.com.bd/shop/Skin-Paradise-112">Store Home</a>
               </li>
               <li class="list-inline-item ">
                  <a class="text-reset d-inline-block fw-600 fs-15 p-3 " href="https://admindeal.com.bd/shop/Skin-Paradise-112/top-selling">Top Selling</a>
               </li>
               <li class="list-inline-item ">
                  <a class="text-reset d-inline-block fw-600 fs-15 p-3 " href="https://admindeal.com.bd/shop/Skin-Paradise-112/all-products">All products</a>
               </li>
               <li class="list-inline-item ">
                  <a class="text-reset d-inline-block fw-600 fs-15 p-3" href="https://admindeal.com.bd/followed_shop/112"><button class="btn btn-sm btn-primary">Follow Shop</button></a>                        
               </li>
               <li class="list-inline-item "> 
                  <button class="btn btn-sm btn-soft-primary" onclick="show_chat_modal()">Message Seller</button>
               </li>
            </ul>
         </div>
         <div class="col-lg-6 order-1 order-lg-0">
            <ul class="text-center text-lg-right mt-4 mt-lg-0 social colored list-inline mb-0">
               <li class="list-inline-item">
                  <a :href="shopDetails.facebook" class="facebook" target="_blank">
                  <i class="lab la-facebook-f"></i>
                  </a>
               </li>
               <li class="list-inline-item">
                  <a :href="shopDetails.instagram" class="instagram" target="_blank">
                  <i class="lab la-instagram"></i>
                  </a>
               </li>
               <li class="list-inline-item">
                  <a  :href="shopDetails.twitter" class="twitter" target="_blank">
                  <i class="lab la-twitter"></i>
                  </a>
               </li>
               <li class="list-inline-item">
                  <a  :href="shopDetails.google" class="google-plus" target="_blank">
                  <i class="lab la-google"></i>
                  </a>
               </li>
               <li class="list-inline-item">
                  <a  :href="shopDetails.youtube" class="youtube" target="_blank">
                  <i class="lab la-youtube"></i>
                  </a>
               </li>
            </ul>
         </div>
      </div>
   </div>
</section>
<section class="mb-5">
   <div class="container">
      <div class="aiz-carousel dots-inside-bottom mobile-img-auto-height slick-initialized slick-slider" data-arrows="true" data-dots="true" data-autoplay="true">
         <div class="slick-list draggable">
            <div class="slick-track" style="opacity: 1; width: 1410px; transform: translate3d(0px, 0px, 0px);">
               <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 1410px;">
                  <div>
                     <div class="carousel-box" style="width: 100%; display: inline-block;">
                        <img src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" :data-src="shopDetails.sliders"  class="d-block w-100 rounded h-200px h-lg-380px img-fit lazyloaded"  alt="0 offer">
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

<section class="mb-4">
   <div class="container">
      <div class="mb-4">
         <h3 class="h3 fw-600 border-bottom">
            <span class="border-bottom border-primary border-width-2 pb-3 d-inline-block">
            New Arrival Products
            </span>
         </h3>
      </div>
      <div class="row gutters-5 row-cols-xxl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
         <div class="col mb-3" v-for="(product,index) in shopWiseProduct.data" :key="index">
            <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
               <div class="position-relative">
                  <a style="cursor:pointer" @click="product.digital==0?productDetails(product.slug):digitalProductDetails(product.slug)" class="d-block">
                  <img style="cursor:pointer"  @click="product.digital==0?productDetails(product.slug):digitalProductDetails(product.slug)" class="img-fit mx-auto h-140px h-md-210px lazyloaded" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" :data-src="product.thumbnail_image" :alt="product.name">
                  </a>
                  <div class="absolute-top-right aiz-p-hov-icon">
                     <a href="javascript:void(0)" onclick="addToWishList(2395)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                     <i class="la la-heart-o"></i>
                     </a>
                     <a href="javascript:void(0)" onclick="addToCompare(2395)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                     <i class="las la-sync"></i>
                     </a>
                     <a href="javascript:void(0)" onclick="showAddToCartModal(2395)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                     <i class="las la-shopping-cart"></i>
                     </a>
                  </div>
               </div>
               <div class="p-md-3 p-2 text-left">
                  <div class="fs-15">
                     <span class="fw-700 text-primary">{{ product.main_price }} <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;{{ product.discount }}</span> </span> 
                  </div>
                  <div class="rating rating-sm mt-1">
                     <div class="d-inline" v-html="getRatings(product.rating)">

                     </div>
                     ({{ product.rating }})
                  </div>
                  <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
                     <a style="cursor:pointer"  @click="product.digital==0?productDetails(product.slug):digitalProductDetails(product.slug)"  class="d-block text-reset">{{ product.name }}</a>
                  </h3>
                  <!-- <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                     Cashback :
                     <span class="fw-700 float-right">20</span>
                  </div> -->
               </div>
            </div>
         </div>
       
      </div>
               <div>
                       <h5 class="text-danger text-center">{{ ShowNotFound }}</h5>
                </div>
      <div  class="aiz-pagination aiz-pagination-center mb-4" style="text-align: center;">
         <vue-awesome-paginate
          :total-items="totalItems"
          :items-per-page="18"
          :max-pages-shown="5"
          v-model="currentPage"
          @click="getShopWiseProduct"
        />
      </div>
   </div>
</section>
</template>

<script>
import axios from 'axios';
import { ratingGenerator } from '@/HelpersFunction/Helpers';
export default{
    props:['slug'],
    data(){
        return{
            shopWiseProduct:[],
            shopWiseProductHolder:[],
            shopDetails:[],
            ShowNotFound:'Loading...',
            currentPage:1,
            totalItems:"",
        }
    },
    mounted(){
        // console.log(this.slug);
        this.getShopWiseProduct(1);
    },
    methods:{
        getShopWiseProduct(page){
            if(!this.shopWiseProductHolder[page]){
               this.ShowNotFound  = 'Loading...';
               axios.get(this.rootDomain+'vue/v3/products/seller/'+this.slug+'?page='+page)
               .then((response)=>{
                  console.log(response.data[3]);
                     this.shopWiseProductHolder[page] = response.data[0];
                     this.shopWiseProduct = this.shopWiseProductHolder[page];
                     this.shopDetails = response.data[1];
                     this.totalItems = response.data[2];
                     if(response.data[0]<1){
                     this.ShowNotFound  = 'Product Not Found!';
                     }else{
                        this.ShowNotFound  = '';
                     }
                     this.scrollToTop();
               }).catch((err)=>{console.log(err)})
            }else{
               this.shopWiseProduct = this.shopWiseProductHolder[page];
               this.scrollToTop();
            }
            
        },
        getRatings(rating,maxRating=5){
           return ratingGenerator(rating,maxRating)
        },
        productDetails(slug){
            this.$router.push({
            name: "singleProduct",
            params: {
            slug: slug
         }
      });
    },
    digitalProductDetails(slug){
      this.$router.push({
        name: "DigitalProductDetails",
        params: {
          slug: slug
        }
      });
    },
    scrollToTop() {
    window.scrollTo(0,400);
    }
    }
}
</script>

<style>

</style>