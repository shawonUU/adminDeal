<template>
  <section class="gry-bg py-5">
   <div class="profile">
     <div class="container">
       <div class="row">
         <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-8 mx-auto">
           <div class="card">
             <div class="text-center pt-4">
               <h1 class="h4 fw-600"> Login to your account. </h1>
             </div>
             <div class="px-4 py-3 py-lg-4">
               <div class="">
                 <form @submit.prevent="userLogin()" class="form-default" role="form" method="POST">
                   <input type="hidden" name="_token" value="g23HdCifgj7mR2HpZBvYm1R9ojfXGsI5ZWHPmpzZ">
                   <div v-if="user.login_by=='phone'" class="form-group phone-form-group mb-1">
                     <input  v-model="user.email" type="tel" id="phone-code" class="form-control" placeholder="Phone" name="phone" autocomplete="off">
                   </div>
                   <input type="hidden" name="country_code" value="">
                   <div v-if="user.login_by=='email'" class="form-group email-form-group mb-1">
                     <input  v-model="user.email" type="email" class="form-control " placeholder="Email" name="email" id="email" autocomplete="off">
                   </div>
                   <div class="form-group text-right">
                     <button class="btn btn-link p-0 opacity-50 text-reset" type="button" @click="toggleEmailPhone()">{{ user.buttonText }}</button>
                   </div>
                   <div class="form-group">
                     <input v-model="user.password" type="password" class="form-control " placeholder="Password" name="password" id="password">
                   </div>
                   <div class="row mb-2">
                     <div class="col-6">
                       <label class="aiz-checkbox">
                         <input  type="checkbox" name="remember">
                         <span class=opacity-60>Remember Me</span>
                         <span class="aiz-square-check"></span>
                       </label>
                     </div>
                     <div class="col-6 text-right">
                       <a href="https://admindeal.com.bd/password/reset" class="text-reset opacity-60 fs-14">Forgot password?</a>
                     </div>
                   </div>
                   <div class="mb-5">
                     <button type="submit" class="btn btn-primary btn-block fw-600">Login</button>
                   </div>
                 </form>
                 <div class="separator mb-3">
                   <span class="bg-white px-3 opacity-60">Or Login With</span>
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
                 <p class="text-muted mb-0">Dont have an account?</p>
                 <router-link :to="{name:'registration'}">Register Now</router-link>
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
import axios from 'axios';
export default {
  data(){
    return{
      auth:{
        isAuthenticated: false,
        user: {},
      },
      user: {
          email:'',
          password: '',
          login_by: 'phone',
          buttonText: 'Use Email Instead',
          rememberMe: false,
        }
    }
  },
  computed(){
    
  },
  mounted(){
    
  },
  methods:{
    toggleEmailPhone(){
      this.user.email = '';
      if(this.user.login_by == 'email'){
        this.user.login_by = 'phone';
        this.user.buttonText = 'Use Email Instead';
      }
      else{
        this.user.login_by = 'email';
        this.user.buttonText = 'Use Phone Instead';
      }
    },
    userLogin(){

      var temp_user = localStorage.getItem("temp_user");
      if(!temp_user) temp_user = "";

      axios.get(this.rootDomain+'vue/v3/auth/login', {params:{
        email: this.user.email,
        password: this.user.password,
        login_by: this.user.login_by,
        rememberMe: this.user.rememberMe,
        temp_user: temp_user,
      }})
      .then((response)=>{ 
          if(response.status == 200){
            // console.log(response.data);
            response.data.user.access_token = response.data.access_token;
            localStorage.setItem("user", JSON.stringify(response.data.user));
            this.auth.isAuthenticated = true;
            this.auth.user = response.data.user;
            this.emitter.emit("reload", true);
            this.$router.push({path: '/'});
            // localStorage.removeItem("temp_user");
          }
          
      })
    }
  }
}
</script>

<style>

</style>