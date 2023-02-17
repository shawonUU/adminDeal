<template>
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
                            <div class="text-center text-primary">
                                <i class="la-3x mb-2 las la-map"></i>
                                <h3 class="fs-14 fw-600 d-none d-lg-block ">{{ '2. Shipping info'}}</h3>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-center">
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

    <section class="mb-4 gry-bg">
        <div class="container">
            <div class="row cols-xs-space cols-sm-space cols-md-space">
                <div class="col-xxl-8 col-xl-10 mx-auto">
                    <form class="form-default" data-toggle="validator"  role="form">
                       
                            <div v-if="auth.isAuthenticated" class="shadow-sm bg-white p-4 rounded mb-4">
                                <div class="row gutters-5">
                                        <div v-for="(address, index) in addresses" class="col-md-6 mb-3">
                                            <label class="aiz-megabox d-block bg-white mb-0">
                                                <input type="radio" name="address_id" :value="address.id" :checked="address.set_default" required>
                                                <span class="d-flex p-3 aiz-megabox-elem">
                                                    <span class="aiz-rounded-check flex-shrink-0 mt-1"></span>
                                                    <span class="flex-grow-1 pl-3 text-left">
                                                        <div>
                                                            <span class="opacity-60">{{ 'Address' }}:</span>
                                                            <span class="fw-600 ml-2">{{ address.address }}</span>
                                                        </div>
                                                        <div>
                                                            <span class="opacity-60">{{ 'Postal Code' }}:</span>
                                                            <span class="fw-600 ml-2">{{ address.postal_code }}</span>
                                                        </div>
                                                        <div>
                                                            <span class="opacity-60">{{ 'City' }}:</span>
                                                            <span class="fw-600 ml-2">{{ address.city_name }}</span>
                                                        </div>
                                                        <div>
                                                            <span class="opacity-60">{{ 'State' }}:</span>
                                                            <span class="fw-600 ml-2">{{ address.state_name }}</span>
                                                        </div>
                                                        <div>
                                                            <span class="opacity-60">{{ 'Country' }}:</span>
                                                            <span class="fw-600 ml-2">{{ address.country_name }}</span>
                                                        </div>
                                                        <div>
                                                            <span class="opacity-60">{{ 'Phone' }}:</span>
                                                            <span class="fw-600 ml-2">{{ address.phone }}</span>
                                                        </div>
                                                    </span>
                                                </span>
                                            </label>
                                            <div class="dropdown position-absolute right-0 top-0">
                                                <button class="btn bg-gray px-2" type="button" data-toggle="dropdown">
                                                    <i class="la la-ellipsis-v"></i>
                                                </button>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" >
                                                        {{ 'Edit' }}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    <input type="hidden" name="checkout_type" value="logged">
                                    <div class="col-md-6 mx-auto mb-3" >
                                        <a href="javascript:void(0)" @click="addNewAddress()" class="border p-3 rounded mb-3 c-pointer text-center bg-white h-100 d-flex flex-column justify-content-center" >
                                            <i class="las la-plus la-2x mb-3"></i>
                                            <div class="alpha-7">{{'Add New Address' }}</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-md-6 text-center text-md-left order-1 order-md-0">
                                    <router-link :to="{name:'home'}" class="btn btn-link">
                                        <i class="las la-arrow-left"></i>
                                        {{ 'Return to shop' }}
                                    </router-link>
                                </div>
                                <div class="col-md-6 text-center text-md-right">
                                    <button @click="delivery_info()" type="button" class="btn btn-primary fw-600">{{ 'Continue to Delivery Info'}}</button>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <AddressModal v-if="modalisOpen"></AddressModal>
</template>
  
  <script>
  import AddressModal from "../../layouts/Modal/addressModal.vue";

  import axios from 'axios';
  export default {
    components:{AddressModal},
    data(){
      return{
        auth:{
          isAuthenticated: false,
          user: {},
        },
        addresses: [],
        modalisOpen: false,
      }
    },
    created(){
        var user = localStorage.getItem("user");
        if(user !== null){
            user = JSON.parse(user);
            this.auth.isAuthenticated = true;
            this.auth.user = user;
            this.getShippingData();
        }
    },
    computed(){
      
    },
    mounted(){
        this.emitter.on("addressModal", message => {
            this.modalisOpen = message;
        });
    },
    methods:{

        getShippingData(){
            axios.get(this.selfDomain+"vueweb/checkout", {
              headers: {
                Authorization: "Bearer " + this.auth.user.access_token,
              }
          }).then(res=>{
              console.log(res.data);
              this.addresses = res.data.data;
          }).catch(err=>{

          });
        },
        addNewAddress(){
            this.modalisOpen= true;
        },
        delivery_info(){
            console.log("okk");
            let address_id = 1;
            axios.get(this.selfDomain+"vueweb/checkout/delivery_info", {
              params:{
                address_id: address_id,
              },
              headers: {
                Authorization: "Bearer " + this.auth.user.access_token,
              }
          }).then(res=>{
              console.log(res.data);
          }).catch(err=>{

          });
        }
    }
  }
  </script>
  
  <style>
  
  </style>