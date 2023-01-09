<template>
    <div class="home-banner-area mb-4 pt-3">
   <div class="container">
     <div class="row gutters-10 position-relative">
       <div class="col-lg-3 position-static d-none d-lg-block">
         <div class="aiz-category-menu bg-white rounded  shadow-sm">
           <ul class="list-unstyled categories no-scrollbar py-2 mb-0 text-left">
             <li v-for="(category,index) in categories" :key="index" class="category-nav-element" data-id="{{ category.id }}">
               <a  href="https://admindeal.com.bd/category/man-woman-baby-fashion" class="text-truncate text-reset py-2 px-3 d-block">
                 <img class="cat-image lazyload mr-2 opacity-60" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/k9PEQwECIZVCZAujoWuvhWvLIdEhlPhFdsGf4HNT.png" width="16" alt="Men&#039;s, Women&#039;s &amp; Baby&#039;s fashion" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';">
                 <span @mouseover="getSubcategory(this.rootDomain,category.id, $event)" class="cat-name">{{ category.name }}</span>
               </a>
               <div class="sub-cat-menu c-scrollbar-light rounded shadow-lg p-4">
                  <div v-if="subcategories.length==0" class=" text-center absolute-center">
                    <i class="las la-spinner la-spin la-3x opacity-70"></i>
                  </div>
                  <div v-else class="card-columns">
                    
                        <div v-for="(subcategory, index) in subcategories" :key="index" class="card shadow-none border-0">
                            <ul class="list-unstyled mb-3">
                                <li class="fw-600 border-bottom pb-2 mb-3">
                                    <a class="text-reset" href="">{{ subcategory.name }}</a>
                                </li>
                                  <li v-for="(childcategory, index) in subcategory.childCategorys" :key="index" class="mb-2">
                                      <a class="text-reset" href="">{{ childcategory.name }}</a>
                                  </li>
                            </ul>
                        </div>
                </div>
               </div>
             </li>
           </ul>
         </div>
       </div>
       <div class=" col-lg-9 ">
         <div class="aiz-carousel dots-inside-bottom mobile-img-auto-height" data-arrows="true" data-dots="true" data-autoplay="true">
           <div class="carousel-box">
             <a href="#">
               <img class="d-block mw-100 img-fit rounded shadow-sm overflow-hidden" src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/b4ZCemioim6ddcsoQsgv6XsUmN2gQ10uNlTsUECR.webp" alt="Admin Deal promo" height="320" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder-rect.jpg';">
             </a>
           </div>
           <div class="carousel-box">
             <a href="#">
               <img class="d-block mw-100 img-fit rounded shadow-sm overflow-hidden" src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/gNEkIdu3zI9AL9lUqmp5QjMMTr5pGQWeJF84kKlz.webp" alt="Admin Deal promo" height="320" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder-rect.jpg';">
             </a>
           </div>
           <div class="carousel-box">
             <a href="#">
               <img class="d-block mw-100 img-fit rounded shadow-sm overflow-hidden" src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/xPDE6NP7k1HPvODjveBRZLztV2ijVL2Xm2VUNiaI.webp" alt="Admin Deal promo" height="320" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder-rect.jpg';">
             </a>
           </div>
           <div class="carousel-box">
             <a href="#">
               <img class="d-block mw-100 img-fit rounded shadow-sm overflow-hidden" src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/AUMzXFThIfSStu0XDZtLga6vfaPVrBvhOcDvnaTK.webp" alt="Admin Deal promo" height="320" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder-rect.jpg';">
             </a>
           </div>
           <div class="carousel-box">
             <a href="#">
               <img class="d-block mw-100 img-fit rounded shadow-sm overflow-hidden" src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/lgrrZdsJ96ONk1JplPghY9jkNbmsVxH9gsRbmmS6.webp" alt="Admin Deal promo" height="320" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder-rect.jpg';">
             </a>
           </div>
           <div class="carousel-box">
             <a href="#">
               <img class="d-block mw-100 img-fit rounded shadow-sm overflow-hidden" src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/fAZZ5SZZX7w2Dlv4DL1EQGwdmzXdEYE5WyipaKSr.webp" alt="Admin Deal promo" height="320" onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder-rect.jpg';">
             </a>
           </div>
         </div>
         <ul class="list-unstyled mb-0 row gutters-5">
           <li v-for="(featuredCategory, index) in featuredCategories" :key="index" class="minw-0 col-4 col-md mt-3">
             <a href="" class="d-block rounded bg-white p-2 text-reset shadow-sm">
               <img :src="upload_asset(featuredCategory.banner)" alt="Groceries, Lifestyle &amp; Medical" class="lazyload img-fit" height="78">
               <div class="text-truncate fs-12 fw-600 mt-2 opacity-70">{{ featuredCategory.name }}</div>
             </a>
           </li>
          
         </ul>
       </div>
       <!---->
     </div>
   </div>
 </div>
    <TodaysOffer></TodaysOffer>
</template>

<script>
import TodaysOffer from "./ProductComponents/TodaysOffer.vue";
import { useCategoryStore } from "@/Store/Categories";
import { mapState, mapActions} from "pinia";
import axios from "axios";
export default {
 components:{TodaysOffer},
 
 computed:{
  ...mapState(useCategoryStore,['categories']),
  ...mapState(useCategoryStore,['subcategories']),
  ...mapState(useCategoryStore,['featuredCategories']),
 },

 mounted(){
  this.getCat(this.rootDomain);
  this.upload_asset();
  // console.log(this.rootDomain);
 },

 methods:{
  ...mapActions(useCategoryStore,['getCat']),
  ...mapActions(useCategoryStore,['getSubcategory']),

   async upload_asset(banner){
  
    //  console.log(banner);
    let res = await axios.get(this.rootDomain+'get-upload-asset',{params:{banner:banner}})
    // .then((res)=>{
    //   return res.data;
    // })

    if(res.status == 200){
      console.log(res.status);
      console.log(typeof(res.data));
      return res.data;
    } else{
      console.log('error');
      
    }  

    
      
  }
  
   
 }

}
</script>

<style>

</style>