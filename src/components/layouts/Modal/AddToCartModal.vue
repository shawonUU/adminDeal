


<template >
    <div @mousedown="hidModal()" class="sb-lightbox-overlay" style=" position: fixed;width: 100%;height: 100%;top: 0;right: 0;left: 0;bottom: 0;z-index: 100;background-color: rgba(0, 0, 0, 0.6);display: block;animation: sb-fade-animation;"></div>
    <div  class="modal fade show" id="addToCart" style="z-index: 99999; display: block; padding-right: 17px;" aria-modal="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-zoom product-modal modal-lg" id="modal-size" role="document">
            <div class="modal-content position-relative">
                <div class="c-preloader text-center p-3" style="display: none;">
                    <i class="las la-spinner la-spin la-3x"></i>
                </div>
                <button type="button" class="close absolute-top-right btn-icon close z-1" data-dismiss="modal" aria-label="Close">
                    <span @click="hidModal()" aria-hidden="true" class="la-2x">×</span>
                </button>
                
                
<div class="modal-body p-4 c-scrollbar-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, numquam?</div>

<templete v-if="productDetails != null">
<div class="modal-body p-4 c-scrollbar-light">
    <div class="row">
        <div class="col-lg-6">
            <div class="row gutters-10 flex-row-reverse">
               
                <div class="col">
                    <div class="aiz-carousel product-gallery" data-nav-for='.product-gallery-thumb' data-fade='true' data-auto-height='true'>
                        
                        <div v-for="(photo, index) in productDetails.photos" :key="index" class="carousel-box img-zoom rounded">
                            <img v-if="photo.path != null"
                                class="img-fluid lazyload"
                                :src="rootDomain+'assets/img/placeholder.jpg'"
                                :data-src="photo.path"
                            >
                        </div>
                    </div>
                </div>
                <div class="col-auto w-90px">
                    <div class="aiz-carousel carousel-thumb product-gallery-thumb" data-items='5' data-nav-for='.product-gallery' data-vertical='true' data-focus-select='true'>
                        <div v-for="(photo, index) in productDetails.photos" :key="index" class="carousel-box c-pointer border p-1 rounded">
                            <img v-if="photo.path != null"
                                class="lazyload mw-100 size-60px mx-auto"
                                :src="rootDomain+'assets/img/placeholder.jpg'"
                                :data-src="photo.path"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="text-left">
                <h2 class="mb-2 fs-20 fw-600">
                    {{  productDetails.name  }}
                </h2>

                <template v-if="productDetails.home_price != productDetails.home_discounted_price">
                    <div class="row no-gutters mt-3">
                        <div class="col-2">
                            <div class="opacity-50 mt-2">Price:</div>
                        </div>
                        <div class="col-10">
                            <div class="fs-20 opacity-60">
                                <del>
                                    {{ productDetails.home_price }}
                                    <span v-if="productDetails.unit != null">/{{ productDetails.unit }}</span>
                                </del>
                            </div>
                        </div>
                    </div>

                    <div class="row no-gutters mt-2">
                        <div class="col-2">
                            <div class="opacity-50">Discount Price:</div>
                        </div>
                        <div class="col-10">
                            <div class="">
                                <strong class="h2 fw-600 text-primary">
                                    {{ productDetails.home_discounted_price }}
                                </strong>
                                <span v-if="productDetails.unit != null" class="opacity-70">/{{ productDetails.unit }}</span>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="row no-gutters mt-3">
                        <div class="col-2">
                            <div class="opacity-50">Price:</div>
                        </div>
                        <div class="col-10">
                            <div class="">
                                <strong class="h2 fw-600 text-primary">
                                    {{ productDetails.home_discounted_price }}
                                </strong>
                                <span class="opacity-70">/{{ productDetails.unit }}</span>
                            </div>
                        </div>
                    </div>
                </template>

                    <div v-if="productDetails.addon_is_activated && productDetails.earn_point > 0" class="row no-gutters mt-4">
                        <div class="col-2">
                            <div class="opacity-50">Cashback:</div>
                        </div>
                        <div class="col-10">
                            <div class="d-inline-block club-point bg-soft-primary px-3 py-1 border">
                                <span class="strong-700">{{ productDetails.earn_point }}</span>
                            </div>
                        </div>
                    </div>

                <hr>

                <form id="option-choice-form">
                    
                    <!-- <input type="hidden" name="id" value="{{ productDetails.id }}"> -->

                    <!-- Quantity + Add to cart -->
                    
                    <templete v-if="productDetails.digital != 1">
                        <templete v-if="productDetails.choice_options != null">

                                <div v-for="(choice, index) in productDetails.choice_options" :key="index" class="row no-gutters">
                                    <div class="col-2">
                                        <div class="opacity-50 mt-2 ">{{ choice.name }}:</div>
                                    </div>
                                    <div class="col-10">
                                        <div class="aiz-radio-inline">
                                            <label v-for="(value, indexdn) in choice.options" :key="indexdn" class="aiz-megabox pl-0 mr-2">
                                                <input
                                                    type="radio"
                                                    :name="'attribute_id_'+choice.id"
                                                    :value="value"
                                                    :checked="indexdn==0"
                                                >
                                                <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                                                    {{ value }}
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                        </templete>

                        <templete v-if="productDetails.colors.length > 0">
                            <div class="row no-gutters">
                                <div class="col-2">
                                    <div class="opacity-50 mt-2">Color:</div>
                                </div>
                                <div class="col-10">
                                    <div class="aiz-radio-inline">
                                        <label v-for="(color, index) in productDetails.colors" :key="index" class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="{{ \App\Models\Color::where('code', $color)->first()->name }}">
                                            <input
                                                type="radio"
                                                name="color"
                                                :value="color.name"
                                                :checked="index == 0"
                                            >
                                            <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                                                <span class="size-30px d-inline-block rounded" :style="'background:'+color+';'"></span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <hr>
                        </templete>

                        <div class="row no-gutters">
                            <div class="col-2">
                                <div class="opacity-50 mt-2">{{ 'Quantity'}}:</div>
                            </div>
                            <div class="col-10">
                                <div class="product-quantity d-flex align-items-center">
                                    <div class="row no-gutters align-items-center aiz-plus-minus mr-3" style="width: 130px;">
                                        <button class="btn col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="minus" data-field="quantity" disabled="">
                                            <i class="las la-minus"></i>
                                        </button>
                                        <input type="number" name="quantity" class="col border-0 text-center flex-grow-1 fs-16 input-number" placeholder="1" :value="productDetails.min_qty" :min="productDetails.min_qty" max="10" lang="en">
                                        <button class="btn  col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="plus" data-field="quantity">
                                            <i class="las la-plus"></i>
                                        </button>
                                    </div>
                                    <div class="avialable-amount opacity-60">
                                        <templete v-if="productDetails.stock_visibility_state == 'quantity'">
                                        (<span id="available-quantity">{{ $qty }}</span> {{ 'available' }})
                                        </templete>
                                        <templete v-if="productDetails.stock_visibility_state == 'text' && productDetails.stocksQty >= 1">
                                            (<span id="available-quantity">{{ 'In Stock' }}</span>)
                                        </templete>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr>
                    </templete>

                    <div class="row no-gutters pb-3 d-none" id="chosen_price_div">
                        <div class="col-2">
                            <div class="opacity-50">{{ 'Total Price' }}:</div>
                        </div>
                        <div class="col-10">
                            <div class="product-price">
                                <strong id="chosen_price" class="h4 fw-600 text-primary">

                                </strong>
                            </div>
                        </div>
                    </div>

                </form>
                <div class="mt-3">
                    <templete v-if="productDetails.digital == 1">
                        <button  type="button" class="btn btn-primary buy-now fw-600 add-to-cart" onclick="addToCart()">
                            <i class="la la-shopping-cart"></i>
                            <span class="d-none d-md-inline-block">{{ 'Add to cart'}}</span>
                        </button>
                    </templete>
                    <templete v-if="productDetails.stocksQty > 0">
                        <templete v-if="productDetails.external_link != null">
                            <!--<a type="button" class="btn btn-soft-primary mr-2 add-to-cart fw-600" href="{{ $product->external_link }}">-->
                            <!--    <i class="las la-share"></i>-->
                            <!--    <span class="d-none d-md-inline-block">{{ translate($product->external_link_btn)}}</span>-->
                            <!--</a>-->
                            <button type="button" class="btn btn-primary buy-now fw-600 add-to-cart" onclick="addToCart()">
                                <i class="la la-shopping-cart"></i>
                                <span class="d-none d-md-inline-block">{{ 'Add to cart' }}</span>
                            </button>
                        </templete>
                        <templete v-else>
                            <button type="button" class="btn btn-primary buy-now fw-600 add-to-cart" onclick="addToCart()">
                                <i class="la la-shopping-cart"></i>
                                <span class="d-none d-md-inline-block">{{ 'Add to cart'}}</span>
                            </button>
                        </templete>
                    </templete>
                    <button type="button" class="btn btn-secondary out-of-stock fw-600 d-none" disabled>
                        <i class="la la-cart-arrow-down"></i>{{ 'Out of Stock' }}
                    </button>
                </div>

            </div>
        </div>
    </div>
</div>
</templete>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {

    data(){
        return{
            auth:{
                isAuthenticated: false,
                user: {},
            },
            productDetails: null,
        }
    },
    created(){
        // var user = localStorage.getItem("user");
        // if(user !== null){
        //     user = JSON.parse(user);
        //     this.auth.isAuthenticated = true;
        //     this.auth.user = user;
        // }
        this.getProductDetails();
    },
    methods:{
        hidModal(){
           this.emitter.emit("viewAddToCartModal", false); 
           let ele = document.getElementsByTagName('body');
           ele[0].classList.remove("modal-open");
        },
        getProductDetails(){
            alert('okkk');
            axios.get('https://localhost/backend/vueweb/cart/show-cart-modal?id=8256')
            .then(res=>{
                console.log(res.data.productCollection.data[0]);
                // console.log(res.data);
                this.productDetails = res.data.productCollection.data[0];
                // console,log(res.data)

            }).catch(err=>{

            });
        }
    }
}
</script>
<style>

element {
  z-index: 1040;
  display: block;
  padding-right: 17px;
}
.modal-open .modal {
  overflow-x: hidden;
  overflow-y: hidden;
}
.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}
.fade {
  transition: opacity .15s linear;
}
*, ::after, ::before {
  box-sizing: border-box;
}
</style>