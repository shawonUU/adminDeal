<template>
      <div class="card">
        <div class="card-header">
            <h5 class="mb-0 h6">Download Your Product</h5>
        </div>
        <div class="card-body">
          <table class="table mb-0">
              <thead>
                  <tr>
                      <th>Product</th>
                      <th width="20%">Option</th>
                  </tr>
              </thead>
              <tbody>
                  <!-- @foreach ($orders as $key => $order_id)
                      @php
                          $order = \App\Models\OrderDetail::find($order_id->id);
                      @endphp -->
                      <tr>
                          <td><a href="">name</a></td>
                          <td>
                            <a class="btn btn-soft-info btn-icon btn-circle btn-sm" href="" title="Download">
                                <i class="las la-download"></i>
                            </a>
                          </td>
                      </tr>
                  <!-- @endforeach -->
              </tbody>
          </table>
            <!-- {{ $orders->links() }} -->
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
        digitalPurchaseHistories:[],
        currentPage:1,
        digitalPurchaseHistoriesHolder:[],
        totalItems:""
        
    }
  },
  
  created(){
        var user = localStorage.getItem("user");
        if(user !== null){
            user = JSON.parse(user);
            this.auth.isAuthenticated = true;
            this.auth.user = user;
            this.getDigitalPurchaseHistory(1);
        }
    },
  methods: {
    getDigitalPurchaseHistory(page){
   
        const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
        console.log("COllllll");

        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
        axios.get(this.selfDomain+"vueweb/digital_purchase_history",{
            headers: {
                    Authorization: "Bearer " + this.auth.user.access_token,
                }
      }).then((res)=>{
        console.log(res);
        this.digitalPurchaseHistoriesHolder[page] = res.data[0].data;
        this.digitalPurchaseHistories = this.digitalPurchaseHistoriesHolder[page];
        this.totalItems = res.data[1];
        console.log(res.data);
        this.scrollToTop();
      }).catch((err)=>{
         console.log(err)
      })
    // else{
    //     this.digitalPurchaseHistories = this.digitalPurchaseHistoriesHolder[page];
    //     this.scrollToTop();
    // }
      
    },
    scrollToTop() {
    window.scrollTo(0,0);
  }
  }
}
</script>

<style>

</style>