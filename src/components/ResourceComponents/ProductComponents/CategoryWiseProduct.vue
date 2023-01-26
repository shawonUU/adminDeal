<template>
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
                                        <Slider @click="priceRange" v-model="rangeValue" :min="min" :max="max"></Slider>
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
                                                         <a href="javascript:void(0)" @click="receiveCategorySlug(category.slug)" class="text-reset fs-14">{{ category.name }}</a>
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
                                                         <input @click="selectAttribute(attribute_value.value)" type="checkbox" name="selected_attribute_values[]" :value="attribute_value.value" >
                                                         <span class="aiz-square-check"></span>
                                                         <span>{{ attribute_value.value}}</span>
                                                     </label>
                                                 </templete>
                                             </div>
                                         </div>
                                     </div>
                                </templete>






                               
                                 <!-- v-if="color_filter_activation" -->
                                     <div v-if="color_filter_activation"  class="bg-white shadow-sm rounded mb-3">
                                         <div class="fs-15 fw-600 p-3 border-bottom">
                                             {{ 'Filter by color'}}
                                         </div>
                                         <div class="p-3">
                                             <div class="aiz-radio-inline">
                                                 <templete v-for="(color, index) in colors" :key="index">
                                                    <label class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" :data-title="color.name">
                                                       <input 
                                                          @click="setColor(color.code)"
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
                                <router-link :to="{name:'home'}" class="text-reset" >{{'Home'}}</router-link>
                             </li>
                            
                                 <li v-if="!categoryId" class="breadcrumb-item fw-600  text-dark">
                                    <router-link :to="{name:'search'}" class="text-reset" >"{{ 'All Categories'}}"</router-link>
                                 </li>
                             
                                 <li v-else class="breadcrumb-item opacity-50">
                                    <router-link :to="{name:'search'}" class="text-reset" >{{ 'All Categories'}}</router-link>
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
                                     <h1 v-else-if="key_slug" class="h6 fw-600 text-body">
                                        {{ 'Search result for ' }}"{{ key_slug }}"
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
                                 <div v-if="currentRouteName != 'products.brand'" class="col-6 col-lg-auto mb-3 w-lg-200px">
                                         <label class="mb-0 opacity-50">{{ 'Brands'}}</label>
                                         <Select2 v-model="myValue" :options="brands" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="setBrand($event)" placeholder="Select Brand">
                                         </Select2>
                                         
                                 </div>
                                 <div class="col-6 col-lg-auto mb-3 w-lg-200px">
                                     <label class="mb-0 opacity-50">{{ 'Sort by' }}</label>
                                     <select id="sortBy" class="form-control form-control-sm aiz-selectpicker" name="sort_by" @change="setSortedBy()">
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
                                       
                                        <a href="javascript:void(0)"
                                        @click="product.digital==0?productDetails(product.slug,product.auction_product):digitalProductDetails(product.slug)"
                                        class="d-block">
                                              <img
                                                 class="img-fit lazyload mx-auto h-140px h-md-210px img-fluid lazyload"
                                                 src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" :data-src="product.thumbnail_image"
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
                                              <a @click="product.digital==0?productDetails(product.slug,product.auction_product):digitalProductDetails(product.slug)" class="d-block text-reset">{{product.name  }}</a>
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
                        <div class="text-danger text-center" style="font-weight: bold; font-size: 18px;">{{ ShowNotFound }}</div>
                        <div v-if="ShowNotFound  == ''" class="aiz-pagination aiz-pagination-center mt-4">
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
    
 </template>
 
 <script>
 import axios from 'axios';
 import Slider from '@vueform/slider';
 import { ratingGenerator } from '@/HelpersFunction/Helpers';
 import Select2 from 'vue3-select2-component';
 export default {
        props: ['slug','brand_slug','key_slug'],
        components:{Slider,Select2},
        data(){
            return{
                brands: '',
                keyword:'',
                selected_attribute_values: [],
                selectedColor: '',
                sortedBy:'newest',
                selectedBrand: '',
                categoryWiseProducts:[],
                categoryInfo:[],
                ShowNotFound:'Loading...',
                rangeValue: [30,1000],
                min:30,
                max:100000,
                minPrice:'',
                maxPrice:'',
                brandId: '',
                categoryId : '',
                cetegoryLevelZero: [],
                parentCategory: {},
                category: {},
                categoryName: '',
                currentRouteName: '',
                autoDescription: '',
                query: '',
                sortBy: '',
                attributes: '',
                addonIsActivated: false,
                color_filter_activation: '',
                colors: [],
                products:[],
                categories: [],
                currentPage:1,
                lastPage:"",
                slugValue: '',
                url:'',
            }
        },
        created(){
        },
        mounted(){
            if(this.key_slug!=null){
                this.slugValue = this.key_slug;
                this.url = 'vue/search?keyword='+this.key_slug+'&';
            }else if(this.brand_slug!=null){
                this.slugValue = this.brand_slug;
                this.url = 'vue/brand/'+this.brand_slug+'?';
            }else if(this.slug!=null){
                this.slugValue = this.slug;
                this.url = 'vue/category/'+this.slug+'?';
            }else{
                this.url = 'vue/search?';
            }
            this.getCategoryWiseProduct(1);
        },
        watch:{
    
        },
    methods:{
        getCategoryWiseProduct(page){
             this.ShowNotFound  = 'Loading...';
             axios.get(this.rootDomain+this.url+'page='+page, { params: { 
                category_slug: this.slug,
                brand: this.selectedBrand,
                selected_attribute_values: this.selected_attribute_values,
                color: this.selectedColor,
                sort_by: this.sortedBy,
                min_price: this.minPrice,
                max_price: this.maxPrice,

             }})
             .then((response)=>{
                // console.log(response.data.user);return;
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
                this.scrollToTop();
                if(this.products.length == 0){
                    this.ShowNotFound  = 'Not Found';
                }else{this.ShowNotFound  = '';}
             })
             .catch((error)=>{
                console.log(error);
             })
        },
        selectAttribute(value){
            this.selected_attribute_values.push(value);
            this.getCategoryWiseProduct(1);
        },
        setColor(color){
            this.selectedColor = color;
            this.getCategoryWiseProduct(1);
        },
        setSortedBy(){
            this.sortedBy = $("#sortBy").val();
            this.getCategoryWiseProduct(1);
        },
        setBrand(brand){
            this.selectedBrand=brand.slug;
            this.getCategoryWiseProduct(1);
        },


        priceRange(){
            let min = this.rangeValue[0];
            let max = this.rangeValue[1];
            if(this.minPrice != min || this.maxPrice != max){
                this.minPrice = min;
                this.maxPrice = max;
                this.getCategoryWiseProduct(1);
            } 
            
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
            }else{
                this.$router.push({
                    name: "AuctionProductsDetails",
                    params: {
                    slug: slug
                    }
                });
            }
        },

        digitalProductDetails(slug){
        this.$router.push({
            name: "DigitalProductDetails",
            params: {
            slug: slug
            }
        });
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
        scrollToTop() {
                window.scrollTo(0,0);
        },

 
    },
   
 }
 
 </script>
 
 <style src="@vueform/slider/themes/default.css"></style>
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
 .slider-horizontal .slider-tooltip-top {
    bottom: 0!important;
    left: 50%;
    transform: translate(-50%);
}
.select2-container--default .select2-selection--single {
    background-color: #fff;
    border: 1px solid #e7e5e5!important;
    border-radius: 4px;
    height: 38px!important;
}
 </style>