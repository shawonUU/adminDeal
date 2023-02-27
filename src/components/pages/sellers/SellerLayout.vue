<template>
    <div class="aiz-main-wrapper">
        <seller_side_nav></seller_side_nav>
		<div class="aiz-content-wrapper">
            <seller_nav></seller_nav>
			<div class="aiz-main-content">
				<div class="px-15px px-lg-25px">
                    <component :is="selectedComponent" />
				</div>
				<div class="bg-white text-center py-3 px-15px px-lg-25px mt-auto border-sm-top">
					<!-- <p class="mb-0">&copy; {{ get_setting('site_name') }} v{{ get_setting('current_version') }}</p> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import seller_nav from './inc/seller_nav.vue';
import seller_side_nav from './inc/seller_side_nav.vue';
import Dashboard from "./pages/Dashboard.vue";
import SellerProducts from "./pages/products/seller_products.vue";
import editSellerProducts from "./pages/products/editProduct.vue";
import createSellerProducts from "./pages/products/addProduct.vue";
import productReviews from "./pages/products/product_review.vue";
import sellerConversation from "./pages/conversation/conversations.vue";
import sellerJobs from "./pages/jobs/index.vue";
import sellerPackages from "./pages/package/packages.vue";
import sellerPackagesPaymentList from "./pages/package/purchase_package_list.vue";
import sellerCoupons from "./pages/coupon/index.vue";
import sellerCouponCreate from "./pages/coupon/create.vue";
import sellerOrder from "./pages/orders/index.vue";
import sellerOrderDetails from "./pages/orders/order_details.vue";
import refundRequest from "./pages/refund_request/index.vue";
import paymentHistory from "./pages/peyments/index.vue";
export default {
    props: ['componentName'],
    components:{seller_nav,seller_side_nav,Dashboard,SellerProducts,editSellerProducts,createSellerProducts,productReviews,sellerConversation,sellerJobs,sellerPackages,sellerPackagesPaymentList,sellerCoupons,sellerCouponCreate,sellerOrder,sellerOrderDetails,refundRequest,paymentHistory},
    data(){
        return{
        selectedComponent:'',
        }
},
    created(){
        this.emitter.emit("headerFooter", false);
        this.setComponent(this.componentName);
    },
    unmounted() {

        this.emitter.emit("headerFooter", true);
        console.log('unmounted has been called'); 
    },

    methods:{
        setComponent(name) {
            this.selectedComponent = name
        },

    }
}
</script>

<style>

</style>