<template>

  
</template>

<script>
import axios from 'axios'
export default {
    props:['slug'],  
    data(){
    return{

    }
   },
   mounted(){
    this.getAuctionDetails(this.rootDomain)
   },
   methods:{
    getAuctionDetails(rootDomain){
        axios.get(rootDomain+'vue/auction-product/'+this.slug)
        .then((response)=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
   }
}
</script>

<style>

</style>