<template>
    <section class="pt-4 mb-4">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 text-center text-lg-left">
                <h1 class="fw-600 h4">All Sellers</h1>
            </div>
            <div class="col-lg-6">
                <ul class="breadcrumb bg-transparent p-0 justify-content-center justify-content-lg-end">
                    <li class="breadcrumb-item opacity-50">
                        <router-link href :to="{name:'home'}" class="text-reset">Home</router-link>
                    </li>
                    <li class="text-dark fw-600 breadcrumb-item">
                        <a class="text-reset" href="">"All Sellers'"</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<section class="mb-2">
    <div class="container">
            <div class="row gutters-10 row-cols-xxl-3 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-1">
                        <div v-for="(shop,index) in allShops" :key="index" class="col">
                            <div class="row no-gutters bg-white align-items-center border border-light rounded hov-shadow-md mb-3 has-transition">
                                <div class="col-4">
                                    <a style="cursor:pointer" @click="shopSlug(shop.slug)" class="d-block p-3" tabindex="0">
                                        <img
                                            :src="shop.logo"
                                            :alt="shop.name"
                                            class="img-fluid lazyload"
                                        >
                                    </a>
                                </div>
                                <div class="col-8 border-left border-light">
                                    <div class="p-3 text-left">
                                        <h2 class="h6 fw-600 text-truncate">
                                            <a style="cursor:pointer" @click="shopSlug(shop.slug)" class="text-reset" tabindex="0">{{ shop.name }}</a>
                                        </h2>
                                        <div class="rating rating-sm mb-2">
                                        <div class="rating rating-sm mt-1">
                                        <template v-for="index in 5" :key="index">
                                            <i v-if="index<=shop.rating" class = 'las la-star active'></i>
                                            <i v-else class = 'las la-star'></i>
                                        </template>
                                        </div>
                                        </div>
                                        <a style="cursor:pointer" @click="shopSlug(shop.slug)" class="btn btn-soft-primary btn-sm" tabindex="0">
                                              Visit Store
                                            <i class="las la-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
            <div class="aiz-pagination aiz-pagination-center mt-4">
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { ratingGenerator } from '@/HelpersFunction/Helpers';
export default {
  data(){
      return{
        allShops:[],
      }
  },
  mounted(){
    this.getAllShop(this.rootDomain);
  },
  methods:{
    getAllShop(rootDomain){
        axios.get(rootDomain+'vue/all_shops')
        .then((response)=>{
            console.log( response.data)
            this.allShops = response.data.data;
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    shopSlug(slug){
            this.$router.push({
                name:'Shop',
                params: {
                    slug: slug
                }
            });
       },
    getRatings(rating,maxRating=5){
        return ratingGenerator(rating,maxRating)
    },
  }
}
</script>

<style>

</style>