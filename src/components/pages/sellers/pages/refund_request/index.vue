<template>

<div class="aiz-titlebar mt-2 mb-4">
        <div class="row align-items-center">
            <div class="col-md-6">
                <h1 class="h3">Refund and Exchange Requests</h1>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="card-header row gutters-5">
            <h5 class="mb-0 h6">All Refund and Exchange Request</h5>
        </div>
        <div class="card-body">
            <table class="table  mb-0">
                <thead>
                    <tr>
                        <th>#</th>
                        <th data-breakpoints="lg">Date</th>
                        <th>Order id</th>
                        <th data-breakpoints="lg">Product</th>
                        <th data-breakpoints="lg">Amount</th>
                        <th data-breakpoints="lg">Status</th>
                        <th data-breakpoints="lg">Reason</th>
                        <th>Type</th>
                        <th>Approval</th>
                        <th data-breakpoints="lg">Reject</th>
                    </tr>
                </thead>
                <tbody>
                        <tr v-for="(refund,index) in refunds" :key="index">
                            <td>{{ (index+1)+(pageNumber-1)*10 }}</td>
                            <td>{{ refund.date }}</td>
                            <td>
                                <template v-if="refund.order != null">
                                    {{ refund.order.code }}
                                </template>                        
                            </td>
                            <td>
                                <template v-if="refund.orderDetail != null && refund.orderDetail.product != nullLiteral">
                                    {{ refund.orderDetail.product.name }}
                                </template>                                
                            </td>
                            <td>
                                <template v-if="refund.orderDetail != null">
                                    ৳{{ refund.orderDetail.price }}
                                </template>                             
                            </td>
                            <td>                                
                                <span v-if="refund.refund_status == 1" class="badge badge-inline badge-success"><strong>Approved</strong></span>
                                <span v-else-if="refund.refund_status == 2" class="badge badge-inline badge-danger"><strong>Rejected</strong></span>
                                <span v-else class="badge badge-inline badge-warning"><strong>PENDING</strong></span>
                            </td>
                            <td>
                                <a href="reason_show', $refund->id"><span class="badge badge-inline badge-success">Show</span></a>
                            </td>
                            
                            <td>                           
                                <span v-if="refund.type != null" class="badge badge-inline badge-warning">{{ refund.type }}</span>                            
                            </td>
                            
                            <td>
                                <template v-if="refund.refund_status != 2 && refund.seller_approval !=2">
                                    <label v-if="refund.seller_approval==1" class="aiz-switch aiz-switch-success mb-0 ">
                                        <input type="checkbox" :checked="refund.seller_approval==1?true:false">
                                        <span class="slider round"></span>
                                    </label>
                                    <label v-else class="aiz-switch aiz-switch-success mb-0">
                                        <input  type="checkbox" :checked="refund.seller_approval==1?true:false" >
                                        <span class="slider round"></span>
                                    </label>
                                </template> 
                            </td>
                            <td>                            
                                <a v-if="refund.refund_status == 0 && refund.seller_approval == 0" class="btn btn-soft-danger btn-icon btn-circle btn-sm"  title="Reject Refund Request">
                                    <i class="las la-trash"></i>
                                </a>                              
                                <a v-else-if="refund.refund_status == 2 || refund.seller_approval == 2" href="javascript:void(0);"  class="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Reject Reason">
                                    <i class="las la-eye"></i>
                                </a>
                             
                            </td>
                        </tr>
                </tbody>
            </table>
            <div class="aiz-pagination">
                <vue-awesome-paginate
                :total-items="totalItems"
                :items-per-page="12"
                :max-pages-shown="5"
                v-model="currentPage"
                @click="getRefundRequest"
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
            pageNumber:"",
          auth:{
              isAuthenticated: false,
              user: {},
              },
              refunds:[],
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
              this.getRefundRequest(1);
      },
      mounted() {
      this.emitter.emit("headerFooter", false);
      },
      unmounted() {
      this.emitter.emit("headerFooter", false); 
      },
      methods:{
          getRefundRequest(page){        
              this.pageNumber = page;
              axios.get(this.selfDomain+'vuerefund_request/refund-request?page='+page,{  
                  headers: {
                          Authorization: "Bearer " + this.auth.user.access_token,
                  }
  
          })
          .then((response) => {    
            this.refunds = response.data.refunds.data;
            this.totalItems = response.data.totalItems;
              console.log(response.data)
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