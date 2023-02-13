<template>
    <section class="py-5">
        <div class="container">
            <div class="d-flex align-items-start">
                <!-- ####################################### -->
                <div class="aiz-user-sidenav-wrap position-relative z-1 shadow-sm">
                    <div class="aiz-user-sidenav rounded overflow-auto c-scrollbar-light pb-5 pb-xl-0">
                        <div class="p-4 text-xl-center mb-4 border-bottom bg-primary text-white position-relative">
                            <span class="avatar avatar-md mb-3">
                                <img src="assets/img/avatar-place.png" class="image rounded-circle">
                            </span>
                            <template v-if="auth.user">
                                <h4 class="h5 fs-16 mb-1 fw-600">{{ auth.user.name }} </h4>
                                <div v-if="auth.user.phone" class="text-truncate opacity-60">{{ auth.user.phone }}</div>
                                <div v-if="auth.user.email" class="text-truncate opacity-60">{{ auth.user.email }}</div>
                            </template>
                            </div>

                        <div class="sidemnenu mb-3">
                            <ul class="aiz-side-nav-list px-2" data-toggle="aiz-side-menu">

                                <li class="aiz-side-nav-item">
                                    <router-link :to="{name: 'UserDashboard'}"  href="javascript:void(0)"  class="aiz-side-nav-link dashboard">
                                        <i class="las la-home aiz-side-nav-icon"></i>
                                        <span class="aiz-side-nav-text">My Dashboard</span>
                                    </router-link>
                                </li>
                                <li class="aiz-side-nav-item">
                                    <router-link :to="{name: 'UserFollowedShop'}" class="aiz-side-nav-link">
                                        <i class="las la-home aiz-side-nav-icon"></i>
                                        <span class="aiz-side-nav-text">Followed Shop</span> <span class="badge badge-inline badge-success">New</span>
                                    </router-link>
                                </li>
                                     <!-- @if (get_setting('conversation_system') == 1)
                                        @php
                                            $conversation = \App\Models\Conversation::where('sender_id', Auth::user()->id)->where('sender_viewed', 0)->get();
                                        @endphp -->
                                <li v-if="isConversation==1" class="aiz-side-nav-item">
                                    <router-link :to="{name:'UserConversations'}" class="aiz-side-nav-link">
                                        <i class="las la-comment aiz-side-nav-icon"></i>
                                        <span class="aiz-side-nav-text">Messages</span> <span class="badge badge-inline badge-danger">new</span>
                                 
                                    <span v-if="conversation > 0" class="badge badge-success">({{conversation.length}})</span>
                        
                                    </router-link>
                                </li>
                                    <!-- @endif -->

                                <!-- @if(Auth::user()->user_type == 'delivery_boy')
                                    <li class="aiz-side-nav-item">
                                        <a href="{{ route('assigned-deliveries') }}" class="aiz-side-nav-link {{ areActiveRoutes(['completed-delivery'])}}">
                                            <i class="las la-hourglass-half aiz-side-nav-icon"></i>
                                            <span class="aiz-side-nav-text">
                                                {{ translate('Assigned Delivery') }}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="{{ route('pickup-deliveries') }}" class="aiz-side-nav-link {{ areActiveRoutes(['completed-delivery'])}}">
                                            <i class="las la-luggage-cart aiz-side-nav-icon"></i>
                                            <span class="aiz-side-nav-text">
                                                {{ translate('Pickup Delivery') }}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="{{ route('on-the-way-deliveries') }}" class="aiz-side-nav-link {{ areActiveRoutes(['completed-delivery'])}}">
                                            <i class="las la-running aiz-side-nav-icon"></i>
                                            <span class="aiz-side-nav-text">
                                                {{ translate('On The Way Delivery') }}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="{{ route('completed-deliveries') }}" class="aiz-side-nav-link {{ areActiveRoutes(['completed-delivery'])}}">
                                            <i class="las la-check-circle aiz-side-nav-icon"></i>
                                            <span class="aiz-side-nav-text">
                                                {{ translate('Completed Delivery') }}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="{{ route('pending-deliveries') }}" class="aiz-side-nav-link {{ areActiveRoutes(['pending-delivery'])}}">
                                            <i class="las la-clock aiz-side-nav-icon"></i>
                                            <span class="aiz-side-nav-text">
                                                {{ translate('Pending Delivery') }}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="{{ route('cancelled-deliveries') }}" class="aiz-side-nav-link {{ areActiveRoutes(['cancelled-delivery'])}}">
                                            <i class="las la-times-circle aiz-side-nav-icon"></i>
                                            <span class="aiz-side-nav-text">
                                                {{ translate('Cancelled Delivery') }}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="{{ route('cancel-request-list') }}" class="aiz-side-nav-link {{ areActiveRoutes(['cancel-request-list'])}}">
                                            <i class="las la-times-circle aiz-side-nav-icon"></i>
                                            <span class="aiz-side-nav-text">
                                                {{ translate('Request Cancelled Delivery') }}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="{{ route('total-collection') }}" class="aiz-side-nav-link {{ areActiveRoutes(['today-collection'])}}">
                                            <i class="las la-comment-dollar aiz-side-nav-icon"></i>
                                            <span class="aiz-side-nav-text">
                                                {{ translate('Total Collections') }}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="{{ route('total-earnings') }}" class="aiz-side-nav-link {{ areActiveRoutes(['total-earnings'])}}">
                                            <i class="las la-comment-dollar aiz-side-nav-icon"></i>
                                            <span class="aiz-side-nav-text">
                                                {{ translate('Total Earnings') }}
                                            </span>
                                        </a>
                                    </li>
                                @else -->
                                    <template v-if="auth.user.type=='customer'">
                                        <li class="aiz-side-nav-item">
                                            <router-link :to="{name: 'PurchaseHistory'}" class="aiz-side-nav-link">
                                                <i class="las la-file-alt aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">Purchase History</span>
                                                <span v-if="delivery_viewed>0||payment_status_viewed>0" class="badge badge-inline badge-success">New</span>
                                            
                                            </router-link>
                                        </li>
                                    
                                        <li class="aiz-side-nav-item">
                                            <router-link :to="{ name:'digital_purchase_history'}" class="aiz-side-nav-link">
                                                <i class="las la-download aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">My Downloads</span> <span class="badge badge-inline badge-success">digi</span>
                                            </router-link>
                                        </li>
                                        
                                        <li v-if="refund_request==true" class="aiz-side-nav-item">
                                            <a href="" class="aiz-side-nav-link ">
                                                <i class="las la-backward aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">Refund / Exchange </span> <span class="badge badge-inline badge-success">New</span>
                                            </a>
                                        </li>                              
                                        <li class="aiz-side-nav-item">
                                            <router-link :to="{name:'Wishlist'}" class="aiz-side-nav-link">
                                                <i class="la la-heart-o aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">Wishlist</span>
                                            </router-link >
                                        </li>

                                        <li class="aiz-side-nav-item">
                                            <router-link :to="{name:'Compare'}"  href="" class="aiz-side-nav-link">
                                                <i class="la la-refresh aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">Compare</span>
                                            </router-link>
                                        </li>

                                        <li v-if="classified_product==1" class="aiz-side-nav-item">
                                            <a href="" class="aiz-side-nav-link">
                                                <i class="lab la-sketch aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">Classified Products</span>
                                            </a>
                                        </li>   

                                        <li v-if="auction==true"  class="aiz-side-nav-item">
                                            <a @click="auctionToggle=!auctionToggle" href="javascript:void(0);" class="aiz-side-nav-link">
                                                <i class="las la-gavel aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">Auction</span>
                                                <span class="aiz-side-nav-arrow"  data-toggle="collapse"></span>
                                            </a>                                        
                                           
                                                <ul v-if="auctionToggle">
                                                    <li class="aiz-side-nav-item">
                                                        <a href="" class="aiz-side-nav-link">
                                                            <span class="aiz-side-nav-text">Bidded Products</span>
                                                        </a>
                                                    </li>
                                                    <li class="aiz-side-nav-item">
                                                        <a href="" class="aiz-side-nav-link">
                                                            <span class="aiz-side-nav-text">Purchase History</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                         
                                            
                                        </li>

                                        <li v-if="wallet_system==1" class="aiz-side-nav-item">
                                            <a href="" class="aiz-side-nav-link">
                                                <i class="las la-dollar-sign aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">My Wallet</span>
                                            </a>
                                        </li>    

                                        <li v-if="club_point==true" class="aiz-side-nav-item">
                                            <a href="" class="aiz-side-nav-link">
                                                <i class="las la-dollar-sign aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">Cashback Balance</span> <span class="badge badge-inline badge-success">New</span>
                                            </a>
                                        </li>

                                   
                                        <li v-if="affiliate_system==true" class="aiz-side-nav-item">
                                            <a @click="affiliationToggle=!affiliationToggle" href="javascript:void(0);"  class="aiz-side-nav-link ">
                                                <i class="las la-dollar-sign aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">My Affiliation</span>
                                                <span class="aiz-side-nav-arrow"></span>
                                            </a>
                                            
                                            <ul v-if="affiliationToggle" class="">
                                                <li class="aiz-side-nav-item">
                                                    <a href="affiliate.user.index" class="aiz-side-nav-link">
                                                        <span class="aiz-side-nav-text">Affiliate System</span>
                                                    </a>
                                                </li>
                                                <li class="aiz-side-nav-item">
                                                    <a href="" class="aiz-side-nav-link">
                                                        <span class="aiz-side-nav-text">Payment History</span>
                                                    </a>
                                                </li>
                                                <li class="aiz-side-nav-item">
                                                    <a href="" class="aiz-side-nav-link">
                                                        <span class="aiz-side-nav-text">Withdraw request history</span>
                                                    </a>
                                                </li>
                                            </ul>
                                       
                                        </li>
                                        <li class="aiz-side-nav-item">
                                            <a href="" class="aiz-side-nav-link">
                                                <i class="las la-atom aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">Support / Report</span> <span class="badge badge-inline badge-success">New</span>
                                            <span v-if="support_ticket > 0" class="badge badge-inline badge-success">{{ support_ticket }}</span>
                                            </a>
                                        </li>
                               
                                    </template>
                                    <li class="aiz-side-nav-item">
                                        <a href="" class="aiz-side-nav-link">
                                            <i class="las la-user aiz-side-nav-icon"></i>
                                            <span class="aiz-side-nav-text">Manage Profile</span>
                                        </a>
                                    </li>
                            </ul>
                        </div>

                    </div>

                    <div class="fixed-bottom d-xl-none bg-white border-top d-flex justify-content-between px-2" style="box-shadow: 0 -5px 10px rgb(0 0 0 / 10%);">
                        <a class="btn btn-sm p-2 d-flex align-items-center" href="">
                            <i class="las la-sign-out-alt fs-18 mr-2"></i>
                            <span>Logout</span>
                        </a>
                        <button class="btn btn-sm p-2 " data-toggle="class-toggle" data-backdrop="static" data-target=".aiz-mobile-side-nav" data-same=".mobile-side-nav-thumb">
                            <i class="las la-times la-2x"></i>
                        </button>
                    </div>

 


                </div>


                <!-- ######################################## -->
                <div class="aiz-user-panel">
                    <component :is="selectedComponent" />
                    <!-- <router-view name='b'/> -->
                </div>
      
            </div>
        </div>
    </section>
</template>
    
<script>
    import axios from "axios";
    import Dashboard from "./Dashboard.vue";
    import UserFollowedShop from "./UserFollowedShop.vue";
    import Conversation from "./Conversation/index.vue";
    import PurchaseHistory from "./purchase_history.vue";
    import Wishlist from "../user/wishlist.vue";
    import digital_purchase_history from "../user/digital_purchase_history.vue";
    export default {
        props: ['componentName'],
        components:{Dashboard,UserFollowedShop,Conversation,PurchaseHistory,Wishlist,digital_purchase_history},

        data(){
            return{
                auth:{
                    isAuthenticated: false,
                    user: {},
                },
                selectedComponent:'',
                isConversation:"",
                conversation:"",
                delivery_viewed:"",
                payment_status_viewed:"",
                refund_request:"",
                classified_product:"",
                auction:"",
                auctionToggle:false,
                affiliationToggle:false,
                wallet_system:"",
                club_point:"",
                affiliate_system:"",
                support_ticket:""

            }
        },
        created(){
            var user = localStorage.getItem("user");
            if(user !== null){
                user = JSON.parse(user);
                this.auth.isAuthenticated = true;
                this.auth.user = user;
                // console.log(this.auth.user);
                this.setComponent(this.componentName);
            }
          
        },
        mounted(){
            this.getDataForSideNav();
        },
        methods:{
            setComponent(name) {
                this.selectedComponent = name
            },

            getDataForSideNav(){
                axios.get(this.selfDomain+'vue/data-userdashboard',{
                    params: {
                                token: this.auth.user.access_token,
                             }
                })
                .then((response) => {
                    // console.log(response); return;
                    this.isConversation = response.data[0];
                    this.conversation = response.data[1];
                    this.delivery_viewed = response.data[2];
                    this.payment_status_viewed = response.data[3];
                    this.refund_request = response.data[4];
                    this.classified_product = response.data[5];
                    this.auction = response.data[6];
                    this.wallet_system = response.data[7];
                    this.club_point = response.data[8];
                    this.affiliate_system = response.data[9];
                    this.support_ticket = response.data[10];
                    // console.log(response.data);
                })
                .catch((error) => {
                    console.error(error);
                })
            },

         
  
        }
    } 
</script>
    
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>>