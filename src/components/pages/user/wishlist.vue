<template>
 
            <div class="aiz-titlebar mt-2 mb-4">
        <div class="row align-items-center">
            <div class="col-md-6">
                <b class="h4">{{ 'Wishlist'}}</b>
            </div>
        </div>
    </div>

    <div class="row gutters-5">
                    <div v-for="(wishItem, index) in wishlist" :key="index" class="col-xxl-3 col-xl-4 col-lg-3 col-md-4 col-sm-6" id="wishlist_{{  }}">
                        <div  class="card mb-2 shadow-sm">
                            <div class="card-body">
                                <a href="javascript:void(0)" class="d-block mb-3">
                                    <img :src="wishItem.thumbnail_image" class="img-fit h-140px h-md-200px">
                                </a>

                                <h5 class="fs-14 mb-0 lh-1-5 fw-600 text-truncate-2">
                                    <a href="javascript:void(0)" @click="wishItem.digital==0?productDetails(wishItem.slug,wishItem):digitalProductDetails(wishItem.slug, wishItem)" class="text-reset">{{ wishItem.name }}</a>
                                </h5>
                                <div class="rating rating-sm mb-1">
                                    <template v-for="index in 5" :key="index">
                                        <i v-if="index<=wishItem.rating" class = 'las la-star active'></i>
                                        <i v-else class = 'las la-star'></i>
                                    </template>
                                    ({{ wishItem.rating }})
                                </div>
                                <div class=" fs-14">
                                
                                    <templete v-if="wishItem.base_price != wishItem.base_discounted_price">
                                        <del class="opacity-60 mr-1">{{ wishItem.base_price }}</del>
                                    </templete>
                                    <!-- <templete v-else> -->
                                        <span class="fw-600 text-primary">{{ wishItem.base_discounted_price }}</span>
                                    <!-- </templete> -->
                                        
                                </div>
                            </div>
                            <div class="card-footer">
                                <a href="javascript:void(0)" @click="removeWishlistItem(wishItem.id, index)" class="link link--style-3" data-toggle="tooltip" data-placement="top" title="Remove from wishlist">
                                    <i class="la la-trash la-2x"></i>
                                </a>
                                <button type="button" class="btn btn-sm btn-block btn-primary ml-3" >
                                    <i class="la la-shopping-cart mr-2"></i>{{ 'Add to cart'}}
                                </button>
                            </div>
                        </div>
            
                    </div>
            
            <h1>{{wishlist.nowishlist_image}}</h1>

            <div v-if="preLoader" class="c-preloader text-center p-3" style="height: 100%; width: 100%; text-align: center; font-size: 30px;">
                <i class="las la-spinner la-spin la-3x"></i>
            </div>
        
            <div v-if="wishlist.length == 0 && preLoader == false" class="col">
                <div class="text-center bg-white p-4 rounded shadow">
                    <img class="mw-100 h-200px" :src="nowishlist_image" alt="Image">
                    <h5 class="mb-0 h5 mt-3">{{ "There isn't anything added yet"}}</h5>
                </div>
            </div>

    </div>


    
    

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
                wishlist:[],
                nowishlist_image:'',
                preLoader:true,
            }
        },
        created(){
           var user = localStorage.getItem("user");
            if(user !== null){
                user = JSON.parse(user);
                this.auth.isAuthenticated = true;
                this.auth.user = user;
                this.getWishList();
            }
        },
        methods:{
            
            getWishList(){
                console.log("############################");
                // axios.get(this.selfDomain+'vueweb/wishlists', {
                axios.get(this.selfDomain+'vue/v3/wishlists', {
                    headers: {
                        Authorization: "Bearer " + this.auth.user.access_token,
                    }    
                }).then(res=>{
                this.preLoader = false;
                console.log(res.data);
                this.wishlist = res.data.wishlist.data;
                this.nowishlist_image = res.data.nowishlist_image;
                    console.log("ComeEEEEEE");
                }).catch(err=>{
                    console.log(err);
                });
            },
            productDetails(slug,product){
                this.$router.push({
                    name: "singleProduct",
                    params: {
                    slug: slug
                    }
                });
                

                let recentViewProduct={};
                if(this.$cookies.get('recentViewProducts') !== null){
                    recentViewProduct = this.$cookies.get('recentViewProducts')
                }
                recentViewProduct[product.id] = product;
                // console.log(product.id);
                // console.log(recentViewProduct);
                this.$cookies.set('recentViewProducts',recentViewProduct);

            },
            digitalProductDetails(slug,product){
                this.$router.push({
                    name: "DigitalProductDetails",
                    params: {
                    slug: slug
                    }
                });

                let recentViewProduct={};
                if(this.$cookies.get('recentViewProducts') !== null){
                    recentViewProduct = this.$cookies.get('recentViewProducts')
                }
                recentViewProduct[product.id] = product;
                this.$cookies.set('recentViewProducts',recentViewProduct);
            },
            removeWishlistItem(id, index){
                axios.get(this.selfDomain+'vueweb/wishlists_remove', {  
                    params: {
                        id:id,
                    },
                    headers: {
                        Authorization: "Bearer " + this.auth.user.access_token,
                     }
                })
                .then((response) =>{
                       this.wishlist.splice(index, 1);
                       this.emitter.emit("reload", true);

                }).catch((err)=>{
                    console.log(err)
                })
            }

        }
    } 
</script>
    
<style>
    
</style>













