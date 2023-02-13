<template>



    <section class="pt-5 mb-4">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 mx-auto">
                    <div class="row aiz-steps arrow-divider">
                        <div class="col active">
                            <div class="text-center text-primary">
                                <i class="la-3x mb-2 las la-shopping-cart"></i>
                                <h3 class="fs-14 fw-600 d-none d-lg-block">{{'1. My Cart' }}</h3>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-center">
                                <i class="la-3x mb-2 opacity-50 las la-map"></i>
                                <h3 class="fs-14 fw-600 d-none d-lg-block opacity-50">{{ '2. Shipping info' }}
                                </h3>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-center">
                                <i class="la-3x mb-2 opacity-50 las la-truck"></i>
                                <h3 class="fs-14 fw-600 d-none d-lg-block opacity-50">{{ '3. Delivery info' }}
                                </h3>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-center">
                                <i class="la-3x mb-2 opacity-50 las la-credit-card"></i>
                                <h3 class="fs-14 fw-600 d-none d-lg-block opacity-50">{{ '4. Payment' }}</h3>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-center">
                                <i class="la-3x mb-2 opacity-50 las la-check-circle"></i>
                                <h3 class="fs-14 fw-600 d-none d-lg-block opacity-50">{{ '5. Confirmation' }}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
    <section class="mb-4" id="cart-summary">
        <div class="container">
            <div v-if="preLoader" class="c-preloader text-center p-3" style="height: 100%; width: 100%; text-align: center; font-size: 30px;">
                <i class="las la-spinner la-spin la-3x"></i>
            </div>
                <div v-if="carts.length > 0" class="row">
                    <div class="col-xxl-8 col-xl-10 mx-auto">
                        <div class="shadow-sm bg-white p-3 p-lg-4 rounded text-left">
                            <div class="mb-4">
                                <div class="row gutters-5 d-none d-lg-flex border-bottom mb-3 pb-3">
                                    <div class="col-md-5 fw-600">{{ 'Product' }}</div>
                                    <div class="col fw-600">{{ 'Price' }}</div>
                                    <div class="col fw-600">{{ 'Tax' }}</div>
                                    <div class="col fw-600">{{ 'Quantity' }}</div>
                                    <div class="col fw-600">{{ 'Total' }}</div>
                                    <div class="col-auto fw-600">{{ 'Remove'}}</div>
                                </div>
                                <ul class="list-group list-group-flush">
                                  
                         
                                      
                                        <li v-for="(item, index) in carts" :key="index" class="list-group-item px-0 px-lg-3">
                                            <div class="row gutters-5">
                                                <div class="col-lg-5 d-flex">
                                                    <span class="mr-2 ml-0">
                                                        <img :src="item.productData.data[0].thumbnail_image"
                                                            class="img-fit size-60px rounded"
                                                            :alt="item.productData.data[0].name">
                                                    </span>
                                                    <span class="fs-14 opacity-60">{{ item.product_name_with_choice }}</span>
                                                </div>

                                                <div class="col-lg col-4 order-1 order-lg-0 my-3 my-lg-0">
                                                    <span
                                                        class="opacity-60 fs-12 d-block d-lg-none">{{ 'Price' }}</span>
                                                    <span
                                                        class="fw-600 fs-16">{{ item.cart_product_price }}</span>
                                                </div>
                                                <div class="col-lg col-4 order-2 order-lg-0 my-3 my-lg-0">
                                                    <span
                                                        class="opacity-60 fs-12 d-block d-lg-none">{{ 'Tax' }}</span>
                                                    <span
                                                        class="fw-600 fs-16">{{ item.cart_product_tax }}</span>
                                                </div>

                                                <div class="col-lg col-6 order-4 order-lg-0">
                                                  
                                                        <div v-if="item.digital != 1 && item.productData.data[0].auction_product == 0"
                                                            class="row no-gutters align-items-center aiz-plus-minus mr-2 ml-0">
                                                            <button
                                                                class="btn col-auto btn-icon btn-sm btn-circle btn-light"
                                                                type="button" data-type="minus"
                                                                @click="decresQuantity(index)"
                                                                :data-field="'quantity'+item.id">
                                                                <i class="las la-minus"></i>
                                                            </button>
                                                            <input type="number" :name="'quantity'+item.id"
                                                                class="col border-0 text-center flex-grow-1 fs-16 input-number"
                                                                :id="'quantity'+index"
                                                                @change="setQuantity(index)"
                                                                placeholder="1" :value="item.quantity"
                                                                :min="item.productData.data[0].min_qty"
                                                                :max="item.product_stock">
                                                            <button
                                                                class="btn col-auto btn-icon btn-sm btn-circle btn-light"
                                                                type="button" data-type="plus"
                                                                @click="incresQuantity(index)"
                                                                :data-field="'quantity'+item.id">
                                                                <i class="las la-plus"></i>
                                                            </button>
                                                        </div>
                                                        <span v-else-if="item.productData.data[0].auction_product == 1" class="fw-600 fs-16">1</span>
                                                </div>
                                                <div class="col-lg col-4 order-3 order-lg-0 my-3 my-lg-0">
                                                    <span
                                                        class="opacity-60 fs-12 d-block d-lg-none">{{ 'Total' }}</span>
                                                    <span
                                                        class="fw-600 fs-16 text-primary">{{ item.single_price }}</span>
                                                </div>
                                                <div class="col-lg-auto col-6 order-5 order-lg-0 text-right">
                                                    <a @click="removeFromCart(item.id)" href="javascript:void(0)"
                                                        class="btn btn-icon btn-sm btn-soft-primary btn-circle">
                                                        <i class="las la-trash"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                  
                                </ul>
                            </div>

                            <div class="px-3 py-2 mb-4 border-top d-flex justify-content-between">
                                <span class="opacity-60 fs-15">{{ 'Subtotal' }}</span>
                                <span class="fw-600 fs-17">{{ total }}</span>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-md-6 text-center text-md-left order-1 order-md-0">
                                    <a href="javascript:void(0)" class="btn btn-link">
                                        <i class="las la-arrow-left"></i>
                                        {{ 'Return to shop' }}
                                    </a>
                                </div>
                                <div class="col-md-6 text-center text-md-right">
                                  
                                        <a v-if="auth.isAuthenticated" href="javascript:void(0)" class="btn btn-primary fw-600">
                                            {{ 'Continue to Shipping' }}
                                        </a>
                                  
                                        <button v-else class="btn btn-primary fw-600"
                                            onclick="showCheckoutModal()">{{ 'Continue to Shipping' }}</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div v-if="cartIsEmpty" class="row">
                    <div class="col-xl-8 mx-auto">
                        <div class="shadow-sm bg-white p-4 rounded">
                            <div class="text-center p-3">
                                <i class="las la-frown la-3x opacity-60 mb-3"></i>
                                <h3 class="h4 fw-700">{{ 'Your Cart is empty' }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    </section>

   <!--
@endsection

@section('modal')
    <div class="modal fade" id="login-modal">
        <div class="modal-dialog modal-dialog-zoom">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title fw-600">{{ translate('Login') }}</h6>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="p-3">
                        <form class="form-default" role="form" action="{{ route('cart.login.submit') }}" method="POST">
                            @csrf
                            @if (addon_is_activated('otp_system') && env('DEMO_MODE') != 'On')
                                <div class="form-group phone-form-group mb-1">
                                    <input type="tel" id="phone-code"
                                        class="form-control{{ $errors->has('phone') ? ' is-invalid' : '' }}"
                                        value="{{ old('phone') }}" placeholder="" name="phone" autocomplete="off">
                                </div>

                                <input type="hidden" name="country_code" value="">

                                <div class="form-group email-form-group mb-1 d-none">
                                    <input type="email"
                                        class="form-control {{ $errors->has('email') ? ' is-invalid' : '' }}"
                                        value="{{ old('email') }}" placeholder="{{ translate('Email') }}" name="email"
                                        id="email" autocomplete="off">
                                    @if ($errors->has('email'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                    @endif
                                </div>

                                <div class="form-group text-right">
                                    <button class="btn btn-link p-0 opacity-50 text-reset" type="button"
                                        onclick="toggleEmailPhone(this)">{{ translate('Use Email Instead') }}</button>
                                </div>
                            @else
                                <div class="form-group">
                                    <input type="email"
                                        class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}"
                                        value="{{ old('email') }}" placeholder="{{ translate('Email') }}" name="email"
                                        id="email" autocomplete="off">
                                    @if ($errors->has('email'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            @endif

                            <div class="form-group">
                                <input type="password"
                                    class="form-control {{ $errors->has('password') ? ' is-invalid' : '' }}"
                                    placeholder="{{ translate('Password') }}" name="password" id="password">
                            </div>

                            <div class="row mb-2">
                                <div class="col-6">
                                    <label class="aiz-checkbox">
                                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}>
                                        <span class=opacity-60>{{ translate('Remember Me') }}</span>
                                        <span class="aiz-square-check"></span>
                                    </label>
                                </div>
                                <div class="col-6 text-right">
                                    <a href="{{ route('password.request') }}"
                                        class="text-reset opacity-60 fs-14">{{ translate('Forgot password?') }}</a>
                                </div>
                            </div>

                            <div class="mb-5">
                                <button type="submit"
                                    class="btn btn-primary btn-block fw-600">{{ translate('Login') }}</button>
                            </div>
                        </form>

                    </div>
                    <div class="text-center mb-3">
                        <p class="text-muted mb-0">{{ translate('Dont have an account?') }}</p>
                        <a href="{{ route('user.registration') }}">{{ translate('Register Now') }}</a>
                    </div>
                    @if (get_setting('google_login') == 1 || get_setting('facebook_login') == 1 || get_setting('twitter_login') == 1)
                        <div class="separator mb-3">
                            <span class="bg-white px-3 opacity-60">{{ translate('Or Login With') }}</span>
                        </div>
                        <ul class="list-inline social colored text-center mb-3">
                            @if (get_setting('facebook_login') == 1)
                                <li class="list-inline-item">
                                    <a href="{{ route('social.login', ['provider' => 'facebook']) }}"
                                        class="facebook">
                                        <i class="lab la-facebook-f"></i>
                                    </a>
                                </li>
                            @endif
                            @if (get_setting('google_login') == 1)
                                <li class="list-inline-item">
                                    <a href="{{ route('social.login', ['provider' => 'google']) }}"
                                        class="google">
                                        <i class="lab la-google"></i>
                                    </a>
                                </li>
                            @endif
                            @if (get_setting('twitter_login') == 1)
                                <li class="list-inline-item">
                                    <a href="{{ route('social.login', ['provider' => 'twitter']) }}"
                                        class="twitter">
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
@endsection



@section('script')
    <script type="text/javascript">
        function removeFromCartView(e, key) {
            e.preventDefault();
            removeFromCart(key);
        }

        function updateQuantity(key, element) {
            $.post('{{ route('cart.updateQuantity') }}', {
                _token: AIZ.data.csrf,
                id: key,
                quantity: element.value
            }, function(data) {
                updateNavCart(data.nav_cart_view, data.cart_count);
                $('#cart-summary').html(data.cart_view);
            });
        }

        function showCheckoutModal() {
            $('#login-modal').modal();
        }

        // Country Code
        var isPhoneShown = true,
            countryData = window.intlTelInputGlobals.getCountryData(),
            input = document.querySelector("#phone-code");

        for (var i = 0; i < countryData.length; i++) {
            var country = countryData[i];
            if (country.iso2 == 'bd') {
                country.dialCode = '88';
            }
        }

        var iti = intlTelInput(input, {
            separateDialCode: true,
            utilsScript: "{{ static_asset('assets/js/intlTelutils.js') }}?1590403638580",
            onlyCountries: @php echo json_encode(\App\Models\Country::where('status', 1)->pluck('code')->toArray()) @endphp,
            customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
                if (selectedCountryData.iso2 == 'bd') {
                    return "01xxxxxxxxx";
                }
                return selectedCountryPlaceholder;
            }
        });

        var country = iti.getSelectedCountryData();
        $('input[name=country_code]').val(country.dialCode);

        input.addEventListener("countrychange", function(e) {
            // var currentMask = e.currentTarget.placeholder;

            var country = iti.getSelectedCountryData();
            $('input[name=country_code]').val(country.dialCode);

        });

        function toggleEmailPhone(el) {
            if (isPhoneShown) {
                $('.phone-form-group').addClass('d-none');
                $('.email-form-group').removeClass('d-none');
                $('input[name=phone]').val(null);
                isPhoneShown = false;
                $(el).html('{{ translate('Use Phone Instead') }}');
            } else {
                $('.phone-form-group').removeClass('d-none');
                $('.email-form-group').addClass('d-none');
                $('input[name=email]').val(null);
                isPhoneShown = true;
                $(el).html('{{ translate('Use Email Instead') }}');
            }
        }
    </script>
@endsection 
-->
<!-- <h1>OKKKK</h1> -->
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
        carts: [],
        total: 0,
        preLoader: true,
        cartIsEmpty: false,
      }
    },
    created(){
        var user = localStorage.getItem("user");
        if(user !== null){
            user = JSON.parse(user);
            this.auth.isAuthenticated = true;
            this.auth.user = user;
        }
        this.getCart();
    },
    computed(){
      
    },
    mounted(){
      
    },
    methods:{
        getCart(){
            
            var token = "";
            var temp_user = "";
            if(this.auth.isAuthenticated==true){
                token = this.auth.user.access_token;
            }else{
                var temp_user = localStorage.getItem("temp_user");
                if(!temp_user) temp_user = "";
            }


            this.preLoader = true;
            axios.get(this.rootDomain+'vueweb/cart', {
                params: {
                    token: token,
                    temp_user: temp_user,
                }
            }).then(res=>{
                this.preLoader = false;
                console.log(res.data);
                this.carts = res.data.carts;
                this.total = res.data.total;
                if(!this.carts.length)
                    this.cartIsEmpty = true;

            }).catch(err=>{

            });

        },

        removeFromCart(key){
            axios.get(this.rootDomain+'vueweb/cart/removeFromCart', {
                params: {
                    id:key
                }
            }).then(res=>{
                this.emitter.emit("reload", true);
                this.getCart();
            }).catch(err=>{
                
            });

        },


        updateQuantity(index) {
            var token = "";
            var temp_user = "";
            if(this.auth.isAuthenticated==true){
                token = this.auth.user.access_token;
            }else{
                var temp_user = localStorage.getItem("temp_user");
                if(!temp_user) temp_user = "";
            }
            axios.get(this.rootDomain+'vueweb/cart/updateQuantity', {
                params: {
                    token: token,
                    temp_user: temp_user,
                    id: this.carts[index].id,
                    quantity: this.carts[index].quantity,
                }
            }).then(res=>{
                console.log("okkkk");
                console.log(res.data);
                this.carts[index].single_price = "৳"+(this.carts[index].quantity * res.data);
            }).catch(err=>{

            });
        },

        incresQuantity(index){
            this.carts[index].quantity = this.carts[index].quantity + 1;
            if( this.carts[index].quantity > this.carts[index].product_stock)  
                this.carts[index].quantity = this.carts[index].product_stock;
          
            this.updateQuantity(index);
        },
        decresQuantity(index){
           console.log(this.carts[index].quantity);
            this.carts[index].quantity = this.carts[index].quantity - 1;
            if( this.carts[index].quantity < 1)  
                this.carts[index].quantity = 1;
            this.updateQuantity(index);
        },
        setQuantity(index){
            let qty = $("#quantity"+index).val();
            if(qty<1) qty = 1;
            if(qty > this.carts[index].product_stock) 
                qty = this.carts[index].product_stock;
            this.carts[index].quantity = qty;
            this.updateQuantity(index);
        },
    }
  }
  </script>
  
  <style>
  
  </style>