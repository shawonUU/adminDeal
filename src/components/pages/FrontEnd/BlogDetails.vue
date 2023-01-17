<template>
<section class="py-4">
   <div class="container">
      <div class="mb-4">
         <img
            src="https://localhost/backend/public/assets/img/placeholder-rect.jpg"
            data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/g8zZj2l8gqbgT4MIXJP2Z8nBKkzPauxxv8ANtr08.png"
            alt="এডমিন ডিলে কিভাবে অকশন বা নিলাম পণ্য এড করবেন?"
            class="img-fluid lazyload w-100"
            >
      </div>
      <div class="row">
         <div class="col-xl-8 mx-auto">
            <div class="bg-white rounded shadow-sm p-4">
               <div class="border-bottom">
                  <h1 class="h4">
                     এডমিন ডিলে কিভাবে অকশন বা নিলাম পণ্য এড করবেন?
                  </h1>
                  <div class="mb-2 opacity-50">
                     <i>AdminDeal Tutorial</i>
                  </div>
               </div>
               <div class="mb-4 overflow-hidden">
                  <p>
                  <div style="text-align: justify;"><span style="font-family: &quot;Segoe UI Historic&quot;, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif; font-size: 15px; white-space: pre-wrap;"><a href="https://admindeal.com.bd/" target="_blank">এডমিন ডিলে</a> অকশন বা নিলামে পণ্য এড করতে চাইলে প্রথমে এডমিন ডিলে লগইন করুন এর পর ড্যাশবোর্ড থেকে বামপাশের মেনু আইকন থেকে আকশন মেনু সিলেক্ট করুন এরপর আল অকশন প্রডাক্ট এ ক্লিক করে Add <a href="https://admindeal.com.bd/seller/auction-product/create" target="_blank">New Action Product</a> এ ক্লিক করলে আপনাকে আপলোড অপশনে নিয়ে যাবে, এর পর পযার্য় ক্রোমে  Product Name,  Categorie, Brand, Unit,  tag এর ঘর গুলো পুরন করে প্রডাক্ট ইমেজ ও থামনাইল ইমেজ আপলোড করুন,  আপনার প্রডাক্ট এর ভিডিও থাকলে তা প্রডাক্ট ভিডিওর লিংক দিন। </span></div>
                  <h2 style="text-align: center;"><p face="Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif"><span style="font-size: 15px; white-space: pre-wrap;"><b><a href="https://www.youtube.com/watch?v=vC0iJvMetdo" target="_blank">Video Tutorial </a></b></span></p></h2>
                  <h2 style="text-align: center;"><br></h2>
                  </p>
                  <div class="embed-responsive embed-responsive-16by9"><iframe frameborder="0" src="//www.youtube.com/embed/vC0iJvMetdo" width="640" height="360" class="note-video-clip embed-responsive-item"></iframe></div>
                  <p>
                  <h2 style="text-align: center;"><p face="Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif"><span style="font-size: 15px; white-space: pre-wrap;"><b><br></b></span></p></h2>
                  <div style="text-align: justify;"><p face="Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif"><span style="font-size: 15px; white-space: pre-wrap;"><br></span></p></div>
                  <p  face="Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif">
                     <span style="font-size: 15px; white-space: pre-wrap;">
                        এরপর কত টাকা থেকে বিড শুরু করতে চান তা লিখুন আকশন বা নিলামের ডেট সিলেক্ট করুন।  
                        এবার প্রডাক্ট ডেসক্রিপশন বা বর্ননা লিখুন,  যদি  প্রডাক্ট এর  পি ডি এফ ফাইল থাকে তাহলে তা আপলোড করুন, SEO বা সার্চ ইঞ্জিনের জন্য,  মেটা টাইটেল,  মেটা ডেসক্রিপশন এবং মেটা ইমেজ আপলোড করুন। 
                        এর পর সেফ বাটনে ক্লিক করে প্রডাক্ট টি আপলোড করুন। 
                        আরও বিস্তারিত জানতে ভিডিও টি দেখুন।
                        কোন প্রবলেম বা হেল্প এর প্রয়োজন হলে কল করুন আমাদের কন্টাক্ট সেন্টার নাম্বার এ... 
                        <div style="text-align: justify;"><b>কন্টাক্ট সেন্টার নাম্বারঃ 09 649 649 649</b></div>
                     </span>
                  </p>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
</template>

<script>
import axios from 'axios';
export default{
    props:['slug'],
    data(){
        return{
            blogDetails:[],
        }
    },

    mounted(){
        this.getBlogDetails(this.rootDomain)
    },

    methods:{
       getBlogDetails(rootDomain){
            axios.get(rootDomain+'vue/blog/'+this.slug)
            .then((response)=>{
                console.log(response.data);
            })
            .catch((error)=>{
                console.log(error);
            })
       } 
    }
}
</script>