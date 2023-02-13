<template>
       <div class="aiz-titlebar mt-2 mb-4">
      <div class="row align-items-center">
        <div class="col-md-6">
            <h1 class="h3">Products</h1>
        </div>
      </div>
    </div>

    <div class="row gutters-10 justify-content-center">
            <div v-if="seller_subscription==true" class="col-md-4 mx-auto mb-3" >
                <div class="bg-grad-1 text-white rounded-lg overflow-hidden">
                  <span class="size-30px rounded-circle mx-auto bg-soft-primary d-flex align-items-center justify-content-center mt-3">
                      <i class="las la-upload la-2x text-white"></i>
                  </span>
                  <div class="px-3 pt-3 pb-3">
                      <div class="h4 fw-700 text-center">{{ remaining_uploads }}</div>
                      <div class="opacity-50 text-center">Remaining Uploads</div>
                  </div>
                </div>
            </div>

        <div class="col-md-4 mx-auto mb-3" >
            <a href="seller.products.create">
              <div class="p-3 rounded mb-3 c-pointer text-center bg-white shadow-sm hov-shadow-lg has-transition">
                  <span class="size-60px rounded-circle mx-auto bg-secondary d-flex align-items-center justify-content-center mb-3">
                      <i class="las la-plus la-3x text-white"></i>
                  </span>
                  <div class="fs-18 text-primary">Add New Product</div>
              </div>
            </a>
        </div>


        <div v-if="seller_subscription==true" class="col-md-4">
            <a href="seller.seller_packages_list" class="text-center bg-white shadow-sm hov-shadow-lg text-center d-block p-3 rounded">
                    <template v-if="seller_package!=null">
                        <img :src="seller_logo" height="44" class="mw-100 mx-auto">
                        <span class="d-block sub-title mb-2">Current Package: {{ seller_package.name }}</span>
                    </template>
                    <template v-else>
                        <i class="la la-frown-o mb-2 la-3x"></i>
                       <div class="d-block sub-title mb-2">No Package Found</div>
                    </template>
                    <div class="btn btn-outline-primary py-1">Upgrade Package</div>
            </a>
        </div>

    </div>

    <div class="card">
        <div class="card-header row gutters-5">
            <div class="col">
                <h5 class="mb-md-0 h6">All Products</h5>
            </div>
            <div class="col-md-4">
                <form class="" id="sort_brands" action="" method="GET">
                    <!-- <div class="input-group input-group-sm">
                        <input type="text" class="form-control" id="search" name="search" @isset($search) value="{{ $search }}" @endisset placeholder="{{ translate('Search product') }}">
                    </div> -->
                    <div class="input-group input-group-sm">
                        <input type="text" class="form-control" id="search" name="search" value=""  placeholder="Search product">
                    </div>
                </form>
            </div>
        </div>
        <div class="card-body">
            <table class="table aiz-table mb-0">
                <thead>
                    <tr>
                        <th>#</th>
                        <th width="30%">Name</th>
                        <th data-breakpoints="md">Category</th>
                        <th data-breakpoints="md">Current Qty</th>
                        <th>Base Price</th>
                        <!-- @if(get_setting('product_approve_by_admin') == 1) -->
                            <th data-breakpoints="md">Approval</th>
                        <!-- @endif -->
                        <th data-breakpoints="md">Published</th>
                        <th data-breakpoints="md">Featured</th>
                        <th data-breakpoints="md" class="text-right">Options</th>
                    </tr>
                </thead>

                <tbody>
                    <!-- @foreach ($products as $key => $product) -->
                        <tr>
                            <td>1</td>
                            <td>
                                <a href="" target="_blank" class="text-reset">
                                    name
                                </a>
                            </td>
                            <td>
                                <!-- @if ($product->category != null) -->
                                    name
                                <!-- @endif -->
                            </td>
                            <td>
                                <!-- @php
                                    $qty = 0;
                                    foreach ($product->stocks as $key => $stock) {
                                        $qty += $stock->qty;
                                    }
                                    echo $qty;
                                @endphp -->
                            </td>
                            <td>unit_price</td>
                            <!-- @if(get_setting('product_approve_by_admin') == 1) -->
                                <td>
                                    <!-- @if ($product->approved == 1) -->
                                        <span class="badge badge-inline badge-success">Approved</span>
                                    <!-- @else -->
                                        <span class="badge badge-inline badge-info">Pending</span>
                                    <!-- @endif -->
                                </td>
                            <!-- @endif -->
                            <td>
                                <label class="aiz-switch aiz-switch-success mb-0">
                                    <!-- <input onchange="update_published(this)" value="{{ $product->id }}" type="checkbox" <?php if($product->published == 1) echo "checked";?> > -->
                                    <!-- <span class="slider round"></span> -->
                                    <input  value="" type="checkbox">
                                    <span class="slider round"></span>
                                </label>
                            </td>
                            <td>
                                <label class="aiz-switch aiz-switch-success mb-0">
                                    <input  value="" type="checkbox">
                                    <span class="slider round"></span>
                                </label>
                            </td>
                            <td class="text-right">
		                      <a class="btn btn-soft-info btn-icon btn-circle btn-sm" href="seller.products.edit" title="Edit">
		                          <i class="las la-edit"></i>
		                      </a>
                              <a href="seller.products.duplicate" class="btn btn-soft-success btn-icon btn-circle btn-sm"  title="Duplicate">
    							   <i class="las la-copy"></i>
    						  </a>
                              <a href="#" class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="seller.products.destroy" title="Delete">
                                  <i class="las la-trash"></i>
                              </a>
                          </td>
                        </tr>
                    <!-- @endforeach -->
                </tbody>
            </table>
            <div class="aiz-pagination">
                <!-- {{ $products->links() }} -->
          	</div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            auth:{
                isAuthenticated: false,
                user: {},
                },
                products:[],
                seller_subscription:"",
                remaining_uploads:"",
                seller_package:"",
                seller_logo:""
        }
    },
    created(){
        var user = localStorage.getItem("user");
            if(user !== null){
                user = JSON.parse(user);
                this.auth.isAuthenticated = true;
                this.auth.user = user;
            }
            this.getSellerProducts();
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
        getSellerProducts(){
            axios.get(this.selfDomain+'vueseller/seller/products',{
                params: {
                            token: this.auth.user.access_token,
                         }
            })
            .then((response) => {   
                this.products = response.data.products.data;           
                this.seller_subscription = response.data.seller_subscription;           
                this.remaining_uploads = response.data.remaining_uploads;           
                this.seller_package = response.data.seller_package;           
                this.seller_logo = response.data.seller_logo;           
               console.log(response.data);
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