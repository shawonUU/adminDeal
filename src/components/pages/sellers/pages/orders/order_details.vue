<template>

<div class="card">
        <div class="card-header">
            <h1 class="h2 fs-16 mb-0">Order Details</h1>
        </div>
         <!-- @php
                    $delivery_status = $order->delivery_status;
                    $payment_status = $order->orderDetails->where('seller_id', Auth::user()->id)->first()->payment_status;
                @endphp -->

        <div class="card-body">
            <div class="row gutters-5 mt-2">
                <div class="col text-md-left text-center">
                        <address v-if="order.shipping_address !=null">
                            <strong class="text-main">
                               {{ order_shipping_address.name }}
                            </strong><br>
                            {{ order_shipping_address.email }} <br>
                            {{ order_shipping_address.phone }}<br>
                            {{ order_shipping_address.address }},  {{ order_shipping_address.city }} , {{ order_shipping_address.postal_code }}<br>
                            {{ order_shipping_address.country }}
                        </address>             
                        <address v-else>
                            <strong class="text-main">
                                {{ user.name }}
                            </strong><br>
                              {{ user.email }}<br>
                               {{ user.phone }}<br>
                        </address>

                    <!-- @if ($order->manual_payment && is_array(json_decode($order->manual_payment_data, true))) -->
                        <br>
                        <strong v-if="order.manual_payment && order.manual_payment_data != null" class="text-main">Payment Information</strong><br>
                        <!-- Name: {{ order.manual_payment_data.name }},
                        Amount:
                             {{ order.manual_payment_data.amount }},
                        TRX ID:  {{ order.manual_payment_data.trx_id }}, -->
                        <br>
                        <!-- <a href="{{ uploaded_asset(json_decode($order->manual_payment_data)->photo) }}"
                            target="_blank"><img
                                src="{{ uploaded_asset(json_decode($order->manual_payment_data)->photo) }}" alt=""
                                height="100"></a> -->
                    <!-- @endif -->
                </div>
                <div class="col-md-4 ml-auto">
                    <table>
                        <tbody>
                            <tr>
                                <td class="text-main text-bold">Order #</td>
                                <td class="text-info text-bold text-right">{{ order.code }}</td>
                            </tr>
                            <tr>
                                <td class="text-main text-bold">Order Status</td>
                                <td class="text-right">
                                        <span v-if="order.delivery_status == 'delivered'"
                                            class="badge badge-inline badge-success">{{ order.delivery_status  }}</span>
                                 
                                        <span v-else
                                            class="badge badge-inline badge-info">{{ order.delivery_status  }}</span>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td class="text-main text-bold">Order Date</td>
                                <td class="text-right">{{ order.order_date }}</td>
                            </tr>
                            <tr>
                                <td class="text-main text-bold">Total amount</td>
                                <td class="text-right">
                                    ৳{{ order.grand_total }}
                                </td>
                            </tr>
                            <tr>
                                <td class="text-main text-bold">Payment method</td>
                                <td class="text-right">
                                    {{ order.payment_type }}</td>
                            </tr>

                            <tr>
                                <td class="text-main text-bold">Additional Info</td>
                                <td class="text-right">{{ order.additional_info }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <hr class="new-section-sm bord-no">
            <div class="row">
                <div class="col-lg-12 table-responsive">
                    <table class="table-bordered invoice-summary table">
                        <thead>
                            <tr class="bg-trans-dark">
                                <th data-breakpoints="lg" class="min-col">#</th>
                                <th width="10%">Photo</th>
                                <th class="text-uppercase">Description</th>
                                <th data-breakpoints="lg" class="text-uppercase">Delivery Type</th>
                                <th data-breakpoints="lg" class="min-col text-uppercase text-center">
                                    Qty
                                </th>
                                <th data-breakpoints="lg" class="min-col text-uppercase text-center">
                                    Price</th>
                                <th data-breakpoints="lg" class="min-col text-uppercase text-right">
                                    Total</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr v-for="(productDetail,index) in productDetails" :key="index">
                                    <td>{{ index+1 }}</td>
                                    <td>
                                        
                                
                                            <a v-if="productDetail.product_info != null && productDetail.product_info.auction_product == 0"
                                                target="_blank"><img height="50"
                                                    :src="productDetail.product_info.img"></a>
                                            <a v-else-if="productDetail.product_info !=null && productDetail.product_info.auction_product == 1" href=""
                                                target="_blank"><img height="50"
                                                    :src="productDetail.product_info.img"></a>
                                      
                                            <strong v-else>N/A</strong>
                                       
                                    </td>
                                     <td>
                                     
                                           <template v-if="productDetail.product_info != null && productDetail.product_info.auction_product == 0">
                                            <strong>
                                                <a
                                                    class="text-muted">{{ productDetail.product_info.name }}</a>
                                                </strong>
                                            <small>{{ productDetail.product_info.variations }}</small>
                                           </template>
                                           <template v-else-if="productDetail.product_info !=null && productDetail.product_info.auction_product == 1" >
                                            <strong>
                                                <a 
                                                    class="text-muted">{{ productDetail.product_info.name }}</a></strong>
                                           </template>
                                           <template v-else> <strong >Product Unavailable</strong></template>
                                           
                                       
                                    </td>
                                

                                    <td>
                                        <template v-if="order.shipping_type != null && order.shipping_type == 'home_delivery'">
                                            Home Delivery
                                        </template>
                                        <template v-else-if="order.shipping_type == 'pickup_point'">
                                             <template v-if="order.pickup_point != null">
                                                {{ order.pickup_point.name }}
                                                    Pickup Point
                                             </template>
                                             <template v-else>
                                                Pickup Point
                                             </template>
                                        </template>
                                        <template v-else-if="order.shipping_type == 'carrier'">
                                             <template v-if="order.carrier != null">
                                                {{ order.carrier.name }}
                                                   Carrier
                                                   <br>
                                                   Transit Time - {{ order.carrier.transit_time }} Days
                                             </template>
                                             <template v-else>
                                                 Carrier
                                             </template>
                                        </template>
                                    </td>
                                    <td class="text-center">{{ productDetail.quantity }}</td>
                                    <td class="text-center">
                                        {{ productDetail.product_price }}</td>
                                    <td class="text-center">৳{{ productDetail.price }}</td> 
                                </tr>
                           
                        </tbody> 
                    </table>
                </div>
            </div>
            <div class="clearfix float-right">
                <table class="table">
                    <tbody>
                        <tr>
                            <td>
                                <strong class="text-muted">Sub Total :</strong>
                            </td>
                            <td>
                               {{ order.product_sub_total }}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong class="text-muted">Tax :</strong>
                            </td>
                            <td>
                                {{ order.tax_total }}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong class="text-muted">Shipping :</strong>
                            </td>
                            <td>
                                {{ order.total_shipping }}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong class="text-muted">Coupon :</strong>
                            </td>
                            <td>
                              {{ order.coupon_discount }}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong class="text-muted">TOTAL :</strong>
                            </td>
                            <td class="text-muted h5">
                                ৳{{ order.grand_total }}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="no-print text-right">
                    <a href="seller.invoice.download', $order->id" type="button"
                        class="btn btn-icon btn-light"><i class="las la-print"></i></a>
                </div>
            </div>

        </div>
    </div>
</template>
  
  <script>
  import axios from 'axios';
  export default {
  props:['id'],
  data(){
      return{
          auth:{
              isAuthenticated: false,
              user: {},
              },
              order:"",
              delivery_boys:"",
              order_shipping_address:"",
              user:""
      }
  },
      created(){
          var user = localStorage.getItem("user");
              if(user !== null){
                  user = JSON.parse(user);
                  this.auth.isAuthenticated = true;
                  this.auth.user = user;
                  
              }
              this.getOrderDetails();
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
        getOrderDetails(){
              axios.get(this.selfDomain+'vueseller/seller/orders/'+this.$route.params.id,{  
                  headers: {
                          Authorization: "Bearer " + this.auth.user.access_token,
                  }
  
          })
          .then((response) => {    
            this.order = response.data.order;
            this.delivery_boys = response.data.delivery_boys;
            this.order_shipping_address = response.data.order_shipping_address;
            this.user = response.data.user;
            this.productDetails = response.data.products;
              console.log(response.data)
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