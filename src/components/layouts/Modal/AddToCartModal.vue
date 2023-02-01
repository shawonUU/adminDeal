


<template >
    <div @mousedown="hidModal()" class="sb-lightbox-overlay" style=" position: fixed;width: 100%;height: 100%;top: 0;right: 0;left: 0;bottom: 0;z-index: 100;background-color: rgba(0, 0, 0, 0.6);display: block;animation: sb-fade-animation;"></div>
    <div  class="modal fade show" id="addToCart" style="z-index: 99999; display: block; padding-right: 17px;" aria-modal="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-zoom product-modal modal-lg" id="modal-size" role="document">
            <div class="modal-content position-relative">
                <div v-if="preLoader" class="c-preloader text-center p-3" >
                    <i class="las la-spinner la-spin la-3x"></i>
                </div>
                <button type="button" class="close absolute-top-right btn-icon close z-1" data-dismiss="modal" aria-label="Close">
                    <span @click="hidModal()" aria-hidden="true" class="la-2x">×</span>
                </button>

                <templete v-if="productDetails != false">
                    <div class="modal-body p-4 c-scrollbar-light">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="row gutters-10 flex-row-reverse">
                                
                                    <div class="col">
                                        <div class="aiz-carousel product-gallery" data-nav-for='.product-gallery-thumb' data-fade='true' data-auto-height='true'>
                                            
                                            <div v-for="(photo, index) in productDetails.photos" :key="index" class="carousel-box img-zoom rounded">
                                                <img v-if="photo.path != null"
                                                    class="img-fluid lazyload"
                                                    
                                                    :src="photo.path"
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
                                                            <label v-for="(color, index) in productDetails.colors" :key="index" class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" :ref="color.name">
                                                                <input
                                                                    @click="changeColor(color.name)"
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
                                                            <button @click="decresQuantity()" class="btn col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="minus" data-field="quantity">
                                                                <i class="las la-minus"></i>
                                                            </button>
                                                            <input @change="setQuantity()" id="quantity" type="number" name="quantity" class="col border-0 text-center flex-grow-1 fs-16 input-number" placeholder="1" :value="quantity"  lang="en">
                                                            <button @click="incresQuantity()" class="btn  col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="plus" data-field="quantity">
                                                                <i class="las la-plus"></i>
                                                            </button>
                                                        </div>
                                                        <div class="avialable-amount opacity-60">
                                                            <templete v-if="productDetails.stock_visibility_state == 'quantity'">
                                                            (<span id="available-quantity">{{ productDetails.stocksQty }}</span> {{ 'available' }})
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

                                        <div class="row no-gutters pb-3 " id="chosen_price_div">
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
                                            <button  type="button" class="btn btn-primary buy-now fw-600 add-to-cart" @click="addToCart()">
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
                                                <button type="button" class="btn btn-primary buy-now fw-600 add-to-cart" @click="addToCart()">
                                                    <i class="la la-shopping-cart"></i>
                                                    <span class="d-none d-md-inline-block">{{ 'Add to cart' }}</span>
                                                </button>
                                            </templete>
                                            <templete v-else>
                                                <button type="button" class="btn btn-primary buy-now fw-600 add-to-cart" @click="addToCart()">
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


<templete v-if="addedTocart != false">
    <templete v-if="addedTocart.templete == 'addedToCart'">
        <div class="modal-body p-4 added-to-cart">
            <div class="text-center text-success mb-4">
                <i class="las la-check-circle la-3x"></i>
                <h3>{{ 'Item added to your cart!'}} {{ addedTocart.cart_count }}</h3>
            </div>
            <div class="media mb-4">
                <img :src="addedTocart.product.thumbnail_image" class="mr-3 lazyload size-100px img-fit rounded" alt="Product Image">
                <div class="media-body pt-3 text-left">
                    <h6 class="fw-600">
                        {{  addedTocart.product.name }}
                    </h6>
                    <div class="row mt-3">
                        <div class="col-sm-2 opacity-60">
                            <div>{{ 'Price' }}:</div>
                        </div>
                        <div class="col-sm-10">
                            <div class="h6 text-primary">
                                <strong>
                                    {{ addedTocart.single_price }}
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded shadow-sm">
                <div class="border-bottom p-3">
                    <h3 class="fs-16 fw-600 mb-0">
                        <span class="mr-4">{{ 'Frequently Bought Together'}}</span>
                    </h3>
                </div>
                <div class="p-3">
                    <div class="aiz-carousel gutters-5 half-outside-arrow" data-items="2" data-xl-items="3" data-lg-items="4"  data-md-items="3" data-sm-items="2" data-xs-items="2" data-arrows='true' data-infinite='true'>
                        <div v-for="(related_product, index) in addedTocart.reletedProducts" :key="index" class="carousel-box">
                            <div class="aiz-card-box border border-light rounded hov-shadow-md my-2 has-transition">
                                <div class="">
                                    <a href="javascript:void(0)" class="d-block">
                                        <img
                                            class="img-fit lazyload mx-auto h-140px h-md-210px"
                                            :src="related_product.thumbnail_image"
                                            :alt="related_product.name"
                                        >
                                        
                                    </a>
                                </div>
                                <div class="p-md-3 p-2 text-left">
                                    <div class="fs-15">
                                        <del v-if="related_product.base_price != related_product.base_discounted_price" class="fw-600 opacity-50 mr-1">{{ related_product.base_price }}</del>
                                        <span class="fw-700 text-primary">{{ related_product.base_discounted_price }}</span>
                                    </div>
                                    <div class="rating rating-sm mt-1">
                                        <!-- {{ renderStarRating($related_product->rating) }} -->
                                        *****
                                    </div>
                                    <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
                                        <a href="javascript:void(0)" class="d-block text-reset">{{ related_product.name }}</a>
                                    </h3>
                                   
                                        <div v-if="addedTocart.addon_is_activated" class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                                            {{ 'Club Point' }}:
                                            <span class="fw-700 float-right">{{ related_product.earn_point }}</span>
                                        </div>
                                   
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button class="btn btn-outline-primary mb-3 mb-sm-0" data-dismiss="modal">{{ 'Back to shopping'}}</button>
                <a href="javascript:void(0)" class="btn btn-primary mb-3 mb-sm-0">{{ 'Proceed to Checkout'}}</a>
                <!-- {{ route('cart') }} -->
            </div>
        </div>

    </templete>
    <templete v-if="addedTocart.templete == 'minQtyNotSatisfied'">
        <div class="modal-body p-4 added-to-cart">
            <div class="text-center text-danger">
                <h2>{{'oops..'}}</h2>
                <h3>{{'You have to add minimum '+addedTocart.min_qty+' products!'}}</h3>
            </div>
            <div class="text-center mt-5">
                <button class="btn btn-outline-primary" data-dismiss="modal">{{'Back to shopping'}}</button>
            </div>
        </div>
    </templete>
    <templete v-if="addedTocart.templete == 'outOfStockCart'">
        <div class="modal-body p-4 added-to-cart">
            <div class="text-center text-danger">
                <h2>{{'oops..'}}</h2>
                <h3>{{'This item is out of stock!'}}</h3>
            </div>
            <div class="text-center mt-5">
                <button class="btn btn-outline-primary" data-dismiss="modal">{{'Back to shopping'}}</button>
            </div>
        </div>
    </templete>
    <templete v-if="addedTocart.templete == 'auctionProductAlredayAddedCart'">
        <div class="modal-body p-4 added-to-cart">
            <div class="text-center text-danger">
                <h2>{{'oops..'}}</h2>
                <h3>{{'Remove auction product from cart to add this product.'}}</h3>
            </div>
            <div class="text-center mt-5">
                <button class="btn btn-outline-primary" data-dismiss="modal">{{'Back to shopping'}}</button>
            </div>
        </div>
    </templete>
</templete>


            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    props:['productId'],
    data(){
        return{
            auth:{
                isAuthenticated: false,
                user: {},
            },
            productDetails: false,
            addedTocart: false,
            color: null,
            quantity: 0,
            preLoader: false,
        }
    },
    created(){
        var user = localStorage.getItem("user");
        if(user !== null){
            user = JSON.parse(user);
            this.auth.isAuthenticated = true;
            this.auth.user = user;
        }
        this.getProductDetails();
    },
    methods:{
        hidModal(){
           this.emitter.emit("viewAddToCartModal", false); 
           let ele = document.getElementsByTagName('body');
           ele[0].classList.remove("modal-open");
        },
        getProductDetails(){
            this.preLoader = true;
            axios.get(this.rootDomain+'vueweb/cart/show-cart-modal?id='+this.productId)
            .then(res=>{
                console.log(res.data.productCollection.data[0]);
                // console.log(res.data);
                this.productDetails = res.data.productCollection.data[0];
                this.quantity = this.productDetails.min_qty;
                // console,log(res.data)
                
                this.preLoader = false;
                this.getVariantPrice();

            }).catch(err=>{

            });
        },

        getVariantPrice(){
            let data;
            if(this.color != null){data = {id: this.productDetails.id, quantity: this.quantity, color:this.color};}
            else{data = {id: this.productDetails.id, quantity: this.quantity};}
          
            if(this.productDetails.min_qty > 0 && this.checkAddToCartValidity()){
                $.ajax({
                   type:"get",
                   url: this.rootDomain+'vueweb/product-variant_price',
                   data: data,
                   success: function(data){
                        $('.product-gallery-thumb .carousel-box').each(function (i) {
                            if($(this).data('variation') && data.variation == $(this).data('variation')){
                                $('.product-gallery-thumb').slick('slickGoTo', i);
                            }
                        })

                        $('#option-choice-form #chosen_price_div').removeClass('d-none');
                        $('#option-choice-form #chosen_price_div #chosen_price').html(data.price);
                        $('#available-quantity').html(data.quantity);
                        $('.input-number').prop('max', data.max_limit);
                        if(parseInt(data.in_stock) == 0 && data.digital  == 0){
                           $('.buy-now').addClass('d-none');
                           $('.add-to-cart').addClass('d-none');
                           $('.out-of-stock').removeClass('d-none');
                        }
                        else{
                           $('.buy-now').removeClass('d-none');
                           $('.add-to-cart').removeClass('d-none');
                           $('.out-of-stock').addClass('d-none');
                        }
                   }
               });
            }
        },
        checkAddToCartValidity(){
            var names = {};
            $('#option-choice-form input:radio').each(function() { // find unique names
                names[$(this).attr('name')] = true;
            });
            var count = 0;
            $.each(names, function() { // then count them
                count++;
            });

            if($('#option-choice-form input:radio:checked').length == count){
                return true;
            }
            return false;
        },

        incresQuantity(){
             this.quantity = this.quantity + 1;
            if( this.quantity > this.productDetails.stocksQty)  
                this.quantity = this.productDetails.stocksQty;
            this.getVariantPrice();
        },
        decresQuantity(){
            this.quantity = this.quantity - 1;
            if( this.quantity<1)  this.quantity = 1;
            this.getVariantPrice();
        },
        setQuantity(){
            let qty = $("#quantity").val();
            if(qty<1) qty = 1;
            if(qty > this.productDetails.stocksQty) 
                qty = this.productDetails.stocksQty;
            this.quantity = qty;
            this.getVariantPrice();
        },
        changeColor(color){
            this.color = color;
             this.getVariantPrice();
        },
        addToCart(){
            if(this.auth.isAuthenticated==true &&  this.auth.user.type != 'customer'){
                alert('Please Login as a customer to add products to the Cart.');
                return false;
            }

            if(this.checkAddToCartValidity()) {
                this.preLoader = true;

                let data;
                if(this.color != null){data = {id: this.productId, quantity: this.quantity, color: this.color};}
                else{data = {id: this.productId, quantity: this.quantity};}


                axios.get(this.rootDomain+'vueweb/cart/addtocart',{params: data})
                .then(res=>{
                    this.productDetails = false;
                    this.preLoader = false;
                    console.log(res.data);return;
                    this.addedTocart = res.data;
                    this.addedTocart.product = this.addedTocart.product.data[0];
                    this.addedTocart.reletedProducts = this.addedTocart.reletedProducts.data;
                    console.log(this.addedTocart.reletedProducts);

                }).catch(err=>{

                });

                // $.ajax({
                //     type:"get",
                //     url: this.rootDomain+'vueweb/cart/addtocart',
                //     data: data,
                //     success: function(data){

                //        $('#addToCart-modal-body').html(null);
                //        $('.c-preloader').hide();
                //        $('#modal-size').removeClass('modal-lg');
                //        $('#addToCart-modal-body').html(data.modal_view);
                //        AIZ.extra.plusMinus();
                //        AIZ.plugins.slickCarousel();
                //        updateNavCart(data.nav_cart_view,data.cart_count);
                //     //    this.addedTocart = 
                //     }
                // });
            }
            else{
                alert('Please choose all the options');
            }
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