<template>
    <h2>Edit Product</h2>
</template>

<script>
export default {
    mounted() {
    this.emitter.emit("headerFooter", false);
    console.log('unmounted has been called'); 
    },
    unmounted() {
    this.emitter.emit("headerFooter", false);
    console.log('unmounted has been called'); 
    },
}
</script>

<style>

</style>