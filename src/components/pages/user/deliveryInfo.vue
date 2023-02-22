<template >
    <section class="pt-5 mb-4">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 mx-auto">
                    <div class="row aiz-steps arrow-divider">
                        <div class="col done">
                            <div class="text-center text-success">
                                <i class="la-3x mb-2 las la-shopping-cart"></i>
                                <h3 class="fs-14 fw-600 d-none d-lg-block ">{{ '1. My Cart'}}</h3>
                            </div>
                        </div>
                        <div class="col active">
                            <div class="text-center text-success ">
                                <i class="la-3x mb-2 las la-map"></i>
                                <h3 class="fs-14 fw-600 d-none d-lg-block ">{{ '2. Shipping info'}}</h3>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-center text-primary">
                                <i class="la-3x mb-2 opacity-50 las la-truck"></i>
                                <h3 class="fs-14 fw-600 d-none d-lg-block opacity-50 ">{{ '3. Delivery info'}}</h3>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-center">
                                <i class="la-3x mb-2 opacity-50 las la-credit-card"></i>
                                <h3 class="fs-14 fw-600 d-none d-lg-block opacity-50 ">{{ '4. Payment'}}</h3>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-center">
                                <i class="la-3x mb-2 opacity-50 las la-check-circle"></i>
                                <h3 class="fs-14 fw-600 d-none d-lg-block opacity-50 ">{{ '5. Confirmation'}}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-4 gry-bg">
    <div class="container">
        <div class="row">
            <div class="col-xxl-8 col-xl-10 mx-auto">
                <form ref="myForm" @submit.prevent="store_delivery_info" class="form-default"  role="form" >
                    
                  
                    
                    <div v-if="admin_products.length" class="card mb-3 shadow-sm border-0 rounded">
                        <div class="card-header p-3">
                            <h5 class="fs-16 fw-600 mb-0">{{ site_name }} {{ 'Products' }}</h5>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                           
                                <li v-for="(product, index) in admin_products" :key="index" class="list-group-item">
                                    <div class="d-flex">
                                        <span class="mr-2">
                                            <img
                                                :src="product.products.data[0].thumbnail_image"
                                                class="img-fit size-60px rounded"
                                                :alt="product.products.data[0].name"
                                            >
                                        </span>
                                        <span class="fs-14 opacity-60">{{ product.products.data[0].name }}</span>
                                    </div>
                                </li>
                            </ul>
                            <div class="row border-top pt-3">
                                <div class="col-md-6">
                                    <h6 class="fs-15 fw-600">{{ 'Choose Delivery Type' }}</h6>
                                </div>
                                <div class="col-md-6">
                                    <div class="row gutters-5">
                                        
                                        <div v-if="shipping_type != 'carrier_wise_shipping'" class="col-6">
                                            <label class="aiz-megabox d-block bg-white mb-0">
                                                <input
                                                    type="radio"
                                                    :name="'shipping_type_'+adminId"
                                                    value="home_delivery"
                                                    data-target=".pickup_point_id_admin"
                                                    checked
                                                >
                                                <span class="d-flex p-3 aiz-megabox-elem">
                                                    <span class="aiz-rounded-check flex-shrink-0 mt-1"></span>
                                                    <span class="flex-grow-1 pl-3 fw-600">{{  'Home Delivery' }}</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div v-else class="col-6">
                                            <label class="aiz-megabox d-block bg-white mb-0">
                                                <input
                                                    @click="changeShipping(adminId, 'carrier')"
                                                    type="radio"
                                                    :name="'shipping_type_'+adminId"
                                                    value="carrier"
                                                    data-target=".pickup_point_id_admin"
                                                    checked
                                                >
                                                <span class="d-flex p-3 aiz-megabox-elem">
                                                    <span class="aiz-rounded-check flex-shrink-0 mt-1"></span>
                                                    <span class="flex-grow-1 pl-3 fw-600">{{  'Carrier' }}</span>
                                                </span>
                                            </label>
                                        </div>

                                        <div v-if="pickup_point_list" class="col-6">
                                            <label class="aiz-megabox d-block bg-white mb-0">
                                                <input
                                                    @click="changeShipping(adminId, 'pickup_point')"
                                                    type="radio"
                                                    :name="'shipping_type_'+adminId"
                                                    value="pickup_point"
                                                    data-target=".pickup_point_id_admin"
                                                >
                                                <span class="d-flex p-3 aiz-megabox-elem">
                                                    <span class="aiz-rounded-check flex-shrink-0 mt-1"></span>
                                                    <span class="flex-grow-1 pl-3 fw-600">{{ 'Local Pickup' }}</span>
                                                </span>
                                            </label>
                                        </div>
                                        
                                    </div>
                                    <div v-if="pickup_point_list" :id="'pickup_point_id_'+adminId" class="mt-4 pickup_point_id_admin d-none">
                                        <select
                                            class="form-control aiz-selectpicker"
                                            :name="'shipping_type_'+adminId"
                                            data-live-search="true"
                                        >
                                                <option>{{ 'Select your nearest pickup point' }}</option>
                                                <option  v-for="(pickupItem, index) in pickup_point_list" :key="index"
                                                    :value="pickupItem.id"
                                                    data-content="<span class='d-block'>
                                                                    <span class='d-block fs-16 fw-600 mb-2'>{{ pickupItem.name }}</span>
                                                                    <span class='d-block opacity-50 fs-12'><i class='las la-map-marker'></i> {{ pickupItem.address }}</span>
                                                                    <span class='d-block opacity-50 fs-12'><i class='las la-phone'></i>{{ pickupItem.phone }}</span>
                                                                </span>"
                                                >
                                                </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div v-if="shipping_type == 'carrier_wise_shipping'" :id="'carrier_id_'+adminId" class="row pt-3 carrier_id_admin">
                               
                                    <div v-for="(carrierItem, indexCarrier) in product.carrier_list" :key="indexCarrier" class="col-md-12 mb-2">
                                        <label class="aiz-megabox d-block bg-white mb-0">
                                            <input
                                                type="radio"
                                                :name="'carrier_id_'+adminId"
                                                :value="carrierItem.id"
                                                :checked="indexCarrier==0"
                                            >
                                            <span class="d-flex p-3 aiz-megabox-elem">
                                                <span class="aiz-rounded-check flex-shrink-0 mt-1"></span>
                                                <span class="flex-grow-1 pl-3 fw-600">
                                                    <img :src="carrierItem.logo" alt="Image" class="w-50px img-fit">
                                                </span>
                                                <span class="flex-grow-1 pl-3 fw-700">{{ carrierItem.name }}</span>
                                                <span class="flex-grow-1 pl-3 fw-600">{{ 'Transit in'+' '+carrierItem.transit_time+' '+'days' }}</span>
                                                <span class="flex-grow-1 pl-3 fw-600">{{ carrierItem.transit_price }}</span>
                                            </span>
                                        </label>
                                    </div>
                            </div>
                        </div>
                    </div>
                   
                     
                            
                    <div v-for="(products, index) in seller_products" :key="index" class="card mb-3 shadow-sm border-0 rounded">
                        
                        <div class="card-header p-3">
                            <h5 class="fs-16 fw-600 mb-0">{{ products.products[0].data[0].shop_name }} {{ 'Products' }}</h5>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                
                                <li v-for="(product, indexDn) in products.products" :key="indexDn" class="list-group-item">
                                    <div class="d-flex">
                                        <span class="mr-2">
                                            <img
                                                :src="product.data[0].thumbnail_image"
                                                class="img-fit size-60px rounded"
                                                :alt="product.data[0].name"
                                            >
                                        </span>
                                        <span class="fs-14 opacity-60">{{ product.data[0].name}}</span>
                                    </div>
                                </li>
                                
                            </ul>
                            <div class="row border-top pt-3">
                                <div class="col-md-6">
                                    <h6 class="fs-15 fw-600">{{ 'Choose Delivery Type' }}</h6>
                                </div>
                                <div class="col-md-6">
                                    <div class="row gutters-5">
                                        <div v-if="shipping_type != 'carrier_wise_shipping'" class="col-6">
                                            <label class="aiz-megabox d-block bg-white mb-0">
                                                <input
                                                    type="radio"
                                                    :name="'shipping_type_'+index"
                                                    value="home_delivery"
                                                    :data-target="'.pickup_point_id_'+index"
                                                    checked
                                                >
                                                <span class="d-flex p-3 aiz-megabox-elem">
                                                    <span class="aiz-rounded-check flex-shrink-0 mt-1"></span>
                                                    <span class="flex-grow-1 pl-3 fw-600">{{ 'Home Delivery' }}</span>
                                                </span>
                                            </label>
                                        </div>
                                        
                                        <div v-else class="col-6">
                                            <label class="aiz-megabox d-block bg-white mb-0">
                                                <input
                                                    @click="changeShipping(index, 'carrier')"
                                                    type="radio"
                                                    :name="'shipping_type_'+index"
                                                    value="carrier"
                                                    :data-target="'.pickup_point_id_'+index"
                                                    checked
                                                >
                                                <span class="d-flex p-3 aiz-megabox-elem">
                                                    <span class="aiz-rounded-check flex-shrink-0 mt-1"></span>
                                                    <span class="flex-grow-1 pl-3 fw-600">{{  'Carrier' }}</span>
                                                </span>
                                            </label>
                                        </div>

                                            <div v-if="pickup_point_list" class="col-6">
                                                <label class="aiz-megabox d-block bg-white mb-0">
                                                    <input
                                                        @click="changeShipping(index, 'pickup_point')"
                                                        type="radio"
                                                        :name="'shipping_type_'+index"
                                                        value="pickup_point"
                                                        :data-target="'.pickup_point_id_'+index"
                                                    >
                                                    <span class="d-flex p-3 aiz-megabox-elem">
                                                        <span class="aiz-rounded-check flex-shrink-0 mt-1"></span>
                                                        <span class="flex-grow-1 pl-3 fw-600">{{  'Local Pickup' }}</span>
                                                    </span>
                                                </label>
                                            </div>
                                    </div>
                                        <div v-if="pickup_point_list" :id="'pickup_point_id_'+index" :class="'mt-4 pickup_point_id_'+index+' d-none'">
                                            <select
                                                class="form-control aiz-selectpicker"
                                                :name="'pickup_point_id_'+index"
                                                data-live-search="true"
                                            >
                                                <option>{{ 'Select your nearest pickup point'}}</option>
                                                    <option v-for="(pick_up_point, indexdn2) in pickup_point_list" :key="indexdn2"
                                                        :value="pick_up_point.id"
                                                        data-content="<span class='d-block'>
                                                                        <span class='d-block fs-16 fw-600 mb-2'>{{ pick_up_point.name }}</span>
                                                                        <span class='d-block opacity-50 fs-12'><i class='las la-map-marker'></i> {{ pick_up_point.address }}</span>
                                                                        <span class='d-block opacity-50 fs-12'><i class='las la-phone'></i>{{ pick_up_point.phone }}</span>
                                                                    </span>"
                                                    >
                                                    </option>
                                            </select>
                                        </div>
                                </div>
                            </div>
                            
                                <div v-if="shipping_type == 'carrier_wise_shipping'" :id="'carrier_id_'+index" :class="'row pt-3 carrier_id_'+index">
                                        <div v-for="(carrier, carrier_key) in products.carrier_list" :key="carrier_key" class="col-md-12 mb-2">
                                            <label class="aiz-megabox d-block bg-white mb-0">
                                                <input
                                                    type="radio"
                                                    :name="'carrier_id_'+index"
                                                    :value="carrier.id"
                                                    :checked="carrier_key==0"
                                                >
                                                <span class="d-flex p-3 aiz-megabox-elem">
                                                    <span class="aiz-rounded-check flex-shrink-0 mt-1"></span>
                                                    <span class="flex-grow-1 pl-3 fw-600">
                                                        <img :src="carrier.logo_img" alt="Image" class="w-50px img-fit">
                                                    </span>
                                                    <span class="flex-grow-1 pl-3 fw-600">{{ carrier.name }}</span>
                                                    <span class="flex-grow-1 pl-3 fw-600">{{ 'Transit in'+' '+carrier.transit_time+' '+'days' }}</span>
                                                    <span class="flex-grow-1 pl-3 fw-600">{{ carrier.carrier_base_price}}</span>
                                                </span>
                                            </label>
                                        </div>
                                </div>
                        </div>
                    </div>
                        

                    <div class="pt-4 d-flex justify-content-between align-items-center">
                        <router-link :to="{name:'home'}"  >
                            <i class="la la-angle-left"></i>
                            {{ 'Return to shop'}}
                        </router-link>
                        <button   type="submit" class="btn fw-600 btn-primary">{{ 'Continue to Payment'}}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </section> 


    </template>
  
  <script>

  import axios from 'axios';
  export default {
    components:{},
    data(){
      return{
        auth:{
          isAuthenticated: false,
          user: {},
        },
        adminId: '',   
        admin_products: [],
        seller_products: [],
        carts:[],
        shipping_type: '',
        site_name: '',
        pickup_point_list: '',
       
      }
    },
     mounted(){
        
    },
    created(){
        var user = localStorage.getItem("user");
        if(user !== null){
            user = JSON.parse(user);
            this.auth.isAuthenticated = true;
            this.auth.user = user;
            this.setDeliveryData();
        }
    },

    methods:{
        setDeliveryData(id){
                axios.get(this.selfDomain+"vueweb/checkout/get_delivery_info", {
                    
                    headers: {
                        Authorization: "Bearer " + this.auth.user.access_token,
                    }
                }).then(res=>{
                    console.log(res.data);
                    this.admin_products = res.data.admin_products;
                    this.seller_products = res.data.seller_products;
                    this.carts = res.data.carts;
                    this.shipping_type = res.data.shipping_type;
                    this.site_name = res.data.site_name;
                    this.adminId = res.data.adminId;
                    this.pickup_point_list = res.data.pickup_point_list;
                

                }).catch(err=>{

                });
        },

        store_delivery_info(){

            const formData = new FormData(this.$refs.myForm);

            console.log(formData);

            const data = {};
            for (const [key, value] of formData.entries()) {
                data[key] = value;
            }
            console.log(data);

            axios.get(this.selfDomain+"vueweb/checkout/payment_select", {
                params:data,
                headers: {
                    Authorization: "Bearer " + this.auth.user.access_token,
                }
            }).then(res=>{
                console.log(res.data);
            }).catch(err=>{

            });

            this.$router.push({
                name: "paymentSelect",
            });
        },
        changeShipping(index, type){
            // alert(index+" "+type); //pickup_point_id_carrier_id_

            if(type == "carrier"){
                document.getElementById('carrier_id_'+index).classList.remove("d-none");
                document.getElementById('pickup_point_id_'+index).classList.add("d-none");
            }else if(type == "pickup_point"){
                document.getElementById('carrier_id_'+index).classList.add("d-none");
                document.getElementById('pickup_point_id_'+index).classList.remove("d-none");
            }
        }
        
    }
  }
  </script>
  
  <style>
  
  </style>