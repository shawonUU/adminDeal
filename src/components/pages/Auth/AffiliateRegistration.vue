<template>
   <section class="pt-4 mb-4">
   <div class="container">
     <div class="row">
       <div class="col-lg-6 text-center text-lg-left">
         <h1 class="fw-600 h4">Affiliate Informations</h1>
       </div>
       <div class="col-lg-6">
         <ul class="breadcrumb bg-transparent p-0 justify-content-center justify-content-lg-end">
           <li class="breadcrumb-item opacity-50">
             <a class="text-reset" href="https://admindeal.com.bd">Home</a>
           </li>
           <li class="text-dark fw-600 breadcrumb-item">
             <a class="text-reset" href="https://admindeal.com.bd/affiliate">"Affiliate"</a>
           </li>
         </ul>
       </div>
     </div>
     <div class="row">
       <div class="col-lg-8 mx-auto">
         <form class="" action="https://admindeal.com.bd/affiliate/store" method="POST" enctype="multipart/form-data">
           <input type="hidden" name="_token" value="g23HdCifgj7mR2HpZBvYm1R9ojfXGsI5ZWHPmpzZ">
           <div class="card">
             <div class="card-header">
               <h5 class="mb-0 h6">User Info</h5>
             </div>
             <div class="card-body">
               <div class="row">
                 <div class="col-12">
                   <div class="form-group">
                     <div class="input-group input-group--style-1">
                       <input type="text" class="form-control" value="" placeholder="Name" name="name">
                       <span class="input-group-addon">
                         <i class="las la-user"></i>
                       </span>
                     </div>
                   </div>
                 </div>
               </div>
               <div class="row">
                 <div class="col-12">
                   <div class="form-group">
                     <div class="input-group input-group--style-1">
                       <input type="email" class="form-control" value="" placeholder="Email" name="email">
                       <span class="input-group-addon">
                         <i class="las la-envelope"></i>
                       </span>
                     </div>
                   </div>
                 </div>
               </div>
               <div class="row">
                 <div class="col-12">
                   <div class="form-group">
                     <div class="input-group input-group--style-1">
                       <input type="password" class="form-control" placeholder="Password" name="password">
                       <span class="input-group-addon">
                         <i class="las la-lock"></i>
                       </span>
                     </div>
                   </div>
                 </div>
               </div>
               <div class="row">
                 <div class="col-12">
                   <div class="form-group">
                     <div class="input-group input-group--style-1">
                       <input type="password" class="form-control" placeholder="Confirm Password" name="password_confirmation">
                       <span class="input-group-addon">
                         <i class=" las la-lock"></i>
                       </span>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="card-header">
               <h5 class="mb-0 h6">Verification Info</h5>
             </div>
             <div class="card-body">
               <div class="row">
                 <label class="col-md-2 col-form-label">Your name <span class="text-danger">*</span>
                 </label>
                 <div class="col-md-10">
                   <input type="text" class="form-control mb-3" placeholder="Your name" name="element_0" required>
                 </div>
               </div>
               <div class="row">
                 <label class="col-md-2 col-form-label">Email <span class="text-danger">*</span>
                 </label>
                 <div class="col-md-10">
                   <input type="text" class="form-control mb-3" placeholder="Email" name="element_1" required>
                 </div>
               </div>
               <div class="row">
                 <label class="col-md-2 col-form-label">Full Address <span class="text-danger">*</span>
                 </label>
                 <div class="col-md-10">
                   <input type="text" class="form-control mb-3" placeholder="Full Address" name="element_2" required>
                 </div>
               </div>
               <div class="row">
                 <label class="col-md-2 col-form-label">Phone Number <span class="text-danger">*</span>
                 </label>
                 <div class="col-md-10">
                   <input type="text" class="form-control mb-3" placeholder="Phone Number" name="element_3" required>
                 </div>
               </div>
               <div class="row">
                 <label class="col-md-2 col-form-label">How will you affiliate? <span class="text-danger">*</span>
                 </label>
                 <div class="col-md-10">
                   <input type="text" class="form-control mb-3" placeholder="How will you affiliate?" name="element_4" required>
                 </div>
               </div>
             </div>
           </div>
           <div class="form-group mb-0 text-right">
             <button type="submit" class="btn btn-primary">Save</button>
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