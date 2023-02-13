<template>
    <section class="pt-4 mb-4">
        <div class="container text-center">
            <div class="row">
                <div class="col-lg-6 text-center text-lg-left">
                    <h1 class="fw-600 h4">{{ 'Compare'}}</h1>
                </div>
                <div class="col-lg-6">
                    <ul class="breadcrumb bg-transparent p-0 justify-content-center justify-content-lg-end">
                        <li class="breadcrumb-item opacity-50">
                            <a class="text-reset" href="">{{ 'Home'}}</a>
                        </li>
                        <li class="text-dark fw-600 breadcrumb-item">
                            <a class="text-reset" href="">"{{ 'Compare'}}"</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="mb-4">
        <div class="container text-left">
            <div class="bg-white shadow-sm rounded">
                <div class="p-3 border-bottom d-flex justify-content-between align-items-center">
                    <div class="fs-15 fw-600">{{ 'Comparison'}}</div>
                    <a href="javascript:void(0)" style="text-decoration: none;" class="btn btn-soft-primary btn-sm fw-600">{{ 'Reset Compare List'}}</a>
                </div>
                
                <div v-if="products.length > 0" class="p-3">
                    <table class="table table-responsive table-bordered mb-0">
                        <thead>
                            <tr>
                                <th scope="col" style="width:16%" class="font-weight-bold">
                                    {{ 'Name'}}
                                </th>
                                
                                
                                    <th v-for="(product, index) in products" :key="index" scope="col" style="width:28%" class="font-weight-bold">
                                        <a class="text-reset fs-15" href="javascript:void(0)">{{ product.name }}</a>
                                    </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{{ 'Image' }}</th>
                               
                                    <td v-for="(product, index) in products" :key="index">
                                        <img loading="lazy" :src="product.thumbnail_image" alt="Product Image" class="img-fluid py-4">
                                    </td>
                            </tr>
                            <tr>
                                <th scope="row">{{ 'Price'}}</th>
                               
                                   
                                    <td v-for="(product, index) in products" :key="index">
                                        <templete v-if="product.base_price != product.base_discounted_price">
                                            <del class="fw-600 opacity-50 mr-1">{{ product.base_discounted_price }}</del>
                                        </templete>
                                        <span class="fw-700 text-primary">{{ product.base_discounted_price }}</span>
                                    </td>
                               
                            </tr>
                            <tr>
                                <th scope="row">{{'Brand'}}</th>
                                    <td v-for="(product, index) in products" :key="index">
                                            {{ product.brand_name }}
                                    </td>
                            </tr>
                            <tr>
                                <th scope="row">{{'Category'}}</th>
                                <td v-for="(product, index) in products" :key="index">
                                            {{ product.category_name }}
                                    </td>
                            </tr>
                            <tr>
                                <th scope="row"></th>
                                    <td v-for="(product, index) in products" :key="index" class="text-center py-4">
                                        <button @click="addTocartModal(product.id)" type="button" class="btn btn-primary fw-600">
                                            {{ 'Add to cart'}}
                                        </button>
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            
                <div v-else class="text-center p-4">
                    <p class="fs-17">{{ 'Your comparison list is empty'}}</p>
                </div>
               
            </div>
        </div>

        <add-to-cart-modal v-if="viewAddToCartModal" :productId="productId"/>
    </section>


</template>

<script>
    import axios from "axios";
    export default {
        data(){
            return{
               
                products:[],
                productId:'',
                viewAddToCartModal: false,
            }
        },
        created(){
            this.getCompareItem();
        },
        mounted(){
            this.emitter.on("viewAddToCartModal", message => {
            this.viewAddToCartModal = message;
            });
        },   
        methods: {
           getCompareItem(){
                var compareItem = localStorage.getItem("compare");
                if(compareItem != null){
                    compareItem = JSON.parse(compareItem);
                    
                }else{compareItem = [];}

                console.log("compareItem");
                axios.get(this.rootDomain+'vueweb/compare', {
                    params: {
                       ids: compareItem,
                    }
                }).then(res=>{
                   console.log(res.data.data);
                   this.products = res.data.data;
                }).catch(err=>{

                });
            },
            addTocartModal(productId){
                this.productId = productId;
                this.viewAddToCartModal = true;
                let ele = document.getElementsByTagName('body');
                ele[0].classList.add("modal-open");
            },
        }
    }
</script>