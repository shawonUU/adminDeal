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
                                        <!-- <ul class="list-unstyled">
                                            @if (!isset($category_id))
                                                @foreach (\App\Models\Category::where('level', 0)->get() as $category)
                                                    <li class="mb-2 ml-2">
                                                        <a class="text-reset fs-14" href="{{ route('products.category', $category->slug) }}">{{ $category->getTranslation('name') }}</a>
                                                    </li>
                                                @endforeach
                                            @else
                                                <li class="mb-2">
                                                    <a class="text-reset fs-14 fw-600" href="{{ route('search') }}">
                                                        <i class="las la-angle-left"></i>
                                                        {{ translate('All Categories')}}
                                                    </a>
                                                </li>
                                                @if (\App\Models\Category::find($category_id)->parent_id != 0)
                                                    <li class="mb-2">
                                                        <a class="text-reset fs-14 fw-600" href="{{ route('products.category', \App\Models\Category::find(\App\Models\Category::find($category_id)->parent_id)->slug) }}">
                                                            <i class="las la-angle-left"></i>
                                                            {{ \App\Models\Category::find(\App\Models\Category::find($category_id)->parent_id)->getTranslation('name') }}
                                                        </a>
                                                    </li>
                                                @endif
                                                <li class="mb-2">
                                                    <a class="text-reset fs-14 fw-600" href="{{ route('products.category', \App\Models\Category::find($category_id)->slug) }}">
                                                        <i class="las la-angle-left"></i>
                                                        {{ \App\Models\Category::find($category_id)->getTranslation('name') }}
                                                    </a>
                                                </li>
                                                @foreach (\App\Utility\CategoryUtility::get_immediate_children_ids($category_id) as $key => $id)
                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="{{ route('products.category', \App\Models\Category::find($id)->slug) }}">{{ \App\Models\Category::find($id)->getTranslation('name') }}</a>
                                                    </li>
                                                @endforeach
                                            @endif
                                        </ul> -->
                                    </div>
                                </div>
                                                         
                               <templete v-if="attributes != null && attributes != 'null'">
                                    <div v-for="(attribut, index) in attributes" :key="index" class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            {{ 'Filter by' }} {{ attribut.name }}
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                <templete v-for="(attribute_value, indexdn) in attribut.attribute_values" :key="indexdn">
                                                   <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="{{ attribute_value.value }}" 
                                                            {{  }}
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>{{ attribute_value.value }}</span>
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
                                <!-- <a class="text-reset" href="{{ route('home') }}">{{'Home'}}</a> -->
                            </li>
                           
                                <li v-if="!categoryId" class="breadcrumb-item fw-600  text-dark">
                                    <p>1111</p>
                                    <!-- <a class="text-reset" href="{{ route('search') }}">"{{ translate('All Categories')}}"</a> -->
                                </li>
                            
                                <li v-else class="breadcrumb-item opacity-50">
                                 <p>222</p>
                                    <!-- <a class="text-reset" href="{{ route('search') }}">{{ translate('All Categories')}}</a> -->
                                </li>
                            
                                <li v-if="categoryId" class="text-dark fw-600 breadcrumb-item">
                                 <p>333</p>
                                    <!-- <a class="text-reset" href="{{ route('products.category', \App\Models\Category::find($category_id)->slug) }}">"{{ \App\Models\Category::find($category_id)->getTranslation('name') }}"</a> -->
                                </li>
                            
                        </ul>

                        <div class="text-left">
                            <div class="row gutters-5 flex-wrap align-items-center">
                                <div class="col-lg col-10">
                                    <h1 v-if="categoryId" class="h6 fw-600 text-body">
                                       cnameeeee
                                            <!-- {{ \App\Models\Category::find($category_id)->getTranslation('name') }} -->
                                    </h1>
                                    <h1 v-else-if="$query" class="h6 fw-600 text-body">
                                       {{ 'Search result for ' }}"{{ query }}"
                                    </h1>
                                    <h1 v-else class="h6 fw-600 text-body">
                                       {{ 'All Products' }}
                                    </h1>
                                    <input type="hidden" name="keyword" value="{{ query }}">
                                </div>
                                <div class="col-2 col-lg-auto d-xl-none mb-lg-3 text-right">
                                    <button type="button" class="btn btn-icon p-0" data-toggle="class-toggle" data-target=".aiz-filter-sidebar">
                                        <i class="la la-filter la-2x"></i>
                                    </button>
                                </div>
                                <!-- <div class="col-6 col-lg-auto mb-3 w-lg-200px">
                                    @if (Route::currentRouteName() != 'products.brand')
                                        <label class="mb-0 opacity-50">{{ translate('Brands')}}</label>
                                        <select class="form-control form-control-sm aiz-selectpicker" data-live-search="true" name="brand" onchange="filter()">
                                            <option value="">{{ translate('All Brands')}}</option>
                                            @foreach (\App\Models\Brand::all() as $brand)
                                                <option value="{{ $brand->slug }}" @isset($brand_id) @if ($brand_id == $brand->id) selected @endif @endisset>{{ $brand->getTranslation('name') }}</option>
                                            @endforeach
                                        </select>
                                    @endif
                                </div> -->
                                <div class="col-6 col-lg-auto mb-3 w-lg-200px">
                                    <label class="mb-0 opacity-50">{{ 'Sort by' }}</label>
                                    <!-- <select class="form-control form-control-sm aiz-selectpicker" name="sort_by" onchange="filter()">
                                        <option value="newest" @isset($sort_by) @if ($sort_by == 'newest') selected @endif @endisset>{{ translate('Newest')}}</option>
                                        <option value="oldest" @isset($sort_by) @if ($sort_by == 'oldest') selected @endif @endisset>{{ translate('Oldest')}}</option>
                                        <option value="price-asc" @isset($sort_by) @if ($sort_by == 'price-asc') selected @endif @endisset>{{ translate('Price low to high')}}</option>
                                        <option value="price-desc" @isset($sort_by) @if ($sort_by == 'price-desc') selected @endif @endisset>{{ translate('Price high to low')}}</option>
                                    </select> -->
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
                                       <!-- @php
                                             $product_url = route('product', $product->slug);
                                             if($product->auction_product == 1) {
                                                $product_url = route('auction-product', $product->slug);
                                             }
                                       @endphp -->
                                       <a href="{{ #/**$product_url**/ }}" class="d-block">
                                             <img
                                                class="img-fit lazyload mx-auto h-140px h-md-210px"
                                                src=""
                                                :data-src="product.thumbnail_image"
                                                :alt="product.name"
                                                onerror="this.onerror=null;this.src='';"
                                             >
                                       </a>
                                       <!-- @if ($product->wholesale_product)
                                             <span class="absolute-bottom-left fs-11 text-white fw-600 px-2 lh-1-8" style="background-color: #455a64">
                                                {{ translate('Wholesale') }}
                                             </span>
                                       @endif -->
                                       <div class="absolute-top-right aiz-p-hov-icon">
                                             <!-- <a href="javascript:void(0)" onclick="addToWishList({{ $product->id }})" data-toggle="tooltip" data-title="{{ translate('Add to wishlist') }}" data-placement="left">
                                                <i class="la la-heart-o"></i>
                                             </a>
                                             <a href="javascript:void(0)" onclick="addToCompare({{ $product->id }})" data-toggle="tooltip" data-title="{{ translate('Add to compare') }}" data-placement="left">
                                                <i class="las la-sync"></i>
                                             </a>
                                             <a href="javascript:void(0)" onclick="showAddToCartModal({{ $product->id }})" data-toggle="tooltip" data-title="{{ translate('Add to cart') }}" data-placement="left">
                                                <i class="las la-shopping-cart"></i>
                                             </a> -->
                                       </div>
                                    </div>
                                    <div class="p-md-3 p-2 text-left">
                                       <!-- <div class="fs-15">
                                             @if(home_base_price($product) != home_discounted_base_price($product))
                                                <del class="fw-600 opacity-50 mr-1">{{ home_base_price($product) }}</del>
                                             @endif
                                             <span class="fw-700 text-primary">{{ home_discounted_base_price($product) }} <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-{{discount_in_percentage($product)}}%</span> </span> 
                                       </div>
                                       <div class="rating rating-sm mt-1">
                                             {{ renderStarRating($product->rating) }} ({!!$product->reviews->count()??''!!})
                                       </div>
                                       <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
                                             <a href="{{ $product_url }}" class="d-block text-reset">{{  $product->name  }}</a>
                                       </h3>
                                       @if (addon_is_activated('club_point'))
                                             <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                                                Cashback :
                                                <span class="fw-700 float-right">{{ $product->earn_point }}</span>
                                             </div>
                                       @endif -->
                                    </div>
                                 </div>








                                </div>
                           
                        </div>
                        <div class="aiz-pagination aiz-pagination-center mt-4">
                            <!-- {{ $products->appends(request()->input())->links() }} -->
                        </div>
                        
                        <!-- @if( Route::currentRouteName()=="products.category")
                           <div class="bg-white shadow-sm card my-5 px-4">
                              <div class="mb-3 pt-3 h-250px" style="overflow: hidden;" id="description">
                                 <p >
                                       @php
                                 if(isset($category_id))
                                 
                                 $auto_description= \App\Models\Category::find($category_id)->auto_cat_description;
                                 else {
                                       $auto_description= null;
                                 }
                                       @endphp
                                       {!!$auto_description!!}
                                 </p>

                              </div>
                              <span class="more text-center p-2 m-2 bg-primary w-100px" onclick="more()">More..</span>
                           </div>
                        @endif -->
                    </div>
                </div>
            </form>
        </div>
    </section>
   </section>
   
</template>

<script>
import axios from 'axios';
export default {
    props: ['slug'],
    data(){
      return{
         categoryWiseProducts:[],
         categoryInfo:[],
         ShowNotFound:'Loading...',
         maxPrice: 0,
         minPrice: 100,


         attributes: null,
         color_filter_activation: null,
         colors: [],
         products:[],
      }
    },
    created(){
      //   this.loadMore(this.rootDomain);
    },
     mounted(){

        this.getCategoryWiseProduct(this.rootDomain);
         if(document.getElementsByTagName("UL")[0]){
            var baseUrl = window.location.origin;

            var scriptTag = document.createElement("script");
            scriptTag.src = baseUrl+"/assets/js/vendors.js";
            document.getElementsByTagName('head')[0].appendChild(scriptTag);

            var scriptTag = document.createElement("script");
            scriptTag.src = baseUrl+"/assets/js/aiz-core.js";
            document.getElementsByTagName('head')[0].appendChild(scriptTag);
         }
     },
     watch:{

     },
     methods:{
        getReng(){
         let min = $('#input-slider-range-value-low').html();
         let max = $('#input-slider-range-value-high').html();
         if(this.minPrice != min || this.maxPrice != max){
            this.minPrice = min;
            this.maxPrice = max;
            console.log(this.minPrice+" "+this.maxPrice);
         }

        },
         getCategoryWiseProduct(rootDomain){
            this.ShowNotFound  = 'Loading...';
            axios.get(rootDomain+'vue/category/'+this.slug)
            .then((response)=>{
               this.attributes = response.data.attributes;
               this.color_filter_activation = response.data.color_filter_activation;
               this.colors = response.data.colors;
               this.products = response.data.products.data;
               console.log(response.data.attributes);
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
      productDetails(slug){
         this.$router.push({
         name: "singleProduct",
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