<template>
  <section class="py-4">
   <div class="container">
      <div class="mb-4">
         <img
            :src="blogDetails.meta_img"
            alt="এডমিন ডিলে কিভাবে অকশন বা নিলাম পণ্য এড করবেন?"
            class="img-fluid lazyload w-100"
            
            >
      </div>
      <div class="row">
         <div class="col-xl-8 mx-auto">
            <div class="bg-white rounded shadow-sm p-4">
               <div class="border-bottom">
                  <h1 class="h4">
                    {{blogDetails.name}}
                  </h1>
                  <div class="mb-2 opacity-50">
                     <i>{{blogDetails.category_name}}</i>
                  </div>
               </div>
               <div v-html="blogDetails.description" class="mb-4 overflow-hidden">
               
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
</template>

<script>
import axios from 'axios';
export default {
   props:['slug'],
   data(){
    return{
        blogDetails:{},
    }
   },
   
   mounted(){
     this.getDetails(this.rootDomain);
   },
   methods:{
    getDetails(rootDomain){
        axios.get(rootDomain+'vue/blogs/'+this.slug)
        .then((res)=>{
            this.blogDetails = res.data.data;
            console.log(res.data.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },
   
   }
}
</script>

<style>

</style>