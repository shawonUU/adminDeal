<template>
   <section class="pt-4 mb-4">
   <div class="container text-center">
     <div class="row">
       <div class="col-lg-6 text-center text-lg-left">
         <h1 class="fw-600 h4">Register Your Shop</h1>
       </div>
       <div class="col-lg-6">
         <ul class="breadcrumb bg-transparent p-0 justify-content-center justify-content-lg-end">
           <li class="breadcrumb-item opacity-50">
             <a class="text-reset" href="https://admindeal.com.bd">Home</a>
           </li>
           <li class="text-dark fw-600 breadcrumb-item">
             <a class="text-reset" href="https://admindeal.com.bd/shops/create">"Register Your Shop"</a>
           </li>
         </ul>
       </div>
     </div>
   </div>
 </section>
 <section class="pt-4 mb-4">
   <div class="container">
     <div class="row">
       <div class="col-xxl-5 col-xl-6 col-md-8 mx-auto">
         <form id="shop" class="" action="https://admindeal.com.bd/shops" method="POST" enctype="multipart/form-data">
           <input type="hidden" name="_token" value="g23HdCifgj7mR2HpZBvYm1R9ojfXGsI5ZWHPmpzZ">
           <div class="bg-white rounded shadow-sm mb-3">
             <div class="fs-15 fw-600 p-3 border-bottom"> Personal Info </div>
             <div class="p-3">
               <div class="form-group">
                 <label>Your name <span class="text-primary">*</span>
                 </label>
                 <input type="text" class="form-control" value="" placeholder="Name" name="name">
               </div>
               <div class="form-group">
                 <label>Your Email <span class="text-primary">*</span>
                 </label>
                 <input type="email" class="form-control" value="" placeholder="Email" name="email">
               </div>
               <div class="form-group">
                 <label>Your Password <span class="text-primary">*</span>
                 </label>
                 <input type="password" class="form-control" placeholder="Password" name="password">
               </div>
               <div class="form-group">
                 <label>Repeat Password <span class="text-primary">*</span>
                 </label>
                 <input type="password" class="form-control" placeholder="Confirm Password" name="password_confirmation">
               </div>
             </div>
           </div>
           <div class="bg-white rounded shadow-sm mb-4">
             <div class="fs-15 fw-600 p-3 border-bottom"> Basic Info </div>
             <div class="p-3">
               <div class="form-group">
                 <label>Shop Name <span class="text-primary">*</span>
                 </label>
                 <input type="text" class="form-control" placeholder="Shop Name" name="name" required>
               </div>
               <div class="form-group">
                 <label>Address <span class="text-primary">*</span>
                 </label>
                 <input type="text" class="form-control mb-3" placeholder="Address" name="address" required>
               </div>
             </div>
           </div>
           <div class="form-group mt-2 mx-auto row">
             <div class="g-recaptcha" data-sitekey="6LdSQTwiAAAAAOhXb8c32WuwGoXIMSq0YqoVS7B5"></div>
           </div>
           <div class="text-right">
             <button type="submit" class="btn btn-primary fw-600">Register Your Shop</button>
           </div>
         </form>
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