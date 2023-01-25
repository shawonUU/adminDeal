<template>
  <div class="aiz-titlebar mt-2 mb-4">
    <div class="row align-items-center">
        <div class="col-md-6">
            <h1 class="h3">Followed Shop</h1>
        </div>
    </div>
</div>

 <div class="container">
            <div class="rounded bg-white px-3 pt-3 shadow-sm">
                <div class="row row-cols-xxl-6 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 gutters-10">
                             
                            <!-- @foreach (explode(',',Auth::user()->followed_shop) as $key => $id)
                           @php
                           $shop=\App\Models\Shop::find($id);
                            @endphp    
                            @if($shop) -->
                                <div class="col text-center hov-shadow-md border d-block rounded bg-white p-2 ">
                                    <a href="" class="text-reset ">
                                        <img
                                            src=""
                                            data-src=""
                                            alt=""
                                            class="img-fluid img lazyload h-60px"
                                            height="78"
                                        >
                                        <div class="text-truncate fs-12 fw-600 mt-2 opacity-70">name</div>
                                    </a><br>
                                    <a class="text-reset d-inline-block fw-600 fs-15 p-3" href=""><button class="btn btn-sm btn-secondary">Unfollow</button></a>
                                </div>
<!--                               
                               @endif 
                            @endforeach -->
    
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