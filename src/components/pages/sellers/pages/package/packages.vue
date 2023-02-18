<template>
 <section class="py-8 bg-soft-primary">
    <div class="container">
        <div class="row">
            <div class="col-xl-8 mx-auto text-center">
                <h1 class="mb-0 fw-700">Premium Packages for Sellers</h1>
            </div>
        </div>
    </div>
</section>

<section class="py-4 py-lg-5">
    <div class="container">
        <div class="row row-cols-xxl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 gutters-10 justify-content-center">
            <!-- @foreach ($seller_packages as $key => $seller_package) -->
                <div v-for="(item,index) in packages" :key="index" class="col">
                    <div class="card overflow-hidden">
                        <div class="card-body">
                            <div class="text-center mb-4 mt-3">
                                <img class="mw-100 mx-auto mb-4" :src="item.logo" height="100">
                                <h5 class="mb-3 h5 fw-600">{{ item.name }}</h5>
                            </div>
                            <ul class="list-group list-group-raw fs-15 mb-5">
                                <li class="list-group-item py-2">
                                    <i class="las la-check text-success mr-2"></i>
                                   {{item.product_upload_limit}} Product Upload Limit
                                </li>
                            </ul>
                            <div class="mb-5 d-flex align-items-center justify-content-center">
                                    <span v-if="item.amount==1" class="fs-30 fw-600 lh-1 mb-0">Free</span>
                                    <span v-else class="fs-30 fw-600 lh-1 mb-0">{{ item.amount }}</span>
                                <span class="text-secondary border-left ml-2 pl-2">{{ item.duration }}<br>Days</span>
                            </div>

                            <div class="text-center">
                                    <template v-if="item.amount == 0">
                                        <button class="btn btn-primary fw-600" onclick="get_free_package({{ $seller_package->id}})">Free Package</button>
                                    </template>
                                    <template v-else>
                                    <button v-if="offline_payment==true" class="btn btn-primary fw-600" onclick="select_payment_type({{ $seller_package->id}})">Purchase Package</button>
                                    <button v-else class="btn btn-primary fw-600" onclick="show_price_modal({{ $seller_package->id}})">Purchase Package</button>
                                    </template>
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
            packages:"",
            offline_payment:""
    }
},
created(){
    var user = localStorage.getItem("user");
        if(user !== null){
            user = JSON.parse(user);
            this.auth.isAuthenticated = true;
            this.auth.user = user;
        }
        this.getPackages(1);
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
    getPackages(page){
        axios.get(this.selfDomain+'vueseller_package/seller/seller-packages',{  
        headers: {
                Authorization: "Bearer " + this.auth.user.access_token,
          }
        })
        .then((response) => {    
            this.packages = response.data.seller_packages
            this.offline_payment = response.data.offline_payment
           console.log(response.data);
        })
        .catch((err)=>{
            console.log(err)
        })
    },
 
}
}
</script>

<style>

</style>