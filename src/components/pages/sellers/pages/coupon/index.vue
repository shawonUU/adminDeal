<template>
<div class="aiz-titlebar mt-2 mb-4">
        <div class="row align-items-center">
            <div class="col-md-6">
                <h1 class="h3">Coupons</h1>
            </div>
        </div>
    </div>

    <div class="row gutters-10 justify-content-center">
        <div class="col-md-4 mx-auto mb-3" >
            <router-link :to="{name:'sellerCouponCreate'}">
            <div class="p-3 rounded mb-3 c-pointer text-center bg-white shadow-sm hov-shadow-lg has-transition">
                <span class="size-60px rounded-circle mx-auto bg-secondary d-flex align-items-center justify-content-center mb-3">
                    <i class="las la-plus la-3x text-white"></i>
                </span>
                <div class="fs-18 text-primary">Add New Coupon</div>
            </div>
            </router-link>
        </div>
    </div>
    <div class="card">
        <div class="card-header row gutters-5">
            <div class="col">
                <h5 class="mb-md-0 h6">All Coupons</h5>
            </div>
        </div>
        <div class="card-body">
            <table class="table p-0">
                <thead>
                    <tr>
                        <th data-breakpoints="lg">#</th>
                        <th>Code</th>
                        <th data-breakpoints="lg">Type</th>
                        <th data-breakpoints="lg">Start Date</th>
                        <th data-breakpoints="lg">End Date</th>
                        <th width="10%">Options</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- @foreach($coupons as $key => $coupon) -->
                        <tr v-for="(coupon,index) in coupons" :key="index">
                            <td>{{ (index+1)+(pageNumber-1)*10 }}</td>
                            <td>{{ coupon.code }}</td>
                            <td>
                                    <p v-if="coupon.type=='cart_base'">Cart Base</p>
                                    <p v-else-if="coupon.type=='product_base'">Product Base</p>
                                   
                            </td>
                            <td>{{coupon.start_date  }}</td>
                            <td>{{ coupon.end_date }}</td>
                            <td class="text-right">
                                <a  class="btn btn-soft-primary btn-icon btn-circle btn-sm"  title="Edit">
                                    <i class="las la-edit"></i>
                                </a>
                                <a @click="openDeleteModal(coupon.id)" class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="seller.coupon.destroy" title="Delete">
                                    <i class="las la-trash"></i>
                                </a>
                            </td>
                        </tr>
                </tbody>
            </table>
        </div>

    </div>
            <!-- delete Modal -->
        <div v-if="isDeleteModal" class="sb-lightbox-overlay" style=" position: fixed;width: 100%;height: 100%;top: 0;right: 0;left: 0;bottom: 0;z-index: 100;background-color: rgba(0, 0, 0, 0.6);display: block;animation: sb-fade-animation;"></div>
        <div v-if="isDeleteModal" id="delete-modal" class="modal fade show">
            <div class="modal-dialog modal-sm modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title h6">Delete Confirmation</h4>
                        <button @click="closeModal" type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                    </div>
                    <div class="modal-body text-center">
                        <p class="mt-1">Are you sure to delete this?</p>
                        <button @click="closeModal" type="button" class="btn btn-link mt-2" data-dismiss="modal">Cancel</button>
                        <a @click="deleteModal(coupon)" id="delete-link" class="btn btn-primary text-white mt-2">Delete</a>
                    </div>
                </div>
            </div>
        </div><!-- /.modal -->
</template>

<script>
import axios from 'axios'
export default {
 data(){
     return{
         auth:{
             isAuthenticated: false,
             user: {},
             },
             pageNumber:"",
             coupons:[],
             isDeleteModal:false,
             couponId:"",
     }
 },
 created(){
     var user = localStorage.getItem("user");
         if(user !== null){
             user = JSON.parse(user);
             this.auth.isAuthenticated = true;
             this.auth.user = user;
         }
         this.getSellerCoupon();
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
     getSellerCoupon(){
         axios.get(this.selfDomain+'vueseller/seller/coupon',{  
         headers: {
                 Authorization: "Bearer " + this.auth.user.access_token,
           }
         })
         .then((response) => {   
             this.coupons = response.data.coupons;                
             console.log(response.data.coupons);
         })
         .catch((err)=>{
             console.log(err)
         })
     },
     
     openDeleteModal(id){
        this.couponId = id;
        this.isDeleteModal = true;
     },
     closeModal(){
        this.isDeleteModal = false;
     },
     deleteModal(){
        axios.get(this.selfDomain+'vueseller/seller/coupon-delete/'+this.couponId,{  
         headers: {
                 Authorization: "Bearer " + this.auth.user.access_token,
           }
         })
         .then((response)=>{
            if(response.data.success == true){
                this.isDeleteModal = false;
                this.getSellerCoupon();
            }
         })
         .catch((err)=>{
            console.log(err);
         })
     }
 }
}
</script>

<style>
.modal{
    display: block !important;
}
</style>