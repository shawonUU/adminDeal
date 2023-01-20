<template>
  <section class="mb-4 pt-4">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 text-lg-left text-center">
        <h1 class="fw-600 h4">All Jobs</h1>
      </div>
      <div class="col-lg-6">
        <ul class="breadcrumb justify-content-center justify-content-lg-end bg-transparent p-0">
          <li class="breadcrumb-item opacity-50">
            <a class="text-reset" href="https://admindeal.com.bd">Home</a>
          </li>
          <li class="text-dark fw-600 breadcrumb-item">
            <a class="text-reset" href="https://admindeal.com.bd/brands">All jobs</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section class="mb-4">
  <div class="container">
    <div class="rounded bg-white px-3 pt-3 shadow-sm">
      <div class="row row-cols-xxl-6 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 gutters-10">
        <div v-for="(job,index) in AllJobs" :key="index" class="col text-center">
          <a @click="getJobSlug(job.slug)" class="d-block">
            <img class="img-fit lazyload mx-auto h-140px h-md-210px" src="https://admindeal.com.bd/public/assets/img/placeholder.jpg" :data-src="job.thumbnail_image" :alt="getAllJobs.name">
          </a>
          <div class="p-md-3 p-2 text-center">
            <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
              <a @click="getJobSlug(job.slug)" class="d-block text-reset">{{ job.name }}</a>
            </h3>
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
    data(){
      return{
        AllJobs:[],
      }
    },
    mounted(){
      this.getAllJobs();
    },

    methods:{
      getAllJobs(){
        axios.get(this.rootDomain+'vue/v3/jobs')
        .then((res)=>{
           this.AllJobs = res.data.data;
           
        })
      },
      getJobSlug(slug){
        this.$router.push({
        name: "JobDetails",
        params: {
          slug: slug
        }
      });
      }
    }
}
</script>

<style>

</style>