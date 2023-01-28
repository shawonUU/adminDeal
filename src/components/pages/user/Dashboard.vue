<template>
  <div class="aiz-titlebar mt-2 mb-4">
    <div class="row align-items-center">
        <div class="col-md-6">
            <h1 class="h3">Dashboard</h1>
        </div>
    </div>
</div>
<div class="row gutters-10">
    <div class="col-md-4">
        <div class="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
            <div class="px-3 pt-3">
               
                <div class="h3 fw-700">
                    {{ totalProductInCart }} {{ 'Product(s)' }}
                </div>
                
                <div class="opacity-50">in your cart</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="rgba(255,255,255,0.3)" fill-opacity="1" d="M0,192L30,208C60,224,120,256,180,245.3C240,235,300,181,360,144C420,107,480,85,540,96C600,107,660,149,720,154.7C780,160,840,128,900,117.3C960,107,1020,117,1080,112C1140,107,1200,85,1260,74.7C1320,64,1380,64,1410,64L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>
        </div>
    </div>
    <div class="col-md-4">
        <div class="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
            <div class="px-3 pt-3">
                
                <div class="h3 fw-700">{{ wishlistCount }} Product(s)</div>
                <div class="opacity-50">in your wishlist</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="rgba(255,255,255,0.3)" fill-opacity="1" d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
        </div>
    </div>
    <div class="col-md-4">
        <div class="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden">
            <div class="px-3 pt-3">
                
                <div class="h3 fw-700">{{ totalOrder }} Product(s)</div>
                <div class="opacity-50">you ordered</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="rgba(255,255,255,0.3)" fill-opacity="1" d="M0,192L26.7,192C53.3,192,107,192,160,202.7C213.3,213,267,235,320,218.7C373.3,203,427,149,480,117.3C533.3,85,587,75,640,90.7C693.3,107,747,149,800,149.3C853.3,149,907,107,960,112C1013.3,117,1067,171,1120,202.7C1173.3,235,1227,245,1280,213.3C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
            </svg>
        </div>
    </div>
</div>

<div class="row gutters-10">
    <div class="col-md-6">
        <div class="card">
            <div class="card-header">
                <h6 class="mb-0">Default Shipping Address</h6>
            </div>
            <div class="card-body">
                
                        <ul v-if="adress !== null" class="list-unstyled mb-0">
                            <li class=" py-2"><span>Address : </span></li>
                            <li class=" py-2"><span>Country : </span></li>
                            <li class=" py-2"><span>State : </span></li>
                            <li class=" py-2"><span>City : </span></li>
                            <li class=" py-2"><span>Postal Code : </span></li>
                            <li class=" py-2"><span>Phone:</span></li>
                        </ul>
                 
            </div>
        </div>
    </div>
  
    <div class="col-md-6">
           
    </div>
  
   
    
    </div>
     <div>
        <span class="h4 mb-3" style="font-size: large; text-decoration: underline; color: #ff6b02;">My Recently Product(s) Viewed</span> 
        <div class="p-2 h4 mb-3" style="margin-bottom: -.54rem!important;"></div>
     </div>
    <div class="row">   
            <div v-for="(product,index) in recentlyViewProducts" :key="index"  class="col-md-3" style="padding-left: 5px !important; padding-right: 5px !important;">
            <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
            <span class="badge-custom">OFF<span class="box ml-1 mr-0">&nbsp;20%</span></span>
            <div class="position-relative">
            <a href="https://admindeal.com.bd/product/blauj-pis-sh-printed-silk-sadiprinted-silk-saree-with-blouse-piece-27" class="d-block">
            <img class="img-fit mx-auto h-140px h-md-210px lazyloaded" :src="product.thumbnail_image"  :data-src="product.thumbnail_image" :alt="product.name" >
            </a>
            <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(8572)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
            <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(8572)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
            <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(8572)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
            <i class="las la-shopping-cart"></i>
            </a>
            </div>
            </div>
            <div class="p-md-3 p-2 text-left">
            <div class="fs-15">
            <del class="fw-600 opacity-50 mr-1">৳3,500</del>
            <span class="fw-700 text-primary">৳2,800 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-20%</span> </span> 
            </div>
            <div class="rating rating-sm mt-1">
            <i class="las la-star active"></i><i class="las la-star active"></i><i class="las la-star active"></i><i class="las la-star active"></i><i class="las la-star active"></i> (1)
            </div>
            <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/blauj-pis-sh-printed-silk-sadiprinted-silk-saree-with-blouse-piece-27" class="d-block text-reset">{{ product.name }}</a>
            </h3>
            <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
            Cashback :
            <span class="fw-700 float-right">0</span>
            </div>
            </div>
            </div>
            </div>                      
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props:['data'],
    data(){
        return{
            auth:{
                isAuthenticated: false,
                user: {},
            },
            totalProductInCart: 0,
            wishlistCount: 0,
            totalOrder: 0,
            adress: null,
            recentlyViewProducts:[]
        }
    },
    created(){
        var user = localStorage.getItem("user");
        if(user !== null){
            user = JSON.parse(user);
            this.auth.isAuthenticated = true;
            this.auth.user = user;
            this.getDashboardData();
        }
    },
    mounted(){
        this.recentlyViewProducts = JSON.parse(localStorage.getItem("recentlyViewProduct"));
        console.log(this.recentlyViewProducts);
        setTimeout(() => {
            localStorage.removeItem('recentlyViewProduct')
        }, 60000);
    },
    methods:{
        getDashboardData(){
            axios.get(this.rootDomain+'vueweb/dashboard', {
                params: {
                    token: this.auth.user.access_token,
                }
            })
            .then(res=>{
                console.log(res.data);
                this.totalProductInCart = res.data.cartCount;
                this.wishlistCount = res.data.wishlistCount;
                this.totalOrder = res.data.totalOrder;
                this.adress = res.data.adress;
            }).catch(err=>{

            });
        },
    }
}
</script>

<style>

</style>