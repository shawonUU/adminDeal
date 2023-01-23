<template>
    <section class="py-5">
        <div class="container">
            <div class="d-flex align-items-start">
                <!-- @include('frontend.inc.user_side_nav') -->
                <!-- SideBar -->
                <UserSideBar/>
                <div class="aiz-user-panel">
                    <router-view name='a'/>
                    <!-- <router-view name='b'/> -->
                </div>
            </div>
        </div>
    </section>
    </template>
    
    <script>
    import UserSideBar from "./SideNav.vue";
    import Dashboard from "./Dashboard.vue";
    export default {
        components:{UserSideBar,Dashboard},
    }
    </script>
    
    <style>
    
    </style>