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
                        <!-- @foreach ($orders as $key => $order)
                            @if (count($order->orderDetails) > 0) -->
                                <tr v-for="(purchaseHistory,index) in purchaseHistories" :key="index">
                                    <!-- <td>
                                        <a href="{{route('purchase_history.details', encrypt($order->id))}}">{{ $order->code }}</a>
                                    </td> -->
                                    <td>
                                        <a href="">{{ purchaseHistory.code }}</a>
                                    </td>
                                    <!-- <td>{{ date('d-m-Y', $order->date) }}</td> -->
                                    <td>{{ purchaseHistory.date }}</td>

                                    <!-- <td>
                                        {{ single_price($order->grand_total) }}
                                    </td> -->
                                    <td>
                                        {{ purchaseHistory.grand_total }}
                                    </td>
                                    <!-- <td>
                                        {{ translate(ucfirst(str_replace('_', ' ', $order->delivery_status))) }}
                                        @if($order->delivery_viewed == 0)
                                            <span class="ml-2" style="color:green"><strong>*</strong></span>
                                        @endif
                                    </td> -->
                                      <td>
                                       {{ purchaseHistory.delivery_status   }}                                   
                                        <span class="ml-2" style="color:green"><strong>*</strong></span>                                      
                                     </td>
                                    <!-- <td>
                                        @if ($order->payment_status == 'paid')
                                            <span class="badge badge-inline badge-success">{{translate('Paid')}}</span>
                                        @else
                                            <span class="badge badge-inline badge-danger">{{translate('Unpaid')}}</span>
                                        @endif
                                        @if($order->payment_status_viewed == 0)
                                            <span class="ml-2" style="color:green"><strong>*</strong></span>
                                        @endif
                                    </td> -->
                                     <td>
                                         <span class="badge badge-inline badge-success">Paid</span>                               
                                         <span class="ml-2" style="color:green"><strong>*</strong></span>                                     
                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                      
                                    </td>
                                    <!-- <td>
                                        @php
                                           $today= Carbon\Carbon::today();
                                           $diffdate = $today->diffInDays($order->updated_at);
                                        @endphp

                                        @if($order->dontpay==null && $order->payment_status == 'paid' &&  $order->delivery_status== 'delivered' && $diffdate<2) <a href="{{route('purchase_history.dontpay',$order->id)}}"><b>Dont Pay Seller</b> </a> @endif @if($order->dontpay!=null && $order->payment_status == 'paid' &&  $order->delivery_status== 'delivered' && $diffdate<2) <a class="text-success" href="{{route('purchase_history.dontpay',$order->id)}}"> <span class="text-reset fw-600"> Withdraw Objection</span> </a> @endif </a>
                                    </td> -->
                                    <!-- <td class="text-right">
                                        @if ($order->delivery_status == 'pending' && $order->payment_status == 'unpaid')
                                            <a href="javascript:void(0)" class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="{{route('purchase_history.destroy', $order->id)}}" title="{{ translate('Cancel') }}">
                                               <i class="las la-trash"></i>
                                           </a>
                                        @endif
                                        <a href="{{route('purchase_history.details', encrypt($order->id))}}" class="btn btn-soft-info btn-icon btn-circle btn-sm" title="{{ translate('Order Details') }}">
                                            <i class="las la-eye"></i>
                                        </a>
                                        <a class="btn btn-soft-warning btn-icon btn-circle btn-sm" href="{{ route('invoice.download', $order->id) }}" title="{{ translate('Download Invoice') }}">
                                            <i class="las la-download"></i>
                                        </a>
                                    </td> -->
                                </tr>
                           
                    </tbody>
                </table>
                <div class="aiz-pagination">
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
        purchaseHistories:[],
        
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
    getPurchaseHistory(){
        const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
      axios.get(this.selfDomain+"vueweb/purchase_history",{
        headers: {
                    token: this.auth.user.access_token,
                    Authorization: "Bearer " + this.auth.user.access_token,
                }
      }).then((res)=>{
        this.purchaseHistories = res.data.data
        console.log(res.data.data);
      }).catch((err)=>{
         console.log(err)
      })
    }
  }
}
</script>

<style>

</style>