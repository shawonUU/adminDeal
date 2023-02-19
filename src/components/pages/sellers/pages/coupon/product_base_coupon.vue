<template>
  <div class="card-header mb-2">
    <h3 class="h6">Add Your Product Base Coupon</h3>
</div>
<div class="form-group row">
    <label class="col-lg-3 col-from-label" for="code">Coupon code</label>
    <div class="col-lg-9">
        <input type="text" placeholder="Coupon code" id="code" name="code" class="form-control" required>
    </div>
</div>
<div class="product-choose-list">
    <div class="product-choose">
        <div class="form-group row">
            <label class="col-lg-3 col-from-label" for="name">Product</label>
            <div class="col-lg-9">
                <select name="product_ids[]" class="form-control product_id aiz-selectpicker" data-live-search="true" data-selected-text-format="count" required multiple>
                    <!-- @foreach($products as $product) -->
                        <option value="">name</option>
                    <!-- @endforeach -->
                </select>
            </div>
        </div>
    </div>
</div>
<br>
<div class="form-group row">
    <label class="col-sm-3 control-label" for="start_date">Date</label>
    <div class="col-sm-9">
      <input type="text" class="form-control aiz-date-range" name="date_range" placeholder="Select Date">
    </div>
</div>
<div class="form-group row">
   <label class="col-lg-3 col-from-label">Discount</label>
   <div class="col-lg-7">
      <input type="number" lang="en" min="0" step="0.01" placeholder="Discount" name="discount" class="form-control" required>
   </div>
   <div class="col-lg-2">
       <select class="form-control aiz-selectpicker" name="discount_type">
           <option value="amount">Amount</option>
           <option value="percent">Percent</option>
       </select>
   </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>