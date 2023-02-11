<template>
  <div class="aiz-topbar px-15px px-lg-25px d-flex align-items-stretch justify-content-between">
    <div class="d-flex">
        <div class="aiz-topbar-nav-toggler d-flex align-items-center justify-content-start mr-2 mr-md-3 ml-0" data-toggle="aiz-mobile-nav">
            <button class="aiz-mobile-toggler">
                <span></span>
            </button>
        </div>
    </div>
    <div class="d-flex justify-content-between align-items-stretch flex-grow-xl-1">
        <div class="d-flex justify-content-around align-items-center align-items-stretch">
            <div class="d-flex justify-content-around align-items-center align-items-stretch">
                <div class="aiz-topbar-item">
                    <div class="d-flex align-items-center">
                        <router-link :to="{name:'home'}" @click="forSellerDashboard('fsdf')" class="btn btn-icon btn-circle btn-light" title="Browse Website">
                            <i class="las la-globe"></i>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- @if (addon_is_activated('pos_system')) -->
                <div class="d-flex justify-content-around align-items-center align-items-stretch ml-3">
                    <div class="aiz-topbar-item">
                        <div class="d-flex align-items-center">
                            <a class="btn btn-icon btn-circle btn-light" href="https://www.admindeal.com.bd/supportboard/admin.php?" target="_blank" title="Costomer Traking">
                                <i class="fa fa-map-marker"></i>
                            </a>
                        </div>
                    </div>
                </div>
            <!-- @endif -->
                <div class="d-flex justify-content-around align-items-center align-items-stretch ml-3">
                    <div class="aiz-topbar-item">
                        <div class="d-flex align-items-center">
                            <a class="btn btn-primary" href="seller.products.create">
                            <span class="d-lg-none"><i class="fa fa-plus-square-o"></i></span>   <span class="d-none d-lg-block">Add Product</span>
                            </a>
                        </div>
                    </div>
                </div>
                
        </div>
        <div class="d-flex justify-content-around align-items-center align-items-stretch">

            <div class="aiz-topbar-item ml-2">
                <div class="align-items-stretch d-flex dropdown">
                    <a class="dropdown-toggle no-arrow" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="false" aria-expanded="false">
                        <span class="btn btn-icon p-0 d-flex justify-content-center align-items-center">
                            <span class="d-flex align-items-center position-relative">
                                <i class="las la-bell fs-24"></i>
                                <!-- @if(Auth::user()->unreadNotifications->count() > 0) -->
                                    <span class="badge badge-sm badge-dot badge-circle badge-primary position-absolute absolute-top-right"></span>
                                <!-- @endif -->
                            </span>
                        </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-lg py-0">
                        <div class="p-3 bg-light border-bottom">
                            <h6 class="mb-0">Notifications</h6>
                        </div>
                        <div class="px-3 c-scrollbar-light overflow-auto " style="max-height:300px;">
                            <ul class="list-group list-group-flush">
                                <!-- @forelse(Auth::user()->unreadNotifications->take(20) as $notification) -->
                                    <li class="list-group-item d-flex justify-content-between align-items- py-3">
                                        <div class="media text-inherit">
                                            <!-- <div class="media-body">
                                                @if($notification->type == 'App\Notifications\OrderNotification')
                                                    <p class="mb-1 text-truncate-2">
                                                        <a href="{{ route('seller.orders.show', encrypt($notification->data['order_id'])) }}">
                                                            {{translate('Order code: ')}} {{$notification->data['order_code']}} {{ translate('has been '. ucfirst(str_replace('_', ' ', $notification->data['status'])))}}
                                                        </a>
                                                    </p>
                                                    <small class="text-muted">
                                                        {{ date("F j Y, g:i a", strtotime($notification->created_at)) }}
                                                    </small>
                                                @endif
                                            </div> -->
                                        </div>
                                    </li>
                                <!-- @empty -->
                                    <li class="list-group-item">
                                        <div class="py-4 text-center fs-16">
                                           No notification found
                                        </div>
                                    </li>
                                <!-- @endforelse -->
                            </ul>
                        </div>
                        <div class="text-center border-top">
                            <a href="seller.all-notification" class="text-reset d-block py-2">
                               View All Notifications
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- @php
                if(Session::has('locale')){
                    $locale = Session::get('locale', Config::get('app.locale'));
                }
                else{
                    $locale = env('DEFAULT_LANGUAGE');
                }
            @endphp -->
            <div class="aiz-topbar-item ml-2">
                <div class="align-items-stretch d-flex dropdown ">
                    <a class="dropdown-toggle no-arrow" href="seller.conversations.index">
                        <span class="btn btn-icon">
                             <i class="las la-comment aiz-side-nav-icon fs-22"></i>
                            <!-- @if(Auth::user()) -->
                             <span class="badge badge-sm badge-dot badge-circle badge-primary position-absolute" style="top: 17px; right: 1;"></span>
                            <!-- @endif -->
                            
                        </span>
                    </a>
                    
                </div>
            </div>

            <div class="aiz-topbar-item ml-2">
                <div class="align-items-stretch d-flex dropdown">
                    <a class="dropdown-toggle no-arrow text-dark" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="false" aria-expanded="false">
                        <span class="d-flex align-items-center">
                            <span class="avatar avatar-sm mr-md-2">
                                <img
                                    :src="auth.user.avatar_original"
                                    
                                >
                            </span>
                            <span class="d-none d-md-block">
                                <span class="d-block fw-500">{{ auth.user.name }}</span>
                                <span class="d-block small opacity-60">{{ auth.user.type }}</span>
                            </span>
                        </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-md">
                        <a href="seller.profile.index" class="dropdown-item">
                            <i class="las la-user-circle"></i>
                            <span>Profile</span>
                        </a>

                        <a href="logout" class="dropdown-item">
                            <i class="las la-sign-out-alt"></i>
                            <span>Logout</span>
                        </a>
                    </div>
                </div>
            </div><!-- .aiz-topbar-item -->
        </div>
    </div>
</div><!-- .aiz-topbar -->

</template>

<script>
export default {
    data(){
        return{
            auth:{
            isAuthenticated: false,
            user: {},
        },
        }
    },

    mounted(){
        var user = localStorage.getItem("user");
      if(user !== null){
        user = JSON.parse(user);
        this.auth.isAuthenticated = true;
        this.auth.user = user;
        
      }
      console.log(this.auth.user);
    },
    methods:{
        forSellerDashboard(){
        this.emitter.emit("sellerDashboardUrl", 'home');
        }
    }
}

</script>

<style>

</style>