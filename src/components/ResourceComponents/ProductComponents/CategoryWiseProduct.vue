<template>
    <section class="mb-4 pt-3">
       <section class="mb-4 pt-3">
         <div class="container sm-px-0">
             <form class="" id="search-form" action="" method="GET">
                 <div class="row">
                     <div class="col-xl-3">
                         <div class="aiz-filter-sidebar collapse-sidebar-wrap sidebar-xl sidebar-right z-1035">
                             <div class="overlay overlay-fixed dark c-pointer" data-toggle="class-toggle" data-target=".aiz-filter-sidebar" data-same=".filter-sidebar-thumb"></div>
                             <div class="collapse-sidebar c-scrollbar text-left">
                                 <div class="d-flex d-xl-none justify-content-between align-items-center pl-3 border-bottom">
                                     <h3 class="h6 mb-0 fw-600">{{ 'Filters' }}</h3>
                                     <button  type="button" class="btn btn-sm p-2 filter-sidebar-thumb" data-toggle="class-toggle" data-target=".aiz-filter-sidebar" >
                                         <i class="las la-times la-2x"></i>
                                     </button>
                                 </div>
                                 
                                    <div class="bg-white shadow-sm rounded mb-3">
                                     <div class="fs-15 fw-600 p-3 border-bottom">
                                         {{ 'Price range'}}
                                     </div>
                                     <div class="p-3">
                                         <div class="aiz-range-slider">
                                           <div id="input-slider-range" @onmousemove="search()" data-range-value-min="0" data-range-value-max="100">
                                           </div>
 
                                             <div class="row mt-2">
                                                 <div class="col-6">
                                                     <span class="range-slider-value value-low fs-14 fw-600 opacity-70"
                                                        data-range-value-low="0" id="input-slider-range-value-low">
                                                    </span>
                                                 </div>
                                                 <div class="col-6 text-right">
                                                    <span class="range-slider-value value-high fs-14 fw-600 opacity-70"
                                                       data-range-value-high="100" id="input-slider-range-value-high">
                                                    </span>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 
                                 <div class="bg-white shadow-sm rounded mb-3">
                                     <div class="fs-15 fw-600 p-3 border-bottom">
                                         {{ 'Categories'}}
                                     </div>
                                     <div class="p-3">
                                         <ul class="list-unstyled">
                                             <templete v-if="!categoryId">
                                                     <li v-for="(category, index) in cetegoryLevelZero" :key="index" class="mb-2 ml-2">
                                                         <a href="javascript:void(0)" @click="receiveCategorySlug(category.slug)" class="text-reset fs-14">{{ $category.name }}</a>
                                                     </li>
                                             </templete>
                                            <template v-else>
                                                <li class="mb-2">
                                                     <a class="text-reset fs-14 fw-600" href="javascript:void(0)"> 
                                                         <!-- {{ route('search') }} -->
                                                         <i class="las la-angle-left"></i>
                                                         {{ 'All Categories'}}
                                                     </a>
                                                 </li>
                                                 <li v-if="category.parent_id != 0" class="mb-2">
                                                     <a class="text-reset fs-14 fw-600" href="javascript:void(0)" @click="receiveCategorySlug(parentCategory.slug)">
                                                         <i class="las la-angle-left"></i>
                                                         {{parentCategory.name }}
                                                     </a>
                                                 </li>
                                                 
                                                 <li class="mb-2">
                                                     <a class="text-reset fs-14 fw-600" href="javascript:void(0)" @click="receiveCategorySlug(category.slug)">
                                                         <i class="las la-angle-left"></i>
                                                         {{category.name }}
                                                     </a>
                                                 </li>
                                                 
                                                     <li v-for="(category, index) in categories"  :key="index" class="ml-4 mb-2">
                                                         <a @click="receiveCategorySlug(category.slug)" class="text-reset fs-14" href="javascript:void(0)">{{ category.name }}</a>
                                                     </li>
                                                
                                            </template>  
                                             
                                         </ul>
                                     </div>
                                 </div>
                                                    
                                 


                                <templete v-if="attributes != null && attributes != 'null'">
                                     <div v-for="(attribut, index) in attributes" :key="index" class="bg-white shadow-sm rounded mb-3">
                                         <div class="fs-15 fw-600 p-3 border-bottom">
                                             {{ 'Filter by' }} {{ attribut.name }}
                                         </div>
                                         <div class="p-3">
                                             <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                 <templete v-for="(attribute_value, indexdn) in attribut.values" :key="indexdn">
                                                    <label class="aiz-checkbox">
                                                         <input type="checkbox" name="selected_attribute_values[]" :value="attribute_value.value" >
                                                         <span class="aiz-square-check"></span>
                                                         <span>{{ attribute_value.value}}</span>
                                                     </label>
                                                 </templete>
                                             </div>
                                         </div>
                                     </div>
                                </templete>






                               
                                 
                                     <div v-if="color_filter_activation" class="bg-white shadow-sm rounded mb-3">
                                         <div class="fs-15 fw-600 p-3 border-bottom">
                                             {{ 'Filter by color'}}
                                         </div>
                                         <div class="p-3">
                                             <div class="aiz-radio-inline">
                                                 <templete v-for="(color, index) in colors" :key="index">
                                                    <label class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" :data-title="color.name">
                                                       <input
                                                          type="radio"
                                                          name="color"
                                                          :value="color.code" 
                                                       >
                                                       <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                                                          <span class="size-30px d-inline-block rounded" :style="{background:color.code}"></span>
                                                       </span>
                                                    </label>
                                                 </templete>
                                             </div>
                                         </div>
                                     </div>
 
                             </div>
                         </div>
                     </div>
 
 
 
 
 
 
 
                     
                     <div class="col-xl-9">
 
                         <ul class="breadcrumb bg-transparent p-0">
                             <li class="breadcrumb-item opacity-50">
                                 <a class="text-reset" href="javascript:void(0)">{{'Home'}}</a>
                             </li>
                            
                                 <li v-if="!categoryId" class="breadcrumb-item fw-600  text-dark">
                                     
                                     <a @click="receiveCategorySlug()" class="text-reset" href="javascript:void(0)">"{{ 'All Categories'}}"</a>
                                 </li>
                             
                                 <li v-else class="breadcrumb-item opacity-50">
                                  
                                     <a @click="receiveCategorySlug()" class="text-reset" href="javascript:void(0)">{{ 'All Categories'}}</a>
                                 </li>
                             
                                 <li v-if="categoryId" class="text-dark fw-600 breadcrumb-item">
                                     <a @click="receiveCategorySlug(category.slug)" class="text-reset" href="javascript:void(0)">"{{ category.name }}"</a>
                                 </li>
                             
                         </ul>
 
                         <div class="text-left">
                             <div class="row gutters-5 flex-wrap align-items-center">
                                 <div class="col-lg col-10">
                                     <h1 v-if="categoryId" class="h6 fw-600 text-body">
                                             {{ categoryName }}
                                     </h1>
                                     <h1 v-else-if="query" class="h6 fw-600 text-body">
                                        {{ 'Search result for ' }}"{{ query }}"
                                     </h1>
                                     <h1 v-else class="h6 fw-600 text-body">
                                        {{ 'All Products' }}
                                     </h1>
                                     <!-- <input type="hidden" name="keyword" value="{{ query }}"> -->
                                 </div>
                                 <div class="col-2 col-lg-auto d-xl-none mb-lg-3 text-right">
                                     <button type="button" class="btn btn-icon p-0" data-toggle="class-toggle" data-target=".aiz-filter-sidebar">
                                         <i class="la la-filter la-2x"></i>
                                     </button>
                                 </div>
                                 <div class="col-6 col-lg-auto mb-3 w-lg-200px">
                                         <label v-if="currentRouteName != 'products.brand'" class="mb-0 opacity-50">{{ 'Brands'}}</label>
                                         <select class="form-control form-control-sm aiz-selectpicker" data-live-search="true" name="brand">
                                            <option value="">{{ 'All Brands' }}</option>
                                            <option v-for="(brand, index) in brands" :key="index" :value="brand.slug" :selected="brandId == brand.id">{{ brand.name }}</option>
                                         </select>
                                 </div>
                                 <div class="col-6 col-lg-auto mb-3 w-lg-200px">
                                     <label class="mb-0 opacity-50">{{ 'Sort by' }}</label>
                                     <select class="form-control form-control-sm aiz-selectpicker" name="sort_by" onchange="filter()">
                                         <option value="newest" :selected="newest == 'newest'" >{{'Newest'}}</option>
                                         
                                         <option value="oldest" :selected="newest == 'oldest'" >{{ 'Oldest' }}</option>
                                         <option value="price-asc" :selected="newest == 'price-asc'" >{{ 'Price low to high'}}</option>
                                         <option value="price-desc" :selected="newest == 'price-desc'" >{{ 'Price high to low'}}</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                         <input type="hidden" name="min_price" value="">
                         <input type="hidden" name="max_price" value="">
                         <div class="row gutters-5 row-cols-xxl-5 row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
                             
                                 <div v-for="(product, index) in products" :key="index" class="col">
                                    
                                  <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
                                    
                                        <span v-if="product.discount>0" class="badge-custom">{{ 'OFF' }}<span class="box ml-1 mr-0">&nbsp;{{product.discount}}%</span></span>
                                     
                                     <div class="position-relative">
                                       
                                        <a href="javascript:void(0)" @click="productDetails(product.slug, product.auction_product)" class="d-block">
                                              <img
                                                 class="img-fit lazyload mx-auto h-140px h-md-210px img-fluid lazyload"
                                                 :src="product.thumbnail_image"
                                                 :alt="product.name"
                                              >
                                        </a>
                                        <!-- ??'https://admindeal.com.bd/public/assets/img/placeholder.jpg' -->
 
                                              <span v-if="product.wholesale_product" class="absolute-bottom-left fs-11 text-white fw-600 px-2 lh-1-8" style="background-color: #455a64">
                                                 {{ 'Wholesale' }}
                                              </span>
                              
                                        <div class="absolute-top-right aiz-p-hov-icon">
                                              <a href="javascript:void(0)" :onclick="addToWishList(product.id)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                                                 <i class="la la-heart-o"></i>
                                              </a>
                                              <a href="javascript:void(0)" :onclick="addToCompare(product.id)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                                                 <i class="las la-sync"></i>
                                              </a>
                                              <a href="javascript:void(0)" :onclick="showAddToCartModal(product.id)" data-toggle="tooltip" data-title="'Add to cart" data-placement="left">
                                                 <i class="las la-shopping-cart"></i>
                                              </a>
                                        </div>
                                     </div>
                                     <div class="p-md-3 p-2 text-left">
                                        <div class="fs-15">
                                              <del v-if="product.base_price != product.base_discounted_price" class="fw-600 opacity-50 mr-1">{{ product.base_price }}</del>
                                              <span class="fw-700 text-primary">{{product.base_discounted_price }} <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;{{product.discount_in_percentage}}</span> </span> 
                                        </div>
                                        <div class="rating rating-sm mt-1">
                                              <div v-html="getRatings(product.rating)" style="display: inline;">
                                              </div>
                                              ({{product.rating}})
                                        </div>
                                        
                                        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
                                              <a href="" class="d-block text-reset">{{  product.name  }}</a>
                                        </h3>
                                        <!-- {{ $product_url }} -->
                                       
                                              <div v-if="addonIsActivated" class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                                                 Cashback :
                                                 <span class="fw-700 float-right">{{ product.earn_point }}</span>
                                              </div>
                                     </div>
                                  </div>
 
 
 
 
 
 
 
 
                                 </div>
                            
                         </div>
                         <div class="aiz-pagination aiz-pagination-center mt-4">
                             <vue-awesome-paginate
                             :total-items="lastPage"
                             :items-per-page="24"
                             :max-pages-shown="5"
                             v-model="currentPage"
                             @click="getCategoryWiseProduct"
                             />
                         </div>
                         
                            <div v-if="currentRouteName == 'products.category'" class="bg-white shadow-sm card my-5 px-4">
                               <div class="mb-3 pt-3 h-250px" style="overflow: hidden;" id="description">
                                  <p v-html="autoDescription"></p>
                               </div>
                               <span class="more text-center p-2 m-2 bg-primary w-100px" onclick="more()">More..</span>
                            </div>
                         
                     </div>
                 </div>
             </form>
         </div>
     </section>
    </section>
    
 </template>
 
 <script>
 import axios from 'axios';
 import { ratingGenerator } from '@/HelpersFunction/Helpers';
 export default {
     props: ['slug'],
     data(){
       return{
          categoryWiseProducts:[],
          categoryInfo:[],
          ShowNotFound:'Loading...',
          maxPrice: 0,
          minPrice: 100,
 
          brandId: null,
          categoryId : null,
          cetegoryLevelZero: [],
          parentCategory: {},
          category: {},
          brands: [],
          categoryName: '',
          currentRouteName: '',
          autoDescription: null,
          query: null,
          sortBy: '',
          attributes: null,
          addonIsActivated: false,
          color_filter_activation: null,
          colors: [],
          products:[],
          categories: [],
          currentPage:1,
          lastPage:"",
       }
     },
     created(){
       //   this.loadMore(this.rootDomain);
        this.setJsCdn();
     },
      mounted(){
 
         this.getCategoryWiseProduct(1);
          this.setJsCdn();
      },
      watch:{
 
      },
      methods:{
         setJsCdn(){
            if(document.getElementsByTagName("head")[0]){
                var baseUrl = window.location.origin;
 
                var scriptTag = document.createElement("script");
                scriptTag.src = baseUrl+"/assets/js/vendors.js";
                document.getElementsByTagName('head')[0].appendChild(scriptTag);
 
                var scriptTag = document.createElement("script");
                scriptTag.src = baseUrl+"/assets/js/aiz-core.js";
                document.getElementsByTagName('head')[0].appendChild(scriptTag);
            }
         },
         getReng(){
          let min = $('#input-slider-range-value-low').html();
          let max = $('#input-slider-range-value-high').html();
          if(this.minPrice != min || this.maxPrice != max){
             this.minPrice = min;
             this.maxPrice = max;
            //  console.log(this.minPrice+" "+this.maxPrice);
          }
 
         },
          getCategoryWiseProduct(page){
             this.ShowNotFound  = 'Loading...';
             axios.get(this.rootDomain+'vue/category/'+this.slug+'?page='+page)
             .then((response)=>{
                 console.log(response.data.attributes[0].values);
                this.currentRouteName = response.data.currentRouteName;
                this.attributes = response.data.attributes;
                this.color_filter_activation = response.data.color_filter_activation;
                this.colors = response.data.colors;
                this.products = response.data.products.data;
                this.categoryId = response.data.category_id;
                this.categoryName = response.data.category_name;
                this.query = response.data.query;
                this.sortBy = response.data.sort_by;
                this.addonIsActivated = response.data.addon_is_activated;
                this.autoDescription = response.data.auto_description;
                this.cetegoryLevelZero = response.data.cetegoryLevelZero;
                this.parentCategory = response.data.parentCategory;
                this.category = response.data.category;
                this.categories = response.data.categories;
                this.brandId = response.data.brand_id;
                this.brands = response.data.brands;
                this.lastPage = response.data.productsCount;
 
                // this.categoryWiseProducts = response.data[0].data;
                // this.categoryInfo = response.data[1]
                // if(response.data[0].data<1){
                //    this.ShowNotFound  = 'Product Not Found!';
                // }else{
                //    this.ShowNotFound  = '';
                // }
             })
             .catch((error)=>{
                console.log(error);
             })
          },
          receiveCategorySlug(slug){
             this.$router.push({
                 name:'CategoryWiseProduct',
                 params: {
                     slug: slug
                 }
             }); 
       },
       productDetails(slug,auction_product){
          if(auction_product != 1){
             this.$router.push({
                name: "singleProduct",
                params: {
                   slug: slug
                }
             });
          }
       },
 
       allCategoryProduct(rootDomain){
          this.$router.push({
                 name:'shop',
                 params: {
                     slug: slug
                 }
             }); 
       },
       getRatings(rating,maxRating=5){
            return ratingGenerator(rating,maxRating)
       },
       addToWishList(id){
          
       },
       addToCompare(id){
 
       },
       showAddToCartModal(){
 
       },
 
    },
   
 }
 
 </script>
 
 
 <style>
 /* width */
 ::-webkit-scrollbar {
   width: 5px;
 }
 
 /* Track */
 ::-webkit-scrollbar-track {
   background: #f1f1f1; 
 }
  
 /* Handle */
 ::-webkit-scrollbar-thumb {
   background: #888; 
 }
 
 /* Handle on hover */
 ::-webkit-scrollbar-thumb:hover {
   background: #555; 
 }
 </style>