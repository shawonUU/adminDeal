<template>
   
<div class="aiz-titlebar mt-2 mb-4">
    <div class="row align-items-center">
        <div class="col-md-6">
            <h1 class="h3">Add Your Product</h1>
        </div>
    </div>
</div>

<form class="" method="POST" enctype="multipart/form-data" id="choice_form">
    <div class="row gutters-5">
        <div class="col-lg-8">
            <input type="hidden" name="added_by" value="seller">
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0 h6">Product Information</h5>
                </div>
                <div class="card-body">
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">Product Name</label>
                        <div class="col-md-8">
                            <input v-model="product.productName" type="text" class="form-control" name="name"
                                placeholder="Product Name" required>
                        </div>
                    </div>
                    <div class="form-group row" id="category">
                        <label class="col-md-3 col-from-label">Category</label>
                        <div class="col-md-8">
                            <!-- <select class="form-control aiz-selectpicker" name="category_id" id="category_id" -->
                                <!-- data-live-search="true" required> -->
                                <!-- @foreach ($categories as $category)
                                <option value="{{ $category->id }}">{{ $category->getTranslation('name</option>
                                @foreach ($category->childrenCategories as $childCategory)
                                @include('categories.child_category', ['child_category' => $childCategory])
                                @endforeach
                                @endforeach -->
                            <!-- </select> -->
                            <Select2  v-model="categoryId" :options="categories" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="setCategory($event)" placeholder="Select Category">
                                {{ categories }}
                            </Select2>
                            
                        </div>
                    </div>
                    <div class="form-group row" id="brand">
                        <label class="col-md-3 col-from-label">Brand</label>
                        <div class="col-md-8">
                            <Select2 v-model="myValue" :options="brands" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="setBrand($event)" placeholder="Select Brand">
                            </Select2>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">Unit</label>
                        <div class="col-md-8">
                            <input v-model="product.unit" type="text" class="form-control" name="unit"
                                placeholder="Unit (e.g. KG, Pc etc)" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">Weight <small>(In Kg)</small></label>
                        <div class="col-md-8">
                            <input v-model="product.weight" type="number" class="form-control"  step="0.01"  placeholder="0.00">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">Minimum Purchase Qty</label>
                        <div class="col-md-8">
                            <input type="number" v-model="product.min_purchase_qty" lang="en" class="form-control"   min="1"
                                required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">Tags</label>
                        <div class="col-md-8">
                            <!-- <input type="text" class="form-control aiz-tag-input" name="tags[]"
                                placeholder="Type and hit enter to add a tag"> -->
                                <div class='tag-input'>
                                <div v-for='(tag, index) in tags' :key='tag' class='tag-input__tag'>
                                     <span @click='removeTag(index)'>x</span>
                                    {{ tag }}
                                    </div>
                                    <input
                                        type='text'
                                        placeholder="Enter tag"
                                        class='tag-input__text '
                                        :onchange='addTag'
                                        @keydown.enter='addTag'
                                        @keydown.,='addTag'
                                        @keydown.delete='removeLastTag'
                                    />
                                </div>
                        </div>
                    </div>
                       
                    <div v-if="pos_system==1" class="form-group row">
                        <label class="col-md-3 col-from-label">Barcode</label>
                        <div class="col-md-8">
                            <input v-model="product.barcode" type="text" class="form-control" name="barcode"
                                placeholder="Barcode">
                        </div>
                    </div>
  
                    <div  v-if="refund_request==1" class="form-group row">
                        <label class="col-md-3 col-from-label">Refundable</label>
                        <div class="col-md-8">
                            <label class="aiz-switch aiz-switch-success mb-0">
                                <input v-model="product.refundable" type="checkbox" name="refundable" checked >
                                <span></span>
                            </label>
                        </div>
                    </div>

                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0 h6">Product Images</h5>
                </div>
                <div class="card-body">
                    <div class="form-group row">
                        <label class="col-md-3 col-form-label"
                            for="signinSrEmail">Gallery Images</label>
                        <div class="col-md-8">
                            <div class="input-group" data-toggle="aizuploader" data-type="image" data-multiple="true">
                                <div class="input-group-prepend">
                                    <div class="input-group-text bg-soft-secondary font-weight-medium">
                                        Browse</div>
                                </div>
                                <div class="form-control file-amount">Choose File</div>
                                <input type="hidden" name="photos" class="selected-files">
                            </div>
                            <div class="file-preview box sm">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-form-label" for="signinSrEmail">Thumbnail Image
                            <small>(290x300)</small></label>
                        <div class="col-md-8">
                            <div class="input-group" data-toggle="aizuploader" data-type="image">
                                <div class="input-group-prepend">
                                    <div class="input-group-text bg-soft-secondary font-weight-medium">
                                        Browse</div>
                                </div>
                                <div class="form-control file-amount">Choose File</div>
                                <input type="hidden" name="thumbnail_img" class="selected-files">
                            </div>
                            <div class="file-preview box sm">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0 h6">Product Videos</h5>
                </div>
                <div class="card-body">
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">Video Provider</label>
                        <div class="col-md-8">
                            <select v-model="product.video_provider" class="form-control aiz-selectpicker" name="video_provider" id="video_provider">
                                <option value="youtube">Youtube</option>
                                <option value="dailymotion">Dailymotion</option>
                                <option value="vimeo">Vimeo</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">Video Link</label>
                        <div class="col-md-8">
                            <input v-model="product.video_link" type="text" class="form-control" name="video_link"
                                placeholder="Video Link">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0 h6">Product Variation</h5>
                </div>
                <div class="card-body">
                    <div class="form-group row">
                        <div class="col-md-3">
                            <input type="text" class="form-control" value="Colors" disabled>
                        </div>
                        <div class="col-md-8">
                            <select class="form-control aiz-selectpicker" data-live-search="true" name="colors[]"
                                data-selected-text-format="count" id="colors" multiple disabled>
                                <!-- @foreach (\App\Models\Color::orderBy('name', 'asc')->get() as $key => $color) -->
                                <option value=""
                                    data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:'></span><span></span></span>">
                                </option>
                                <!-- @endforeach -->
                            </select>
                        </div>
                        <div class="col-md-1">
                            <label class="aiz-switch aiz-switch-success mb-0">
                                <input value="1" type="checkbox" name="colors_active">
                                <span></span>
                            </label>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-3">
                            <input type="text" class="form-control" value="Attributes" disabled>
                        </div>
                        <div class="col-md-8">
                            <select name="choice_attributes[]" id="choice_attributes"
                                class="form-control aiz-selectpicker" data-live-search="true"
                                data-selected-text-format="count" multiple
                                data-placeholder="Choose Attributes">
                                <!-- @foreach (\App\Models\Attribute::all() as $key => $attribute) -->
                                <option value="{{ $attribute->id }}">name</option>
                                <!-- @endforeach -->
                            </select>
                        </div>
                    </div>
                    <div>
                        <p>Choose the attributes of this product and then input values of each attribute
                        </p>
                        <br>
                    </div>

                    <div class="customer_choice_options" id="customer_choice_options">

                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0 h6">Product price + stock</h5>
                </div>
                <div class="card-body">
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">Unit price</label>
                        <div class="col-md-6">
                            <input type="number" v-model="product.unit_price" lang="en" min="0"  step="0.01"
                                placeholder="Unit price" name="unit_price" class="form-control"
                                required>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-md-3 control-label" for="start_date">Discount Date Range</label>
                        <div class="col-md-9">
                          <input v-model="product.date_from" type="date" class="form-control aiz-date-range" name="date_range" placeholder="Select Date" data-time-picker="true" data-format="DD-MM-Y HH:mm:ss" data-separator=" to " autocomplete="off">
                            <span>To</span>
                          <input v-model="product.to_date" type="date" class="form-control aiz-date-range" name="date_range" placeholder="Select Date" data-time-picker="true" data-format="DD-MM-Y HH:mm:ss" data-separator=" to " autocomplete="off">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">Discount</label>
                        <div class="col-md-6">
                            <input type="number" v-model="product.discount"  lang="en" min="0"  step="0.01"
                                placeholder="Discount" name="discount" class="form-control" required>
                        </div>
                        <div class="col-md-3">
                            <select  v-model="product.discount_type" class="form-control aiz-selectpicker" name="discount_type">
                                <option value="amount">Flat</option>
                                <option value="percent">Percent</option>
                            </select>
                        </div>
                    </div>

                    <div id="show-hide-div">
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">Quantity</label>
                            <div class="col-md-6">
                                <input v-model="product.current_stock" type="number" lang="en" min="0"  step="1"
                                    placeholder="Quantity" name="current_stock" class="form-control"
                                    required>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">
                                SKU
                            </label>
                            <div class="col-md-6">
                                <input v-model="product.sku" type="text" placeholder="SKU" name="sku" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">
                            External link
                        </label>
                        <div class="col-md-9">
                            <input v-model="product.external_link" type="text" placeholder="External link" name="external_link" class="form-control">
                            <small class="text-muted">Leave it blank if you do not use external site link</small>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">
                            External link button text
                        </label>
                        <div class="col-md-9">
                            <input type="text" v-model="product.external_link_btn" placeholder="External link button text" name="external_link_btn" class="form-control">
                            <small class="text-muted">Leave it blank if you do not use external site link</small>
                        </div>
                    </div>
                    <br>
                    <div class="sku_combination" id="sku_combination">

                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0 h6">Product Description</h5>
                </div>
                <div class="card-body">
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">Description</label>
                        <div class="col-md-8">
                            <textarea v-model="product.description" class="aiz-text-editor" name="description"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0 h6">PDF Specification</h5>
                </div>
                <div class="card-body">
                    <div class="form-group row">
                        <label class="col-md-3 col-form-label"
                            for="signinSrEmail">PDF Specification</label>
                        <div class="col-md-8">
                            <div class="input-group" data-toggle="aizuploader" data-type="document">
                                <div class="input-group-prepend">
                                    <div class="input-group-text bg-soft-secondary font-weight-medium">
                                        Browse</div>
                                </div>
                                <div class="form-control file-amount">Choose File</div>
                                <input type="hidden" name="pdf" class="selected-files">
                            </div>
                            <div class="file-preview box sm">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0 h6">SEO Meta Tags</h5>
                </div>
                <div class="card-body">
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">Meta Title</label>
                        <div class="col-md-8">
                            <input type="text" v-model="product.description" class="form-control" name="meta_title"
                                placeholder="Meta Title">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">Description</label>
                        <div class="col-md-8">
                            <textarea name="meta_description" v-model="product.meta_description" rows="8" class="form-control"></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-form-label" for="signinSrEmail">Meta Image</label>
                        <div class="col-md-8">
                            <div class="input-group" data-toggle="aizuploader" data-type="image">
                                <div class="input-group-prepend">
                                    <div class="input-group-text bg-soft-secondary font-weight-medium">
                                        Browse</div>
                                </div>
                                <div class="form-control file-amount">Choose File</div>
                                <input type="hidden" name="meta_img" class="selected-files">
                            </div>
                            <div class="file-preview box sm">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0 h6">
                        Shipping Configuration
                    </h5>
                </div>

                <div class="card-body">
                    <div v-if="shipping_type== 'product_wise_shipping'" class="form-group row">
                        <label class="col-md-6 col-from-label">Free Shipping</label>
                        <div class="col-md-6">
                            <label class="aiz-switch aiz-switch-success mb-0">
                                <input v-model="product.shipping_type" type="radio"    name="shipping_type" value="free" checked>
                                <span></span>
                            </label>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-md-6 col-from-label">Flat Rate</label>
                        <div class="col-md-6">
                            <label class="aiz-switch aiz-switch-success mb-0">
                                <input v-model="product.shipping_type" type="radio" name="shipping_type" value="flat_rate">
                                <span></span>
                            </label>
                        </div>
                    </div>

                    <div class="flat_rate_shipping_div" style="display: none">
                        <div class="form-group row">
                            <label class="col-md-6 col-from-label">Shipping cost</label>
                            <div class="col-md-6">
                                <input v-model="product.flat_shipping_cost" type="number" lang="en" min="0" value="0" step="0.01"
                                    placeholder="Shipping cost" name="flat_shipping_cost"
                                    class="form-control" required>
                            </div>
                        </div>
                    </div>

                    <!-- @else -->
                    <p>
                        Shipping configuration is maintained by Admin.
                    </p>
                    <!-- @endif -->
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0 h6">Low Stock Quantity Warning</h5>
                </div>
                <div class="card-body">
                    <div class="form-group mb-3">
                        <label for="name">
                            Quantity
                        </label>
                        <input v-model="product.low_stock_quantity" type="number" name="low_stock_quantity" min="0" step="1" class="form-control">
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0 h6">
                        Stock Visibility State
                    </h5>
                </div>

                <div class="card-body">

                    <div class="form-group row">
                        <label class="col-md-6 col-from-label">Show Stock Quantity</label>
                        <div class="col-md-6">
                            <label class="aiz-switch aiz-switch-success mb-0">
                                <input v-model="product.stock_visibility_state" type="radio"  name="stock_visibility_state" value="quantity" checked>
                                <span></span>
                            </label>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-md-6 col-from-label">Show Stock With Text Only</label>
                        <div class="col-md-6">
                            <label class="aiz-switch aiz-switch-success mb-0">
                                <input v-model="product.stock_visibility_state" type="radio" name="stock_visibility_state" value="text">
                                <span></span>
                            </label>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-md-6 col-from-label">Hide Stock</label>
                        <div class="col-md-6">
                            <label class="aiz-switch aiz-switch-success mb-0">
                                <input type="radio" name="stock_visibility_state" value="hide">
                                <span></span>
                            </label>
                        </div>
                    </div>

                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0 h6">Cash On Delivery</h5>
                </div>
                <div class="card-body">
                    <!-- @if (get_setting('cash_payment') == '1') -->
                    <div class="form-group row">
                        <label class="col-md-6 col-from-label">Status</label>
                        <div class="col-md-6">
                            <label class="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" name="cash_on_delivery" value="1" checked="">
                                <span></span>
                            </label>
                        </div>
                    </div>
                    <!-- @else -->
                    <p>
                        Cash On Delivery activation is maintained by Admin.
                    </p>
                    <!-- @endif -->
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0 h6">Estimate Shipping Time</h5>
                </div>
                <div class="card-body">
                    <div class="form-group mb-3">
                        <label for="name">
                            Shipping Days
                        </label>
                        <div class="input-group">
                            <input type="number" class="form-control" name="est_shipping_days" min="1" step="1"
                                placeholder="Shipping Days">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupPrepend">Days</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0 h6">VAT & Tax</h5>
                </div>
                <div class="card-body">
                    <!-- @foreach(\App\Models\Tax::where('tax_status', 1)->get() as $tax) -->
                    <label for="name">
                        name
                        <input type="hidden" value="" name="tax_id[]">
                    </label>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <input type="number" lang="en" min="0" value="0" step="0.01"
                                placeholder="Tax" name="tax[]" class="form-control" required>
                        </div>
                        <div class="form-group col-md-6">
                            <select class="form-control aiz-selectpicker" name="tax_type[]">
                                <option value="amount">Flat</option>
                                <option value="percent">Percent</option>
                            </select>
                        </div>
                    </div>
                    <!-- @endforeach -->
                </div>
            </div>

        </div>
        <div class="col-12">
            <div class="mar-all text-right mb-2">
                <button type="submit" name="button" value="publish"
                    class="btn btn-primary">Upload Product</button>
            </div>
        </div>
    </div>

</form>

</template>

<script>
import axios from 'axios';
import Select2 from 'vue3-select2-component';
export default {
    components:{Select2},
    data(){
        return{         
            auth:{
                isAuthenticated: false,
                user: {},
                },
            categories:[],
            categoryId:"",
            brands:[],
            selectedBrand:"",
            refund_request:"",
            pos_system:"",
            product:{
                productName:"",
                unit:"",
                weight:"0.00",
                min_purchase_qty:"1",
                barcode:"",
                refundable:"1",



            },
            searchKey:'',
            tags: [],
            shipping_type:"",


        }
    },
    created(){
        var user = localStorage.getItem("user");
            if(user !== null){
                user = JSON.parse(user);
                this.auth.isAuthenticated = true;
                this.auth.user = user;
            }
        this.getCategories();
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
        getCategories(){
            axios.get(this.selfDomain+'vueseller/seller/product/create',{
                headers: {
                    Authorization: "Bearer " + this.auth.user.access_token,
              }
            })
            .then((response)=>{
                this.categories = response.data.categories;
                this.brands = response.data.brands;
                this.refund_request = response.data.refund_request;
                this.pos_system = response.data.pos_system;
                this.shipping_type = response.data.shipping_type;
                console.log(response.data)
            }).catch((err)=>{
                console.log(err)
            })
        },
        setCategory(category){
            this.categoryId = category;
            },
        setBrand(brand){
            this.selectedBrand=brand.slug;
        },  
        
        addTag (event) {
             if(event.code == "Comma" || event.code == "Enter" || event.type=="change"){
                event.preventDefault()
                var val = event.target.value.trim()
                if (val.length > 0) {
                        // if(this.tags.length <= 2){
                        //     this.tags.push(val)
                        //     event.target.value = ''
                        // }else{
                        //     event.target.value = ''
                        // }
                        this.tags.push(val)
                        event.target.value = ''
                       this.getAccessoriesList();
                }
             }
            },
        removeTag (index) {
            this.tags.splice(index, 1);
            this.getAccessoriesList();
        },
        removeLastTag(event) {
            if (event.target.value.length === 0) {
                this.removeTag(this.tags.length - 1);
                this.getAccessoriesList();
            }
      }
    }
}
</script>

<style>
.select2-container--default .select2-selection--single {
    background-color: #fff;
    border: 1px solid #e7e5e5!important;
    border-radius: 4px;
    height: 38px!important;
}
tag-input {
  width: 100%;
  border: 1px solid rgb(51, 50, 50);
  font-size: 0.9em;
  height: 45px;
  box-sizing: border-box;
  padding: 0 10px;
}
.tag-input__tag {
  height: 30px;
  float: left;
  margin-right: 10px;
  background-color: #00b297;
  margin-top: 10px;
  line-height: 30px;
  padding: 0 5px;
  border-radius: 5px;
  color: white
}
.tag-input__tag > span {
  cursor: pointer;
  opacity: 0.75;
}
.tag-input__text {
  border: none;
  outline: none;
  font-size:12px;
  line-height: 45px;
  background: none;
}
.tag-input {
    border: 1px solid #e2e5ec;
}
</style>