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
                            <tr v-for="(item,index) in review" :key="index">
                                <td>
                                    <!-- {{ $key+1 }} -->
                                </td>
                                <td>
                                    <a href="product', $review->product->slug" target="_blank">{{ item.name }}</a>
                                </td>
                                <td>user->name</td>
                                <td>
                                    <span class="rating rating-sm">
                                        <!-- @for ($i=0; $i < $review->rating; $i++)
                                            <i class="las la-star active"></i>
                                        @endfor
                                        @for ($i=0; $i < 5-$review->rating; $i++)
                                            <i class="las la-star"></i>
                                        @endfor -->
                                    </span>
                                </td>
                                <td>review->comment</td>
                                <td>
                                    <!-- @if ($review->status == 1) -->
                                        <span class="badge badge-inline badge-success">Published</span>
                                    <!-- @else -->
                                        <span class="badge badge-inline badge-danger">Unpublished</span>
                                    <!-- @endif -->
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
                review:[]
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
                this.review = response.data.review;
                console.log(response.data);
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
}
</script>

<style>

</style>