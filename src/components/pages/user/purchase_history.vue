<template>
  <h3>Purchase History</h3>
  <div class="card-body">
                <table class="table mb-0">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th data-breakpoints="md">Date</th>
                            <th>Amount</th>
                            <th data-breakpoints="md">Delivery Status</th>
                            <th data-breakpoints="md">Payment Status</th>
                            <th data-breakpoints="md">Objection</th>
                            <th class="text-right">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                                <tr v-for="(purchaseHistory,index) in purchaseHistories" :key="index">
                                    <td>
                                        <a href="">{{ purchaseHistory.code }}</a>
                                    </td>        
                                    <td>{{ purchaseHistory.date }}</td>
                                    <td>
                                        {{ purchaseHistory.grand_total }}
                                    </td>
                                    <td>
                                    {{ purchaseHistory.delivery_status   }}                                   
                                    <span v-if="purchaseHistory.delivery_viewed==0" class="ml-2" style="color:green"><strong>*</strong></span>                                      
                                    </td>
                                     <td>
                                         <span :class="purchaseHistory.payment_status=='unpaid'?'badge badge-inline badge-danger':'badge badge-inline badge-success'">{{ purchaseHistory.payment_status=='unpaid'?'unpaid':'paid' }}</span>                               
                                         <span class="ml-2" style="color:green"><strong>*</strong></span>                                     
                                    </td>
                                    <td>
                                        <a  v-if="purchaseHistory.dontpay==null&&purchaseHistory.payment_status=='paid'&&purchaseHistory.delivery_status== 'delivered' && purchaseHistory.diffdate<2" href="">
                                            <b>Dont Pay Seller</b> 
                                        </a> 
                                          <a class="text-success" v-if="purchaseHistory.dontpay!=null&&purchaseHistory.payment_status=='paid' && purchaseHistory.delivery_status== 'delivered' && purchaseHistory.diffdate<2" href=""> <span class="text-reset fw-600"> Withdraw Objection</span> 
                                        </a>                                         
                                    </td>
                                    <td class="text-right">                                        
                                        <a v-if="purchaseHistory.delivery_status== 'pending' && purchaseHistory.payment_status=='unpaid'" href="javascript:void(0)" class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="" title="Cancel">
                                            <i class="las la-trash"></i>
                                        </a>
                                        <a href="" class="btn btn-soft-info btn-icon btn-circle btn-sm" title="Order Details">
                                            <i class="las la-eye"></i>
                                        </a>
                                        <a class="btn btn-soft-warning btn-icon btn-circle btn-sm" href="" title="Download Invoice">
                                            <i class="las la-download"></i>
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
                    @click="getPurchaseHistory"
                    />
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
        purchaseHistories:[],
        currentPage:1,
        historyHolder:[],
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
        this.getPurchaseHistory();
    },
  methods: {
    getPurchaseHistory(page){
        const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    if(!this.historyHolder[page]){
        axios.get(this.selfDomain+"vueweb/purchase_history?page="+page,{
        headers: {
                    token: this.auth.user.access_token,
                    Authorization: "Bearer " + this.auth.user.access_token,
                }
      }).then((res)=>{
        this.historyHolder[page] = res.data[0].data;
        this.purchaseHistories = this.historyHolder[page];
        this.totalItems = res.data[1];
        this.scrollToTop();
      }).catch((err)=>{
         console.log(err)
      })
    }else{
        this.purchaseHistories = this.historyHolder[page];
        this.scrollToTop();
    }
      
    },
    scrollToTop() {
    window.scrollTo(0,0);
  }
  }
}
</script>

<style>

</style>