<template>
   <seller_nav></seller_nav>
   <seller_side_nav></seller_side_nav>
   
</template>

<script>
import seller_nav from './inc/seller_nav.vue';
import seller_side_nav from './inc/seller_side_nav.vue';
export default {
    components:{seller_nav,seller_side_nav},
    created(){
        this.emitter.emit("headerFooter", false);
    }
}
</script>

<style>

</style>