<template>
<section class="mb-4 pt-3">
   <div class="container">
      <div class="bg-white shadow-sm rounded p-3">
         <div class="row">
            <div class="col-xl-5 col-lg-6 mb-4">
               <div class="sticky-top z-3 row gutters-10">
                  <!-- @php
                  $photos = explode(',', $detailedProduct->photos);
                  @endphp -->
                  <div class="col order-1 order-md-2">
                     <div class="aiz-carousel product-gallery" data-nav-for='.product-gallery-thumb' data-fade='true' data-auto-height='true'>
                        <!-- @foreach ($photos as $key => $photo) -->
                        <div class="carousel-box img-zoom rounded">
                           <img
                              class="img-fluid lazyload"
                              :src="productsInfo.thumbnail_image"
                              >
                        </div>
                        <!-- @endforeach -->
                        <!-- @foreach ($detailedProduct->stocks as $key => $stock)
                        @if ($stock->image != null) -->
                        <div   class="carousel-box img-zoom rounded">
                           <img
                              class="img-fluid lazyload"
                              :src="productsInfo.thumbnail_image"
                              >
                        </div>
                        <!-- @endif
                        @endforeach -->
                     </div>
                  </div>
                  <div class="col-12 col-md-auto w-md-80px order-2 order-md-1 mt-3 mt-md-0">
                     <div class="aiz-carousel product-gallery-thumb" data-items='5' data-nav-for='.product-gallery' data-vertical='true' data-vertical-sm='false' data-focus-select='true' data-arrows='true'>
                        <!-- @foreach ($photos as $key => $photo) -->
                        <div v-for="(photo,index) in productsInfo.photos" class="carousel-box c-pointer border p-1 rounded">
                           <img
                              class="lazyload mw-100 size-50px mx-auto"
                              :src="photo"
                              >
                        </div>
                        <!-- @endforeach
                        @foreach ($detailedProduct->stocks as $key => $stock)
                        @if ($stock->image != null) -->
                        <div  v-for="(photo,index) in productsInfo.photos" class="carousel-box c-pointer border p-1 rounded" data-variation="{{ $stock->variant }}">
                           <img
                              class="lazyload mw-100 size-50px mx-auto"
                              :src="photo"
                              >
                        </div>
                        <!-- @endif
                        @endforeach -->
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-7 col-lg-6">
               <div class="text-left">
                  <h1 class="mb-2 fs-20 fw-600">
                     {{productsInfo.name}}
                  </h1>
                  <div class="row align-items-center">
                     <!-- @if ($detailedProduct->est_shipping_days) -->
                     <div  v-if="productsInfo.est_shipping_day!=null" class="col-auto ml">
                        <small class="mr-2 opacity-50">Estimate Shipping Time: </small>{{productsInfo.est_shipping_day}}Days
                     </div>
                     <!-- @endif -->
                  </div>
                  <hr>
                  <div class="row align-items-center">
                     <div class="col-auto">
                        <small class="mr-2 opacity-50">Sold by </small><br>
                        <!-- @if ($detailedProduct->added_by == 'seller' && get_setting('vendor_system_activation') == 1) -->
                        <a @click="shopSlug(productsInfo.shop_slug)" v-if="productsInfo.shop_name!=null" class="text-reset">{{  productsInfo.shop_name }}</a>
                        <!-- @else -->
                         <p v-else>Inhouse product</p>
                        <!-- @endif -->
                     </div>
                     <!-- @if (get_setting('conversation_system') == 1) -->
                     <div class="col-auto">
                        <button class="btn btn-sm btn-soft-primary" onclick="show_chat_modal()">Chat With Seller</button>
                     </div>
                     <!-- @endif
                     @if ($detailedProduct->brand != null) -->
                     <div class="col-auto">
                        <a @click="shopSlug(productsInfo.shop_slug)">
                        <img  :src="productsInfo.shop_logo" alt="brand logo" height="30">
                        </a>
                     </div>
                     <!-- @endif -->
                  </div>
                  <hr>
                  <div class="row no-gutters mt-3">
                     <div class="col-sm-2">
                        <div class="opacity-50 my-2">Auction Will End:</div>
                     </div>
                     <div class="col-sm-10">
                        <!-- @if($detailedProduct->auction_end_date > strtotime("now")) -->
                        <!-- <div class="aiz-count-down align-items-center" data-date="{{ date('Y/m/d H:i:s', $detailedProduct->auction_end_date) }}"></div> -->
                        <!-- @else -->
                        <p>Ended</p>
                        <!-- @endif -->
                     </div>
                  </div>
                  <hr>
                  <div class="row no-gutters mt-3">
                     <div class="col-sm-2">
                        <div class="opacity-50 my-2">Starting Bid:</div>
                     </div>
                     <div class="col-sm-10">
                        <span class="opacity-50 fs-20">
                          {{ productsInfo.starting_bid}}
                        </span>
                        <!-- @if($detailedProduct->unit != null) -->
                        <span class="opacity-70">/{{ productsInfo.unit }}</span>
                        <!-- @endif -->
                     </div>
                  </div>
                  <hr>
                  <!-- @if(Auth::check() && Auth::user()->product_bids->where('product_id',$detailedProduct->id)->first() != null)
                  <div class="row no-gutters">
                     <div class="col-sm-2">
                        <div class="opacity-50">{{ translate('My Bidded Amount')}}:</div>
                     </div>
                     <div class="col-sm-10">
                        <span class="opacity-50 fs-20">
                        {{ single_price(Auth::user()->product_bids->where('product_id',$detailedProduct->id)->first()->amount) }}
                        </span>
                     </div>
                  </div>
                  <hr>
                  @endif -->
                  <!-- @php $highest_bid = $detailedProduct->bids->max('amount'); @endphp
                  <div class="row no-gutters my-2">
                     <div class="col-sm-2">
                        <div class="opacity-50">{{ translate('Highest Bid')}}:</div>
                     </div>
                     <div class="col-sm-10">
                        <strong class="h3 fw-600 text-primary">
                        @if($highest_bid != null)
                        {{ single_price($highest_bid) }}
                        @endif
                        </strong>
                     </div>
                  </div>
                  <hr> -->
                   <!-- @php $min_bid_amount = $highest_bid != null ? $highest_bid+1 : $detailedProduct->starting_bid; @endphp
                  @if($detailedProduct->auction_end_date >= strtotime("now"))
                  <div class="mt-3">
                     @if(Auth::check() && $detailedProduct->user_id == Auth::user()->id)
                     <span class="badge badge-inline badge-danger">{{ translate('Seller Can Not Place Bid to His Own Product') }}</span>
                     @else
                     <button type="button" class="btn btn-primary buy-now fw-600" onclick="bid_modal()">
                     <i class="las la-gavel"></i>
                     @if(Auth::check() && Auth::user()->product_bids->where('product_id',$detailedProduct->id)->first() != null)
                     {{ translate('Change Bid')}}
                     @else
                     {{ translate('Place Bid')}}
                     @endif
                     </button>
                     @endif
                  </div>
                  @endif -->
                  <div class="row no-gutters mt-4">
                     <div class="col-sm-2">
                        <div class="opacity-50 my-2">Share</div>
                     </div>
                     <div class="col-sm-10">
                        <div class="aiz-share"></div>
                     </div>
                  </div>
                  <div> <b>সম্মানিত কাস্টমার, প্রডাক্টের   বিস্তারিত জানতে সেলারের সাথে কথা বলুন।  আমরা চাই অকশন বা নিলামের মাধ্যমে যে কোন পণ্য ক্রয়- বিক্রয় ছড়িয়ে পড়ুক সমগ্র বাংলাদেশে। এডমিন ডিল শুধু আপনার অর্থের নিশ্চয়তা প্রদান করে, এবং বিক্রেতার পরিচয় নিশ্চিত করে।  পণ্য টি নিজ দায়িত্বে যাচাই করুন ও বুঝে নিন এবং আমাদের ক্লিয়ারেন্স প্রদান করুন। ক্লিয়ারেন্স পাওয়ার পর সেলারকে পেমেন্ট প্রদান করা হবে।  ক্লিয়ারেন্স প্রদানের পর আর কোন অভিযোগ গৃহীত হবে না। </b></div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<section class="mb-4">
        <div class="container">
            <div class="row gutters-10">
                <div class="col-xl-12 order-0 order-xl-1">
                    <div class="bg-white mb-3 shadow-sm rounded">
                           <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="home" aria-selected="true">Description</button>
                                </li>
                                <li v-if="productsInfo.vedio_link != null" class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#video" type="button" role="tab" aria-controls="video" aria-selected="false">Video</button>
                                </li>
                                <li v-if="productsInfo.pdf != null" class="nav-item" role="presentation">
                                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#downloads" type="button" role="tab" aria-controls="downloads" aria-selected="false">Downloads</button>
                                </li>
                                <li v-if="productsInfo.auction_product==0" class="nav-item" role="presentation">
                                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">Reviews</button>
                                </li>
                            </ul>

                            <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">des</div>
                            <div class="tab-pane fade" id="video" role="tabpanel" aria-labelledby="video-tab">vidd</div>
                            <div class="tab-pane fade" id="downloads" role="tabpanel" aria-labelledby="downloads-tab">downl</div>
                            <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">rev</div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
    </section>
  
</template>

<script>
import axios from 'axios'
export default {
    props:['slug'],  
    data(){
    return{
        productsInfo:[],
    }
   },
   mounted(){
    this.getAuctionDetails(this.rootDomain)
   },
   methods:{
    getAuctionDetails(rootDomain){
        axios.get(rootDomain+'vue/auction-product/'+this.slug)
        .then((response)=>{
            // console.log(response.data.data)
            this.productsInfo = response.data.data;
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    shopSlug(slug){
            this.$router.push({
                name:'Shop',
                params: {
                    slug: slug
                }
            });
       } 
   }
}
</script>

<style>

</style>