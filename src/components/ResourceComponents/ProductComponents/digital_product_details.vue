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
                             <div class="col-auto ml" style="color: #2abbe8;">
                                <small class="mr-2 opacity-50">Estimate Shipping Time: </small>1 Days
                             </div>
                             <div class="col-12 " style="color: #2abbe8;">
                                <span class="rating">
                                <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i>
                                </span>
                                <span class="ml-1 opacity-50" id='review'>(1 </span>reviews) <br>
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
                                <a href="" v-if="productDetails.added_by=='seller'" class="text-reset" id='shop_name'>{{ productDetails.shop_name }}</a>
                                <span v-else>
                                   Admin store
                                </span>
                             </div>
                             <div class="col-auto">
                                <button class="btn btn-sm btn-secondary" onclick="show_chat_modal()">Chat With Seller</button>
                             </div>
                             <div class="col-auto">
                                <a href="https://admindeal.com.bd/brand/others">
                                <img  src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" :data-src="productDetails.shop_logo" id='brand_name' alt="Others" height="30">
                                </a>
                             </div>
                          </div>
                          <br>
                          <div> <a href="https://www.admindeal.com.bd/support_ticket"> ❌ Report to Admin incorrect product information!</a></div>
                          <hr>
                          <div class="row no-gutters mt-3">
                             <div class="col-2">
                                <div class="opacity-50 my-2">Price:</div>
                             </div>
                             <div class="col-10">
                                <div class="fs-20 opacity-60">
                                   <del>
                                   {{ productDetails.main_price }}
                                   <span>/{{ productDetails.stroked_price }}</span>
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
                                   {{ productDetails.main_price }}
                                   </strong>
                                   <span class="opacity-70">/{{ productDetails.stroked_price }}</span>
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
                                         (<span id="available-quantity">{{ productDetails.current_stock }}</span> available)
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
                                <div class="avialable-amount opacity-60">
                                   In Stock: <b> Qty-</b>
                                   <b> <span id="available-quantity">{{ productDetails.current_stock }}</span> </b>
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
                                </div>
                             </div>
                             <div class="row no-gutters mt-3">
                                <div class="col-2">
                                   <div class="opacity-50 mt-2">Refund:</div>
                                </div>
                                <div class="col-10">
                                   <a href="https://admindeal.com.bd/return-policy" target="_blank"> 
                                   <img src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/kusQW2StA1ew5dmPKCxaWQ8Ss8kUP6yFtiUSriik.jpg" height="36"> 
                                   </a>
                                   <a href="https://admindeal.com.bd/return-policy" class="ml-2" target="_blank">View Policy</a>
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
                             <!-- For pc start
                                <div class="d-none d-lg-block"">
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
                                      For pc end-->
                             <!-- For Mpbile start-->
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
                       <li class="py-3 px-0 list-group-item border-light">
                          <div class="row gutters-10 align-items-center">
                             <div class="col-5">
                                <a href="https://admindeal.com.bd/product/black-plated-finger-ring-for-mens"
                                   class="d-block text-reset">
                                <img class="img-fit lazyload h-xxl-110px h-xl-80px h-120px"
                                   src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                                   data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/6jd31Jllm3wilh5bOOEQf35TP9twopPJFHfszYIC.png"
                                   alt="Black Plated Finger Ring For Mens">
                                </a>
                             </div>
                             <div class="col-7 text-left">
                                <h4 class="fs-13 text-truncate-2">
                                   <a href="https://admindeal.com.bd/product/black-plated-finger-ring-for-mens"
                                      class="d-block text-reset">Black Plated Finger Ring For Mens</a>
                                </h4>
                                <div class="rating rating-sm mt-1">
                                   <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
                                </div>
                                <div class="mt-2">
                                   <span
                                      class="fs-17 fw-600 text-primary">৳80</span>
                                </div>
                             </div>
                          </div>
                       </li>
                       <li class="py-3 px-0 list-group-item border-light">
                          <div class="row gutters-10 align-items-center">
                             <div class="col-5">
                                <a href="https://admindeal.com.bd/product/luxury-black-ceramic-magnetic-therapy-germanium-health-link-bracelet"
                                   class="d-block text-reset">
                                <img class="img-fit lazyload h-xxl-110px h-xl-80px h-120px"
                                   src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                                   data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/cqA8ferm933lc7TfidTPaQFd08enXWHliyyUKC7G.jpg"
                                   alt="Luxury Black Ceramic Magnetic Therapy Germanium Health Link Bracelet">
                                </a>
                             </div>
                             <div class="col-7 text-left">
                                <h4 class="fs-13 text-truncate-2">
                                   <a href="https://admindeal.com.bd/product/luxury-black-ceramic-magnetic-therapy-germanium-health-link-bracelet"
                                      class="d-block text-reset">Luxury Black Ceramic Magnetic Therapy Germanium Health Link Bracelet</a>
                                </h4>
                                <div class="rating rating-sm mt-1">
                                   <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
                                </div>
                                <div class="mt-2">
                                   <span
                                      class="fs-17 fw-600 text-primary">৳1,500</span>
                                </div>
                             </div>
                          </div>
                       </li>
                       <li class="py-3 px-0 list-group-item border-light">
                          <div class="row gutters-10 align-items-center">
                             <div class="col-5">
                                <a href="https://admindeal.com.bd/product/mini-star-mirror"
                                   class="d-block text-reset">
                                <img class="img-fit lazyload h-xxl-110px h-xl-80px h-120px"
                                   src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                                   data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/CCpYpanPqwGAjgnYxqiZOVfPCB4h66LD9k8CqEgs.jpg"
                                   alt="MINI STAR MIRROR">
                                </a>
                             </div>
                             <div class="col-7 text-left">
                                <h4 class="fs-13 text-truncate-2">
                                   <a href="https://admindeal.com.bd/product/mini-star-mirror"
                                      class="d-block text-reset">MINI STAR MIRROR</a>
                                </h4>
                                <div class="rating rating-sm mt-1">
                                   <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
                                </div>
                                <div class="mt-2">
                                   <span
                                      class="fs-17 fw-600 text-primary">৳500</span>
                                </div>
                             </div>
                          </div>
                       </li>
                       <li class="py-3 px-0 list-group-item border-light">
                          <div class="row gutters-10 align-items-center">
                             <div class="col-5">
                                <a href="https://admindeal.com.bd/product/solid-polished-stainless-steel-square-black-fancy-rings"
                                   class="d-block text-reset">
                                <img class="img-fit lazyload h-xxl-110px h-xl-80px h-120px"
                                   src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                                   data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/djX01lYPGimBMeFMt8zRftNcwKWQRKGceXKWFWFY.jpg"
                                   alt="Solid Polished Stainless Steel Square Black Fancy Rings">
                                </a>
                             </div>
                             <div class="col-7 text-left">
                                <h4 class="fs-13 text-truncate-2">
                                   <a href="https://admindeal.com.bd/product/solid-polished-stainless-steel-square-black-fancy-rings"
                                      class="d-block text-reset">Solid Polished Stainless Steel Square Black Fancy Rings</a>
                                </h4>
                                <div class="rating rating-sm mt-1">
                                   <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
                                </div>
                                <div class="mt-2">
                                   <span
                                      class="fs-17 fw-600 text-primary">৳200</span>
                                </div>
                             </div>
                          </div>
                       </li>
                       <li class="py-3 px-0 list-group-item border-light">
                          <div class="row gutters-10 align-items-center">
                             <div class="col-5">
                                <a href="https://admindeal.com.bd/product/black-luxurious-bracelet-for-men"
                                   class="d-block text-reset">
                                <img class="img-fit lazyload h-xxl-110px h-xl-80px h-120px"
                                   src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                                   data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/FQfgJxNCGwDti2zC2mgHWUw0trmNpSOhKpdaOek1.jpg"
                                   alt="Black Luxurious Bracelet For Men">
                                </a>
                             </div>
                             <div class="col-7 text-left">
                                <h4 class="fs-13 text-truncate-2">
                                   <a href="https://admindeal.com.bd/product/black-luxurious-bracelet-for-men"
                                      class="d-block text-reset">Black Luxurious Bracelet For Men</a>
                                </h4>
                                <div class="rating rating-sm mt-1">
                                   <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
                                </div>
                                <div class="mt-2">
                                   <span
                                      class="fs-17 fw-600 text-primary">৳3,000</span>
                                </div>
                             </div>
                          </div>
                       </li>
                       <li class="py-3 px-0 list-group-item border-light">
                          <div class="row gutters-10 align-items-center">
                             <div class="col-5">
                                <a href="https://admindeal.com.bd/product/morphe-x-jaclyn-hill-all-the-blends-5-piece-bruh-set"
                                   class="d-block text-reset">
                                <img class="img-fit lazyload h-xxl-110px h-xl-80px h-120px"
                                   src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                                   data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/LUgOM4uttfhGNTsyknoZ5RKIK9RcNOxMqRfa5IC9.jpg"
                                   alt="MORPHE X JACLYN HILL ALL THE BLENDS 5-PIECE BRUH SET">
                                </a>
                             </div>
                             <div class="col-7 text-left">
                                <h4 class="fs-13 text-truncate-2">
                                   <a href="https://admindeal.com.bd/product/morphe-x-jaclyn-hill-all-the-blends-5-piece-bruh-set"
                                      class="d-block text-reset">MORPHE X JACLYN HILL ALL THE BLENDS 5-PIECE BRUH SET</a>
                                </h4>
                                <div class="rating rating-sm mt-1">
                                   <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
                                </div>
                                <div class="mt-2">
                                   <span
                                      class="fs-17 fw-600 text-primary">৳2,500</span>
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
                 <div class="nav border-bottom aiz-nav-tabs">
                    <a href="#tab_default_1" data-toggle="tab"
                       class="p-3 fs-16 fw-600 text-reset active show">Description</a>
                    <a href="#tab_default_2" data-toggle="tab"
                       class="p-3 fs-16 fw-600 text-reset">Video</a>
                    <a href="#tab_default_4" data-toggle="tab"
                       class="p-3 fs-16 fw-600 text-reset">reviews</a>
                 </div>
                 <div class="tab-content pt-0">
                    <div class="tab-pane fade active show" id="tab_default_1">
                       <div class="p-4">
                          <div v-html="productDetails.description" class="mw-100 overflow-hidden text-left aiz-editor-data">
                          </div>
                       </div>
                    </div>
                    <div class="tab-pane fade" id="tab_default_2">
                       <div class="p-4">
                          <div class="embed-responsive embed-responsive-16by9">
                             <iframe class="embed-responsive-item"
                                src="https://www.youtube.com/embed/_AGP-KEyEJE"></iframe>
                          </div>
                       </div>
                    </div>
                    <div class="tab-pane fade" id="tab_default_3">
                       <div class="p-4 text-center ">
                          <a href="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                             class="btn btn-primary">Download</a>
                       </div>
                    </div>
                    <div class="tab-pane fade" id="tab_default_4">
                       <div class="p-4">
                          <ul class="list-group list-group-flush">
                             <li class="media list-group-item d-flex">
                                <span class="avatar avatar-md mr-3">
                                <img class="lazyload"
                                   src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                                  
                                   data-src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" >
                                </span>
                                <div class="media-body text-left">
                                   <div class="d-flex justify-content-between">
                                      <h3 class="fs-15 fw-600 mb-0">
                                         Mrs. Azimon Begum  <span style="color:green;"> ☑ Verified Purchase</span>
                                         <p class="rating rating-sm">
                                            <i class="las la-star active"></i>
                                            <i class="las la-star active"></i>
                                            <i class="las la-star active"></i>
                                            <i class="las la-star active"></i>
                                            <i class="las la-star active"></i>
                                            <span class="opacity-60 mb-2"> (Rated:
                                            27-09-2022)</span>
                                         </p>
                                      </h3>
                                      <!-- my style Review <span class="rating rating-sm">
                                         <i class="las la-star active"></i>
                                         <i class="las la-star active"></i>
                                         <i class="las la-star active"></i>
                                         <i class="las la-star active"></i>
                                         <i class="las la-star active"></i>
                                           </span> --> 
                                   </div>
                                   <!-- my review design <div class="opacity-60 mb-2">
                                      27-09-2022</div> --> 
                                   <p class="comment-text">
                                      অসাধারণ এক্সিলেন্ট। খুব ভালো একটা প্রোডাক্টক। আমি খুব খুশি হলাম। আপনারা চাইলে নিতে পারেন।
                                   </p>
                                   <div class="">
                                      <img src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" class="lazyload h-300px mw-100 mx-auto"/>
                                   </div>
                                </div>
                             </li>
                          </ul>
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
              <div class="bg-white rounded shadow-sm mt-3">
                 <div class="border-bottom p-3">
                    <h3 class="fs-18 fw-600 mb-0">
                       <span>Product Queries (0)</span>
                    </h3>
                 </div>
                 <p class="fs-14 fw-400 mb-0 ml-3 mt-2"><a
                    href="https://admindeal.com.bd/users/login">Login</a> or <a class="mr-1"
                    href="https://admindeal.com.bd/users/registration">Register</a>to submit your questions to seller
                 </p>
                 <div class="pagination-area my-4 mb-0 ml-3">
                    <div class="border-bottom py-3">
                       <h3 class="fs-18 fw-600 mb-0">
                          <span>Other Questions</span>
                       </h3>
                    </div>
                    <p>No none asked to seller yet</p>
                    <div class="aiz-pagination py-2">
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
  import axios from "axios";
  import 'swiper/css';
  import "swiper/css/free-mode"
  import "swiper/css/navigation"
  import "swiper/css/thumbs"
  // import './style.css';
  import {FreeMode,Navigation,Thumbs} from 'swiper';
  export default {
     props:['slug'],
     components:{RelatedProduct, Swiper, SwiperSlide,},
         data(){
          return{
             productDetails:[],
             shopDetails:[],
             relatedProducts:[],
             thumbsSwiper:null,
             modules: [FreeMode,Navigation,Thumbs],
             zoomLevel: 1,
             photosLength:"",
          }
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
                       axios.get(rootDomain+'vueweb/product/'+this.slug)
                       .then((response)=>{
                          this.productDetails = response.data[0].data[0];
                          this.photosLength=this.productDetails.photos.length;
                          this.shopDetails = response.data[1];
                          this.relatedProducts = response.data[2].data;
                          // console.log(response.data[2].data);
                       })
                 },
                 setThumbsSwiper(swiper){
                    this.thumbsSwiper = swiper;
                 },
                 zoomIn() {
                    this.zoomLevel += 0.5
                 },
                 zoomOut() {
                    this.zoomLevel -= 0.5
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