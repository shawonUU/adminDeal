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
                 <form @submit.prevent="createUser()" id="reg-form" class="form-default" role="form">
                   <!-- <input type="hidden" name="_token" value="g23HdCifgj7mR2HpZBvYm1R9ojfXGsI5ZWHPmpzZ"> -->
                   <div class="form-group">
                     <input v-model="user.name" type="text" class="form-control" placeholder="Full Name" name="name">
                   </div>
                   <div v-if="user.register_by=='phone'" class="form-group phone-form-group mb-1">
                     <input  v-model="user.email_or_phone" type="tel" id="phone-code" class="form-control"  placeholder="Phone" name="phone" autocomplete="off">
                   </div>
                   <input type="hidden" name="country_code" value="">
                   <div v-if="user.register_by=='email'" class="form-group email-form-group mb-1">
                     <input  v-model="user.email_or_phone" type="email" class="form-control " placeholder="Email" name="email" autocomplete="off">
                   </div>
                   <div class="form-group text-right">
                     <button class="btn btn-link p-0 opacity-50 text-reset" type="button" @click="toggleEmailPhone()">{{ user.buttonText }}</button>
                   </div>
                   <div class="form-group">
                     <input v-model="user.password" type="password" class="form-control" placeholder="Password" name="password">
                   </div>
                   <div class="form-group">
                     <input v-model="user.confirmPassword" type="password" class="form-control" placeholder="Confirm Password" name="password_confirmation">
                   </div>
                   <div class="form-group">
                     <div class="g-recaptcha" data-sitekey="6LdSQTwiAAAAAOhXb8c32WuwGoXIMSq0YqoVS7B5"></div>
                   </div>
                   <div class="mb-3">
                     <label class="aiz-checkbox">
                       <input v-model="user.agery" type="checkbox" name="checkbox_example_1" required>
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
                     <a href="#" class="facebook">
                       <i class="lab la-facebook-f"></i>
                     </a>
                   </li>
                   <li class="list-inline-item">
                     <a href="#" class="google">
                       <i class="lab la-google"></i>
                     </a>
                   </li>
                   <li class="list-inline-item">
                     <a href="#" class="twitter">
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
import axios from "axios";
export default {
  data(){
    return{
        user: {
          name: '',
          email_or_phone:'',
          password: '',
          register_by: 'phone',
          buttonText: 'Use Email Instead',
          confirmPassword: '',
          agery: 0,
        }
    }
  },
  methods:{
    createUser(){
      // let token = document.head.querySelector("meta[name='csrf-token']");

      // if (token) {
      //     axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
      // } else {
      //     console.error('CSRF token not found');
      // }
      axios.get(this.rootDomain+'vue/v3/auth/signup', {params:{
        name: this.user.name,
        email_or_phone: this.user.email_or_phone,
        password: this.user.password,
        register_by: this.user.register_by,
        confirmPassword: this.user.confirmPassword,
        agery: this.user.agery,
      }})
      .then((response)=>{
          console.log(response);
      })
    },
    toggleEmailPhone(){
      if(this.user.register_by == 'email'){
        this.user.register_by = 'phone';
        this.user.buttonText = 'Use Email Instead';
      }
      else{
        this.user.register_by = 'email';
        this.user.buttonText = 'Use Phone Instead';
      }
    }
  },
  mounted() {
      // if (document.getElementById('my-datatable')) return; // was already loaded
      // var scriptTag = document.createElement("script");
      // scriptTag.src = "https://cdn.datatables.net/v/dt/dt-1.10.16/sl-1.2.5/datatables.min.js";
      // scriptTag.id = "my-datatable";
      // document.getElementsByTagName('head')[0].appendChild(scriptTag);
  }
}
</script>

<style>

</style>