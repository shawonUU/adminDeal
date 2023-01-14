<template>
  <section class="pb-4">
    {{ id }}
  <div class="container">
    <div class="card-columns">
      <div v-for="(blog,index) in blogs" class="card mb-3 overflow-hidden shadow-sm">
        <a href="https://admindeal.com.bd/blog/realme-gaming-phone-price" class="text-reset d-block">
          <img :src="blog.meta_img"  :alt="blog.title" class="img-fluid lazyload ">
        </a>
        <div class="p-4">
          <h2 class="fs-18 fw-600 mb-1">
            <a href="https://admindeal.com.bd/blog/realme-gaming-phone-price" class="text-reset">{{ blog.name }}</a>
          </h2>
          <div class="mb-2 opacity-50">
            <i>{{ blog.category }}</i>
          </div>
          <p class="opacity-70 mb-4" v-html="blog.short_description"></p>
          <a href="https://admindeal.com.bd/blog/realme-gaming-phone-price" class="btn btn-soft-primary"> View More </a>
        </div>
      </div>
    </div>
    <div class="aiz-pagination aiz-pagination-center mt-4">
      <nav>
        <ul class="pagination">
          <li class="page-item disabled" aria-disabled="true" aria-label="« Previous">
            <span class="page-link" aria-hidden="true">&lsaquo;</span>
          </li>
          <li class="page-item active" aria-current="page">
            <span class="page-link">1</span>
          </li>
          <li class="page-item">
            <a class="page-link" href="https://admindeal.com.bd/blog?page=2">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="https://admindeal.com.bd/blog?page=3">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="https://admindeal.com.bd/blog?page=4">4</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="https://admindeal.com.bd/blog?page=5">5</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="https://admindeal.com.bd/blog?page=2" rel="next" aria-label="Next »">&rsaquo;</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</section>
</template>

<script>
import axios from 'axios';
export default {
   data(){
    return{
      blogs:[]
    }
   },
   mounted(){
      this.getBlogs(this.rootDomain);
   },
   methods:{
    getBlogs(rootDomain){
      axios.get(rootDomain+'vue/blog')
      .then((response)=>{
          // console.log(response.data.data);
          this.blogs = response.data.data;
      })
      .catch((error)=>{

      });
    }
   }
}

</script>

<style>

</style>