<template>
  <div class="container bg-white">
    <div class="px-2 py-4 px-md-4 py-md-3 bg-white ">
                
            <div class="d-flex flex-wrap mb-3 align-items-baseline border-bottom">
            <h3 class="h5 fw-700 mb-0">
                <span class="border-bottom border-primary border-width-2 pb-3 d-inline-block">All Products</span>
        
            </h3>
                <a href="#" class="ml-auto mr-0 btn btn-primary btn-sm shadow-md">Back To Top</a>
            
        </div>
    
        <div class="row row-cols-xxl-6 row-cols-xl-6 row-cols-lg-6 row-cols-md-3 row-cols-2 gutters-300" id="product-list">
            
        </div>
        <div id="load-more" class="text-center">
            <div class="fs-14 d-inline-block fw-600 btn btn-soft-primary c-pointer" onclick="loadMoreProduct()">Loading..
            </div>
        </div>
                    
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>