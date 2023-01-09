<template>
  <section class="gry-bg py-4">
   <div class="profile">
     <div class="container">
       <div class="row">
         <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-8 mx-auto">
           <div class="card">
             <div class="text-center pt-4">
               <h1 class="h4 fw-600"> Create an account. </h1>
             </div>
             <div class="px-4 py-3 py-lg-4">
               <div class="">
                 <form id="reg-form" class="form-default" role="form" action="https://admindeal.com.bd/register" method="POST">
                   <input type="hidden" name="_token" value="g23HdCifgj7mR2HpZBvYm1R9ojfXGsI5ZWHPmpzZ">
                   <div class="form-group">
                     <input type="text" class="form-control" value="" placeholder="Full Name" name="name">
                   </div>
                   <div class="form-group phone-form-group mb-1">
                     <input type="tel" id="phone-code" class="form-control" value="" placeholder="" name="phone" autocomplete="off">
                   </div>
                   <input type="hidden" name="country_code" value="">
                   <div class="form-group email-form-group mb-1 d-none">
                     <input type="email" class="form-control " value="" placeholder="Email" name="email" autocomplete="off">
                   </div>
                   <div class="form-group text-right">
                     <button class="btn btn-link p-0 opacity-50 text-reset" type="button" onclick="toggleEmailPhone(this)">Use Email Instead</button>
                   </div>
                   <div class="form-group">
                     <input type="password" class="form-control" placeholder="Password" name="password">
                   </div>
                   <div class="form-group">
                     <input type="password" class="form-control" placeholder="Confirm Password" name="password_confirmation">
                   </div>
                   <div class="form-group">
                     <div class="g-recaptcha" data-sitekey="6LdSQTwiAAAAAOhXb8c32WuwGoXIMSq0YqoVS7B5"></div>
                   </div>
                   <div class="mb-3">
                     <label class="aiz-checkbox">
                       <input type="checkbox" name="checkbox_example_1" required>
                       <span class=opacity-60>By signing up you agree to our terms and conditions.</span>
                       <span class="aiz-square-check"></span>
                     </label>
                   </div>
                   <div class="mb-5">
                     <button type="submit" class="btn btn-primary btn-block fw-600">Create Account</button>
                   </div>
                 </form>
                 <div class="text-center">
                   <div class="mb-3">
                     <router-link :to="{name:'sellerRegistration'}" class="text-reset  btn btn-primary btn-block fw-600 fw-600 fs-16"> Join as a seller </router-link>
                   </div>
                 </div>
                 <div class="separator mb-3">
                   <span class="bg-white px-3 opacity-60">Or Join With</span>
                 </div>
                 <ul class="list-inline social colored text-center mb-5">
                   <li class="list-inline-item">
                     <a href="https://admindeal.com.bd/social-login/redirect/facebook" class="facebook">
                       <i class="lab la-facebook-f"></i>
                     </a>
                   </li>
                   <li class="list-inline-item">
                     <a href="https://admindeal.com.bd/social-login/redirect/google" class="google">
                       <i class="lab la-google"></i>
                     </a>
                   </li>
                   <li class="list-inline-item">
                     <a href="https://admindeal.com.bd/social-login/redirect/twitter" class="twitter">
                       <i class="lab la-twitter"></i>
                     </a>
                   </li>
                 </ul>
               </div>
               <div class="text-center">
                 <p class="text-muted mb-0">Already have an account?</p>
                 <router-link :to="{name:'login'}">Log In</router-link>
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