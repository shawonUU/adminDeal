<template>
    <div class="aiz-titlebar mt-2 mb-4">
        <div class="row align-items-center">
            <div class="col-md-6">
                <h1 class="h3">Followed Shop</h1>
            </div>
        </div>
    </div>
    
    <div class="container">
        <div class="rounded bg-white px-3 pt-3 shadow-sm">
            <div class="row row-cols-xxl-6 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 gutters-10">

                <div v-for="(shop, index) in shops" :key="index" class="col text-center hov-shadow-md border d-block rounded bg-white p-2 ">
                    <a href="" class="text-reset ">
                        <img
                            :src="shop.logo"
                            :data-src="shop.logo"
                            :alt="shop.name"
                            class="img-fluid img lazyload h-60px"
                            height="78"
                        >
                        <div class="text-truncate fs-12 fw-600 mt-2 opacity-70">{{ shop.name }}</div>
                    </a><br>
                    <a @click="unfollow(shop.id)" class="text-reset d-inline-block fw-600 fs-15 p-3" href="javascript:void(0)"><button class="btn btn-sm btn-secondary">Unfollow</button></a>
                </div>

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
            shops: [],
            load: false,
        }
    },
    created(){
        var user = localStorage.getItem("user");
        if(user !== null){
            user = JSON.parse(user);
            this.auth.isAuthenticated = true;
            this.auth.user = user;
            this.getFollowedShop();
        }
    },
    methods:{
       
        getFollowedShop(){
            axios.get(this.selfDomain+"vueweb/user_followed_shop", {
                headers: {
                    token: this.auth.user.access_token,
                    Authorization: "Bearer " + this.auth.user.access_token,
                }
            }).then(res=>{
                this.shops = res.data.shops.data;
                console.log(this.shops);
                console.log("===end====");
            }).catch(err=>{

            });
        },
        unfollow(id){
            if(this.auth.isAuthenticated){
                axios.get(this.selfDomain+"vueweb/followed_shop/"+id, {
                    headers: {
                        Authorization: "Bearer " + this.auth.user.access_token,
                    }
                }).then(res=>{
                // console.log(res.data);
                    this.getFollowedShop();
                }).catch(err=>{

                });
            }
        }
    }
}
</script>

<style>

</style>