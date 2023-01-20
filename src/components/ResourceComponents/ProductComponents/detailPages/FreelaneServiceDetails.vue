<template>
    <section class="mb-4  pt-3">
        <div class="container">
            <div class="bg-white shadow-sm rounded p-3">
                <div class="row p-4">

    <div class="col-md-8">
        <div class="row">
            <div>
               <h3 class="mb-3">{{ jobInfo.name }}</h3> 
            </div>
            <div class="text-center">
                <img class="img-fit" :src="jobInfo.thumbnail_image">
            </div>
            <div v-html="jobInfo.details">
                
            </div>
      

        </div>

    </div>
    <div class="col-md-4">
                <div class="mb-3">
                    <b> সম্মানিত গ্রাহক, আমরা শুধু মাত্র জবের ক্ষেত্রে আপওয়ার্ক বা ফাইবারের মত তৃতীয় পক্ষ হিসাবে কাজ করি।  বায়ার ও সেলারের সেতু বন্ধন হিসাবে কাজ করি।  নিজ দায়িত্বে কাজটি বুঝে নিন,  এবং ক্লিয়ারেন্স প্রদান করুন।  ক্লিয়ারেন্স প্রদানের পর আর কোন অভিযোগ গৃহীত হবে না।  Admin Deal আপনার অর্থের নিশ্চয়তা প্রদান করে   কিন্তু কাজের কোয়ালিটি চেক করার দায়িত্ব আপনার।</b>
                </div>
                <div class="fw-600 mb-3">
                    কাজ ডেলিভারির সময় ,  কাজের বাজেট নিজ দায়িত্বে বায়ার ও সেলার উভয়ে  ঠিক করুন। Admin Deal সঠিক সচ্ছ ও বাস্তব সম্মত ক্রেতা ও বিক্রেতার জন্য।
                </div>
        <div class="row align-items-center">
            <div class="col-auto">
            </div>
            <!-- @if (get_setting('conversation_system') == 1) -->
                <div class="col-12 my-4">

                    <button class="btn btn-sm btn-soft-primary " style="display: block; width: 100%;" onclick="show_chat_modal()">Message Employer</button>


                </div>
                <div class="col-12">
                    <!-- @if(Auth::check()) -->
                  
                        <button class="btn btn-md btn-primary" style="display: block; width: 100%;" onclick="apply_confirm()">Apply Here</button>
                  
                    <!-- @else -->
                    
                     <!-- <button class="btn btn-md btn-primary" style="display: block;  width: 100%;" onclick="login()">Apply Here</button>
                    
                    @endif -->
                    <div class="row">
                        <div class="col-sm-5">
                            <b> Ships fromv </b>
                        </div>
                        <div class="col-sm-7">
                            AdminDeal's Seller
                        </div>
                                    
                    </div>
                    <div class="row">
                        <div class="col-sm-5">
                            <b> Sold By</b>
                        </div>
                        <div class="col-sm-7">
                            Admindeal.com.bd
                        </div>
                        
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-5">
                            Packaging from
                        </div>
                        <div class="col-sm-7">
                            Shows what’s inside. 

                        </div>
                        
                    </div>
                    <div class="row">
                        <div class=" col-sm-12 p-3">
                            <b>Return policy:</b> Eligible for Return, Refund or Replacement as per as Admin Deal Jobs Tarms and Condition
                        </div>
                        <div class="col-sm-12 p-3">
                            <b>Support:</b> Free Admin Deal tech support included
                        </div>
                        <div class="col-sm-12 p-3">
                            <b>Admin Deal সব সময় নিরপেক্ষ ভুমিকা পালন করে। যদি কোন কারনে অর্ডার ক্যান্সেল হয়,  জব পোস্ট দাতাকে তার সমুদয় অর্থ ফেরত প্রদান করা হইবে। এবং জবটি  সম্পূর্ণ করার পর যদি জব পোস্ট দাতা কাজ টি গ্রহণ না করে এবং নানা রকম তালবাহানা করে তাহলে আপওয়ার্ক বা ফাইবারের মত Admin Deal টিম যাচাই করিয়া ৭ দিন পর জবটি অটো সম্পূর্ণ করিবে এবং employee কে তার অর্থ প্রদান করিবে। নানা ধারনের ঝুকি ও ঝামেলা এড়াতে  Admin Deal ওয়েবসাইট বা এপস এর মাধ্যমে  মেসেজে করুন।  যা পরবর্তীতে প্রমান হিসাবে সংরক্ষিত থাকিবে।</b> 
                        </div>
                    </div>
            <!-- @endif -->

            </div>
          
        </div>
    </div>
</div>
</div>
 </div>
</section>
<!-- 
 <section class="mb-4  pt-3">
        <div class="container">
   <div class="bg-white rounded shadow-sm">
                        <div class="border-bottom p-3">
                            <h3 class="fs-16 fw-600 mb-0">
                                <span class="mr-4">{{ translate('Related Jobs') }}</span>
                            </h3>
                        </div>
                        <div class="p-3">
                            <div class="aiz-carousel gutters-5 half-outside-arrow" data-items="5" data-xl-items="3"
                                data-lg-items="4" data-md-items="3" data-sm-items="2" data-xs-items="2"
                                data-arrows='true' data-infinite='true'>
                                
                                
                                      @foreach ($related_jobs as $job)
                     <div class="carousel-box">
                           <div
                                            class="aiz-card-box border border-light rounded hov-shadow-md my-2 has-transition">
                       <div class="col text-center">
                            <a href="{{ route('job.show', $job->slug) }}" class="d-block">
                                <img
                                    class="img-fit lazyload mx-auto h-140px h-md-210px"
                                    src="{{ static_asset('assets/img/placeholder.jpg') }}"
                                    data-src="{{ uploaded_asset($job->thumbnail) }}"
                                    alt="{{ $job->title}}"
                                    onerror="this.onerror=null;this.src='{{ static_asset('assets/img/placeholder.jpg') }}';"
                                >
                            </a>
                            
                       
                        <div class="p-md-3 p-2 text-center">

                            <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
                                <a href="{{ route('job.show', $job->slug) }}" class="d-block text-reset">{{ $job->title }}</a>
                            </h3>

                         </div>

</div>
                       </div>
                </div>
                    @endforeach
                               </div></div></div></div></section> -->
                               
   <!-- <section class="mb-4  pt-3">
        <div class="container">
                    @if(get_setting('product_query_activation') == 1)
                        <div class="bg-white rounded shadow-sm mt-3">
                            <div class="border-bottom p-3">
                                <h3 class="fs-18 fw-600 mb-0">
                                    <span>{{ translate(' Product Queries ') }} </span>
                                </h3>
                            </div>
                            @guest
                                <p class="fs-14 fw-400 mb-0 ml-3 mt-2"><a
                                        href="{{ route('user.login') }}">{{ translate('Login') }}</a> or <a class="mr-1"
                                        href="{{ route('user.registration') }}">{{ translate('Register ') }}</a>{{ translate(' to submit your questions to seller') }}
                                </p>
                            @endguest
                            @auth
                                <div class="query form p-3">
                                    @if ($errors->any())
                                        <div class="alert alert-danger">
                                            <ul>
                                                @foreach ($errors->all() as $error)
                                                    <li>{{ $error }}</li>
                                                @endforeach
                                            </ul>
                                        </div>
                                    @endif
                                    <form action="{{ route('product-queries.store') }}" method="POST">
                                        @csrf
                                        <input type="hidden" name="job_id" value="{{ $job->id }}">
                                        <div class="form-group">
                                            <textarea class="form-control" rows="3" cols="40" name="question"
                                                placeholder="{{ translate('Write your question here...') }}" style="resize: none;"></textarea>
                                            
                                        </div>
                                        <button type="submit" class="btn btn-primary">{{ translate('Submit') }}</button>
                                    </form>
                                </div>
                                @php
                                    $own_product_queries = Auth::user()->product_queries->where('job_id',$job->id);
                                @endphp
                                @if ($own_product_queries->count() > 0)
                                
                                    <div class="question-area my-4   mb-0 ml-3">

                                        <div class="border-bottom py-3">
                                            <h3 class="fs-18 fw-600 mb-0">
                                                <span class="mr-4">{{ translate('My Questions') }}</span>
                                            </h3>
                                        </div>
                                        @foreach ($own_product_queries as $product_query)
                                            <div class="produc-queries border-bottom">
                                                <div class="query d-flex my-4">
                                                    <span class="mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24.994"
                                                            height="24.981" viewBox="0 0 24.994 24.981">
                                                            <g id="Group_23909" data-name="Group 23909"
                                                                transform="translate(18392.496 11044.037)">
                                                                <path id="Subtraction_90" data-name="Subtraction 90"
                                                                    d="M1830.569-117.742a.4.4,0,0,1-.158-.035.423.423,0,0,1-.252-.446c0-.84,0-1.692,0-2.516v-2.2a5.481,5.481,0,0,1-2.391-.745,5.331,5.331,0,0,1-2.749-4.711c-.034-2.365-.018-4.769,0-7.094l0-.649a5.539,5.539,0,0,1,4.694-5.513,5.842,5.842,0,0,1,.921-.065q3.865,0,7.73,0l5.035,0a5.539,5.539,0,0,1,5.591,5.57c.01,2.577.01,5.166,0,7.693a5.54,5.54,0,0,1-4.842,5.506,6.5,6.5,0,0,1-.823.046l-3.225,0c-1.454,0-2.753,0-3.97,0a.555.555,0,0,0-.435.182c-1.205,1.214-2.435,2.445-3.623,3.636l-.062.062-1.005,1.007-.037.037-.069.069A.464.464,0,0,1,1830.569-117.742Zm7.37-11.235h0l1.914,1.521.817-.754-1.621-1.273a3.517,3.517,0,0,0,1.172-1.487,5.633,5.633,0,0,0,.418-2.267v-.58a5.629,5.629,0,0,0-.448-2.323,3.443,3.443,0,0,0-1.282-1.525,3.538,3.538,0,0,0-1.93-.53,3.473,3.473,0,0,0-1.905.534,3.482,3.482,0,0,0-1.288,1.537,5.582,5.582,0,0,0-.454,2.314v.654a5.405,5.405,0,0,0,.471,2.261,3.492,3.492,0,0,0,1.287,1.5,3.492,3.492,0,0,0,1.9.527,3.911,3.911,0,0,0,.947-.112Zm-.948-.9a2.122,2.122,0,0,1-1.812-.9,4.125,4.125,0,0,1-.652-2.457v-.667a4.008,4.008,0,0,1,.671-2.4,2.118,2.118,0,0,1,1.78-.863,2.138,2.138,0,0,1,1.824.869,4.145,4.145,0,0,1,.639,2.473v.673a4.07,4.07,0,0,1-.655,2.423A2.125,2.125,0,0,1,1836.991-129.881Z"
                                                                    transform="translate(-20217 -10901.814)" fill="#e62e04"
                                                                    stroke="rgba(0,0,0,0)" stroke-miterlimit="10"
                                                                    stroke-width="1" />
                                                            </g>
                                                        </svg></span>

                                                    <div class="ml-3">
                                                        <div class="fs-14">{{ strip_tags($product_query->question) }}</div>
                                                        <span class="text-secondary">{{ $product_query->user->name }} </span>
                                                    </div>
                                                </div>
                                                <div class="answer d-flex my-4">
                                                    <span class="mt-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24.99"
                                                            height="24.98" viewBox="0 0 24.99 24.98">
                                                            <g id="Group_23908" data-name="Group 23908"
                                                                transform="translate(17952.169 11072.5)">
                                                                <path id="Subtraction_89" data-name="Subtraction 89"
                                                                    d="M2162.9-146.2a.4.4,0,0,1-.159-.035.423.423,0,0,1-.251-.446q0-.979,0-1.958V-151.4a5.478,5.478,0,0,1-2.39-.744,5.335,5.335,0,0,1-2.75-4.712c-.034-2.355-.018-4.75,0-7.065l0-.678a5.54,5.54,0,0,1,4.7-5.513,5.639,5.639,0,0,1,.92-.064c2.527,0,5.029,0,7.437,0l5.329,0a5.538,5.538,0,0,1,5.591,5.57c.01,2.708.01,5.224,0,7.692a5.539,5.539,0,0,1-4.843,5.506,6,6,0,0,1-.822.046l-3.234,0c-1.358,0-2.691,0-3.96,0a.556.556,0,0,0-.436.182c-1.173,1.182-2.357,2.367-3.5,3.514l-1.189,1.192-.047.048-.058.059A.462.462,0,0,1,2162.9-146.2Zm5.115-12.835h3.559l.812,2.223h1.149l-3.25-8.494h-.98l-3.244,8.494h1.155l.8-2.222Zm3.226-.915h-2.888l1.441-3.974,1.447,3.972Z"
                                                                    transform="translate(-20109 -10901.815)" fill="#f7941d"
                                                                    stroke="rgba(0,0,0,0)" stroke-miterlimit="10"
                                                                    stroke-width="1" />
                                                            </g>
                                                        </svg></span>

                                                    <div class="ml-3">
                                                        <div class="fs-14">
                                                            {{ strip_tags($product_query->reply ? $product_query->reply : translate('Seller did not respond yet')) }}
                                                        </div>
                                                        <span class=" text-secondary">
                                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>
                                
                                @endif
                            @endauth

                            <div class="pagination-area my-4 mb-0 ml-3">
                                @include('frontend.partials.product_query_pagination')
                            </div>
                        </div>
                    @endif
                    {{-- End of Product Query --}}
 </div></section> -->




<!-- @endsection
@section('modal')
    <div class="modal fade" id="chat_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-zoom product-modal" id="modal-size" role="document">
            <div class="modal-content position-relative">
                <div class="modal-header">
                    <h5 class="modal-title fw-600 h5">{{ translate('Any query about this job')}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form class="" action="{{ route('jobstore') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <input type="hidden" name="job_id" value="{{ $job->id }}">
                    <div class="modal-body gry-bg px-3 pt-3">
                        <div class="form-group">
                            <input type="text" class="form-control mb-3" name="title" value="{{ $job->title }}" placeholder="{{ translate('Job Name') }}" required>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="8" name="message" required placeholder="{{ translate('Your Question') }}">{{ route('job.show', $job->slug) }}</textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-primary fw-600" data-dismiss="modal">{{ translate('Cancel')}}</button>
                        <button type="submit" class="btn btn-primary fw-600">{{ translate('Send')}}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    
      <div class="modal fade" id="apply_confirm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-zoom product-modal" id="modal-size" role="document">
            <div class="modal-content position-relative">
                <div class="modal-header">
                    <h5 class="modal-title fw-600 h5">Are sure to Apply ??</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
              
                
                @if(Auth::user())
                <form action="{{route('job.apply')}}" method="get">
                    @csrf
                        <input type="hidden" name="job_id" value="{{$job->id}}">
                        <input type="hidden" name="user_id" value="{{Auth::user()->id}}">
                            <div class="modal-body gry-bg px-3 pt-3">
                                <h3>{{$job->title}}</h3>
                            </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-primary fw-600" data-dismiss="modal">{{ translate('Cancel')}}</button>
                        <button type="submit" class="btn btn-primary fw-600">Apply </button>
                    </div>
                </form>
                @endif
            </div>
        </div>
    </div> -->
    

    <!-- Modal -->
    <!-- <div class="modal fade" id="login_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-zoom" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title fw-600">{{ translate('Login')}}</h6>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="p-3">
                        <form class="form-default" role="form" action="{{ route('cart.login.submit') }}" method="POST">
                            @csrf
                            <div class="form-group">
                                @if (addon_is_activated('otp_system'))
                                    <input type="text" class="form-control h-auto form-control-lg {{ $errors->has('email') ? ' is-invalid' : '' }}" value="{{ old('email') }}" placeholder="{{ translate('Email Or Phone')}}" name="email" id="email">
                                @else
                                    <input type="email" class="form-control h-auto form-control-lg {{ $errors->has('email') ? ' is-invalid' : '' }}" value="{{ old('email') }}" placeholder="{{  translate('Email') }}" name="email">
                                @endif
                                @if (addon_is_activated('otp_system'))
                                    <span class="opacity-60">{{  translate('Use country code before number') }}</span>
                                @endif
                            </div>

                            <div class="form-group">
                                <input type="password" name="password" class="form-control h-auto form-control-lg" placeholder="{{ translate('Password')}}">
                            </div>

                            <div class="row mb-2">
                                <div class="col-6">
                                    <label class="aiz-checkbox">
                                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}>
                                        <span class=opacity-60>{{  translate('Remember Me') }}</span>
                                        <span class="aiz-square-check"></span>
                                    </label>
                                </div>
                                <div class="col-6 text-right">
                                    <a href="{{ route('password.request') }}" class="text-reset opacity-60 fs-14">{{ translate('Forgot password?')}}</a>
                                </div>
                            </div>

                            <div class="mb-5">
                                <button type="submit" class="btn btn-primary btn-block fw-600">{{  translate('Login') }}</button>
                            </div>
                        </form>

                        <div class="text-center mb-3">
                            <p class="text-muted mb-0">{{ translate('Dont have an account?')}}</p>
                            <a href="{{ route('user.registration') }}">{{ translate('Register Now')}}</a>
                        </div>
                        @if(get_setting('google_login') == 1 ||
                            get_setting('facebook_login') == 1 ||
                            get_setting('twitter_login') == 1)
                            <div class="separator mb-3">
                                <span class="bg-white px-3 opacity-60">{{ translate('Or Login With')}}</span>
                            </div>
                            <ul class="list-inline social colored text-center mb-5">
                                @if (get_setting('facebook_login') == 1)
                                    <li class="list-inline-item">
                                        <a href="{{ route('social.login', ['provider' => 'facebook']) }}" class="facebook">
                                            <i class="lab la-facebook-f"></i>
                                        </a>
                                    </li>
                                @endif
                                @if(get_setting('google_login') == 1)
                                    <li class="list-inline-item">
                                        <a href="{{ route('social.login', ['provider' => 'google']) }}" class="google">
                                            <i class="lab la-google"></i>
                                        </a>
                                    </li>
                                @endif
                                @if (get_setting('twitter_login') == 1)
                                    <li class="list-inline-item">
                                        <a href="{{ route('social.login', ['provider' => 'twitter']) }}" class="twitter">
                                            <i class="lab la-twitter"></i>
                                        </a>
                                    </li>
                                @endif
                            </ul>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script>
import axios from "axios";
    export default {
        props:['slug'],
        data(){
        return{
            jobInfo:[],
        }
        },
        mounted(){
            this.getInfo(this.rootDomain);
        },
        methods:{
          getInfo(){
            axios.get(this.rootDomain+'vue/v3/job/'+this.slug)
            .then((response)=>{
                this.jobInfo = response.data.data[0];
            })
            .catch((error)=>{
                console.log(error);
            });
          }
        }
}
</script>

<style>

</style>