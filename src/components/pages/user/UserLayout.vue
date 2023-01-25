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
                            <h4 class="h5 fs-16 mb-1 fw-600">User name </h4>
                                <div class="text-truncate opacity-60">phone</div>
                                <div class="text-truncate opacity-60">Or email</div>
                            </div>

                        <div class="sidemnenu mb-3">
                            <ul class="aiz-side-nav-list px-2" data-toggle="aiz-side-menu">

                                <li class="aiz-side-nav-item">
                                    <a @click="setComponent('Dashboard')" href="javascript:void(0)"  class="aiz-side-nav-link dashboard">
                                        <i class="las la-home aiz-side-nav-icon"></i>
                                        <span class="aiz-side-nav-text">My Dashboard</span>
                                    </a>
                                </li>
                                <li class="aiz-side-nav-item">
                                    <a  @click="setComponent('UserFollowedShop')"  class="aiz-side-nav-link">
                                        <i class="las la-home aiz-side-nav-icon"></i>
                                        <span class="aiz-side-nav-text">Followed Shop</span> <span class="badge badge-inline badge-success">New</span>
                                    </a>
                                </li>
                                <!-- @if (get_setting('conversation_system') == 1)
                                        @php
                                            $conversation = \App\Models\Conversation::where('sender_id', Auth::user()->id)->where('sender_viewed', 0)->get();
                                        @endphp -->
                                <li class="aiz-side-nav-item">
                                    <a @click="setComponent('Conversation')" class="aiz-side-nav-link">
                                        <i class="las la-comment aiz-side-nav-icon"></i>
                                        <span class="aiz-side-nav-text">Messages</span> <span class="badge badge-inline badge-danger">new</span>
                                        <!-- @if (count($conversation) > 0) -->
                                            <span class="badge badge-success">(10)</span>
                                        <!-- @endif -->
                                    </a>
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
                                <!-- 
                                    @php
                                        $delivery_viewed = App\Models\Order::where('user_id', Auth::user()->id)->where('delivery_viewed', 0)->get()->count();
                                        $payment_status_viewed = App\Models\Order::where('user_id', Auth::user()->id)->where('payment_status_viewed', 0)->get()->count();
                                    @endphp
                                    @if(Auth::user()->user_type == 'customer') -->
                                        <li class="aiz-side-nav-item">
                                            <a href="" class="aiz-side-nav-link">
                                                <i class="las la-file-alt aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">Purchase History</span>
                                                <!-- @if($delivery_viewed > 0 || $payment_status_viewed > 0) -->
                                                <span class="badge badge-inline badge-success">New</span>
                                                <!-- @endif -->
                                            </a>
                                        </li>

                                        <li class="aiz-side-nav-item">
                                            <a href="" class="aiz-side-nav-link">
                                                <i class="las la-download aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">My Downloads</span> <span class="badge badge-inline badge-success">digi</span>
                                            </a>
                                        </li>
                                    <!-- @endif -->

                                        <!-- @if (addon_is_activated('refund_request')) -->
                                            <li class="aiz-side-nav-item">
                                                <a href="" class="aiz-side-nav-link ">
                                                    <i class="las la-backward aiz-side-nav-icon"></i>
                                                    <span class="aiz-side-nav-text">Refund / Exchange </span> <span class="badge badge-inline badge-success">New</span>
                                                </a>
                                            </li>
                                        <!-- @endif -->

                                        <li class="aiz-side-nav-item">
                                            <a href="" class="aiz-side-nav-link">
                                                <i class="la la-heart-o aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">Wishlist</span>
                                            </a>
                                        </li>

                                        <li class="aiz-side-nav-item">
                                            <a href="" class="aiz-side-nav-link">
                                                <i class="la la-refresh aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">Compare</span>
                                            </a>
                                        </li>

                                    <!-- @if(get_setting('classified_product') == 1) -->
                                        <li class="aiz-side-nav-item">
                                            <a href="" class="aiz-side-nav-link">
                                                <i class="lab la-sketch aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">Classified Products</span>
                                            </a>
                                        </li>
                                    <!-- @endif -->
                                    <!-- 
                                    @if(addon_is_activated('auction'))
                                        <li class="aiz-side-nav-item">
                                            <a href="javascript:void(0);" class="aiz-side-nav-link">
                                                <i class="las la-gavel aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">{{ translate('Auction') }}</span>
                                                <span class="aiz-side-nav-arrow"></span>
                                            </a>
                                            <ul class="aiz-side-nav-list level-2">
                                                <li class="aiz-side-nav-item">
                                                    <a href="{{ route('auction_product_bids.index') }}" class="aiz-side-nav-link">
                                                        <span class="aiz-side-nav-text">{{ translate('Bidded Products') }}</span>
                                                    </a>
                                                </li>
                                                <li class="aiz-side-nav-item">
                                                    <a href="{{ route('auction_product.purchase_history') }}" class="aiz-side-nav-link">
                                                        <span class="aiz-side-nav-text">{{ translate('Purchase History') }}</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    @endif




                                    @if (get_setting('wallet_system') == 1)
                                        <li class="aiz-side-nav-item">
                                            <a href="{{ route('wallet.index') }}" class="aiz-side-nav-link {{ areActiveRoutes(['wallet.index'])}}">
                                                <i class="las la-dollar-sign aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">{{translate('My Wallet')}}</span>
                                            </a>
                                        </li>
                                    @endif

                                    @if (addon_is_activated('club_point'))
                                        <li class="aiz-side-nav-item">
                                            <a href="{{ route('earnng_point_for_user') }}" class="aiz-side-nav-link {{ areActiveRoutes(['earnng_point_for_user'])}}">
                                                <i class="las la-dollar-sign aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">{{translate('Cashback Balance')}}</span> <span class="badge badge-inline badge-success">{{ translate('New') }}</span>
                                            </a>
                                        </li>
                                    @endif

                                    @if (addon_is_activated('affiliate_system') && Auth::user()->affiliate_user != null && Auth::user()->affiliate_user->status)
                                        <li class="aiz-side-nav-item">
                                            <a href="javascript:void(0);" class="aiz-side-nav-link {{ areActiveRoutes(['affiliate.user.index', 'affiliate.payment_settings'])}}">
                                                <i class="las la-dollar-sign aiz-side-nav-icon"></i>
                                                <span class="aiz-side-nav-text">{{ translate('My Affiliation') }}</span>
                                                <span class="aiz-side-nav-arrow"></span>
                                            </a>
                                            <ul class="aiz-side-nav-list level-2">
                                                <li class="aiz-side-nav-item">
                                                    <a href="{{ route('affiliate.user.index') }}" class="aiz-side-nav-link">
                                                        <span class="aiz-side-nav-text">{{ translate('Affiliate System') }}</span>
                                                    </a>
                                                </li>
                                                <li class="aiz-side-nav-item">
                                                    <a href="{{ route('affiliate.user.payment_history') }}" class="aiz-side-nav-link">
                                                        <span class="aiz-side-nav-text">{{ translate('Payment History') }}</span>
                                                    </a>
                                                </li>
                                                <li class="aiz-side-nav-item">
                                                    <a href="{{ route('affiliate.user.withdraw_request_history') }}" class="aiz-side-nav-link">
                                                        <span class="aiz-side-nav-text">{{ translate('Withdraw request history') }}</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    @endif

                                    @php
                                        $support_ticket = DB::table('tickets')
                                                    ->where('client_viewed', 0)
                                                    ->where('user_id', Auth::user()->id)
                                                    ->count();
                                    @endphp

                                    <li class="aiz-side-nav-item">
                                        <a href="{{ route('support_ticket.index') }}" class="aiz-side-nav-link {{ areActiveRoutes(['support_ticket.index'])}}">
                                            <i class="las la-atom aiz-side-nav-icon"></i>
                                            <span class="aiz-side-nav-text">{{translate('Support / Report')}}</span> <span class="badge badge-inline badge-success">{{ translate('New') }}</span>
                                            @if($support_ticket > 0)<span class="badge badge-inline badge-success">{{ $support_ticket }}</span> @endif
                                        </a>
                                    </li>
                                @endif
                                <li class="aiz-side-nav-item">
                                    <a href="{{ route('profile') }}" class="aiz-side-nav-link {{ areActiveRoutes(['profile'])}}">
                                        <i class="las la-user aiz-side-nav-icon"></i>
                                        <span class="aiz-side-nav-text">{{translate('Manage Profile')}}</span>
                                    </a>
                                </li> -->
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
    import Dashboard from "./Dashboard.vue";
    import UserFollowedShop from "./UserFollowedShop.vue";
    import Conversation from "./Conversation/index.vue";
    export default {
        components:{Dashboard,UserFollowedShop,Conversation},

        data(){
            return{
                selectedComponent:'',
            }
        },
        created(){
          this.setComponent('Dashboard');
        },
        methods:{
            setComponent(name) {
                this.selectedComponent = name
            }
        }
    }
    </script>
    
    <style>
    
    </style>