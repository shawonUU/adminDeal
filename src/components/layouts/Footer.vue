<template>
    <section class="bg-dark py-5 text-light footer-widget">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-xl-4 col-md-6 col-sm-6 text-center text-md-left">
            <div class="mt-4">
              <a href="https://admindeal.com.bd" class="d-block">
                <img class="lazyload" src="https://admindeal.com.bd/public/assets/img/placeholder-rect.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/juAdYdi4MLhwryg0ShshhDtGEiTPmFBeIrb0Bapz.svg" alt="Admin Deal" height="44">
              </a>
              <div class="my-3">
                <p> Complete system for your eCommerce business. Admin Deal is The Best Trusted Virtual Marketplace. You can Buy or Sell Anything with us, Admin Deal is an e-Commerce platform that empowers multiple vendors to sell their products from one storefront. Admin Deal store gives shoppers a huge catalog to choose from and provides sellers with a bigger base of ready-to-buy customers. Think of Admin Deal platforms as shopping malls. <br>
                </p>
              </div>
              <div class="d-inline-block d-md-block mb-4">
                <form class="form-inline" method="POST" action="https://admindeal.com.bd/subscribers">
                  <input type="hidden" name="_token" value="zSCViNdWvZKY0bmY17fgoQ1ch8ieXFn4ZwpHR5VD">
                  <div class="form-group mb-0">
                    <input type="email" class="form-control" placeholder="Your Email Address" name="email" required>
                  </div>
                  <button type="submit" class="btn btn-primary"> Subscribe </button>
                </form>
              </div>
              <div class="w-300px mw-100 mx-auto mx-md-0">
                <a href="https://play.google.com/store/apps/developer?id=AdminDeal+Mobile" target="_blank" class="d-inline-block mr-3 ml-0">
                  <img src="https://admindeal.com.bd/public/assets/img/play.png" class="mx-100 h-40px">
                </a>
                <a href="https://play.google.com/store/apps/developer?id=AdminDeal+Mobile" target="_blank" class="d-inline-block">
                  <img src="https://admindeal.com.bd/public/assets/img/app.png" class="mx-100 h-40px">
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 ml-xl-auto col-sm-6 col-md-6 mr-0">
            <div class="text-center text-md-left mt-4">
              <h4 class="fs-13 text-uppercase fw-600 border-bottom border-gray-900 pb-2 mb-4"> Contact Info </h4>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <span class="d-block opacity-30">Head Office:</span>
                  <span class="d-block opacity-70">Flat: 6/A, House: 84/4, Road: 1, Bibir-Bagicha, Jatrabari, Dhaka, Bangladesh</span>
                </li>
                <li class="mb-2">
                  <span class="d-block opacity-30">Regional Office (in progress):</span>
                  <span class="d-block opacity-70">Flat: 6/A, House: 84/4, Road: 1, Bibir-Bagicha, Jatrabari, Dhaka, Bangladesh</span>
                </li>
                <li class="mb-2">
                  <span class="d-block opacity-30">Customer Care:</span>
                  <span class="d-block opacity-70">(+88) 09649649649 </span>
                </li>
                <li class="mb-2">
                  <span class="d-block opacity-30">Whatsapp Number:</span>
                  <span class="d-block opacity-70"> (+88) 01321377766 </span>
                </li>
                <li class="mb-2">
                  <span class="d-block opacity-30">Email:</span>
                  <span class="d-block opacity-70">
                    <a href="mailto:admin@admindeal.com.bd" class="text-reset">admin@admindeal.com.bd</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-6">
            <div class="text-center text-md-left mt-4">
              <h4 class="fs-13 text-uppercase fw-600 border-bottom border-gray-900 pb-2 mb-4"> Important Page </h4>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <router-link :to="{name:'About'}" class="opacity-50 hov-opacity-100 text-reset"> About Us </router-link>
                </li>
                <li class="mb-2">
                  <router-link :to="{name:'ContactUs'}" class="opacity-50 hov-opacity-100 text-reset"> Contact Us </router-link>
                </li>
                <li class="mb-2">
                  <router-link  :to="{name:'CookiePolicy'}" class="opacity-50 hov-opacity-100 text-reset"> Cookie Policy </router-link>
                </li>
                <li class="mb-2">
                    <router-link :to="{name:'PrivacyPolicy'}" class="opacity-50 hov-opacity-100 text-reset"> Privacy Policys </router-link>
                </li>
                <li class="mb-2">
                  <router-link :to="{name:'terms'}" class="opacity-50 hov-opacity-100 text-reset"> Tarms &amp; Condition </router-link>
                </li>
                <li class="mb-2">
                  <router-link :to="{name:'ReturnPolicy'}" class="opacity-50 hov-opacity-100 text-reset"> Return &amp; Refund Policy </router-link>
                </li>
                <li class="mb-2">
                  <router-link :to="{name:'WhyDoYouBelieve'}" class="opacity-50 hov-opacity-100 text-reset"> Why do You Believe us ? </router-link>
                </li>
                <li class="mb-2">
                  <router-link  :to="{name:'SellerPolicy'}" class="opacity-50 hov-opacity-100 text-reset"> Seller Policy of AdminDeal </router-link>
                </li>
                <li class="mb-2">
                  <router-link :to="{name:'SupportPolicy'}" class="opacity-50 hov-opacity-100 text-reset"> Support Policy of AdminDeal </router-link >
                </li>
                <li class="mb-2">
                  <router-link :to="{name:'ReplacementWarrantyPolicy'}" class="opacity-50 hov-opacity-100 text-reset"> Replacement Warranty Policy </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-5 col-lg-2 col-6">
            <div class="text-center text-md-left mt-4">
              <h4 class="fs-13 text-uppercase fw-600 border-bottom border-gray-900 pb-2 mb-4"> My Account </h4>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <router-link class="opacity-50 hov-opacity-100 text-reset" :to="{name:'login'}"> Login </router-link>
                </li>
                <li class="mb-2">
                  <a class="opacity-50 hov-opacity-100 text-reset" href="https://admindeal.com.bd/purchase_history"> Order History </a>
                </li>
                <li class="mb-2">
                  <a class="opacity-50 hov-opacity-100 text-reset" href="https://admindeal.com.bd/wishlists"> My Wishlist </a>
                </li>
                <li class="mb-2">
                  <router-link class="opacity-50 hov-opacity-100 text-reset" :to="{name:'trackOrder'}"> Track Order </router-link>
                </li>
                <!-- I have deal DealBox Link
                        <li class="mb-2"><a class="opacity-50 hov-opacity-100 text-reset" href="https://dealbox.com.bd/" target="_blank">
                                I have a Deal
                            </a></li>
                        -->
                <li class="mb-2">
                  <a class="opacity-50 hov-opacity-100 text-reset" href="https://admindeal.com.bd/compare"> Compare Products </a>
                </li>
                <li class="mb-2">
                  <router-link class="opacity-50 hov-opacity-100 text-light" :to="{name:'affiliateRegistration'}">Be an affiliate partner</router-link>
                </li>
              </ul>
            </div>
            <div class="text-center text-md-left mt-4">
              <h4 class="fs-13 text-uppercase fw-600 border-bottom border-gray-900 pb-2 mb-4"> Be A Seller </h4>
              <router-link :to="{name:'sellerRegistration'}" class="btn btn-primary btn-sm shadow-md"> Apply Now </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- FOOTER -->
    <footer class="pt-3 pb-7 pb-xl-3 bg-black text-light">
      <div class="container">
        <div class="row row-cols-xxl-6 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-3 gutters-10">
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">CCTV Camera</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Power Bank</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Best Bicycle</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Best Camera</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Nescafe Coffee</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Best Drone</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Best Earbuds</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Feature Phone</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Hair Dryer</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Best Headphone</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Electric Oven</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Polo T-shirt</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Best Printer</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Smart Watch</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Best Speaker</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Best Monitor</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Office Chair</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Pocket Router</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Sewing Machine</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Mobile Gimbal</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Jamdani Saree</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Baby Shampoo</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Baby Diaper</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Men's Wallet</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Microwave Oven</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Coffee Machine</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Hijabs</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Personal Care</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Skin Care</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Mens Care</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Mouse</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Keyboards</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Dollar Buy-Sell</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Premium Account</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Virtual Card</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Physical Card</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Cryptocurrency</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Facebook</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Youtube</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Tiktok</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Cat Food</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Dog Food</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Bird Food</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Fish Food</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Domain</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Hosting</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
          </div>
          <div class="col text-center mb-3">
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
            <div>
              <small>
                <a href="/category/bras" class="text-white" target="_blank">Test Admin Deal</a>
              </small>
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-4">
            <div class="text-center text-md-left" current-verison="6.3.0">
              <b>©</b> 20019-2023&nbsp; <b>AdminDeal.Com.bd </b>| All rights reserved.
            </div>
          </div>
          <div class="col-lg-4">
            <ul class="list-inline my-3 my-md-0 social colored text-center">
              <li class="list-inline-item">
                <a href="https://www.facebook.com/admindeal.com.bd" target="_blank" class="facebook">
                  <i class="lab la-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://twitter.com/realadmideal" target="_blank" class="twitter">
                  <i class="lab la-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.instagram.com/realadmindeal/" target="_blank" class="instagram">
                  <i class="lab la-instagram"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.youtube.com/@admindeal" target="_blank" class="youtube">
                  <i class="lab la-youtube"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.linkedin.com/in/admindeal/" target="_blank" class="linkedin">
                  <i class="lab la-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4">
            <div class="text-center text-md-right">
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <img src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/q2QKUSIRFuUZs20PORJPqMTNoxpE0I1UX1E6jpX7.png" height="30" class="mw-100 h-auto" style="max-height: 30px">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="aiz-mobile-bottom-nav d-xl-none fixed-bottom bg-white shadow-lg border-top rounded-top" style="box-shadow: 0px -1px 10px rgb(0 0 0 / 15%)!important; ">
      <div class="row align-items-center gutters-5">
        <div class="col">
          <a href="https://admindeal.com.bd" class="text-reset d-block text-center pb-2 pt-3">
            <i class="las la-home fs-20 opacity-60 opacity-100 text-primary"></i>
            <span class="d-block fs-10 fw-600 opacity-60 opacity-100 fw-600">Home</span>
          </a>
        </div>
        <div class="col">
          <!--<a href="https://admindeal.com.bd/categories" class="text-reset d-block text-center pb-2 pt-3">-->
          <!--    <i class="las la-list-ul fs-20 opacity-60 "></i>-->
          <!--    <span class="d-block fs-10 fw-600 opacity-60 ">Jobs</span>-->
          <!--</a>-->
          <a href="javascript:void(0)" class="text-reset d-block text-center pb-2 pt-3 mobile-side-nav-thumb" data-toggle="class-toggle" data-backdrop="static" data-target=".aiz-mobile-side-nav-cat">
            <i class="las la-list-ul fs-20 opacity-60 "></i>
            <span class="d-block fs-10 fw-600 opacity-60 ">DealBox</span>
          </a>
        </div>
        <div class="col-auto">
          <a href="https://admindeal.com.bd/cart" class="text-reset d-block text-center pb-2 pt-3">
            <span class="align-items-center bg-primary border border-white border-width-4 d-flex justify-content-center position-relative rounded-circle size-50px" style="margin-top: -33px;box-shadow: 0px -5px 10px rgb(0 0 0 / 15%);border-color: #fff !important;">
              <img class="m-footer img-fluid border-primary ls-is-cached lazyloaded" src="/public/uploads/all/1uFG4XOF4RPJDDhWlYVoIJhSpYfoOyKueDyCNL1T.png" alt="AdminDeal" height="44">
            </span>
            <span class="d-block mt-1 fs-10 fw-600 opacity-60 "> Add Post </span>
          </a>
        </div>
        <div class="col">
          <a href="https://admindeal.com.bd/all-notifications" class="text-reset d-block text-center pb-2 pt-3">
            <span class="d-inline-block position-relative px-2">
              <i class="las la-bell fs-20 opacity-60 "></i>
            </span>
            <span class="d-block fs-10 fw-600 opacity-60 ">Notification</span>
          </a>
        </div>
        <div class="col">
          <router-link :to="{name:'login'}" class="text-reset d-block text-center pb-2 pt-3">
            <span class="d-block mx-auto">
              <img src="https://admindeal.com.bd/public/assets/img/avatar-place.png" class="rounded-circle size-20px">
            </span>
            <span class="d-block fs-10 fw-600 opacity-60">Join Now</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="aiz-mobile-side-nav-cat collapse-sidebar-wrap sidebar-xl d-xl-none z-1035">
      <div class="overlay dark c-pointer overlay-fixed" data-toggle="class-toggle" data-backdrop="static" data-target=".aiz-mobile-side-nav-cat" data-same=".mobile-side-nav-thumb"></div>
      <div class="collapse-sidebar bg-white">
        <div class="row">
          <div class="col-md-5 mx-auto">
            <span class="fs-20 fw-600 p-2">All Categories</span>
            <div class="">
              <div class="">
                <div class="row">
                  <div class="col-12  py-2">
                    <div class="px-3">
                      <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Men&#039;s, Women&#039;s &amp; Baby&#039;s fashion" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                      <a href="https://admindeal.com.bd/category/man-woman-baby-fashion" class="text-reset">
                        <span class="fw-600">Men&#039;s, Women&#039;s &amp; Baby&#039;s fashion</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="">
                <div class="row">
                  <div class="col-12  py-2">
                    <div class="px-3">
                      <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Electronic, Accessories &amp; Gadget" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                      <a href="https://admindeal.com.bd/category/electronic-accessories-gadget" class="text-reset">
                        <span class="fw-600">Electronic, Accessories &amp; Gadget</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="">
                <div class="row">
                  <div class="col-12  py-2">
                    <div class="px-3">
                      <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Health, Beauty &amp; Personal Care" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                      <a href="https://admindeal.com.bd/category/health-beauty-personal-care" class="text-reset">
                        <span class="fw-600">Health, Beauty &amp; Personal Care</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="">
                <div class="row">
                  <div class="col-12  py-2">
                    <div class="px-3">
                      <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Mobile, Computer &amp; Laptop" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                      <a href="https://admindeal.com.bd/category/mobile-computer-laptop" class="text-reset">
                        <span class="fw-600">Mobile, Computer &amp; Laptop</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="">
                <div class="row">
                  <div class="col-12  py-2">
                    <div class="px-3">
                      <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Gift  Card, vCard &amp; Account" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                      <a href="https://admindeal.com.bd/category/dollar-crypto-account-vcard" class="text-reset">
                        <span class="fw-600">Gift Card, vCard &amp; Account</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="">
                <div class="row">
                  <div class="col-12  py-2">
                    <div class="px-3">
                      <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Groceries, Lifestyle &amp; Medical" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                      <a href="https://admindeal.com.bd/category/groceries-lifestyle-medical" class="text-reset">
                        <span class="fw-600">Groceries, Lifestyle &amp; Medical</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="">
                <div class="row">
                  <div class="col-12  py-2">
                    <div class="px-3">
                      <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Digital Products, eBook &amp; etc" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                      <a href="https://admindeal.com.bd/category/digital-products-crouse-etc" class="text-reset">
                        <span class="fw-600">Digital Products, eBook &amp; etc</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="">
                <div class="row">
                  <div class="col-12  py-2">
                    <div class="px-3">
                      <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Social, Ads, Apps &amp; Survey" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                      <a href="https://admindeal.com.bd/category/social-ads-apps-survey" class="text-reset">
                        <span class="fw-600">Social, Ads, Apps &amp; Survey</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="">
                <div class="row">
                  <div class="col-12  py-2">
                    <div class="px-3">
                      <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Watches, Jewelry, Bags &amp; Shoes" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                      <a href="https://admindeal.com.bd/category/watches-jewelry-bags-shoes" class="text-reset">
                        <span class="fw-600">Watches, Jewelry, Bags &amp; Shoes</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="">
                <div class="row">
                  <div class="col-12  py-2">
                    <div class="px-3">
                      <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Sports, Toys &amp; Entertainment" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                      <a href="https://admindeal.com.bd/category/sports-toys-entertainment" class="text-reset">
                        <span class="fw-600">Sports, Toys &amp; Entertainment</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="">
                <div class="row">
                  <div class="col-12  py-2">
                    <div class="px-3">
                      <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Home Appliances, Kitchen &amp; Pets" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                      <a href="https://admindeal.com.bd/category/home-appliances-kitchen-pets" class="text-reset">
                        <span class="fw-600">Home Appliances, Kitchen &amp; Pets</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="">
                <div class="row">
                  <div class="col-12  py-2">
                    <div class="px-3">
                      <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Bicycle, Motorbike &amp; Automotive" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                      <a href="https://admindeal.com.bd/category/bicycle-motorbike-automotive" class="text-reset">
                        <span class="fw-600">Bicycle, Motorbike &amp; Automotive</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="">
                <div class="row">
                  <div class="col-12  py-2">
                    <div class="px-3">
                      <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Website, Domain &amp; Hosting" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                      <a href="https://admindeal.com.bd/category/website-domain-hosting" class="text-reset">
                        <span class="fw-600">Website, Domain &amp; Hosting</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>