<template>
 <section class="mb-4 pt-3">
   <div class="container">
      <div class="bg-white shadow-sm rounded p-3">
         <div class="row">
            <div class="col-xl-5 col-lg-5 mb-4">
               <!-- <div class="sticky-top z-3 row gutters-10">
                  <div class="col order-1 order-md-2">
                     <div class="aiz-carousel product-gallery" data-nav-for='.product-gallery-thumb' data-fade='true' data-auto-height='true'>
                        <div class="carousel-box img-zoom rounded">
                           
                           <img
                              class="img-fluid lazyload"
                              src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" :data-src="productDetails.thumbnail_image"
                              >
                        </div>
                     </div>
                  </div>
                  <div class="col-12 col-md-auto w-md-80px order-2 order-md-1 mt-3 mt-md-0">
                     <div class="aiz-carousel product-gallery-thumb" data-items='5' data-nav-for='.product-gallery' data-vertical='true' data-vertical-sm='false' data-focus-select='true' data-arrows='true'>
                        <div class="carousel-box c-pointer border p-1 rounded">
                           <img
                              class="lazyload mw-100 size-50px mx-auto"
                              src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" :data-src="productDetails.thumbnail_image"
                              >
                        </div>
                     </div>
                  </div>
               </div> -->
               <swiper
                  :style="{
                     '--swiper-navigation-color': '#fff',
                     '--swiper-pagination-color': '#fff',
                  }"
                  :loop="true"
                  :spaceBetween="10"
                  :navigation="true"
                  :thumbs="{ swiper: thumbsSwiper }"
                  :modules="modules"
                  class="mySwiper2"
               >
                    <swiper-slide v-for="(photo,index) in productDetails.photos" :key="index">
                     <img width="400"
                     :style="zoomStyle"
                     v-on:mouseover="zoomIn" v-on:mouseout="zoomOut"
                     :src="photo.path" />
                     </swiper-slide>
               </swiper>
               <swiper
                  @swiper="setThumbsSwiper"
                  :loop="true"
                  :spaceBetween="-100"
                  :slidesPerView="2"
                  :freeMode="true"
                  :watchSlidesProgress="true"
                  :modules="modules"
                  class="mySwiper"
               >
                  <swiper-slide v-for="(photo,index) in productDetails.photos" :key="index">
                     <img width="100"
                     :src="photo.path"/>
                     </swiper-slide
                  >
               </swiper>
            </div>
            <div class="col-xl-7 col-lg-7">
               <!--start -->
               <div class="text-left">
                  <div class="row">
                     <div class="col-md-7 ">
                        <h1 class="mb-2 fs-20 fw-600" id='name'>
                           {{ productDetails.name }}
                        </h1>
                        <div class="row align-items-center ">
                           <div class="col-12 " style="color: #2abbe8;">
                              Total sold: <b>( 5 )</b> ; <span>Ship On Time: <b>100%</b> </span>
                           </div>
                           <div class="col-12 " style="color: #2abbe8;">
                              Answered Questions: ( See Below ) <br> Seller Response Rate: ( 100% )
                           </div>
                           <div class="col-12 " style="color: #2abbe8;">
                              Positive Seller Ratings: (100%)
                           </div>
                           <div v-if="productDetails.est_shipping_days" class="col-auto ml" style="color: #2abbe8;">
                              <small class="mr-2 opacity-50">Estimate Shipping Time: </small>{{ productDetails.est_shipping_days }}
                           </div>
                           <div class="col-12 " style="color: #2abbe8;">
                              <span class="rating">                                
                                 <template v-for="index in 5" :key="index">
                                    <i v-if="index<=productDetails.rating" class='las la-star active'></i>
                                    <i v-else class = 'las la-star'></i>
                                 </template>
                              </span>
                              <span class="ml-1 opacity-50" id='review'>({{ productDetails.reviews==0?'0':productDetails.reviews }}</span>reviews) <br>
                           </div>
                           <div class="my-offer-banner-physical">
                              <br> <img src="https://admindeal.com.bd/Admin-Deal-Product-Details-Discount.png#width=480&height=72">
                           </div>
                           <!--                                  <div class="col-auto ml">
                              <small class="mr-2 opacity-50">Estimate Shipping Time: </small>1 Days
                              </div>
                              --> 
                        </div>
                        <hr>
                        <div class="row align-items-center">
                           <div class="col-auto">
                              <small class="mr-2 opacity-50">Sold by: </small><br>
                              <a href="" v-if="productDetails.added_by=='seller' && vendorActivation==1" class="text-reset" id='shop_name'>{{ productDetails.shop_name }}</a>
                              <span v-else>
                                 Admin store
                              </span>
                           </div>
                           
                           <div v-if="coversationSystem==1" class="col-auto">
                              <button class="btn btn-sm btn-secondary" onclick="show_chat_modal()">Chat With Seller</button>
                           </div>
                          
                           <div v-if="brandData!==null" class="col-auto">
                              <a style="cursor:pointer" @click="brandSlug(brandData.slug)">
                              <img  src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" :data-src="brandData.logo" id='brand_name' alt="Others" height="30">
                              </a>
                           </div>
                        </div>
                        <br>
                        <div> <a href="https://www.admindeal.com.bd/support_ticket"> ❌ Report to Admin incorrect product information!</a></div>
                        <hr>
                              <template v-if="productDetails.wholesale_product">
                                 <table class="aiz-table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Min Qty</th>
                                            <th>Max Qty</th>
                                            <th>Unit Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                            <tr v-for="(wholesalePrice,index) in productDetails.wholesalePrices" :key="index">
                                                <td>{{ wholesalePrice.min_qty }}</td>
                                                <td>{{ wholesalePrice.max_qty }}</td>
                                                <td>{{ wholesalePrice.price }}</td>
                                            </tr>
                                       
                                    </tbody>
                                </table>
                              </template>
                              <template v-else>
                                 <div v-if="productDetails.home_price != productDetails.home_discounted_price">

                                 <div  class="row no-gutters mt-3">
                                    <div class="col-2">
                                       <div class="opacity-50 my-2">Price:</div>
                                    </div>
                                    <div class="col-10">
                                       <div class="fs-20 opacity-60">
                                          <del>
                                          {{ productDetails.home_price }}
                                          <span v-if="productDetails.unit!=null">/{{ productDetails.unit }}</span>
                                          </del>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="row no-gutters my-2">
                                    <div class="col-2">
                                       <div class="opacity-50">Discount Price:</div>
                                    </div>
                                    <div class="col-10">
                                       <div class="">
                                          <strong class="h2 fw-600 text-primary" id='discount_price' >
                                          {{ productDetails.home_discounted_price }}
                                          </strong>
                                          <span  class="opacity-70" v-if="productDetails.unit!=null">/{{ productDetails.unit }}</span>
                                       </div>
                                    </div>
                                 </div>                              
                              </div>
                                 <div v-else class="row no-gutters mt-3">
                              <div class="col-2">
                                 <div class="opacity-50 my-2">Price:</div>
                              </div>
                              <div class="col-10">
                                 <div class="">
                                    <strong class="h2 fw-600 text-primary" id='price'>
                                       {{ productDetails.home_discounted_price }}      
                                    </strong>
                                    <span  class="opacity-70" v-if="productDetails.unit!=null">/{{ productDetails.unit }}</span>
                                 </div>
                              </div>
                           </div>
                              </template>
                              
                                <div v-if="club_point==1&&productDetails.earn_point > 0" class="row no-gutters mt-4">
                                    <div class="col-3">
                                        <div class="opacity-50 my-2">Club Point--Cashback:</div>
                                    </div> 
                                    <div class="col-9">
                                        <div class="d-inline-block rounded px-2 bg-soft-primary border-soft-primary border">
                                            <span class="strong-700">{{ productDetails.earn_point }}</span>
                                        </div>
                                    </div>
                                </div>
                          
                        <hr>
                        <form id="option-choice-form">
                           <input type="hidden" name="_token" value="g23HdCifgj7mR2HpZBvYm1R9ojfXGsI5ZWHPmpzZ">                                
                           <input type="hidden" name="id" value="5931">
                           <!-- Quantity + Add to cart -->
                           <div class="row no-gutters">
                              <div class="col-sm-2">
                                 <div class="opacity-50 my-2">Quantity:</div>
                              </div>
                              <div class="col-sm-10">
                                 <div class="product-quantity d-flex align-items-center">
                                    <div class="row no-gutters align-items-center aiz-plus-minus mr-3" style="width: 130px;">
                                       <button class="btn col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="minus" data-field="quantity" disabled="">
                                       <i class="las la-minus"></i>
                                       </button>
                                       <input type="number" name="quantity" class="col border-0 text-center flex-grow-1 fs-16 input-number" placeholder="1" value="1" min="1" max="10">
                                       <button class="btn  col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="plus" data-field="quantity">
                                       <i class="las la-plus"></i>
                                       </button>
                                    </div>
                                    <div class="avialable-amount opacity-60">
                                    <template v-if="productDetails.stock_visibility_state=='quantity'" id="available-quantity">
                                       (<span>{{ productDetails.stocks }}</span> available)
                                    </template>
                                   
                                    <template v-else-if="productDetails.stock_visibility_state=='text' && productDetails.stocks >= 1">
                                       (<span id="available-quantity">In Stock</span>)
                                    </template>
                                 
                                 </div>
                                 </div>
                             
                              </div> 
                           </div>
                           <hr>
                           <div class="row no-gutters pb-3 d-none" id="chosen_price_div">
                              <div class="col-2">
                                 <div class="opacity-50 my-2">Total Price:</div>
                              </div>
                              <div class="col-7">
                                 <div class="product-price">
                                    <strong id="chosen_price" class="h4 fw-600 text-primary">
                                    </strong>
                                 </div>
                              </div>
                              <div class="col-3">
                                 <span class="box ml-1 border-sm p-2 fs-15 shadow-sm mr-0 text-danger">&nbsp;{{productDetails.discount}}% OFF </span>
                              </div>
                           </div>
                        </form>
                     </div>
                     <div class="col-md-5 ">
                        <div class="shadow-lg px-3 py-3">
                           <div class="mt-3">
                              <div class="mb-3">
                                 আপনার সুবিধা মত কুরিয়ারের মাধ্যমে প্রডাক্ট টি ডেলিভারি নিতে পারবেন ৷  বিস্তারিত  Delivery info পেজে। কোন কারনে প্রডাক্টের মান ঠিক না থাকলে,  প্রডাক্ট রিটার্ন, রিফান্ড বা একচেন্জ সুবিধা তো থাকছে
                              </div>
                              <div class="fw-600 mb-3">
                                 <b>Product delivery within 24 hours if order is confirmed within 54 minutes</b>
                              </div>
                              <div class="fw-600 mb-3" style="color: #f05a22;">
                                 মাত্র ১০০০ টাকার পণ্য কিনলেই হোম ডেলিভারি  ফ্রী 
                              </div>
                                 <!-- <a v-if="productDetails.external_link!=null" type="button" class="btn btn-primary buy-now fw-600" :href="productDetails.external_link">
                                    <i class="la la-share"></i> {{productDetails.external_link_btn}}
                                 </a> -->
                                          
                              <div class="avialable-amount opacity-60">
                                 In Stock: <b> Qty-</b>
                                 <b> 
                                    <template v-if="productDetails.stock_visibility_state=='quantity'" id="available-quantity">
                                       (<span>{{ productDetails.stocks }}</span>)
                                    </template>
                                   
                                    <template v-else-if="productDetails.stock_visibility_state=='text' && productDetails.stocks >= 1">
                                       (<span id="available-quantity">In Stock</span>)
                                    </template>
                                 
                                  </b>
                                 <span>; Cash On Delivery: <b>Yes</b></span>
                              </div>
                              <button type="button" class="btn btn-primary mr-2 w-100 block fw-600" onclick="addToCart()">
                              <i class="las la-shopping-bag"></i>
                              Add to cart
                              </button> 
                              <button type="button" class="btn btn-primary mr-2 my-2 w-100 block buy-now fw-600" onclick="buyNow()" style="background-color: #085298; border: 1px solid #085298;">
                              <i class="la la-shopping-cart"> </i>Buy Now
                              </button>
                              <button type="button" class="btn btn-secondary out-of-stock fw-600 d-none" disabled>
                              <i class="la la-cart-arrow-down"></i> Out of Stock
                              </button>
                           </div>
                           <div class="d-table width-100 mt-3">
                              <div class="d-table-cell">
                                 <!-- Add to wishlist button -->
                                 <button type="button" class="btn pl-0 btn-link fw-600" onclick="addToWishList(5931)">
                                 <small> Add to wishlist</small> 
                                 </button>
                                 <!-- Add to compare button -->
                                 <button type="button" class="btn btn-link btn-icon-left fw-600" onclick="addToCompare(5931)">
                                 <small>   Add to compare</small> 
                                 </button>
                                 <div v-if="auth.isAuthenticated==true&&affiliteCheck==1&&user_status!=null&&user_status.status==1">

                                    <button type="button" @click="CopyToClipboard(refarral_code_url)" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" :title="copyMsg">
                                       Copy The affliate link
                                    </button>

                                    </div>
                              </div>
                           </div>
                           <div v-if="refundCheck==1"  class="d-none row no-gutters mt-3">
                              <div class="col-2">
                                 <div class="opacity-50 mt-2">Refund:</div>
                              </div>
                              <div class="col-10">
                                 <router-link :to="{name:'ReturnPolicy'}" target="_blank"> 
                                 <img v-if="refundImage!=null" :src="refundImage" height="36"> 
                                 </router-link>
                                 <router-link :to="{name:'ReturnPolicy'}" class="ml-2" target="_blank">View Policy</router-link>
                              </div>
                           </div>
                           <div class="fw-600 mb-2">
                              <b>100% Secure payment with bKash & Nagod </b>
                           </div>
                           <div class="d-none d-lg-block">
                              <div class="row">
                                 <div class="col-sm-5">
                                    <b> Ships from:</b>
                                 </div>
                                 <div class="col-sm-5">
                                    AdminDeal.com.bd
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-sm-5">
                                    <b>Sold By:</b>
                                 </div>
                                 <div class="col-sm-7">
                                    AdminDeal.com.bd
                                 </div>
                              </div>
                              <div class="row mb-3">
                                 <div class="col-sm-5">
                                    <b>Packaging from:</b>
                                 </div>
                                 <div class="col-sm-7">
                                    Shows what’s inside. 
                                 </div>
                              </div>
                           </div>
                          
                           <div class="d-lg-none">
                              <div class="row">
                                 <div class="col-sm-5">
                                    <b>Ships from:</b> AdminDeal.com.bd
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-sm-5">
                                    <b>Sold By:</b> AdminDeal.com.bd
                                 </div>
                              </div>
                              <div class="row mb-3">
                                 <div class="col-sm-5">
                                    <b> Packaging from:</b> Shows what’s inside. 
                                 </div>
                              </div>
                           </div>
                           <!-- For Mpbile end-->
                           <div class="row">
                              <div class=" col-sm-12 p-3">
                                 <b>Return policy:</b> Eligible for Return, Refund or Replacement within 7 days of receipt 
                              </div>
                           </div>
                           <div class="">
                              <b>Support:</b> Free Admin Deal tech support included
                           </div>
                           <div class=""> <br>
                              <b>Admin Deal আপনার অর্থের নিশ্চয়তা প্রদান করে, কিন্তু আপনি নিজ দায়িত্বে পণ্য ও পণ্যের মান যাচাই করুন এবং ক্লিয়ারেন্স প্রদান করুন।   Admin Deal সঠিক সচ্ছ ও বাস্তব সম্মত ক্রেতা ও বিক্রেতার জন্য।  </b>
                           </div>
                           <div class="row no-gutters mt-4">
                              <div class="col-sm-3">
                                 <div class="opacity-50 my-2">Share:</div>
                              </div>
                              <div class="col-sm-9">
                                 <div class="aiz-share"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <!--end -->
            </div>
         </div>
      </div>
   </div>
</section>
<section class="mb-4">
   <div class="container">
      <div class="row gutters-10">
         <div class="col-xl-3 order-1 order-xl-0">
            <div class="bg-white shadow-sm mb-3">
               <div class="position-relative p-3 text-left">
                  <div v-if="shopDetails.verified==true" class="absolute-top-right p-2 bg-white z-1">
                     <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
                        viewBox="0 0 287.5 442.2" width="22" height="34">
                        <polygon style="fill:#F8B517;"
                           points="223.4,442.2 143.8,376.7 64.1,442.2 64.1,215.3 223.4,215.3 " />
                        <circle style="fill:#FBD303;" cx="143.8" cy="143.8"
                           r="143.8" />
                        <circle style="fill:#F8B517;" cx="143.8" cy="143.8"
                           r="93.6" />
                        <polygon style="fill:#FCFCFD;"
                           points="143.8,55.9 163.4,116.6 227.5,116.6 175.6,154.3 195.6,215.3 143.8,177.7 91.9,215.3 111.9,154.3
                           60,116.6 124.1,116.6 " />
                     </svg>
                  </div>
                  <div class="opacity-50 fs-12 border-bottom">Sold by</div>
                  <a href="https://admindeal.com.bd/shop/Fashion-and-Beauty-Shop-222"
                     class="text-reset d-block fw-600">
                  {{  shopDetails.name }}
                  <span class="ml-2"><i class="fa fa-check-circle"
                     style="color:green"></i></span>
                  </a>
                  <div class="location opacity-70">{{ shopDetails.address }}</div>
                  <div class="text-center border rounded p-2 mt-3">
                     <div class="rating">
                        <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i>
                     </div>
                     <div class="opacity-60 fs-12">(1
                        customer reviews)
                     </div>
                  </div>
               </div>
               <div class="row no-gutters align-items-center border-top">
                  <div class="col">
                     <a href="https://admindeal.com.bd/shop/Fashion-and-Beauty-Shop-222"
                        class="d-block btn btn-soft-primary rounded-0">Visit Store</a>
                  </div>
                  <div class="col">
                     <ul class="social list-inline mb-0">
                        <li class="list-inline-item mr-0">
                           <a :href="shopDetails.facebook" class="facebook"
                              target="_blank">
                           <i class="lab la-facebook-f opacity-60"></i>
                           </a>
                        </li>
                        <li class="list-inline-item mr-0">
                           <a :href="shopDetails.google" class="google"
                              target="_blank">
                           <i class="lab la-google opacity-60"></i>
                           </a>
                        </li>
                        <li class="list-inline-item mr-0">
                           <a :href="shopDetails.twitter" class="twitter"
                              target="_blank">
                           <i class="lab la-twitter opacity-60"></i>
                           </a>
                        </li>
                        <li class="list-inline-item">
                           <a :href="shopDetails.youtube" class="youtube"
                              target="_blank">
                           <i class="lab la-youtube opacity-60"></i>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="bg-white rounded shadow-sm mb-3">
               <div class="p-3 border-bottom fs-16 fw-600">
                  Top Selling Products
               </div>
               <div class="p-3">
                  <ul class="list-group list-group-flush">
                     <li v-for="(product,index) in topSellingProducts" :key="index"  class="py-3 px-0 list-group-item border-light">
                        <div class="row gutters-10 align-items-center">
                           <div class="col-5">
                              <a href="https://admindeal.com.bd/product/black-plated-finger-ring-for-mens"
                                 class="d-block text-reset">
                              <img class="img-fit lazyload h-xxl-110px h-xl-80px h-120px"
                                 src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                                 :data-src="product.thumbnail_image"
                                 :alt="product.name">
                              </a>
                           </div>
                           <div class="col-7 text-left">
                              <h4 class="fs-13 text-truncate-2">
                                 <a href="https://admindeal.com.bd/product/black-plated-finger-ring-for-mens"
                                    class="d-block text-reset">{{ product.name }}</a>
                              </h4>
                              <div class="rating rating-sm mt-1">
                                 <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> ({{ product.rating }})
                              </div>
                              <div class="mt-2">
                                 <span
                                    class="fs-17 fw-600 text-primary">৳{{ product.base_price }}</span>
                              </div>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="col-xl-9 order-0 order-xl-1">
          
            <div class="bg-white mb-3 shadow-sm rounded">
           
                           <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="home" aria-selected="true">Description</button>
                                </li>
                                <li v-if="productDetails.video_link != null" class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#video" type="button" role="tab" aria-controls="video" aria-selected="false">Video</button>
                                </li>
                                <li v-if="productDetails.pdf != null" class="nav-item" role="presentation">
                                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#downloads" type="button" role="tab" aria-controls="downloads" aria-selected="false">Downloads</button>
                                </li>
                                <li  class="nav-item" role="presentation">
                                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">Reviews</button>
                                </li>
                            </ul>

                            <div class="tab-content" id="myTabContent">
                              <div class="tab-pane fade show active" v-html="productDetails.description" id="description" role="tabpanel" aria-labelledby="description-tab">
                              </div>
                              <div class="tab-pane fade" id="video" role="tabpanel" aria-labelledby="video-tab">
                                       
                                             <iframe class="embed-responsive-item" :src="`https://www.youtube.com/embed/`+productDetails.video_url"></iframe>
                                       
                              </div>
                              <div class="tab-pane fade" id="downloads" role="tabpanel" aria-labelledby="downloads-tab">
                                 <div class="p-4 text-center ">
                                    <a :href="productDetails.pdfLink"
                                        class="btn btn-primary">Download</a>
                                 </div>
                              </div>
                        <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                           <div class="p-4">
                              <ul class="list-group list-group-flush">
                                 
                                    
                                       <template v-for="(review,index) in productDetails.reviewsDatas" :key="index">
                                       <li v-if="review.user_id!=null" class="media list-group-item d-flex">
                                                <span class="avatar avatar-md mr-3">
                                                        <img class="lazyload"
                                                            src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"             
                                                           :data-src="review.image"
                                                         >
                                                    </span>
                                                <div class="media-body text-left">
                                                   <div class="d-flex justify-content-between">
                                                      <h3 class="fs-15 fw-600 mb-0">{{ review.user_name }}  <span style="color:green;"> ☑ Verified Purchase</span>      
                                                         <p class="rating rating-sm">
                                                         <template v-for="index in 5" :key="index">
                                                            <i v-if="index<=review.rating" class = 'las la-star active'></i>
                                                            <i v-else class = 'las la-star'></i>
                                                         </template>
                                                      <span class="opacity-60 mb-2"> (Rated:{{ review.created}}  )</span>
                                                         </p>
                                                      </h3>
                                                   </div>
                                                   <p class="comment-text">
                                                      {{review.comment}}
                                                   </p>
                                                   <div class="">
                                                   <img :src="review.image" class="lazyload h-300px mw-100 mx-auto"/>
                                                </div>
                                                </div>
                                          </li>
                                       </template>
                                       
                              </ul>

                  
                                    <div v-if="productDetails.reviews <= 0" class="text-center fs-18 opacity-70">
                                       There have been no reviews for this product yet.
                                    </div>
                              
                           </div>
                        </div>
                        </div>


                        </div>
            <div class="bg-white rounded shadow-sm">
               <div class="border-bottom p-3">
                  <h3 class="fs-16 fw-600 mb-0">
                     <span class="mr-4">Related products</span>
                  </h3>
               </div>
               <div class="p-3">
                  <div class="aiz-carousel gutters-5 half-outside-arrow" data-items="5" data-xl-items="3"
                     data-lg-items="4" data-md-items="3" data-sm-items="2" data-xs-items="2"
                     data-arrows='true' data-infinite='true'>
                     <RelatedProduct :relatedProducts="relatedProducts"></RelatedProduct>
                  </div>
               </div>
            </div>

            <div v-if="product_query_activation==1" class="bg-white rounded shadow-sm mt-3">
               <div class="border-bottom p-3">
                  <h3 class="fs-18 fw-600 mb-0">
                     <span>Product Queries ({{ totalQuery }})</span>
                  </h3>
               </div>
               <p v-if="auth.isAuthenticated==false" class="fs-14 fw-400 mb-0 ml-3 mt-2">
                  <router-link :to="{name:'login'}">Login</router-link> or
                  <router-link :to="{name:'registration'}" class="mr-1">Register</router-link>to submit your questions to seller
               </p>
               <template v-if="auth.isAuthenticated==true">
                  <div v-if="product_query_activation==1" class="query form p-3">
                  <form @submit.prevent="postQuery(productDetails.id)">
                       
                        <div class="form-group">
                           <textarea class="form-control" rows="3" v-model="query" cols="40" name="question"
                              placeholder="Write your question here..." style="resize: none;"></textarea>

                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
               </div>
            </template>
      <div class="question-area my-4   mb-0 ml-3">
         <div class="border-bottom py-3">
            <h3 class="fs-18 fw-600 mb-0">
               <span class="mr-4">My Questions</span>
            </h3>
         </div>
         <!-- @foreach ($own_product_queries as $product_query) -->
            <div v-for="(query, index) in own_questions" :key="index" class="produc-queries border-bottom">
               <div class="query d-flex my-4">
                     <span class="mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24.994"
                           height="24.981" viewBox="0 0 24.994 24.981">
                           <g id="Group_23909" data-name="Group 23909"
                                 transform="translate(18392.496 11044.037)">
                                 <path id="Subtraction_90" data-name="Subtraction 90"
                                    d="M1830.569-117.742a.4.4,0,0,1-.158-.035.423.423,0,0,1-.252-.446c0-.84,0-1.692,0-2.516v-2.2a5.481,5.481,0,0,1-2.391-.745,5.331,5.331,0,0,1-2.749-4.711c-.034-2.365-.018-4.769,0-7.094l0-.649a5.539,5.539,0,0,1,4.694-5.513,5.842,5.842,0,0,1,.921-.065q3.865,0,7.73,0l5.035,0a5.539,5.539,0,0,1,5.591,5.57c.01,2.577.01,5.166,0,7.693a5.54,5.54,0,0,1-4.842,5.506,6.5,6.5,0,0,1-.823.046l-3.225,0c-1.454,0-2.753,0-3.97,0a.555.555,0,0,0-.435.182c-1.205,1.214-2.435,2.445-3.623,3.636l-.062.062-1.005,1.007-.037.037-.069.069A.464.464,0,0,1,1830.569-117.742Zm7.37-11.235h0l1.914,1.521.817-.754-1.621-1.273a3.517,3.517,0,0,0,1.172-1.487,5.633,5.633,0,0,0,.418-2.267v-.58a5.629,5.629,0,0,0-.448-2.323,3.443,3.443,0,0,0-1.282-1.525,3.538,3.538,0,0,0-1.93-.53,3.473,3.473,0,0,0-1.905.534,3.482,3.482,0,0,0-1.288,1.537,5.582,5.582,0,0,0-.454,2.314v.654a5.405,5.405,0,0,0,.471,2.261,3.492,3.492,0,0,0,1.287,1.5,3.492,3.492,0,0,0,1.9.527,3.911,3.911,0,0,0,.947-.112Zm-.948-.9a2.122,2.122,0,0,1-1.812-.9,4.125,4.125,0,0,1-.652-2.457v-.667a4.008,4.008,0,0,1,.671-2.4,2.118,2.118,0,0,1,1.78-.863,2.138,2.138,0,0,1,1.824.869,4.145,4.145,0,0,1,.639,2.473v.673a4.07,4.07,0,0,1-.655,2.423A2.125,2.125,0,0,1,1836.991-129.881Z"
                                    transform="translate(-20217 -10901.814)" fill="#e62e04"
                                    stroke="rgba(0,0,0,0)" stroke-miterlimit="6"
                                    stroke-width="1" />
                           </g>
                        </svg></span>

                     <div class="ml-3">
                        <div class="fs-14">{{ query.question }}</div>
                        <span class="text-secondary">{{  auth.user.name  }}</span>
                     </div>
               </div>
               <div class="answer d-flex my-4">
               <span class="mt-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24.99"
                     height="24.98" viewBox="0 0 24.99 24.98">
                     <g id="Group_23908" data-name="Group 23908"
                           transform="translate(17952.169 11072.5)">
                           <path id="Subtraction_89" data-name="Subtraction 89"
                              d="M2162.9-146.2a.4.4,0,0,1-.159-.035.423.423,0,0,1-.251-.446q0-.979,0-1.958V-151.4a5.478,5.478,0,0,1-2.39-.744,5.335,5.335,0,0,1-2.75-4.712c-.034-2.355-.018-4.75,0-7.065l0-.678a5.54,5.54,0,0,1,4.7-5.513,5.639,5.639,0,0,1,.92-.064c2.527,0,5.029,0,7.437,0l5.329,0a5.538,5.538,0,0,1,5.591,5.57c.01,2.708.01,5.224,0,7.692a5.539,5.539,0,0,1-4.843,5.506,6,6,0,0,1-.822.046l-3.234,0c-1.358,0-2.691,0-3.96,0a.556.556,0,0,0-.436.182c-1.173,1.182-2.357,2.367-3.5,3.514l-1.189,1.192-.047.048-.058.059A.462.462,0,0,1,2162.9-146.2Zm5.115-12.835h3.559l.812,2.223h1.149l-3.25-8.494h-.98l-3.244,8.494h1.155l.8-2.222Zm3.226-.915h-2.888l1.441-3.974,1.447,3.972Z"
                              transform="translate(-20109 -10901.815)" fill="#f7941d"
                              stroke="rgba(0,0,0,0)" stroke-miterlimit="6"
                              stroke-width="1" />
                     </g>
                  </svg>
               </span>

                  <div class="ml-3">
                     <div class="fs-14">
                        {{ query.reply?query.reply:"Seller did not respond yet" }}
                     </div>
                     <span class=" text-secondary">
                        {{ shopDetails.name  }} </span>
                  </div>
               </div>
                     </div>
                  </div>
                     <div class="pagination-area my-4 mb-0 ml-3">
                        <div class="border-bottom py-3">
                           <h3 class="fs-18 fw-600 mb-0">
                              <span>Other Questions</span>
                           </h3>
                        </div>
                        <!-- @forelse ($product_queries as $product_query) -->
                        <template  v-if="queries.data!=null">
                           <div v-for="(otherQuery, index) in queries.data" :key="index" class="produc-queries border-bottom">
                              <div class="query d-flex  my-4">
                                    <span class="mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24.994" height="24.981"
                                          viewBox="0 0 24.994 24.981">
                                          <g id="Group_23909" data-name="Group 23909" transform="translate(18392.496 11044.037)">
                                                <path id="Subtraction_90" data-name="Subtraction 90"
                                                   d="M1830.569-117.742a.4.4,0,0,1-.158-.035.423.423,0,0,1-.252-.446c0-.84,0-1.692,0-2.516v-2.2a5.481,5.481,0,0,1-2.391-.745,5.331,5.331,0,0,1-2.749-4.711c-.034-2.365-.018-4.769,0-7.094l0-.649a5.539,5.539,0,0,1,4.694-5.513,5.842,5.842,0,0,1,.921-.065q3.865,0,7.73,0l5.035,0a5.539,5.539,0,0,1,5.591,5.57c.01,2.577.01,5.166,0,7.693a5.54,5.54,0,0,1-4.842,5.506,6.5,6.5,0,0,1-.823.046l-3.225,0c-1.454,0-2.753,0-3.97,0a.555.555,0,0,0-.435.182c-1.205,1.214-2.435,2.445-3.623,3.636l-.062.062-1.005,1.007-.037.037-.069.069A.464.464,0,0,1,1830.569-117.742Zm7.37-11.235h0l1.914,1.521.817-.754-1.621-1.273a3.517,3.517,0,0,0,1.172-1.487,5.633,5.633,0,0,0,.418-2.267v-.58a5.629,5.629,0,0,0-.448-2.323,3.443,3.443,0,0,0-1.282-1.525,3.538,3.538,0,0,0-1.93-.53,3.473,3.473,0,0,0-1.905.534,3.482,3.482,0,0,0-1.288,1.537,5.582,5.582,0,0,0-.454,2.314v.654a5.405,5.405,0,0,0,.471,2.261,3.492,3.492,0,0,0,1.287,1.5,3.492,3.492,0,0,0,1.9.527,3.911,3.911,0,0,0,.947-.112Zm-.948-.9a2.122,2.122,0,0,1-1.812-.9,4.125,4.125,0,0,1-.652-2.457v-.667a4.008,4.008,0,0,1,.671-2.4,2.118,2.118,0,0,1,1.78-.863,2.138,2.138,0,0,1,1.824.869,4.145,4.145,0,0,1,.639,2.473v.673a4.07,4.07,0,0,1-.655,2.423A2.125,2.125,0,0,1,1836.991-129.881Z"
                                                   transform="translate(-20217 -10901.814)" fill="#e62e04" stroke="rgba(0,0,0,0)"
                                                   stroke-miterlimit="10" stroke-width="1" />
                                          </g>
                                       </svg></span>

                                    <div class="ml-3 mt-0 p-0">
                                       <div class="fs-14">{{ otherQuery.question }}</div>
                                       <span class="text-secondary">{{ otherQuery.user_name }}</span>
                                    </div>
                              </div>
                              <div class="answer d-flex  my-4">
                                    <span class="mt-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24.99" height="24.98"
                                          viewBox="0 0 24.99 24.98">
                                          <g id="Group_23908" data-name="Group 23908" transform="translate(17952.169 11072.5)">
                                                <path id="Subtraction_89" data-name="Subtraction 89"
                                                   d="M2162.9-146.2a.4.4,0,0,1-.159-.035.423.423,0,0,1-.251-.446q0-.979,0-1.958V-151.4a5.478,5.478,0,0,1-2.39-.744,5.335,5.335,0,0,1-2.75-4.712c-.034-2.355-.018-4.75,0-7.065l0-.678a5.54,5.54,0,0,1,4.7-5.513,5.639,5.639,0,0,1,.92-.064c2.527,0,5.029,0,7.437,0l5.329,0a5.538,5.538,0,0,1,5.591,5.57c.01,2.708.01,5.224,0,7.692a5.539,5.539,0,0,1-4.843,5.506,6,6,0,0,1-.822.046l-3.234,0c-1.358,0-2.691,0-3.96,0a.556.556,0,0,0-.436.182c-1.173,1.182-2.357,2.367-3.5,3.514l-1.189,1.192-.047.048-.058.059A.462.462,0,0,1,2162.9-146.2Zm5.115-12.835h3.559l.812,2.223h1.149l-3.25-8.494h-.98l-3.244,8.494h1.155l.8-2.222Zm3.226-.915h-2.888l1.441-3.974,1.447,3.972Z"
                                                   transform="translate(-20109 -10901.815)" fill="#f7941d" stroke="rgba(0,0,0,0)"
                                                   stroke-miterlimit="10" stroke-width="1" />
                                          </g>
                                       </svg>
                                    </span>
                                    <div class="ml-3 mt-0 p-0">
                                       <div class="fs-14">
                                          {{ otherQuery.reply?otherQuery.reply:"Seller did not respond yet" }}
                                       </div>
                                       <span class=" text-secondary"> {{ otherQuery.seller_name  }} 
                                       </span>
                                    </div>
                              </div>
                           </div>
                        </template>
                          
                        <!-- @empty -->
                           <template v-else>
                              <p>No none asked to seller yet</p>
                           </template>
                        <!-- @endforelse -->
                        <div class="aiz-pagination py-2">
                           <!-- {{ $product_queries->links() }} -->
                        </div>
                    </div>
            </div>
         </div>
           
      </div>
   </div>
</section> 

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import RelatedProduct from "./RelatedProducts.vue";
import { ratingGenerator } from '@/HelpersFunction/Helpers';
import axios from "axios";
import 'swiper/css';
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
// import './style.css';
import {FreeMode,Navigation,Thumbs} from 'swiper';
import { ref } from 'vue'
export default {
   props:['slug'],
   components:{RelatedProduct, Swiper, SwiperSlide,},
       data(){
        return{
          auth:{
                isAuthenticated: false,
                user: {},
            },
           productDetails:[],
           shopDetails:[],
           relatedProducts:[],
           topSellingProducts:[],
           thumbsSwiper:null,
           modules: [FreeMode,Navigation,Thumbs],
           zoomLevel: 1,
           photosLength:"",
           vendorActivation:"",
           coversationSystem:"",
           brandData:"",
           club_point:"",
           affiliteCheck:"",
           user_status:"",
           refarral_code_url:"",
           copyMsg:"Copy the link",
           refundCheck:"",
           refundImage:"",
           product_query_activation:"",
           totalQuery:"",
           queries:"",
           query:"",
           own_questions:[],
        }
       },
       created(){
         var user = localStorage.getItem("user");
        if(user !== null){
            user = JSON.parse(user);
            this.auth.isAuthenticated = true;
           }   this.auth.user = user;
       },
       mounted(){
        this.getProductDetails(this.rootDomain);
       },
       computed: {
      zoomStyle() {
         return {
         transform: `scale(${this.zoomLevel})`
         }
      }
   },
       methods:{
         getProductDetails(rootDomain){
                    let token='';
                    if(this.auth.isAuthenticated==true){
                      token = this.auth.user.access_token;
                    }
                 
                     axios.get(rootDomain+'vueweb/product/'+this.slug,{
                        params:{
                           token:token,
                           selfDomain:this.selfDomain,

                        }
                     })
                     .then((response)=>{
                        this.productDetails = response.data[0].data[0];
                        this.photosLength=this.productDetails.photos.length;
                        this.shopDetails = response.data[1];
                        this.relatedProducts = response.data[2].data;
                        this.topSellingProducts = response.data[3].data;
                        this.vendorActivation = response.data[4];
                        this.coversationSystem = response.data[5];         
                        this.brandData = response.data[0].data[0].brand;
                        this.club_point = response.data[6];
                        this.affiliteCheck = response.data[7];

                        if(this.auth.isAuthenticated){
                           this.user_status = this.auth.user.user_status;
                        }
                        this.refarral_code_url = response.data[8];
                        this.refundCheck = response.data[9];
                        this.refundImage = response.data[10];
                        this.product_query_activation = response.data[11];
                        this.totalQuery = response.data[12];
                        this.queries = response.data[13];
                        this.own_questions = response.data[14];

                        
                     })
               },
               brandSlug(brand_slug){
                  this.$router.push({
                     name: "Brand",
                     params: {
                     brand_slug: brand_slug
               }
               });
               },
                setThumbsSwiper(swiper){
                  this.thumbsSwiper = swiper;
               },
               zoomIn() {
                  this.zoomLevel += 0.5
               },
               zoomOut() {
                  this.zoomLevel -= 0.5
               },
               async CopyToClipboard(url){
                  // navigator.clipboard.writeText(url);
                  // try {
                  //    await navigator.clipboard.writeText(url);
                  // } catch (e) {
                  //    console.log(e);
                  // }
                  const dummy = document.createElement("textarea");
                  document.body.appendChild(dummy);
                  dummy.value = url;
                  dummy.select();
                  document.execCommand("copy");
                  document.body.removeChild(dummy);
                  this.copyMsg = 'copied';
               },
               postQuery(productId){
                  axios.get(this.selfDomain+'vueweb/product-queries',{
                     headers: {
                        token: this.auth.user.access_token,
                        Authorization: "Bearer " + this.auth.user.access_token,
                        question:this.query,
                        productId:productId
                     }
                  })
                  .then((response) =>{
                     this.getProductDetails(this.rootDomain);
                     this.query = "";
                  }).catch((err)=>{
                     console.log(err)
                  })
               }
          }   
}
</script>

<style>
.swiper.swiper-initialized.swiper-horizontal.swiper-pointer-events.mySwiper2.swiper-backface-hidden {
    text-align: center;
    width: 400px!important;
    height: 400px;
}
.swiper.swiper-initialized.swiper-horizontal.swiper-pointer-events.swiper-free-mode.swiper-watch-progress.mySwiper.swiper-thumbs.swiper-backface-hidden {
    width: 399px;
}
</style>