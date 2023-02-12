<template>
    <h1>Hello</h1>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    beforeCreate() {
      console.log('beforeCreate hook called');
    },
    created(){
      console.log('create hook called');
    },
    beforeMount() {
      console.log('beforeMount hook called');
    },
    mounted() {
        console.log('mounted has been called'); 
    },
    beforeUpdate(){
        console.log('beforeUpdate hook called');
    },
    updated(){
        console.log('updated hook called');
    },
    beforeDestroy() {
       console.log('beforeDestroy hook called');
    },
    destroyed() { 
       console.log('destroyed hook called')
    },
    methods:{
       
    }
}
</script>

<style>

</style>