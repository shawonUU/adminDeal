


<template>
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
                <div id="addToCart-modal-body"><div class="modal-body p-4 c-scrollbar-light">
    <div class="row">
        <div class="col-lg-6">
            <div class="row gutters-10 flex-row-reverse">
                                <div class="col">
                    <div class="aiz-carousel product-gallery slick-initialized slick-slider" data-nav-for=".product-gallery-thumb" data-fade="true" data-auto-height="true"><div class="slick-list draggable" style="height: 336.2px;"><div class="slick-track" style="opacity: 1; width: 317px;"><div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 317px; position: relative; left: 0px; top: 0px; z-index: 999; opacity: 1;"><div><div class="carousel-box img-zoom rounded" style="width: 100%; display: inline-block; position: relative; overflow: hidden;">
                            <img class="img-fluid ls-is-cached lazyloaded" src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/6jd31Jllm3wilh5bOOEQf35TP9twopPJFHfszYIC.png" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/6jd31Jllm3wilh5bOOEQf35TP9twopPJFHfszYIC.png" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                        <img role="presentation" alt="" src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/6jd31Jllm3wilh5bOOEQf35TP9twopPJFHfszYIC.png" class="zoomImg" style="position: absolute; top: -175.391px; left: -8.09621px; opacity: 0; width: 493.5px; height: 516px; border: medium none; max-width: none; max-height: none;"></div></div></div></div></div></div>
                </div>
                <div class="col-auto w-90px">
                    <div class="aiz-carousel carousel-thumb product-gallery-thumb slick-vertical slick-initialized slick-slider" data-items="5" data-nav-for=".product-gallery" data-vertical="true" data-focus-select="true"><div class="slick-list draggable" style="height: 393.75px;"><div class="slick-track" style="opacity: 1; height: 79px; transform: translate3d(0px, 0px, 0px);"><div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 70px;"><div><div class="carousel-box c-pointer border p-1 rounded" style="width: 100%; display: inline-block;">
                            <img class="mw-100 size-60px mx-auto ls-is-cached lazyloaded" src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/6jd31Jllm3wilh5bOOEQf35TP9twopPJFHfszYIC.png" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/6jd31Jllm3wilh5bOOEQf35TP9twopPJFHfszYIC.png" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                        </div></div></div></div></div></div>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="text-left">
                <h2 class="mb-2 fs-20 fw-600">
                    Black Plated Finger Ring For Mens
                </h2>

                                    <div class="row no-gutters mt-3">
                        <div class="col-2">
                            <div class="opacity-50 mt-2">Price:</div>
                        </div>
                        <div class="col-10">
                            <div class="fs-20 opacity-60">
                                <del>
                                    ৳800
                                                                            <span>/440</span>
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
                                    ৳80
                                </strong>
                                                                    <span class="opacity-70">/440</span>
                                                            </div>
                        </div>
                    </div>
                
                
                <hr>

                
                <form id="option-choice-form">
                    <input type="hidden" name="_token" value="TgjdFTn3QafNfTyep3nMjxGQ01NcCsVjnF8UsFCd">                    <input type="hidden" name="id" value="5931">

                    <!-- Quantity + Add to cart -->
                                                                                                
                        
                        <div class="row no-gutters">
                            <div class="col-2">
                                <div class="opacity-50 mt-2">Quantity:</div>
                            </div>
                            <div class="col-10">
                                <div class="product-quantity d-flex align-items-center">
                                    <div class="row no-gutters align-items-center aiz-plus-minus mr-3" style="width: 130px;">
                                        <button class="btn col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="minus" data-field="quantity" disabled="disabled">
                                            <i class="las la-minus"></i>
                                        </button>
                                        <input type="number" name="quantity" class="col border-0 text-center flex-grow-1 fs-16 input-number" placeholder="1" value="1" min="1" max="432" lang="en">
                                        <button class="btn  col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="plus" data-field="quantity">
                                            <i class="las la-plus"></i>
                                        </button>
                                    </div>
                                    <div class="avialable-amount opacity-60">
                                                                                (<span id="available-quantity">432</span> available)
                                                                            </div>
                                </div>
                            </div>
                        </div>

                        <hr>
                    
                    <div class="row no-gutters pb-3" id="chosen_price_div">
                        <div class="col-2">
                            <div class="opacity-50">Total Price:</div>
                        </div>
                        <div class="col-10">
                            <div class="product-price">
                                <strong id="chosen_price" class="h4 fw-600 text-primary">৳80</strong>
                            </div>
                        </div>
                    </div>

                </form>
                <div class="mt-3">
                                                                        <!--<a type="button" class="btn btn-soft-primary mr-2 add-to-cart fw-600" href="https://www.admindeal.com.bd/product/unisex-youthful-and-classic-design-braslate0">-->
                            <!--    <i class="las la-share"></i>-->
                            <!--    <span class="d-none d-md-inline-block">https://www.admindeal.com.bd/product/magnet-ceramic-bracelet-full-black</span>-->
                            <!--</a>-->
                            <button type="button" class="btn btn-primary buy-now fw-600 add-to-cart" onclick="addToCart()">
                                <i class="la la-shopping-cart"></i>
                                <span class="d-none d-md-inline-block">Add to cart</span>
                            </button>
                                                                <button type="button" class="btn btn-secondary out-of-stock fw-600 d-none" disabled="">
                        <i class="la la-cart-arrow-down"></i>Out of Stock
                    </button>
                </div>

            </div>
        </div>
    </div>
</div>


<!-- <script type="text/javascript">
    $('#option-choice-form input').on('change', function () {
        getVariantPrice();
    });
</script> -->
</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    methods:{
        hidModal(){
           this.emitter.emit("viewAddToCartModal", false); 
           let ele = document.getElementsByTagName('body');
           ele[0].classList.remove("modal-open");
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