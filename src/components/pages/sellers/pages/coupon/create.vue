<template>
      <div class="aiz-titlebar mt-2 mb-4">
        <div class="row align-items-center">
            <div class="col-md-6">
                <h1 class="h3">Add Your Coupon</h1>
            </div>
        </div>
    </div>

    <div class="row gutters-5">
        <div class="col-lg-10 mx-auto">
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0 h6">Coupon Information Adding</h5>
                </div>

                <div class="card-body">
                    <form class="form-horizontal" action="seller.coupon.store" enctype="multipart/form-data">
<!--                       
                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul class="mt-3">
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif -->
                        <div class="form-group row">
                            <label class="col-lg-3 col-from-label" for="name">Coupon Type</label>
                            <div class="col-lg-9">
                                <select @change="couponForm" name="type" id="coupon_type" class="form-control"  required>
                                    <option value="">Select One</option>
                                    <option value="product_base">For Products</option>
                                    <option value="cart_base">For Total Orders</option>
                                </select>
                            </div>
                        </div>

                        <div id="coupon_form">
                            <product_base_coupon v-if="product_base_coupon"></product_base_coupon>
                            <cart_base_coupon v-if="cart_base_coupon"></cart_base_coupon>
                        </div>
                        <div class="form-group mb-0 text-right">
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div> 
</template>
    
    <script>
    import axios from 'axios';
    import product_base_coupon from './product_base_coupon.vue';
    import cart_base_coupon from './cart_base_coupon.vue';
    export default {
        components:{product_base_coupon,cart_base_coupon},
        data(){
         return{
             auth:{
                 isAuthenticated: false,
                 user: {},
                 },
                 product_base_coupon:false,
                 cart_base_coupon:false
         }
     },
     created(){
         var user = localStorage.getItem("user");
             if(user !== null){
                 user = JSON.parse(user);
                 this.auth.isAuthenticated = true;
                 this.auth.user = user;
             }
            //  this.getSellerCoupon();
     },
     mounted() {
     this.emitter.emit("headerFooter", false);
     console.log('unmounted has been called'); 
     },
     unmounted() {
     this.emitter.emit("headerFooter", false);
     console.log('unmounted has been called'); 
     },
     methods:{
        //  getSellerCoupon(){
        //      axios.get(this.selfDomain+'vueseller/seller/coupon',{  
        //      headers: {
        //              Authorization: "Bearer " + this.auth.user.access_token,
        //        }
        //      })
        //      .then((response) => {   
        //          this.coupons = response.data.coupons;                
        //          console.log(response.data.coupons);
        //      })
        //      .catch((err)=>{
        //          console.log(err)
        //      })
        //  },
        couponForm(event){
            if(event.target.value == 'product_base'){
                this.product_base_coupon = true;
                this.cart_base_coupon = false
            }else if(event.target.value == 'cart_base'){
                this.cart_base_coupon = true
                this.product_base_coupon = false;
            }else{
                this.cart_base_coupon = false
                this.product_base_coupon = false;
            }
        }
        
     }
    }
    </script>
    
    <style>
    .modal{
        display: block !important;
    }
    </style>