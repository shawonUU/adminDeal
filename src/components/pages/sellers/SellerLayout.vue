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
import SellerProducts from "./pages/seller_products.vue";
export default {
    props: ['componentName'],
    components:{seller_nav,seller_side_nav,Dashboard,SellerProducts},
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