<template>
    
    <div class="aiz-titlebar mt-2 mb-4">
        <div class="row align-items-center">
            <div class="col-md-6">
                <h1 class="h3">Purchase Package List</h1>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="card-header row gutters-5">
            <div class="col">
                <h5 class="mb-md-0 h6">All Purchase Package</h5>
            </div>
        </div>
        <div class="card-body">
            <table class="table mb-0">
                <thead>
                    <tr>
                        <th>#</th>
                        <th width="30%">Package</th>
                        <th data-breakpoints="md">Package Price</th>
                        <th data-breakpoints="md">Payment Type</th>
                    </tr>
                </thead>

                <tbody>
                    <!-- @foreach ($seller_packages_payment as $key => $payment) -->
                        <tr v-for="(purchasePackage,index) in purchasePackages" :key="index">
                            <td>{{ (index+1)+(pageNumber-1)*10 }}</td>
                            <td>{{ purchasePackage.seller_package.name }}</td>
                            <td>{{ purchasePackage.seller_package.amount }}</td>
                            <td>
                                <p v-if="purchasePackage.offline_payment==1"> Offline Payment</p>
                                <p v-else> Online Payment</p>
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
                @click="getPurchasePackages"
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
               pageNumber:"",
               purchasePackages:[],
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
           this.getPurchasePackages(1);
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
       getPurchasePackages(page){
           this.pageNumber = page;
           axios.get(this.selfDomain+'vueseller_package/seller/packages-payment-list?page='+page,{  
           headers: {
                   Authorization: "Bearer " + this.auth.user.access_token,
             }
           })
           .then((response) => {    
               this.purchasePackages = response.data.seller_packages_payment.data
               this.totalItems = response.data.total_seller_packages_payment
            //    this.offline_payment = response.data.offline_payment
              console.log(response.data);
           })
           .catch((err)=>{
               console.log(err)
           })
       },
    
   }
   }
   </script>
   
   <style>
   
   </style>