<template>
      <div class="card">
        <div class="card-header">
            <h5 class="mb-0 h6">Product Reviews</h5>
        </div>
        <div class="card-body">
            <table class="table mb-0">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th data-breakpoints="lg">Customer</th>
                        <th>Rating</th>
                        <th data-breakpoints="lg">Comment</th>
                        <th data-breakpoints="lg">Published</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- @foreach ($reviews as $key => $value)
                        @php
                            $review = \App\Models\Review::find($value->id);
                        @endphp
                        @if($review != null && $review->product != null && $review->user != null) -->
                            <tr v-for="(review,index) in reviews" :key="index">
                                <td>
                                    {{ index+1 }}
                                </td>
                                <td>
                                    <a href="javascript:void(0)" @click="review.product.digital==0?productDetails(review.product.slug):digitalProductDetails(review.product.slug)">{{ review.product.name }}</a>
                                </td>
                                <td>{{ review.user.name }}</td>
                                <td>
                                    <span class="rating rating-sm">
                                        <template v-for="index in 5" :key="index">
                                            <i v-if="index<=review.rating" class = 'las la-star active'></i>
                                            <i v-else class = 'las la-star'></i>
                                        </template>
                                    </span>
                                </td>
                                <td>{{review.comment}}</td>
                                <td>
                                    <span v-if="review.status==1" class="badge badge-inline badge-success">Published</span>
                                    <span v-else class="badge badge-inline badge-danger">Unpublished</span>
                                </td>
                            </tr>
                </tbody>
            </table>
            <div class="aiz-pagination">
                <!-- {{ $reviews->links() }} -->
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
                reviews:[]
        }
    },
    created(){
        var user = localStorage.getItem("user");
            if(user !== null){
                user = JSON.parse(user);
                this.auth.isAuthenticated = true;
                this.auth.user = user;
            }
            this.getReviews();
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
        getReviews(){
            axios.get(this.selfDomain+'vueseller/seller/reviews',{  
            headers: {
                    Authorization: "Bearer " + this.auth.user.access_token,
              }

            })
            .then((response) => {    
                this.reviews = response.data.reviews;
                console.log(response.data.reviews);
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        
    productDetails(slug){
      this.$router.push({
        name: "singleProduct",
        params: {
          slug: slug
        }
      });
    },
    digitalProductDetails(slug,product){
      this.$router.push({
        name: "DigitalProductDetails",
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