<template>
   <section class="pt-4 mb-4">
    <div class="container text-center">
        <div class="row">
            <div class="col-lg-6 text-center text-lg-left">
                <h1 class="fw-600 h4">Track Order</h1>
            </div>
            <div class="col-lg-6">
                <ul class="breadcrumb bg-transparent p-0 justify-content-center justify-content-lg-end">
                    <li class="breadcrumb-item opacity-50">
                        <a class="text-reset" href="https://admindeal.com.bd">Home</a>
                    </li>
                    <li class="text-dark fw-600 breadcrumb-item">
                        <a class="text-reset" href="https://admindeal.com.bd/track-your-order">"Track Order"</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<section class="mb-5">
    <div class="container text-left">
        <div class="row">
            <div class="col-xxl-5 col-xl-6 col-lg-8 mx-auto">
                <form class="" action="https://admindeal.com.bd/track-your-order" method="GET" enctype="multipart/form-data">
                    <div class="bg-white rounded shadow-sm">
                        <div class="fs-15 fw-600 p-3 border-bottom text-center">
                            Check Your Order Status
                        </div>
                        <div class="form-box-content p-3">
                            <div class="form-group">
                                <input type="text" class="form-control mb-3" placeholder="Order Code:" name="order_code" required>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">Track Order</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

            </div>
</section> 
</template>

<script>
export default {

}
</script>

<style>

</style>