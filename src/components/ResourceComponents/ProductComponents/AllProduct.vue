<template>
  <div class="container bg-white">
    <div class="px-2 py-4 px-md-4 py-md-3 bg-white ">
                
            <div class="d-flex flex-wrap mb-3 align-items-baseline border-bottom">
            <h3 class="h5 fw-700 mb-0">
                <span class="border-bottom border-primary border-width-2 pb-3 d-inline-block">All Products</span>
        
            </h3>
                <a href="#" class="ml-auto mr-0 btn btn-primary btn-sm shadow-md">Back To Top</a>
            
        </div>
    
        <div class="row row-cols-xxl-6 row-cols-xl-6 row-cols-lg-6 row-cols-md-3 row-cols-2 gutters-300" id="product-list">
            <template v-for="(products, indexup) in productsCollection" :id="indexup">
                <div v-for="(product, index) in products" :key="index" class="col">
                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
                        <div class="position-relative">
                        <a  style="cursor:pointer" @click="productDetails(product.slug)" class="d-block">
                            <img class="img-fit lazyload mx-auto h-140px h-md-210px" :src="product.thumbnail_image" :data-src="product.thumbnail_image" :alt="product.name">
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
                            <template v-if="product.base_discounted_price != product.base_price">
                                <del class="fw-600 opacity-50 mr-1"> ৳{{product.base_price}}</del>
                                <span class="text-primary fw-600">৳{{product.base_discounted_price}}</span>
                            </template>
                            <template v-else>
                                <span class="fw-700 text-primary">৳{{ product.base_price }}</span>
                            </template>
                           
                            <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span>
                        </div>
                        <div class="rating rating-sm mt-1">
                            <template v-for="index in 5" :key="index">
                                <i v-if="index<=product.rating" class = 'las la-star active'></i>
                                <i v-else class = 'las la-star'></i>
                            </template>
                            ({{ product.rating }})
                        </div>
                        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
                            <a style="cursor:pointer" @click="productDetails(product.slug)" class="d-block text-reset">{{product.name}}</a>
                        </h3> 
                            <!-- <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border"> Cashback:0 <span class="fw-700 float-right">{{ product.earn_point }}</span>
                            </div>  -->
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div id="load-more" class="text-center">
            <div v-if="buttonIsLoading" class="fs-14 d-inline-block fw-600 btn btn-soft-primary c-pointer">Loading..
            </div>
            <div v-else class="fs-14 d-inline-block fw-600 btn btn-soft-primary c-pointer"  @click="loadMore()">Load More
            </div>
        </div>
                    
    </div>
</div>
</template>

<script>
import { ratingGenerator } from '@/HelpersFunction/Helpers';
 import axios from "axios";
export default {
    data(){
        return{
            productsCollection: [],
            links: this.rootDomain+'vue/products/allpost',
            buttonIsLoading:true,
        }
    },created(){
        this.loadMore(this.rootDomain);
    },
    mounted(){
        
    },
    methods:{
        loadMore(){
            this.buttonIsLoading=true;
            axios.get(this.links)
            .then((response)=>{
                this.productsCollection.push(response.data.data);
                this.links = response.data.links.next;
                this.buttonIsLoading=false;
            })
        },
    productDetails(slug){
      this.$router.push({
        name: "singleProduct",
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