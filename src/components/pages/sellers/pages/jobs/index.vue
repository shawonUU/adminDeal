<template>
    <div class="aiz-titlebar mt-2 mb-4">
      <div class="row align-items-center">
        <div class="col-md-6">
            <h1 class="h3">Jobs</h1>
        </div>
      </div>
    </div>
    <div class="card">
        <div class="card-header row gutters-5">
            <div class="col">
                <h5 class="mb-md-0 h6">All Jobs</h5>
            </div>
            <div class="col-md-3">
                
            </div>
        </div>
        <div class="card-body">
            <table class="table mb-0">
                <thead>
                    <tr>
                        <th>#</th>
                        <th width="30%">Title</th>
                        
                        <th data-breakpoints="md" class="text-right">Options</th>
                    </tr>
                </thead>

                <tbody>
                    <!-- @foreach ($jobs as $key => $job) -->
                        <tr v-for="(job,index) in jobs" :key="index">
                            <td>{{ index+1 }}</td>
                            <td>
                                <a  @click="getJobSlug(job.slug)" target="_blank" class="text-reset">
                                    {{ job.title }}
                                </a>
                            </td>

                            <td class="text-right">
                                <a class="btn btn-soft-primary btn-icon btn-circle btn-sm"  @click="getJobSlug(job.slug)" title="show">
		                          <i class="las la-eye"></i>
		                      </a>
		                      <a class="btn btn-soft-info btn-icon btn-circle btn-sm" href="job.edit" title="Edit">
		                          <i class="las la-edit"></i>
		                      </a>

                              <a href="#" class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="job.destroy" title="Delete">
                                  <i class="las la-trash"></i>
                              </a>
                          </td>
                        </tr>
                    <!-- @endforeach -->
                </tbody>
            </table>
            <div class="aiz-pagination">
            <vue-awesome-paginate
                :total-items="totalItems"
                :items-per-page="12"
                :max-pages-shown="5"
                v-model="currentPage"
                @click="getJobs"
            />
             </div>
        </div>
    </div>
  
</template>

<script>
import axios from 'axios';
export default {
data(){
    return{
        auth:{
            isAuthenticated: false,
            user: {},
            },
            jobs:[],
            currentPage:1,
            totalItems:""
    }
},
created(){
    var user = localStorage.getItem("user");
        if(user !== null){
            user = JSON.parse(user);
            this.auth.isAuthenticated = true;
            this.auth.user = user;
        }
        this.getJobs(1);
},
mounted() {
this.emitter.emit("headerFooter", false);
console.log('unmounted has been called'); 
},
unmounted() {
this.emitter.emit("headerFooter", false);
console.log('unmounted has been called'); 
},
methods:{
    getJobs(page){
        axios.get(this.selfDomain+'vueseller/seller/jobs?page='+page,{  
        headers: {
                Authorization: "Bearer " + this.auth.user.access_token,
          }

        })
        .then((response) => {    
            this.jobs = response.data.jobs.data;
            this.totalItems = response.data.totalJobs;
            // console.log(response.data)
        })
        .catch((err)=>{
            console.log(err)
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