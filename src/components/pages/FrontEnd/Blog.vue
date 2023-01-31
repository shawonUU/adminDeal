<template>
  <section class="pb-4">
  <div class="container">
    <div class="card-columns">
      <div v-for="(blog,index) in blogs.data" :key="index" class="card mb-3 overflow-hidden shadow-sm">
        <a style="cursor:pointer" @click="getSlug(blog.slug)" class="text-reset d-block">
          <img src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" :data-src="blog.banner"  :alt="blog.title" class="img-fluid lazyload ">
        </a>
        <div class="p-4">
          <h2 class="fs-18 fw-600 mb-1">
            <a  style="cursor:pointer" @click="getSlug(blog.slug)" class="text-reset">{{ blog.name }}</a>
          </h2>
          <div class="mb-2 opacity-50">
            <i>{{ blog.category }}</i>
          </div>
          <p class="opacity-70 mb-4" v-html="blog.short_description"></p>
          <a  style="cursor:pointer" @click="getSlug(blog.slug)" class="btn btn-soft-primary"> View More </a>
        </div>
      </div>
    </div>
    <div class="aiz-pagination aiz-pagination-center mt-4">
          <vue-awesome-paginate
          :total-items="lastPage"
          :items-per-page="12"
          :max-pages-shown="5"
          v-model="currentPage"
          @click="getBlogs"
        />
    </div>
  </div>
</section>
</template>

<script>
import { ref } from "vue";
import Slider from '@vueform/slider';
import axios from 'axios';
export default {
  components: {
      Slider,
    },
   data(){
    return{
      blogs:[],
      currentPage:1,
      lastPage:"",
      blogHolder:[]
    }
   },
   mounted(){
      this.getBlogs(1);
   },
   methods:{
    getBlogs(page){
      if(!this.blogHolder[page]){
          axios.get(this.rootDomain+'vue/blog?page='+page)
        .then((response)=>{
            this.blogHolder[page] = response.data;
            this.blogs =  this.blogHolder[page];
            this.lastPage = response.data.meta.total
            this.scrollToTop();
        })
        .catch((error)=>{

        });
      }else{
        this.blogs =  this.blogHolder[page];
        this.scrollToTop();
      }
    
    },
    getSlug(slug){
        this.$router.push({
        name: "BlogDetails",
        params: {
          slug: slug
        }
      });
    },
    getRange(value){
       console.log($("#getRange").html());
    },
    scrollToTop() {
    window.scrollTo(0,0);
  }
   },
   

}

</script>

  <style>
  .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: #dfdedd;
    border: 1px solid #dfdedd;
    color: rgb(0, 0, 0);
  }
  .paginate-buttons:hover {
    background-color: #f05a22;
    color: #fff;
  }
  .active-page {
    background-color: #f05a22;
    border: 1px solid #f05a22;
    color: white;
  }
  .active-page:hover {
    background-color: #f05a22;
    color: #fff;
  }
  .aiz-pagination.aiz-pagination-center.mt-4 {
    text-align: center;
}
</style>
