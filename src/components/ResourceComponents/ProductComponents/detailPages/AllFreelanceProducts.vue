<template>
      <div style="">
     <section class="mb-4">
        <div class="container">
           <div class=" my-4 ">
              <h1 class="h2 fw-600">Freelance Service</h1>
           </div>
           <div class="row gutters-5 row-cols-xxl-6 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
              <div v-for="(product, index) in freelanceServiceProducts" :key="index" class="col mb-2">
                      <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
                          <div class="position-relative">
                          <a  style="cursor:pointer" @click="getJobSlug(product.slug)" class="d-block">
                              <img class="img-fit lazyload mx-auto h-140px h-md-210px" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" :data-src="product.thumbnail_image" :alt="product.name">
                          </a>
                          <div class="absolute-top-right aiz-p-hov-icon">
                              <a href="javascript:void(0)"  data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                              <i class="la la-heart-o"></i>
                              </a>
                              <a href="javascript:void(0)"  data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                              <i class="las la-sync"></i>
                              </a>
                              <a href="javascript:void(0)"  data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                              <i class="las la-shopping-cart"></i>
                              </a>
                          </div>
                          </div>
                          <div class="p-md-3 p-2 text-left">
                          <div class="fs-15"> 
                              <template v-if="product.base_discounted_price != product.main_price">
                                  <del class="fw-600 opacity-50 mr-1">{{product.stroked_price}}</del>
                                  <span class="text-primary fw-600">{{product.main_price}}</span>
                              </template>
                              <template v-else>
                                  <span class="fw-700 text-primary">{{ product.main_price }}</span>
                              </template>
                             
                              <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;{{ product.discount }}</span>
                          </div>
                          <div class="rating rating-sm mt-1">
                                <template v-for="index in 5" :key="index">
                                   <i v-if="index<=product.rating" class = 'las la-star active'></i>
                                   <i v-else class = 'las la-star'></i>
                                </template>
                                ({{ product.rating }})
                              </div>
                          <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
                              <a style="cursor:pointer" @click="getJobSlug(product.slug)" class="d-block text-reset">{{product.name}}</a>
                          </h3> 
                              <!-- <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border"> Cashback:0 <span class="fw-700 float-right">{{ product.earn_point }}</span>
                              </div>  -->
                          </div>
                      </div>
                  </div>
           </div>
        </div>
     </section>
  </div>
</template>
<script>
import axios from 'axios';

  export default {
    data(){
        return{
            freelanceServiceProducts:[]
        }
    },

    mounted(){
        this.getFreelanceServiceProduct(this.rootDomain)
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

