<template>
<section class="mb-4">
   <div class="container">
      <div class="px-2 py-4 px-md-4  py-md-3 bg-white shadow-sm rounded">
         <div class="d-flex mb-3 align-items-baseline border-bottom sectionmenu">
            <h3 class="h5 fw-700 mb-0"> <span class="text-custom border-primary border-width-2 pb-3 d-inline-block">Top Brands</span> </h3>
            <a href="https://admindeal.com.bd/brands" class="ml-auto mr-0 btn btn-primary btn-sm shadow-md">View All</a> 
         </div>

         <ul class="list-unstyled mb-0 row gutters-5">
            <li v-for="(brand,index) in brands.slice(0, 8)"  class="minw-0 col-3 col-md mt-3 text-center ">
               <a @click="brandSlug(brand.slug)" style="cursor:pointer" class="d-block hov-shadow-md border rounded bg-white p-2 text-reset shadow-sm">
                  <img class="img-fluid img lazyload h-60px" :alt="brand.name" height="78" :src="brand.logo"> 
                  <div class="text-truncate fs-12 fw-600 mt-2 opacity-70">{{ brand.name }}</div>
               </a>
            </li>
         </ul>
         <div class="d-none d-lg-block">
         <ul class="list-unstyled mb-0 row gutters-5">
            <li v-for="(brand,index) in brands.slice(8, 16)"  class="minw-0 col-3 col-md mt-3 text-center ">
               <a @click="brandSlug(brand.slug)" style="cursor:pointer" class="d-block hov-shadow-md border rounded bg-white p-2 text-reset shadow-sm">
                  <img class="img-fluid img lazyload h-60px" :alt="brand.name" height="78" :src="brand.logo"> 
                  <div class="text-truncate fs-12 fw-600 mt-2 opacity-70">{{ brand.name }}</div>
               </a>
            </li>
         </ul>
      </div>
      </div>
   </div>
</section>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            brands:[],
        }
    },
    beforeCreated(){
        this.getBrands();
    },
    mounted(){
        this.getBrands(this.rootDomain)
    },
    methods:{
       getBrands(rootDomain){
        axios.get(rootDomain+'vue/v3/brands')
        .then((response)=>{
            this.brands = response.data.data;
        })
       },
       brandSlug(slug){
         this.$router.push({
            name: "Brand",
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