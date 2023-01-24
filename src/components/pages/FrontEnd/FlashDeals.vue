<template>
<section class="pt-4 mb-4">
    <div class="container text-center">
        <div class="row">
            <div class="col-lg-6 text-center text-lg-left">
                <h1 class="fw-600 h4">Flash Deals</h1>
            </div>
            <div class="col-lg-6">
                <ul class="breadcrumb bg-transparent p-0 justify-content-center justify-content-lg-end">
                    <li class="breadcrumb-item opacity-50">
                        <router-link class="text-reset" :to="{name:'home'}">
                                           Home
                        </router-link>
                    </li>
                    <li class="text-dark fw-600 breadcrumb-item">
                        <a class="text-reset" href="flash-deals">
                            "Flash Deals"
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="mb-4">
    <div class="container">
        <div class="row row-cols-1 row-cols-lg-2 gutters-10">
            <!-- @foreach($all_flash_deals as $single) -->
            <div v-for="(item, index) in flashDeals" :key="index" class="col">
                <div class="bg-white rounded shadow-sm mb-3">
                    <a @click="flashDealSlug(item.slug)" class="d-block text-reset">
                        <img
                            src="assets/img/placeholder-rect.jpg"
                            :data-src="item.banner"
                            :alt="item.title"
                            class="img-fluid lazyload rounded w-100">
                    </a>
                </div>
            </div>
            <!-- @endforeach -->

        </div>
    </div>
</section>

</template>

<script>
import axios from 'axios';
    export default{
        data(){
            return{
                flashDeals:[]
            }
        },
        mounted(){
            this.getFlashDeals();
        },
        methods:{
            getFlashDeals(){
                axios.get(this.rootDomain+'vue/v3/flash-deals')
                .then((response)=>{
                    this.flashDeals = response.data.data;
                })
                .catch((error)=>{
                    console.log(error);
                })
            },
            flashDealSlug(slug){
                console.log(slug);
            }
        }
    }
</script>

<style>

</style>