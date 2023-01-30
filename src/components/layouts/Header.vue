<template>
  
  <div class="top-navbar bg-white  border-bottom border-soft-secondary z-1035">
  <div class="container">
    <div class="row">
      <div class="col-lg-3  col">
        <ul class="list-inline d-flex justify-content-between justify-content-lg-start mb-0">
          <li class="list-inline-item dropdown mr-3" id="lang-change">
            <a href="https://play.google.com/store/apps/developer?id=AdminDeal+Mobile" class="dropdown-toggle text-reset py-2" data-display="static"> Our Apps </a>
          </li>
          <li class="list-inline-time mx-auto d-lg-none">
            <a href="tel:(+88) 09649649649" class="text-reset d-inline-block opacity-60 py-2">
              <i class="la la-phone"></i>
              <span></span>
              <span>(+88) 09649649649</span>
            </a>
          </li>
          <li class="list-inline-item dropdown " id="lang-change">
            <router-link :to="{name:'blog'}" class="dropdown-toggle text-reset py-2" data-display="static"> Blog </router-link>
          </li>
        </ul>
      </div>
      <div class="col-lg-9 col-md-9 text-right d-none d-lg-block">
        <ul class="list-inline mb-0 h-100 d-flex justify-content-end align-items-center">
          <!-- Blog Hide <li class="list-inline-item mr-3 border-right border-left-0 pr-3 pl-0 text-hover"><a href="/blog" class="text-reset d-inline-block  py-2"><i class=""></i>
                                  Blog
                            </a></li> -->
          <li class="list-inline-item mr-3 border-right border-left-0 pr-3 pl-0 text-hover">
            <a href="https://dealbox.com.bd/" target="_blank" class="text-reset d-inline-block  py-2">
              <i class=""></i> Deal Box </a>
          </li>
          <li class="list-inline-item mr-3 border-right border-left-0 pr-3 pl-0 text-hover">
            <router-link :to="{name:'AllJobs'}" class="text-reset d-inline-block  py-2">
              <i class=""></i> Service </router-link>
          </li>
          <li class="list-inline-item mr-3 border-right border-left-0 pr-3 pl-0 text-hover">
            <router-link :to="{name:'trackOrder'}" class="text-reset d-inline-block  py-2">
              <i class=""></i> Track Your Order </router-link>
          </li>
          <li v-if="!auth.isAuthenticated" class="list-inline-item mr-3 border-right border-left-0 pr-3 pl-0 text-hover">
            <router-link :to="{name:'affiliateRegistration'}" class="text-reset d-inline-block  py-2">
              <i class=""></i> Affiliate Reg
            </router-link>
          </li>
          <li v-if="!auth.isAuthenticated" class="list-inline-item mr-3 border-right border-left-0 pr-3 pl-0 text-hover">
            <router-link :to="{name:'sellerRegistration'}" class="text-reset d-inline-block  py-2">
              <i class=""></i> Seller Reg
            </router-link>
          </li>
          <li class="list-inline-item mr-3 border-right border-left-0 pr-3 pl-0 text-hover">
            <router-link :to="{name:'trackOrder'}" class="text-reset d-inline-block  py-2">
              <i class=""></i> Add Product{{ message }} </router-link>
          </li>
          <!-- My code start -->
          <li class="list-inline-item mr-3 border-right border-left-0 pr-3 pl-0 text-hover">
            <router-link :to="{name: 'UserConversations'}" class="text-reset d-inline-block  py-2">
              <i class=""></i> Inbox 
            </router-link>
          </li>
          <!-- My code end -->
          <!-- Mostak vai code hide for Computer header inbox  start
                        
                         
                   
                   End -->
          <li v-if="!auth.isAuthenticated" class="list-inline-item mr-3 border-right border-left-0 pr-3 pl-0">
            <router-link :to="{name:'login'}" class="text-reset d-inline-block opacity-60 py-2">Login</router-link>
          </li>
          <li v-if="auth.isAuthenticated && auth.user.type == 'customer'" class="list-inline-item mr-3 border-right border-left-0 pr-3 pl-0">
            <router-link :to="{name:'UserDashboard'}" class="text-reset d-inline-block opacity-60 py-2">Dashboard</router-link>
          </li>
          <li v-if="!auth.isAuthenticated" class="list-inline-item">
            <router-link :to="{name:'registration'}" class="text-reset d-inline-block opacity-60 py-2">Join Now</router-link>
          </li>
          <li v-if="auth.isAuthenticated" class="list-inline-item">
            <a @click="logout()" href="javascript:void(0)" class="text-reset d-inline-block opacity-60 py-2">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<!-- END Top Bar -->
<header class=" sticky-top  z-1020 bg-white border-bottom shadow-sm">
  <div class="position-relative logo-bar-area z-1">
    <div class="container">
      <div class="d-flex align-items-center">
        <div class="col-auto col-xl-3 pl-0  d-flex align-items-center">
          <i class="d-lg-none fa fa-align-justify fs-24 pr-3 opacity-80" data-toggle="class-toggle" data-backdrop="static" data-target=".aiz-mobile-side-nav-cat"></i>
          <router-link class="d-block py-20px mr-3 ml-0" :to="{name:'home'}">
             <p>Logo Here</p>
            <!-- <img src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/wX5s4T1KUanpH8wLrFqzcOtElCZ7w2WNYf1MPIGq.webp" alt="Admin Deal" class="mw-100 h-20px h-md-40px" height="40"> -->
          </router-link>
        </div>
        <div class="flex-grow-1 front-header-search d-flex align-items-center bg-white" style="max-width: 750px;">
          <div class="position-relative flex-grow-1">
            <form @submit.prevent="searchSubmit()" method="GET" class="stop-propagation">
              <div class="d-flex position-relative align-items-center">
                <div class="d-lg-none" data-toggle="class-toggle" data-target=".front-header-search">
                  <button class="btn px-2" type="button">
                    <i class="la la-2x la-long-arrow-left"></i>
                  </button>
                </div>
                <div class="input-group">
                  <input @click="search(true)" @keyup="search(true)" @blur="search(false)" type="text" class="border-0 border-lg form-control" id="search" name="keyword" placeholder="I am shopping for..." autocomplete="off">
                  <div class="input-group-append d-none d-lg-block">
                    <button class="btn btn-primary" type="submit">
                      <i class="la la-search la-flip-horizontal fs-18"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div class="typed-search-box stop-propagation document-click-d-none d-none bg-white rounded shadow-lg position-absolute left-0 top-100 w-100" style="min-height: 200px">
              <div class="search-preloader absolute-top-center">
                <div class="dot-loader">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="search-nothing d-none p-3 text-center fs-16"></div>
              <div id="search-content" class="text-left">



                <div v-if="categories.length>0" class="">
                      <div class="px-2 py-1 text-uppercase fs-10 text-right text-muted bg-soft-secondary">{{'Category Suggestions'}}</div>
                      <ul class="list-group list-group-raw">
                        <template v-for="(category, index) in categories" :key="index">
                              <li class="list-group-item py-1">
                                  <a class="text-reset hov-text-primary" href="#">{{ category.name }}</a>
                              </li>
                        </template>
                      </ul>
                  </div>
                  <div v-if="products.length>0" class="">
                          <div class="px-2 py-1 text-uppercase fs-10 text-right text-muted bg-soft-secondary">{{'Products'}}</div>
                          <ul class="list-group list-group-raw">
                                  <template v-for="(product, index) in products" :key="index">
                                    <li class="list-group-item">
                                      <a class="text-reset" href="#">
                                          <div class="d-flex search-product align-items-center">
                                              <div class="mr-3">
                                                  <img class="size-40px img-fit rounded" :src="product.thumbnail_image">
                                              </div>
                                              <div class="flex-grow-1 overflow--hidden minw-0">
                                                  <div class="product-name text-truncate fs-14 mb-5px">
                                                      {{  product.name  }}
                                                  </div>
                                                  <div class="">
                                                      <del v-if="product.base_price != product.base_discounted_price" class="opacity-60 fs-15">{{ product.base_price }}</del>
                                                      <span class="fw-600 fs-16 text-primary">{{ product.discounted_base_price }}</span>
                                                  </div>
                                              </div>
                                          </div>
                                      </a>
                                    </li>
                                </template>
                          </ul>
                  </div>
                      <div v-if="vendorSystemActivation==1" class="">
                            <div v-if="shops.length" class="px-2 py-1 text-uppercase fs-10 text-right text-muted bg-soft-secondary">{{'Shops'}}</div>
                              <ul class="list-group list-group-raw">
                                    <template v-for="(shop, index) in shops" :key="index">
                                      <li class="list-group-item">
                                          <a class="text-reset" href="#">
                                              <div class="d-flex search-product align-items-center">
                                                  <div class="mr-3">
                                                      <img class="size-40px img-fit rounded" :src="shop.logo">
                                                  </div>
                                                  <div class="flex-grow-1 overflow--hidden">
                                                      <div class="product-name text-truncate fs-14 mb-5px">
                                                          {{ shop.name }}
                                                      </div>
                                                      <div class="opacity-60">
                                                          {{ shop.address }}
                                                      </div>
                                                  </div>
                                              </div>
                                          </a>
                                      </li>
                                    </template>
                              </ul>
                      </div>



              </div>
            </div>
          </div>
        </div>
        <div class="d-flex  ml-auto">
          <div class="d-none d-lg-none ml-3 mr-0">
            <div class="nav-search-box">
              <a href="#" class="nav-box-link">
                <i class="la la-search la-flip-horizontal d-inline-block nav-box-icon"></i>
              </a>
            </div>
          </div>
          <div class="d-lg-none  mr-0">
            <a class="text-reset" href="javascript:void(0);" data-toggle="class-toggle" data-target=".front-header-search">
              <i class="las la-search la-flip-horizontal la-2x"></i>
            </a>
          </div>
          <div class="d-lg-none mr-0">
            <div class="" id="wishlist">
              <a href="https://admindeal.com.bd/wishlists" class="d-flex align-items-center text-reset">
                <i class="la la-heart-o la-2x opacity-80"></i>
                <span class="flex-grow-1 ml-1">
                  <span class="badge badge-primary badge-inline badge-pill">0</span>
                  <span class="nav-box-text d-none d-xl-block opacity-70">Wishlist</span>
                </span>
              </a>
            </div>
          </div>
          <div class="d-lg-none align-self-stretch  mr-0" data-hover="dropdown">
            <div class="nav-cart-box dropdown h-100" id="cart_items">
              <a href="javascript:void(0)" class="d-flex align-items-center text-reset h-100" data-toggle="dropdown" data-display="static">
                <i class="la la-shopping-cart la-2x opacity-80"></i>
                <span class="flex-grow-1 ml-1">
                  <span class="badge badge-primary badge-inline badge-pill cart-count">0</span>
                  <span class="nav-box-text d-none d-xl-block opacity-70">Cart</span>
                </span>
              </a>
              <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 stop-propagation">
                <div class="text-center p-3">
                  <i class="las la-frown la-3x opacity-60 mb-3"></i>
                  <h3 class="h6 fw-700">Your Cart is empty</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-none d-lg-block  align-self-stretch   ml-3 mr-0 pt-3 pl-5" style="padding-left:2rem !important">
          <div class="text-right fw-600"> Customer Care: (+88) 09 649649649 </div>
          <div> Email: support@admindeal.com.bd </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white py-1 ">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3  py-1 d-none d-lg-block" id="category-menu-icon">
          <span class="fw-600 bg-white hov-bg-primary px-2 py-2 hov-text-white text-center ">
            <li class="list-inline-item pr-4 w-100" id="category-menu-icon">
              <i class="fa fa-bars fs-13 pr-2"></i> TOP CATAGORIES 
              <router-link :to="{name:'Categories'}" class="text-reset">
                <span class="d-none d-lg-inline-block">&lt; See All ></span>
              </router-link>
              <i class="fa fa-caret-down pl-2"></i>
            </li>
          </span>
        </div>
        <div class="col-lg-6 ">
          <ul class="list-inline mb-0 pl-0 mobile-hor-swipe text-center">

            <li v-for="(name,indexCateName) in navCategoriesName" :key="indexCateName" class="list-inline-item mr-0">
              <span class="bg-white hov-bg-primary px-2 py-2 hov-text-white">
                <a style="cursor:pointer" @click="receiveUrl(navCategoriesLinks[indexCateName])" class="fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset"> {{ name }} </a>
              </span>
            </li>

          </ul>
        </div>
        <div class="col-lg-3 col-md-3 d-flex   align-items-center d-none ">
          <div class="d-none d-lg-block ml-3 mr-0">
            <div class="" id="compare">
              <a href="https://admindeal.com.bd/compare" class="d-flex align-items-center text-reset">
                <i class="la la-refresh la-2x opacity-80"></i>
                <span class="flex-grow-1 ml-1">
                  <span class="badge badge-primary badge-inline badge-pill">{{ 0 }}</span>
                  <span class="nav-box-text d-none d-xl-block opacity-70">Compare</span>
                </span>
              </a>
            </div>
          </div>
          <div class="d-none d-lg-block ml-3 mr-0">
            <div class="" id="wishlist">
              <a href="https://admindeal.com.bd/wishlists" class="d-flex align-items-center text-reset">
                <i class="la la-heart-o la-2x opacity-80"></i>
                <span class="flex-grow-1 ml-1">
                  <span class="badge badge-primary badge-inline badge-pill">{{ totalWishlist }}</span>
                  <span class="nav-box-text d-none d-xl-block opacity-70">Wishlist</span>
                </span>
              </a>
            </div>
          </div>
          <div class="d-none d-lg-block  align-self-stretch ml-3 mr-0" data-hover="dropdown">
            <div class="nav-cart-box dropdown h-100" id="cart_items">
              <a href="javascript:void(0)" class="d-flex align-items-center text-reset h-100" data-toggle="dropdown" data-display="static">
                <i class="la la-shopping-cart la-2x opacity-80"></i>
                <span class="flex-grow-1 ml-1">
                  <span class="badge badge-primary badge-inline badge-pill cart-count">{{ totalCart }}</span>
                  <span class="nav-box-text d-none d-xl-block opacity-70">Cart</span>
                </span>
              </a>
              <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 stop-propagation">
                <div class="text-center p-3">
                  <i class="las la-frown la-3x opacity-60 mb-3"></i>
                  <h3 class="h6 fw-700">Your Cart is empty</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="d-none d-lg-block ml-3 mr-0">
            <div class="">
              <router-link :to="{name:'login'}">
                <i class="fa fa-user-circle fs-24 fw-500" style="color: #fff"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hover-category-menu position-absolute w-100 top-100 left-0 right-0 d-none z-3 d-lg-none" style="margin-top: -10px;" id="hover-category-menu">
    <div class="container">
      <div class="row gutters-10 position-relative">
        <div class="col-lg-3 position-static">
          <div class="aiz-category-menu bg-white rounded  shadow-sm">
            <ul class="list-unstyled categories no-scrollbar py-2 mb-0 text-left">
              <li class="category-nav-element" data-id="4">
                <a href="https://admindeal.com.bd/category/man-woman-baby-fashion" class="text-truncate text-reset py-2 px-3 d-block">
                  <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Men&#039;s, Women&#039;s &amp; Baby&#039;s fashion" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                  <span class="cat-name">Men&#039;s, Women&#039;s &amp; Baby&#039;s fashion</span>
                </a>
                <div class="sub-cat-menu c-scrollbar-light rounded shadow-lg p-4">
                  <div class="c-preloader text-center absolute-center">
                    <i class="las la-spinner la-spin la-3x opacity-70"></i>
                  </div>
                </div>
              </li>
              <li class="category-nav-element" data-id="35">
                <a href="https://admindeal.com.bd/category/electronic-accessories-gadget" class="text-truncate text-reset py-2 px-3 d-block">
                  <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Electronic, Accessories &amp; Gadget" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                  <span class="cat-name">Electronic, Accessories &amp; Gadget</span>
                </a>
                <div class="sub-cat-menu c-scrollbar-light rounded shadow-lg p-4">
                  <div class="c-preloader text-center absolute-center">
                    <i class="las la-spinner la-spin la-3x opacity-70"></i>
                  </div>
                </div>
              </li>
              <li class="category-nav-element" data-id="36">
                <a href="https://admindeal.com.bd/category/health-beauty-personal-care" class="text-truncate text-reset py-2 px-3 d-block">
                  <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Health, Beauty &amp; Personal Care" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                  <span class="cat-name">Health, Beauty &amp; Personal Care</span>
                </a>
                <div class="sub-cat-menu c-scrollbar-light rounded shadow-lg p-4">
                  <div class="c-preloader text-center absolute-center">
                    <i class="las la-spinner la-spin la-3x opacity-70"></i>
                  </div>
                </div>
              </li>
              <li class="category-nav-element" data-id="37">
                <a href="https://admindeal.com.bd/category/mobile-computer-laptop" class="text-truncate text-reset py-2 px-3 d-block">
                  <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Mobile, Computer &amp; Laptop" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                  <span class="cat-name">Mobile, Computer &amp; Laptop</span>
                </a>
                <div class="sub-cat-menu c-scrollbar-light rounded shadow-lg p-4">
                  <div class="c-preloader text-center absolute-center">
                    <i class="las la-spinner la-spin la-3x opacity-70"></i>
                  </div>
                </div>
              </li>
              <li class="category-nav-element" data-id="38">
                <a href="https://admindeal.com.bd/category/dollar-crypto-account-vcard" class="text-truncate text-reset py-2 px-3 d-block">
                  <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Gift  Card, vCard &amp; Account" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                  <span class="cat-name">Gift Card, vCard &amp; Account</span>
                </a>
                <div class="sub-cat-menu c-scrollbar-light rounded shadow-lg p-4">
                  <div class="c-preloader text-center absolute-center">
                    <i class="las la-spinner la-spin la-3x opacity-70"></i>
                  </div>
                </div>
              </li>
              <li class="category-nav-element" data-id="39">
                <a href="https://admindeal.com.bd/category/groceries-lifestyle-medical" class="text-truncate text-reset py-2 px-3 d-block">
                  <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Groceries, Lifestyle &amp; Medical" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                  <span class="cat-name">Groceries, Lifestyle &amp; Medical</span>
                </a>
                <div class="sub-cat-menu c-scrollbar-light rounded shadow-lg p-4">
                  <div class="c-preloader text-center absolute-center">
                    <i class="las la-spinner la-spin la-3x opacity-70"></i>
                  </div>
                </div>
              </li>
              <li class="category-nav-element" data-id="40">
                <a href="https://admindeal.com.bd/category/digital-products-crouse-etc" class="text-truncate text-reset py-2 px-3 d-block">
                  <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Digital Products, eBook &amp; etc" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                  <span class="cat-name">Digital Products, eBook &amp; etc</span>
                </a>
                <div class="sub-cat-menu c-scrollbar-light rounded shadow-lg p-4">
                  <div class="c-preloader text-center absolute-center">
                    <i class="las la-spinner la-spin la-3x opacity-70"></i>
                  </div>
                </div>
              </li>
              <li class="category-nav-element" data-id="41">
                <a href="https://admindeal.com.bd/category/social-ads-apps-survey" class="text-truncate text-reset py-2 px-3 d-block">
                  <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Social, Ads, Apps &amp; Survey" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                  <span class="cat-name">Social, Ads, Apps &amp; Survey</span>
                </a>
                <div class="sub-cat-menu c-scrollbar-light rounded shadow-lg p-4">
                  <div class="c-preloader text-center absolute-center">
                    <i class="las la-spinner la-spin la-3x opacity-70"></i>
                  </div>
                </div>
              </li>
              <li class="category-nav-element" data-id="42">
                <a href="https://admindeal.com.bd/category/watches-jewelry-bags-shoes" class="text-truncate text-reset py-2 px-3 d-block">
                  <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Watches, Jewelry, Bags &amp; Shoes" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                  <span class="cat-name">Watches, Jewelry, Bags &amp; Shoes</span>
                </a>
                <div class="sub-cat-menu c-scrollbar-light rounded shadow-lg p-4">
                  <div class="c-preloader text-center absolute-center">
                    <i class="las la-spinner la-spin la-3x opacity-70"></i>
                  </div>
                </div>
              </li>
              <li class="category-nav-element" data-id="43">
                <a href="https://admindeal.com.bd/category/sports-toys-entertainment" class="text-truncate text-reset py-2 px-3 d-block">
                  <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Sports, Toys &amp; Entertainment" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                  <span class="cat-name">Sports, Toys &amp; Entertainment</span>
                </a>
                <div class="sub-cat-menu c-scrollbar-light rounded shadow-lg p-4">
                  <div class="c-preloader text-center absolute-center">
                    <i class="las la-spinner la-spin la-3x opacity-70"></i>
                  </div>
                </div>
              </li>
              <li class="category-nav-element" data-id="44">
                <a href="https://admindeal.com.bd/category/home-appliances-kitchen-pets" class="text-truncate text-reset py-2 px-3 d-block">
                  <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Home Appliances, Kitchen &amp; Pets" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                  <span class="cat-name">Home Appliances, Kitchen &amp; Pets</span>
                </a>
                <div class="sub-cat-menu c-scrollbar-light rounded shadow-lg p-4">
                  <div class="c-preloader text-center absolute-center">
                    <i class="las la-spinner la-spin la-3x opacity-70"></i>
                  </div>
                </div>
              </li>
              <li class="category-nav-element" data-id="45">
                <a href="https://admindeal.com.bd/category/bicycle-motorbike-automotive" class="text-truncate text-reset py-2 px-3 d-block">
                  <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Bicycle, Motorbike &amp; Automotive" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                  <span class="cat-name">Bicycle, Motorbike &amp; Automotive</span>
                </a>
                <div class="sub-cat-menu c-scrollbar-light rounded shadow-lg p-4">
                  <div class="c-preloader text-center absolute-center">
                    <i class="las la-spinner la-spin la-3x opacity-70"></i>
                  </div>
                </div>
              </li>
              <li class="category-nav-element" data-id="46">
                <a href="https://admindeal.com.bd/category/website-domain-hosting" class="text-truncate text-reset py-2 px-3 d-block">
                  <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Website, Domain &amp; Hosting" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                  <span class="cat-name">Website, Domain &amp; Hosting</span>
                </a>
                <div class="sub-cat-menu c-scrollbar-light rounded shadow-lg p-4">
                  <div class="c-preloader text-center absolute-center">
                    <i class="las la-spinner la-spin la-3x opacity-70"></i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      auth:{
        isAuthenticated: false,
        user: {},
      },
      navCategoriesName:[],
      navCategoriesLinks:[],
      categories: [],
      products: [],
      shops: [],
      keywords:[],
      vendorSystemActivation: 0,
      message:'',
      totalCart: 0,
      totalWishlist: 0,
    }
  },
  created() {
    var user = localStorage.getItem("user");
    if(user !== null){
      user = JSON.parse(user);
      this.auth.isAuthenticated = true;
      this.auth.user = user;
      this.getNavData();
    }
    this.setNavData();
  },
  beforeCreated(){
 
  },
  mounted(){
    this.getNavCategories(this.rootDomain);
    this.emitter.on("authentication", message => {
      if(message){
        let user = JSON.parse(localStorage.getItem("user"));
        this.auth.isAuthenticated = true;
        this.auth.user = user;
        this.getNavData();
      }else{
        setNavData();
      }
    });


  },
  methods:{
    getNavData(){
      axios.get(this.selfDomain+'vue/v3/auth/get_nav_data', {
            headers: {
              Authorization: "Bearer " + this.auth.user.access_token,
            }
      }).then(res=>{
        console.log(res);
        this.totalCart = res.data.totalCart;
        this.totalWishlist = res.data.totalWishlist;
        this.setNavData();

      }).catch(err=>{

      });
    },
    setNavData(){
      if(!this.auth.isAuthenticated){

      }
    },
    searchSubmit(){
      var searchKey = $('#search').val();
      this.$router.push({
              name:'productShop',
              params: {
                key_slug: searchKey
              }
          }); 
    },
    getNavCategories(rootDomain){
      axios.get(rootDomain+'vue/header-category').then(res=>{
        this.navCategoriesName = res.data.name;
        this.navCategoriesLinks = res.data.links;
        // console.log(this.navCategoriesName);
        // console.log(this.navCategoriesLinks);

      }).catch(err=>{
        console.log(err);
      });
    },

    receiveUrl(url){
      
      let urls = {
        "/category/man-woman-baby-fashion" : {
            "component" : "CategoryWiseProduct",
           "params" : {slug: "man-woman-baby-fashion"}
        },
        "/category/health-beauty-personal-care" : {
          "component" : "CategoryWiseProduct",
          "params" : {slug: "health-beauty-personal-care"}
        },
        "/category/electronic-accessories-gadget" : {
          "component" : "CategoryWiseProduct",
          "params" : {slug: "electronic-accessories-gadget"}
        },
        "/category/groceries-lifestyle-medical" : {
          "component" : "CategoryWiseProduct",
          "params" : {slug: "groceries-lifestyle-medical"}
        },
        "/category/digital-products-crouse-etc" : {
          "component" : "CategoryWiseProduct",
          "params" : {slug: "digital-products-crouse-etc"}
        },
        "/category/dollar-crypto-account-vcard" : {
          "component" : "CategoryWiseProduct",
          "params" : {slug: "dollar-crypto-account-vcard"}
        },
        "/category/social-ads-apps-survey" : {
          "component" : "CategoryWiseProduct",
          "params" : {slug: "social-ads-apps-survey"}
        },
        "/flash-deals": {
          "component" : "FlashDeals",
        },
        "/flash-deal/my-offers-ttPpP": {
          "component" : "FlashDealDetails",
          "params":{slug:"my-offers-ttPpP"}
        },
        "/all_coupon": {
          "component" : "AllCoupon",
        }
      
      };
  
      if( urls[url] != "undefined")
      this.loadComponent(urls[url]["component"], urls[url]["params"]);
         
    },
    loadComponent(componentName, params=null){
      if(params != null)
        this.$router.push({name:componentName,params:params});
      else 
        this.$router.push({name:componentName});
    },
    search(searchBoxFocus = true){
          var searchKey = $('#search').val();
          if(searchKey.length > 0 && searchBoxFocus){
              $('body').addClass("typed-search-box-shown");

              $('.typed-search-box').removeClass('d-none');
              $('.search-preloader').removeClass('d-none');
              axios.get(this.rootDomain+'vue/ajax-search', {params:{search:searchKey}})
              .then((response)=>{
                  let data = response.data;
                  if(data == '0'){                       
                      $('#search-content').html(null);
                      $('.typed-search-box .search-nothing').removeClass('d-none').html('Sorry, nothing found for <strong>"'+searchKey+'"</strong>');
                      $('.search-preloader').addClass('d-none');

                  }
                  else{
                    this.products = data.products.data;
                    this.categories = data.categories.data;
                    this.keywords = data.keywords;
                    this.shops = data.shops.data;
                    this.vendorSystemActivation = data.vendorSystemActivation;
                      $('.typed-search-box .search-nothing').addClass('d-none').html(null);        
                      $('.search-preloader').addClass('d-none');
                  }
              });
          }
          else {
              $('.typed-search-box').addClass('d-none');
              $('body').removeClass("typed-search-box-shown");
          }
      },
      logout() {
        localStorage.removeItem("user");
        this.auth.isAuthenticated = false;
        this.$router.push({ name: 'home' });
        localStorage.removeItem("recentlyViewProduct");
      }
  
  }

}

</script>

<style>

</style>