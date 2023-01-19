<template>
    <section class="py-5">
        <div class="container">
            <div class="d-flex align-items-start">
                <!-- @include('frontend.inc.user_side_nav') -->
                <!-- SideBar -->
                <UserSideBar/>
                <div class="aiz-user-panel">
                    <router-view :key="$route.path"></router-view>
                </div>
            </div>
        </div>
    </section>
    </template>
    
    <script>
    import UserSideBar from "./SideNav.vue";
    export default {
        components:{UserSideBar},
    }
    </script>
    
    <style>
    
    </style>