<template>
  <section class="mb-4">
    <div class="container">
     <div class="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
       <div class="d-flex mb-3 align-items-baseline border-bottom sectionmenu">
         <h3 class="h5 fw-700 mb-0">
           <span class="border-bottom border-primary border-width-2 pb-3 d-inline-block" style="font-size:16px;color:black">Today's Offer</span>
           <span class="badge badge-inline badge-danger">OFF 90%</span>
         </h3>
         <a href="https://admindeal.com.bd/todays_best_deals" class="ml-auto mr-0 btn btn-primary btn-sm shadow-md">View All</a>
       </div>
       <div class="aiz-carousel gutters-10 half-outside-arrow" data-items="6" data-xl-items="5" data-lg-items="4" data-md-items="3" data-sm-items="2" data-xs-items="2" data-arrows='true'>
         <div class="carousel-box">
           <div class="aiz-card-box  rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
             <span class="badge-custom">OFF <span class="box ml-1 mr-0">&nbsp;90%</span>
             </span>
             <div class="position-relative">
               <router-link :to="{name:'singleProduct'}">
                 <img class="img-fit lazyload mx-auto h-140px h-md-210px" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/6jd31Jllm3wilh5bOOEQf35TP9twopPJFHfszYIC.png" alt="Black Plated Finger Ring For Mens" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
               </router-link>
               <div class="absolute-top-right aiz-p-hov-icon">
                 <a href="javascript:void(0)" onclick="addToWishList(5931)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                   <i class="la la-heart-o"></i>
                 </a>
                 <a href="javascript:void(0)" onclick="addToCompare(5931)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                   <i class="las la-sync"></i>
                 </a>
                 <a href="javascript:void(0)" onclick="showAddToCartModal(5931)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                   <i class="las la-shopping-cart"></i>
                 </a>
               </div>
             </div>
             <div class="p-md-3 p-2 text-left">
               <div class="fs-15">
                 <del class="fw-600 opacity-50 mr-1">৳800</del>
                 <span class="fw-700 text-primary">৳80 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-90%</span>
                 </span>
               </div>
               <div class="rating rating-sm mt-1">
                 <i class='las la-star active'></i>
                 <i class='las la-star active'></i>
                 <i class='las la-star active'></i>
                 <i class='las la-star active'></i>
                 <i class='las la-star active'></i> ( )
               </div>
               <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
                <router-link :to="{name:'singleProduct'}"> class="d-block text-reset">Black Plated Finger Ring For Mens</router-link>
               </h3>
               <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border"> Cashback : <span class="fw-700 float-right">0</span>
               </div>
             </div>
           </div>
         </div>
        
       </div>
     </div>
   </div>
    </section>



    
</template>

<script>
export default {

}
</script>

<style>

</style>