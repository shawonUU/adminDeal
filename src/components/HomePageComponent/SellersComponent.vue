<template>
<div class="d-none d-lg-block">
<section class="mb-4">
   <div class="container">
      <div class="px-2 py-4 px-md-4  py-md-3 bg-white shadow-sm rounded">
         <div class="d-flex mb-3 align-items-baseline border-bottom sectionmenu">
            <h3 class="h5 fw-700 mb-0">
               <span class="text-custom border-primary border-width-2 pb-3 d-inline-block">Top Sellers</span>
            </h3>
            <router-link :to="{name:'AllShops'}" class="ml-auto mr-0 btn btn-primary btn-sm shadow-md">View All</router-link>
         </div>
         <ul class="list-unstyled mb-0 row gutters-5">
            <li  v-for="(seller,index) in sellers.slice(0, 8)" :key="index" class="minw-0 col-3 col-md mt-3 text-center">
               <a style="cursor:pointer" @click="shopSlug(seller.slug)" class="hov-shadow-md border d-block rounded bg-white p-2 text-reset ">
                  <img  @click="shopSlug(seller.slug)" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" :data-src="seller.logo"  :alt="seller.name " class="img-fluid img h-60px ls-is-cached lazyloaded" height="78">
                  <div class="text-truncate fs-12 fw-600 mt-2 opacity-70">{{ seller.name }}</div>
               </a>
            </li>
         </ul>
         <div class="d-none d-lg-block">
         <ul class="list-unstyled mb-0 row gutters-5">
            <li  v-for="(seller,index) in sellers.slice(8, 16)" :key="index" class="minw-0 col-3 col-md mt-3 text-center">
               <a style="cursor:pointer" @click="shopSlug(seller.slug)" class="hov-shadow-md border d-block rounded bg-white p-2 text-reset ">
                  <img  @click="shopSlug(seller.slug)" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" :data-src="seller.logo" :alt="seller.name " class="img-fluid img h-60px ls-is-cached lazyloaded" height="78">
                  <div class="text-truncate fs-12 fw-600 mt-2 opacity-70">{{ seller.name }}</div>
               </a>
            </li>
         </ul>
      </div>
      </div>
   </div>
</section>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            sellers:[],
        }
    },
    mounted(){
        this.getSellers(this.rootDomain)
    },
    methods:{
      getSellers(rootDomain){
        axios.get('https://localhost/backend/vue/v3/shops')
        .then((response)=>{
            // console.log(response.data.data);
            this.sellers = response.data.data;
        })
       },
       shopSlug(slug){
            this.$router.push({
                name:'Shop',
                params: {
                    slug: slug
                }
            });
       } 
    }
}
</script>

<style>

</style>