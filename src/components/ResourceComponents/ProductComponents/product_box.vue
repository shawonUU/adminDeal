<template>
  <div>
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
        <swiper-slide v-for="(product, index) in products" :key="index">  
            <div class="carousel-box">
           <div class="aiz-card-box  rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
             <span class="badge-custom">OFF <span class="box ml-1 mr-0">{{ product.discount }}</span>
             </span>
             <div class="position-relative">
               <a  style="cursor:pointer" @click="product.digital==0?productDetails(product.slug,product):digitalProductDetails(product.slug,product)">
                 <img src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" :data-src="product.thumbnail_image" class="img-fit lazyload mx-auto h-140px h-md-210px"  alt="Black Plated Finger Ring For Mens" >
               </a>
               <div class="absolute-top-right aiz-p-hov-icon">
                 <a href="javascript:void(0)" @click="addToWishList(product.id)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                   <i class="la la-heart-o"></i>
                 </a>
                 <a href="javascript:void(0)" @click="addToCompare(product.id)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                   <i class="las la-sync"></i>
                 </a>
                 <a href="javascript:void(0)" @click="addTocartModal(product.id)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                   <i class="las la-shopping-cart"></i>
                 </a>
               </div>
             </div>
             <div class="p-md-3 p-2 text-left">
               <div class="fs-15">
                 <del v-if="product.stroked_price" class="fw-600 opacity-50 mr-1">{{ product.stroked_price }}</del>
                 <span  v-if="product.main_price" class="fw-700 text-primary">{{ product.main_price }} <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;{{ product.discount }}</span>
                 </span>
                 <del v-if="product.base_price" class="fw-600 opacity-50 mr-1">৳{{ product.base_price }}</del>
                   <span v-if="product.base_discounted_price" class="fw-700 text-primary">৳{{ product.base_discounted_price }} <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-৳{{ product.discount }}</span>
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
                <a style="cursor:pointer"  @click="product.digital==0?productDetails(product.slug):digitalProductDetails(product.slug)"  :to="{name:'singleProduct'}" class="d-block text-reset">{{ product.name}}</a>
               </h3>
               <!-- <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border"> Cashback : <span class="fw-700 float-right">0</span>
               </div> -->
             </div>
           </div>
         </div> 
        </swiper-slide>
         
      </swiper>

      <AddToCartModal v-if="viewAddToCartModal" :productId="productId"></AddToCartModal>

    </div>
</template>

<script>

import AddToCartModal from "../../layouts/Modal/AddToCartModal.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ratingGenerator } from '@/HelpersFunction/Helpers';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode,Navigation } from "swiper";
import axios from "axios";
export default {
    props:['products'],
    data(){
    return{
      auth:{
        isAuthenticated: false,
        user: {},
      },
      modules: [FreeMode,Navigation],
      viewAddToCartModal: false,
      productId: null,
    }
  },
  components: {
    AddToCartModal,
    Swiper,
    SwiperSlide,
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
    this.emitter.on("viewAddToCartModal", message => {
      this.viewAddToCartModal = message;
    });

  },
  methods:{
    productDetails(slug,product){
      this.$router.push({
        name: "singleProduct",
        params: {
          slug: slug
        }
      });
      

    let recentViewProduct={};
    if(this.$cookies.get('recentViewProducts') !== null){
      recentViewProduct = this.$cookies.get('recentViewProducts')
    }
    recentViewProduct[product.id] = product;
    // console.log(product.id);
    // console.log(recentViewProduct);
    this.$cookies.set('recentViewProducts',recentViewProduct);

    },
    digitalProductDetails(slug,product){
      this.$router.push({
        name: "DigitalProductDetails",
        params: {
          slug: slug
        }
      });

      let recentViewProduct={};
      if(this.$cookies.get('recentViewProducts') !== null){
        recentViewProduct = this.$cookies.get('recentViewProducts')
      }
      recentViewProduct[product.id] = product;
      this.$cookies.set('recentViewProducts',recentViewProduct);
    },
  
    addToWishList(id){
      
      if(this.auth.isAuthenticated){
        axios.get(this.selfDomain+"vue/v3/wishlists-add-product", {
          params: {product_id: id},
          headers: {
              Authorization: "Bearer " + this.auth.user.access_token,
          }
          
        }).then(res=>{
            // console.log(res.data);
            this.emitter.emit("reload", true);
        }).catch(err=>{

        });
      }else{
        alert('Please Login');
      }
    },
    addTocartModal(productId){
      this.productId = productId;
      this.viewAddToCartModal = true;
      let ele = document.getElementsByTagName('body');
      ele[0].classList.add("modal-open");
    },
    addToCompare(id){
      var compareItem = localStorage.getItem("compare");
      if(compareItem != null){
            compareItem = JSON.parse(compareItem);
            if(!compareItem.indexOf(id) > -1){
                if(compareItem.length == 3){
                    compareItem.splice(0, 1);
                }
                compareItem.push(id);
            }
      }
      else{compareItem = [id];}
      localStorage.setItem("compare", JSON.stringify(compareItem));
    }
  }
}
</script>

<style>

</style>





























































