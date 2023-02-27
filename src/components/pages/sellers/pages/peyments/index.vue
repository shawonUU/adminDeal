<template>
 <div class="card">
        <div class="card-header">
            <h5 class="mb-0 h6">Payment History</h5>
        </div>
        <!-- @if (count($payments) > 0) -->
            <div class="card-body">
                <table class="table mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Payment Method</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr v-for="(payment,index) in payments" :key="index">
                                <td>
                                    {{ index+1 }}
                                </td>
                                <td>{{ payment.date }}</td>
                                <td>                                
                                   {{payment.amount}}
                                </td>
                                <td>
                                    {{ payment.method }}                                     
                                    <template v-if='payment.txn_code != null'>
                                        TRX ID : {{payment.txn_code}}
                                    </template>
                                </td>
                            </tr>
                       
                    </tbody>
                </table>
                <div class="aiz-pagination">
                	<!-- {{ $payments->links() }} -->
              	</div>
            </div>
        <!-- @endif -->
    </div>
    
</template>
      
      <script>
      import axios from 'axios';
      export default {
      data(){
          return{
                pageNumber:"",
              auth:{
                  isAuthenticated: false,
                  user: {},
                  },
                  payments:[],
                  currentPage:1,  
                  totalItems:"",       
          }
      },
          created(){
              var user = localStorage.getItem("user");
                  if(user !== null){
                      user = JSON.parse(user);
                      this.auth.isAuthenticated = true;
                      this.auth.user = user;
                      
                  }
                  this.getPayments(1);
          },
          mounted() {
          this.emitter.emit("headerFooter", false);
          },
          unmounted() {
          this.emitter.emit("headerFooter", false); 
          },
          methods:{
            getPayments(page){        
                  this.pageNumber = page;
                  axios.get(this.selfDomain+'vueseller/seller/payments?page='+page,{  
                      headers: {
                              Authorization: "Bearer " + this.auth.user.access_token,
                      }
      
              })
              .then((response) => {    
                    this.payments = response.data.payments.data;
                  console.log(response.data.payments.data);
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