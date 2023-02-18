<template>
  <div class="aiz-sidebar-wrap">
    <div class="aiz-sidebar left c-scrollbar">
        <div class="aiz-side-nav-logo-wrap">
            <div class="d-block text-center my-3">

                    <img  v-if="shop_logo!=null" class="mw-100 mb-3 brand-icon" :src="shop_logo" 
                        alt="">
                    <img v-else class="mw-100 mb-3 brand-icon" :src="header_logo" 
                        alt="">
           
                <h3 class="fs-16  m-0 text-primary">{{ shop.name }}</h3>
                <p class="text-primary">{{ auth.user.email }}</p>
            </div>
        </div>
        <div class="aiz-side-nav-wrap">
            <div class="px-20px mb-3">
                <input class="form-control bg-soft-secondary border-0 form-control-sm text-white" type="text"
                    name="" placeholder="Search in menu" id="menu-search"
                    onkeyup="menuSearch()">
            </div>
            <ul class="aiz-side-nav-list" id="search-menu">
            </ul>
            <ul class="aiz-side-nav-list" id="main-menu" data-toggle="aiz-side-menu">
                <li class="aiz-side-nav-item">
                    <router-link :to="{name: 'SellerDashboard'}" class="aiz-side-nav-link">
                        <i class="las la-home aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Dashboard</span>
                    </router-link>
                </li>
                <li class="aiz-side-nav-item">
                    <a @click="ProductsToggle=!ProductsToggle" href="javascript:void(0);"  class="aiz-side-nav-link">
                        <i class="las la-shopping-cart aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Products</span>
                        <span class="aiz-side-nav-arrow"></span>
                    </a>
                    <!--Submenu-->
               
                        <ul v-if="ProductsToggle">
                        <li class="aiz-side-nav-item">
                            <router-link  :to="{name: 'SellerProducts'}"
                                class="aiz-side-nav-link">
                                <span class="aiz-side-nav-text">Products</span>
                            </router-link>
                        </li>

                        <li class="aiz-side-nav-item">
                            <a href="seller.product_bulk_upload.index"
                                class="aiz-side-nav-link">
                                <span class="aiz-side-nav-text">Product Bulk Upload</span>
                            </a>
                        </li>
                        <li class="aiz-side-nav-item">
                            <a href="seller.digitalproducts"
                                class="aiz-side-nav-link">
                                <span class="aiz-side-nav-text">Digital Products</span>
                            </a>
                        </li>
                        <li class="aiz-side-nav-item">
                            <router-link  :to="{name:'productReviews'}"
                                class="aiz-side-nav-link ">
                                <span class="aiz-side-nav-text">Product Reviews</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li v-if="checkConversationSystem == 1" class="aiz-side-nav-item">
                    <router-link :to="{name:'sellerConversation'}"
                        class="aiz-side-nav-link">
                        <i class="las la-comment aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Message</span>
                            <span v-if="conversation.length > 0" class="badge badge-success">({{ conversation }})</span>
                    </router-link>
                </li>
                
                 <li class="aiz-side-nav-item">
                    <a @click="JobsToggle=!JobsToggle" href="javascript:void(0);" class="aiz-side-nav-link">
                        <i class="las la-shopping-cart aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Jobs</span>
                        <span class="aiz-side-nav-arrow"></span>
                    </a>
                    <!--Submenu-->
                    <ul v-if="JobsToggle">
                        <li class="aiz-side-nav-item">
                            <router-link :to="{name:'sellerJobs'}"
                                class="aiz-side-nav-link">
                                <span class="aiz-side-nav-text">All Jobs</span>
                            </router-link>
                        </li>
                         <li class="aiz-side-nav-item">
                            <a href="job.create"
                                class="aiz-side-nav-link">
                                <span class="aiz-side-nav-text">Add Job</span>
                            </a>
                        </li>
                    </ul>
                </li>


                <li class="aiz-side-nav-item">
                    <a href="seller.uploaded-files.index"
                        class="aiz-side-nav-link">
                        <i class="las la-folder-open aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Uploaded Files</span>
                    </a>
                </li>
                    <li v-if="seller_subscription==true" class="aiz-side-nav-item">
                        <a @click="PackageToggle=!PackageToggle" class="aiz-side-nav-link">
                            <i class="las la-shopping-cart aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Package</span>
                            <span class="aiz-side-nav-arrow"></span>
                        </a>
                        <ul  v-if="PackageToggle">
                            <li class="aiz-side-nav-item">
                                <router-link :to="{name:'sellerPackages'}" class="aiz-side-nav-link">
                                    <span class="aiz-side-nav-text">Packages</span>
                                </router-link>
                            </li>

                            <li class="aiz-side-nav-item">
                                <router-link :to="{name:'sellerPackagesPaymentList'}" class="aiz-side-nav-link">
                                    <span class="aiz-side-nav-text">Purchase Packages</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                
              
                    <li v-if="coupon_system==1" class="aiz-side-nav-item">
                        <a href="seller.coupon.index"
                            class="aiz-side-nav-link ">
                            <i class="las la-bullhorn aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Coupon</span>
                        </a>
                    </li>

                    <li v-if="wholesale==1" class="aiz-side-nav-item">
                        <a href="seller.wholesale_products_list"
                            class="aiz-side-nav-link">
                            <i class="las la-luggage-cart aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Wholesale Products</span>
                        </a>
                    </li>
               
                    <li v-if="auction==1" class="aiz-side-nav-item">
                        <a @click="auctionToggle=!auctionToggle" href="javascript:void(0);" class="aiz-side-nav-link">
                            <i class="las la-gavel aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Auction</span>
                            <span class="aiz-side-nav-arrow"></span>
                        </a>
                        <ul v-if="auctionToggle">
                            <li class="aiz-side-nav-item">
                                <a href="auction_products.seller.index"
                                    class="aiz-side-nav-link">
                                    <span
                                        class="aiz-side-nav-text">All Auction Products</span>
                                </a>
                            </li>
                            <li class="aiz-side-nav-item">
                                <a href="auction_products_orders.seller"
                                    class="aiz-side-nav-link">
                                    <span
                                        class="aiz-side-nav-text">Auction Product Orders</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                
                    <template v-if="pos_system==true">
                        <li v-if="pos_activation_for_seller==1" class="aiz-side-nav-item">
                            <a href="poin-of-sales.seller_index"
                                class="aiz-side-nav-link">
                                <i class="las la-fax aiz-side-nav-icon"></i>
                                <span class="aiz-side-nav-text">POS Manager</span>
                            </a>
                        </li>
                    </template>    

                <li class="aiz-side-nav-item">
                    <a href="seller.orders.index"
                        class="aiz-side-nav-link">
                        <i class="las la-money-bill aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Orders</span>
                    </a>
                </li>
                    <li v-if="refund_request==true" class="aiz-side-nav-item">
                        <a href="vendor_refund_request"
                            class="aiz-side-nav-link">
                            <i class="las la-backward aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Refund or exchange</span>
                        </a>
                    </li>

                <li class="aiz-side-nav-item">
                    <a href="seller.shop.index"
                        class="aiz-side-nav-link">
                        <i class="las la-cog aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Shop Setting</span>
                    </a>
                </li>

                <li class="aiz-side-nav-item">
                    <a href="seller.payments.index"
                        class="aiz-side-nav-link">
                        <i class="las la-history aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Payment History</span>
                    </a>
                </li>

                <li class="aiz-side-nav-item">
                    <a href="seller.money_withdraw_requests.index"
                        class="aiz-side-nav-link">
                        <i class="las la-money-bill-wave-alt aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Money Withdraw</span>
                    </a>
                </li>

                <li class="aiz-side-nav-item">
                    <a href="seller.commission-history.index" class="aiz-side-nav-link">
                        <i class="las la-file-alt aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Commission History</span>
                    </a>
                </li>

                <li v-if="conversation_system==1" class="aiz-side-nav-item">
                    <a href="https://www.admindeal.com.bd/supportboard/admin.php"  target="_blank"
                        class="aiz-side-nav-link">
                        <i class="fa fa-map-marker aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Customer Tracking</span>
                    </a>
                </li>

                <li v-if="product_query_activation==1" class="aiz-side-nav-item">
                    <a href="seller.product_query.index"
                        class="aiz-side-nav-link">
                        <i class="las la-question-circle aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Product Queries</span>

                    </a>
                </li>
                <li class="aiz-side-nav-item">
                    <a href="seller.support_ticket.index"
                        class="aiz-side-nav-link">
                        <i class="las la-atom aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Support Ticket</span>
                            <span v-if="support_ticket.length > 0" class="badge badge-inline badge-success">{{ support_ticket }}</span>
                    </a>
                </li>

            </ul>
        </div>
    </div>
    <div class="aiz-sidebar-overlay"></div>
</div>

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
                shop:[],
                shop_logo:"",
                header_logo:"",
                checkConversationSystem:"",
                conversation:[],
                seller_subscription:"",
                coupon_system:"",
                wholesale:"",
                auction:"",
                pos_system:"",
                pos_activation_for_seller:"",
                refund_request:"",
                product_query_activation:"",
                support_ticket:"",
                ProductsToggle:false,
                JobsToggle:false,
                PackageToggle:false,
                auctionToggle:false,
        }
    },
    created(){
        var user = localStorage.getItem("user");
            if(user !== null){
                user = JSON.parse(user);
                this.auth.isAuthenticated = true;
                this.auth.user = user;
            }
            this.getDashboardSideNavData();
    },
    unmounted() {
    this.emitter.emit("headerFooter", false);
    console.log('unmounted has been called'); 
    },
    methods:{
        getDashboardSideNavData(){
            axios.get(this.selfDomain+'vue/get-sidenav-data',{
                params: {
                            token: this.auth.user.access_token,
                         }
            })
            .then((response) => {               
                this.shop = response.data.shop;
                this.shop_logo = response.data.shop_logo;
                this.header_logo = response.data.header_logo;
                this.checkConversationSystem = response.data.checkConversationSystem;
                this.conversation = response.data.conversation;
                this.seller_subscription = response.data.seller_subscription;
                this.coupon_system = response.data.coupon_system;
                this.wholesale = response.data.wholesale;
                this.auction = response.data.auction;
                this.pos_system = response.data.pos_system;
                this.pos_activation_for_seller = response.data.pos_activation_for_seller;
                this.refund_request = response.data.refund_request;
                this.product_query_activation = response.data.product_query_activation;
                this.support_ticket = response.data.support_ticket;
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
}
</script>

<style>

</style>