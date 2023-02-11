<template>
  <div class="aiz-sidebar-wrap">
    <div class="aiz-sidebar left c-scrollbar">
        <div class="aiz-side-nav-logo-wrap">
            <div class="d-block text-center my-3">
                <!-- @if (optional(Auth::user()->shop)->logo != null)
                    <img class="mw-100 mb-3" src="{{ uploaded_asset(optional(Auth::user()->shop)->logo) }}" class="brand-icon"
                        alt="{{ get_setting('site_name') }}">
                @else
                    <img class="mw-100 mb-3" src="{{ uploaded_asset(get_setting('header_logo')) }}" class="brand-icon"
                        alt="{{ get_setting('site_name') }}">
                @endif
                <h3 class="fs-16  m-0 text-primary">{{ optional(Auth::user()->shop)->name }}</h3>
                <p class="text-primary">{{ Auth::user()->email }}</p> -->
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
                    <a href="seller.dashboard" class="aiz-side-nav-link">
                        <i class="las la-home aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Dashboard</span>
                    </a>
                </li>
                <li class="aiz-side-nav-item">
                    <a href="#" class="aiz-side-nav-link">
                        <i class="las la-shopping-cart aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Products</span>
                        <span class="aiz-side-nav-arrow"></span>
                    </a>
                    <!--Submenu-->
                    <ul class="aiz-side-nav-list level-2">
                        <li class="aiz-side-nav-item">
                            <a href="seller.products"
                                class="aiz-side-nav-link">
                                <span class="aiz-side-nav-text">Products</span>
                            </a>
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
                            <a href="seller.reviews"
                                class="aiz-side-nav-link ">
                                <span class="aiz-side-nav-text">Product Reviews</span>
                            </a>
                        </li>
                    </ul>
                </li>
<!-- 


                @if (get_setting('conversation_system') == 1)
                    @php
                        $conversation = \App\Models\Conversation::where('sender_id', Auth::user()->id)
                            ->where('sender_viewed', 0)
                            ->get();
                    @endphp -->
                    <li class="aiz-side-nav-item">
                        <a href="seller.conversations.index"
                            class="aiz-side-nav-link">
                            <i class="las la-comment aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Message</span>
                            <!-- @if (count($conversation) > 0) -->
                                <span class="badge badge-success">(1)</span>
                            <!-- @endif -->
                        </a>
                    </li>
                <!-- @endif -->






                 <li class="aiz-side-nav-item">
                    <a href="#" class="aiz-side-nav-link">
                        <i class="las la-shopping-cart aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Jobs</span>
                        <span class="aiz-side-nav-arrow"></span>
                    </a>
                    <!--Submenu-->
                    <ul class="aiz-side-nav-list level-2">
                        <li class="aiz-side-nav-item">
                            <a href="job.index"
                                class="aiz-side-nav-link">
                                <span class="aiz-side-nav-text">All Jobs</span>
                            </a>
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
                <!-- @if (addon_is_activated('seller_subscription')) -->
                    <li class="aiz-side-nav-item">
                        <a href="#" class="aiz-side-nav-link">
                            <i class="las la-shopping-cart aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Package</span>
                            <span class="aiz-side-nav-arrow"></span>
                        </a>
                        <ul class="aiz-side-nav-list level-2">
                            <li class="aiz-side-nav-item">
                                <a href="seller.seller_packages_list" class="aiz-side-nav-link">
                                    <span class="aiz-side-nav-text">Packages</span>
                                </a>
                            </li>

                            <li class="aiz-side-nav-item">
                                <a href="seller.packages_payment_list" class="aiz-side-nav-link">
                                    <span class="aiz-side-nav-text">Purchase Packages</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                <!-- @endif -->
                <!-- @if (get_setting('coupon_system') == 1) -->
                    <li class="aiz-side-nav-item">
                        <a href="seller.coupon.index"
                            class="aiz-side-nav-link ">
                            <i class="las la-bullhorn aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Coupon</span>
                        </a>
                    </li>
                <!-- @endif -->
                <!-- @if (addon_is_activated('wholesale') && get_setting('seller_wholesale_product') == 1) -->
                    <li class="aiz-side-nav-item">
                        <a href="seller.wholesale_products_list"
                            class="aiz-side-nav-link">
                            <i class="las la-luggage-cart aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Wholesale Products</span>
                        </a>
                    </li>
                <!-- @endif -->
                <!-- @if (addon_is_activated('auction') && get_setting('seller_auction_product') == 1) -->
                    <li class="aiz-side-nav-item">
                        <a href="javascript:void(0);" class="aiz-side-nav-link">
                            <i class="las la-gavel aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Auction</span>
                            <span class="aiz-side-nav-arrow"></span>
                        </a>
                        <ul class="aiz-side-nav-list level-2">
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
                <!-- @endif -->
                <!-- @if (addon_is_activated('pos_system'))
                    @if (get_setting('pos_activation_for_seller') != null && get_setting('pos_activation_for_seller') != 0) -->
                        <li class="aiz-side-nav-item">
                            <a href="poin-of-sales.seller_index"
                                class="aiz-side-nav-link">
                                <i class="las la-fax aiz-side-nav-icon"></i>
                                <span class="aiz-side-nav-text">POS Manager</span>
                            </a>
                        </li>
                    <!-- @endif -->
                <!-- @endif -->
                <li class="aiz-side-nav-item">
                    <a href="seller.orders.index"
                        class="aiz-side-nav-link">
                        <i class="las la-money-bill aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Orders</span>
                    </a>
                </li>
                <!-- @if (addon_is_activated('refund_request')) -->
                    <li class="aiz-side-nav-item">
                        <a href="vendor_refund_request"
                            class="aiz-side-nav-link">
                            <i class="las la-backward aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Refund or exchange</span>
                        </a>
                    </li>
                <!-- @endif -->


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

                <!-- @if (get_setting('conversation_system') == 1)
                    @php
                        $conversation = \App\Models\Conversation::where('sender_id', Auth::user()->id)
                            ->where('sender_viewed', 0)
                            ->get();
                    @endphp -->
                    <li class="aiz-side-nav-item">
                        <a href="https://www.admindeal.com.bd/supportboard/admin.php"  target="_blank"
                            class="aiz-side-nav-link">
                            <i class="fa fa-map-marker aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Customer Tracking</span>
                        </a>
                    </li>
                <!-- @endif -->

                <!-- @if (get_setting('product_query_activation') == 1) -->
                    <li class="aiz-side-nav-item">
                        <a href="seller.product_query.index"
                            class="aiz-side-nav-link">
                            <i class="las la-question-circle aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Product Queries</span>

                        </a>
                    </li>
                <!-- @endif -->

                <!-- @php
                    $support_ticket = DB::table('tickets')
                        ->where('client_viewed', 0)
                        ->where('user_id', Auth::user()->id)
                        ->count();
                @endphp -->
                <li class="aiz-side-nav-item">
                    <a href="seller.support_ticket.index"
                        class="aiz-side-nav-link">
                        <i class="las la-atom aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Support Ticket</span>
                        <!-- @if ($support_ticket > 0) -->
                            <span class="badge badge-inline badge-success">1</span>
                        <!-- @endif -->
                    </a>
                </li>

            </ul><!-- .aiz-side-nav -->
        </div><!-- .aiz-side-nav-wrap -->
    </div><!-- .aiz-sidebar -->
    <div class="aiz-sidebar-overlay"></div>
</div><!-- .aiz-sidebar -->

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
                header_logo:""
        }
    },
    created(){
        var user = localStorage.getItem("user");
            if(user !== null){
                user = JSON.parse(user);
                this.auth.isAuthenticated = true;
                this.auth.user = user;
                // console.log(this.auth.user);
                // this.setComponent(this.componentName);
            }
            this.getDashboardSideNavData();
    },
    methods:{
        getDashboardSideNavData(){
            axios.get(this.selfDomain+'vue/get-dashboard-data',{
                params: {
                            token: this.auth.user.access_token,
                         }
            })
            .then((response) => {
                console.log(response.data)
                this.shop = response.data[0];
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