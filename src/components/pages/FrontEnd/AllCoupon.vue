<template>
    <section class="pt-5 mb-4 bg-white">
        <div class="container">
                    <section class="mb-4">
            <div class="container">
                <div class="text-center mb-4">
                    <h3 class="h3 fw-600 border-bottom">
                        <span class="border-bottom border-primary border-width-2 pb-3 d-inline-block"><b>All Coupon Code </b></span>
                    </h3>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="card-columns" data-items="6" data-xl-items="5" data-lg-items="4"  data-md-items="3" data-sm-items="2" data-xs-items="2">
                            <!-- @foreach ($coupons as $key => $coupon)
                            
                            @php
                                $coupon_det = json_decode($coupon->details);
                            @endphp -->
                            <div class="carousel-box">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white p-4" style="background-color: #7e737324 !important; border: 2px solid #ff7d2f !important; height: 165px !important;">
                                        <div class="text-center text-primary fs-24 fw-600">TK Discount</div>
                                        <!-- @if($coupon->type=="cart_base") -->
                                            <div class="text-center">Minimum Order -  TK</div>
                                        <!-- @else -->
                                            <div class="text-center">At Selected Products</div>
                                        <!-- @endif -->
                                        <div class="mb-4"></div>
                                        <div class="text-center text-success fs-20 fw-600"><b>Copy Code: </b></div>
                                        <div class="text-center ">From :  To: </div>
                                       <div class="text-center text-success fs-24 fw-500">
                                        <!-- @if($coupon->user) -->
                                        <!-- @if($coupon->user->user_type=='seller') -->
                                        Only at: <a href="">shop->name</a>
                                        <!-- @endif -->
                                        <!-- @else -->
                                        All Across the Platform
                                        <!-- @endif -->
                                        </div>
                                    </div>    
                                    </div>
                            <!-- @endforeach -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </section>
</template>

<script>
import axios from 'axios';
    export default{
        data(){
            return{
                coupons:[]
            }
        },
        mounted(){
            this.getAllCoupon();
        },
        methods:{
            getAllCoupon(){
                axios.get(this.rootDomain+'vueweb/all_coupon')
                .then((response)=>{
                    console.log(response.data);
                    this.coupons = response.data.data;
                })
                .catch((error)=>{
                    console.log(error);
                })
            },
            flashDealSlug(slug){
                console.log(slug);
            }
        }
    }
</script>