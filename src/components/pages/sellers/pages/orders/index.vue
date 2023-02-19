<template>
  <div class="card">
        <form id="sort_orders" action="" method="GET">
          <div class="card-header row gutters-5">
            <div class="col text-center text-md-left">
              <h5 class="mb-md-0 h6">Orders</h5>
            </div>
              <div class="col-md-3 ml-auto">
                  <select class="form-control aiz-selectpicker" data-placeholder="Filter by Payment Status" name="payment_status" onchange="sort_orders()">
                      <option value="">Filter by Payment Status</option>
                      <option value="paid">Paid</option>
                      <option value="unpaid">Un-Paid</option>
                  </select>
              </div>

              <div class="col-md-3 ml-auto">
                <select class="form-control aiz-selectpicker" data-placeholder="Filter by Payment Status" name="delivery_status" onchange="sort_orders()">
                    <option value="">Filter by Deliver Status</option>
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="on_delivery">On delivery</option>
                    <option value="delivered">Delivered</option>
                </select>
              </div>
              <div class="col-md-3">
                <div class="from-group mb-0">
                    <input type="text" class="form-control" id="search" name="search" placeholder="Type Order code & hit Enter') }}">
                </div>
              </div>
          </div>
        </form>

        <!-- @if (count($orders) > 0) -->
            <div class="card-body p-3">
                <table class="table  mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Order Code</th>
                            <th data-breakpoints="lg">Num. of Products</th>
                            <th data-breakpoints="lg">Customer</th>
                            <th data-breakpoints="md">Amount</th>
                            <th data-breakpoints="lg">Delivery Status</th>
                            <th>Payment Status</th>
                            <th>Objection</th>
                            <th class="text-right">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- @foreach ($orders as $key => $order_id)
                            @php
                                $order = \App\Models\Order::find($order_id->id);
                            @endphp
                            @if($order != null) -->
                                <tr v-for="(order,index) in orders" :key="index">
                                    <td>
                                     {{ index+1 }}
                                    </td>
                                    <td>
                                        <a href="" onclick="show_order_details({{ $order->id }})">{{ order.code }}</a>
                                    </td>
                                    <td>
                                        {{ order.number_of_products }}
                                    </td>
                                    <td>
                                     
                                        <p v-if="order.user_id !=null">{{ order.user.name }}</p>                    
                                        <p v-else>Guest ({{ order.guest_id }})</p>
                                      
                                    </td>
                                    <td>
                                        ৳{{ order.grand_total }}
                                    </td>
                                    <td>
                                         {{ order.delivery_status }}
                                    </td>
                                    <td>
                                            <span v-if="order.payment_status == 'paid'" class="badge badge-inline badge-success">Paid</span>                                
                                            <span v-else class="badge badge-inline badge-danger">Unpaid</span>
                                        
                                    </td>
                                     <td>
                            <!-- @php
                                           $today= Carbon\Carbon::today();
                                           $diffdate = $today->diffInDays($order->updated_at);
                                        @endphp -->

                            <!-- @if($order->dontpay==null && $order->payment_status == 'paid' &&  $order->delivery_status== 'delivered' && $diffdate<2) -->

                            <span class="badge badge-inline badge-success">No Objection</span>
                            <!-- @endif
                            @if($order->dontpay!=null && $order->payment_status == 'paid' &&  $order->delivery_status== 'delivered' && $diffdate<2) -->
                            <span class="badge badge-inline badge-danger">DontPay Requested</span>
                            <!-- @endif -->
                        </td>
                                    <td class="text-right">
                                        <a href="'seller.orders.show" class="btn btn-soft-info btn-icon btn-circle btn-sm" title="Order Details">
                                            <i class="las la-eye"></i>
                                        </a>
                                        <a href="seller.invoice.download" class="btn btn-soft-warning btn-icon btn-circle btn-sm" title="Download Invoice">
                                            <i class="las la-download"></i>
                                        </a>
                                    </td>
                                </tr>
                            <!-- @endif
                        @endforeach -->
                    </tbody>
                </table>
                <div class="aiz-pagination">
                    <!-- {{ $orders->links() }} -->
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
        auth:{
            isAuthenticated: false,
            user: {},
            },
            orders:[]
    }
},
    created(){
        var user = localStorage.getItem("user");
            if(user !== null){
                user = JSON.parse(user);
                this.auth.isAuthenticated = true;
                this.auth.user = user;
                
            }
            this.getOrders(1);
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
        getOrders(page){
            axios.get(this.selfDomain+'vueseller/seller/orders?page='+page,{  
                headers: {
                        Authorization: "Bearer " + this.auth.user.access_token,
                }

        })
        .then((response) => {    
            this.orders = response.data.orders;
            // this.totalItems = response.data.totalJobs;
            console.log(response.data.orders)
        })
        .catch((err)=>{
            console.log(err)
        })
        }
    }
}
</script>

<style>

</style>