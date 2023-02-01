<template>
    <section class="mb-4 pt-4">
      <div class="container">
          <div class="row">
              <div class="col-lg-6 text-lg-left text-center">
                  <h1 class="fw-600 h4">All Brands</h1>
              </div>
              <div class="col-lg-6">
                  <ul class="breadcrumb justify-content-center justify-content-lg-end bg-transparent p-0">
                      <li class="breadcrumb-item opacity-50">
                          <a class="text-reset" href="">Home</a>
                      </li>
                      <li class="text-dark fw-600 breadcrumb-item">
                          <a class="text-reset" href="">All Brands</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </section>
  <section class="mb-4">
      <div class="container">
          <div class="rounded bg-white px-3 pt-3 shadow-sm">
              <div class="row row-cols-xxl-6 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 gutters-10">
                <div v-for="(brand,index) in allBrands" :key="index" class="col text-center">
                    <a @click="brandSlug(brand.slug)"
                        class="d-block border-light hov-shadow-md mb-3 rounded border p-3">
                        <img src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" :data-src="brand.logo" class="lazyload h-70px mw-100 mx-auto" :alt="brand.name">
                    </a>
                </div>
              </div>
          </div>
      </div>
  </section>
</template>
<script>
import axios from 'axios';
export default {
  data(){
      return{
        allBrands:[],
      } 
  },
  mounted(){
    this.getAllBrands(this.rootDomain);
  },
  methods:{
    getAllBrands(rootDomain){
        axios.get(rootDomain+'vue/all_brands')
        .then((response)=>{
            console.log( response.data)
            this.allBrands = response.data.data;
        })
        .catch((err)=>{
            console.log(err)
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