<template>
     <section class="mb-4 pt-5">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 mx-auto">
                    <div class="row aiz-steps arrow-divider">
                        <div class="col done">
                            <div class="text-success text-center">
                                <i class="la-3x las la-shopping-cart mb-2"></i>
                                <h3 class="fs-14 fw-600 d-none d-lg-block">{{ '1. My Cart' }}</h3>
                            </div>
                        </div>
                        <div class="col done">
                            <div class="text-success text-center">
                                <i class="la-3x las la-map mb-2"></i>
                                <h3 class="fs-14 fw-600 d-none d-lg-block">{{ '2. Shipping info' }}</h3>
                            </div>
                        </div>
                        <div class="col done">
                            <div class="text-success text-center">
                                <i class="la-3x las la-truck mb-2"></i>
                                <h3 class="fs-14 fw-600 d-none d-lg-block">{{ '3. Delivery info' }}</h3>
                            </div>
                        </div>
                        <div class="col active">
                            <div class="text-primary text-center">
                                <i class="la-3x las la-credit-card mb-2"></i>
                                <h3 class="fs-14 fw-600 d-none d-lg-block">{{ '4. Payment' }}</h3>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-center">
                                <i class="la-3x las la-check-circle mb-2 opacity-50"></i>
                                <h3 class="fs-14 fw-600 d-none d-lg-block opacity-50">{{ '5. Confirmation' }}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  <section v-if="data != null" class="mb-4">
        <div class="container text-left">
            <div class="row">
                <div class="col-lg-8">
                    <form class="form-default" role="form" id="checkout-form">
                        <input type="hidden" name="owner_id" :value="data.carts[0]['owner_id']">


                        <div class="card rounded border-0 shadow-sm">
                            <div class="card-header p-3">
                                <h3 class="fs-16 fw-600 mb-0">
                                    {{ 'Any additional info?' }}
                                </h3>
                            </div>
                            <div class="form-group px-3 pt-3">
                                <textarea name="additional_info" rows="5" class="form-control"
                                    placeholder="{{ 'Type your text' }}"></textarea>
                            </div>

                            <div class="card-header p-3">
                                <h3 class="fs-16 fw-600 mb-0">
                                    {{ 'Select a payment option' }}
                                </h3>
                            </div>
                            <div class="card-body text-center">
                                <div class="row">
                                    <div class="col-xxl-8 col-xl-10 mx-auto">
                                        <div class="row gutters-10">
                                                <div v-if="data.paypal_payment == 1" class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="paypal" @click="online_payment()" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img :src="data.paypal_payment_img"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{'Paypal' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            
                                                <div v-if="data.stripe_payment == 1" class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="stripe" @click="online_payment()" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img :src="data.stripe_payment_img"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Stripe' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            
                                                <div v-if="data.mercadopago_payment == 1" class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="mercadopago" @click="online_payment()" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img :src="data.mercadopago_payment_img"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Mercadopago' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div v-if="data.sslcommerz_payment==1" class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="sslcommerz" @click="online_payment()" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img :src="data.sslcommerz_payment_img"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'sslcommerz' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div v-if="data.instamojo_payment == 1" class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="instamojo" @click="online_payment()" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img :src="data.instamojo_payment_img"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Instamojo' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div v-if="data.razorpay == 1" class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="razorpay" @click="online_payment()" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img :src="data.razorpay_img"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Razorpay' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            
                                                <div v-if="data.paystack==1" class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="paystack" @click="online_payment()" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img :src="data.paystack_img"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Paystack' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div v-if="data.voguepay == 1" class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="voguepay" @click="online_payment()" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img :src="data.voguepay_img"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'VoguePay' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            
                                                <div v-if="data.payhere==1" class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="payhere" @click="online_payment()" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img :src="data.payhere_img"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'payhere' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div v-if="data.ngenius==1" class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="ngenius" @click="online_payment()" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img :src="data.ngenius_img"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'ngenius' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                           
                                                <div v-if="data.iyzico==1" class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="iyzico" @click="online_payment()" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img :src="data.iyzico_img"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Iyzico' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                           
                                                <div v-if="data.nagad == 1" class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="nagad" @click="online_payment()" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img :src="data.nagad_img"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Nagad' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            
                                                <div v-if="data.bkash==1" class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="bkash" @click="online_payment()" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img :src="data.bkash_img"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Bkash' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            
                                                <div v-if="data.aamarpay==1" class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="aamarpay" @click="online_payment()" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img :src="data.aamarpay_img"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Aamarpay' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div v-if="data.authorizenet==1" class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="authorizenet" @click="online_payment()" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img :rc="data.authorizenet_img"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Authorize Net' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                           
                                                <div v-if="data.payku == 1" class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="payku" @click="online_payment()" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img :src="data.payku_img"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Payku' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            <template v-if="data.african_pg">
                                                    <div v-if="data.mpesa == 1" class="col-6 col-md-4">
                                                        <label class="aiz-megabox d-block mb-3">
                                                            <input value="mpesa" @click="online_payment()" class="online_payment" type="radio"
                                                                name="payment_option" checked>
                                                            <span class="d-block aiz-megabox-elem p-3">
                                                                <img :src="data.mpesa_img"
                                                                    class="img-fluid mb-2">
                                                                <span class="d-block text-center">
                                                                    <span
                                                                        class="d-block fw-600 fs-15">{{ 'mpesa' }}</span>
                                                                </span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div v-if="data.flutterwave == 1" class="col-6 col-md-4">
                                                        <label class="aiz-megabox d-block mb-3">
                                                            <input value="flutterwave" @click="online_payment()" class="online_payment" type="radio"
                                                                name="payment_option" checked>
                                                            <span class="d-block aiz-megabox-elem p-3">
                                                                <img :src="data.flutterwave_img"
                                                                    class="img-fluid mb-2">
                                                                <span class="d-block text-center">
                                                                    <span
                                                                        class="d-block fw-600 fs-15">{{ 'flutterwave' }}</span>
                                                                </span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div v-if="data.payfast == 1" class="col-6 col-md-4">
                                                        <label class="aiz-megabox d-block mb-3">
                                                            <input value="payfast" @click="online_payment()" class="online_payment" type="radio"
                                                                name="payment_option" checked>
                                                            <span class="d-block aiz-megabox-elem p-3">
                                                                <img :src="data.payfast_img"
                                                                    class="img-fluid mb-2">
                                                                <span class="d-block text-center">
                                                                    <span
                                                                        class="d-block fw-600 fs-15">{{ 'payfast' }}</span>
                                                                </span>
                                                            </span>
                                                        </label>
                                                    </div>
                                            </template>
                                                <div v-if="data.paytm && data.paytm_payment == 1" class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="paytm" @click="online_payment()" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img :src="data.paytm_payment_img"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Paytm' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>

                                                <div v-if="data.paytm && data.toyyibpay_payment==1 " class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="toyyibpay" @click="online_payment()"  class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img :src="data.toyyibpay_payment_img"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'ToyyibPay' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>

                                                
                                                    <div v-if="data.cash_payment == 1 && data.digital == 0 && data.cod_on == 1" class="col-6 col-md-4">
                                                        <label class="aiz-megabox d-block mb-3">
                                                            <input value="cash_on_delivery" @click="online_payment()" class="online_payment"
                                                                type="radio" name="payment_option" checked>
                                                            <span class="d-block aiz-megabox-elem p-3">
                                                                <img :src="data.cod_on_img"
                                                                    class="img-fluid mb-2">
                                                                <span class="d-block text-center">
                                                                    <span
                                                                        class="d-block fw-600 fs-15">{{ 'Cash on Delivery' }}</span>
                                                                </span>
                                                            </span>
                                                        </label>
                                                    </div>
                                              
                                            <template v-if="auth.isAuthenticated && data.offline_payment">
                                                        <div v-for="(method,index) in data.manualPaymentMethods" :key="index" class="col-6 col-md-4">
                                                            
                                                            <label class="aiz-megabox d-block mb-3">
                                                                <input :value="method.heading" type="radio"
                                                                    @change="toggleManualPaymentData(method.id)"
                                                                    name="payment_option" class="offline_payment_option"
                                                                    :data-id="method.id" checked>
                                                                <span class="d-block aiz-megabox-elem p-3">
                                                                    <img :src="method.photo"
                                                                        class="img-fluid mb-2">
                                                                    <span class="d-block text-center">
                                                                        <span
                                                                            class="d-block fw-600 fs-15">{{ method.heading }}</span>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </div>

                                                    
                                                        <div v-for="(method,index) in data.manualPaymentMethods" :key="index" :id="'manual_payment_info_'+method.id" class="d-none">
                                                            {{method.description}}
                                                            
                                                                <ul v-if="method.bank_info != null">
                                                                        <li v-for="(info, index) in method.bank_info" :key="index">{{'Bank Name' }} -
                                                                            {{ info.bank_name }},
                                                                            {{ 'Account Name' }} -
                                                                            {{ info.account_name }},
                                                                            {{ 'Account Number' }} -
                                                                            {{ info.account_number }},
                                                                            {{ 'Routing Number' }} -
                                                                            {{ info.routing_number }}
                                                                        </li>
                                                                </ul>
                                                            
                                                        </div>
                                            </template>
                                        </div>
                                    </div>
                                </div>

                                    <div v-if="data.offline_payment" class="d-none mb-3 rounded border bg-white p-3 text-left">
                                        <div id="manual_payment_description">


                                        </div>
                                        <br>
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label> Transaction ID  <span class="text-danger">*</span></label>
                                            </div>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control mb-3" name="trx_id" id="trx_id" placeholder="{{ 'Transaction ID' }}" required>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-md-3 col-form-label">Photo</label>
                                            <div class="col-md-9">
                                                <div class="input-group" data-toggle="aizuploader" data-type="image">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text bg-soft-secondary font-weight-medium">{{ 'Browse'}}</div>
                                                    </div>
                                                    <div class="form-control file-amount">{{ 'Choose image' }}</div>
                                                    <input type="hidden" id="photo" name="photo" class="selected-files">
                                                </div>
                                                <div class="file-preview box sm">


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <template v-if="auth.isAuthenticated && data.wallet_system == 1">
                                    <div class="separator mb-3">
                                        <span class="bg-white px-3">
                                            <span class="opacity-60">{{ 'Or' }}</span>
                                        </span>
                                    </div>
                                    <div class="py-4 text-center">
                                        <div class="h6 mb-3">
                                            <span class="opacity-80">{{ 'Your wallet balance :' }}</span>
                                            <span
                                                class="fw-600">{{ data.user_balance_single_price }}</span>
                                        </div>
                                            <button v-if="data.user_balance < data.total" type="button" class="btn btn-secondary" disabled>
                                                {{ 'Insufficient balance' }}
                                            </button>
                                            <button v-else type="button"  class="btn btn-primary fw-600">
                                                {{ 'Pay with wallet' }}
                                            </button>
                                    </div>
                                </template>
                            </div>
                        </div>
                        <div class="pt-3">
                            <label class="aiz-checkbox">
                                <input type="checkbox" required id="agree_checkbox">
                                <span class="aiz-square-check"></span>
                                <span>{{ 'I agree to the' }}</span>
                            </label>
                            <a href="">{{'terms and conditions' }}</a>,
                            <a href="">{{ 'return policy' }}</a> &
                            <a href="">{{ 'privacy policy' }}</a>
                        </div>

                        <div class="row align-items-center pt-3">
                            <div class="col-6">
                                <router-link :to="{name: 'home'}" class="link link--style-3">
                                    <i class="las la-arrow-left"></i>
                                    {{ 'Return to shop' }}
                                </router-link>
                            </div>
                            <div class="col-6 text-right">
                                <button id="complete_order" @click="submitOrder()" type="button" class="btn btn-primary fw-600">{{ 'Complete Order' }}</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="col-lg-4 mt-lg-0 mt-4" id="cart_summary">
                    <div class="card rounded border-0 shadow-sm">


                            <div class="card-header">
                                <h3 class="fs-16 fw-600 mb-0">{{ 'Summary' }}</h3>
                                <div class="text-right">
                                    <span class="badge badge-inline badge-primary">
                                        {{ data.carts.length }}
                                        {{ 'Items' }}
                                    </span>
                                    <!-- @php
                                        $coupon_discount = 0;
                                    @endphp
                                    @if (Auth::check() && get_setting('coupon_system') == 1)
                                        @php
                                            $coupon_code = null;
                                        @endphp

                                        @foreach ($carts as $key => $cartItem)
                                            @php
                                                $product = \App\Models\Product::find($cartItem['product_id']);
                                            @endphp
                                            @if ($cartItem->coupon_applied == 1)
                                                @php
                                                    $coupon_code = $cartItem->coupon_code;
                                                    break;
                                                @endphp
                                            @endif
                                        @endforeach

                                        @php
                                            $coupon_discount = carts_coupon_discount($coupon_code);
                                        @endphp
                                    @endif

                                    @php $subtotal_for_min_order_amount = 0; @endphp
                                    @foreach ($carts as $key => $cartItem)
                                        @php $subtotal_for_min_order_amount += cart_product_price($cartItem, $cartItem->product, false, false) * $cartItem['quantity']; @endphp
                                    @endforeach -->

                                        <span v-if="data.minimum_order_amount_check == 1 && data.subtotal < data.minimum_order_amount" class="badge badge-inline badge-primary">
                                            {{ 'Minimum Order Amount' + ' ' + data.minimum_order_amount_single_price }}
                                        </span>
                                </div>
                            </div>

                            <div class="card-body">
                                <!-- @if (addon_is_activated('club_point'))
                                    @php
                                        $total_point = 0;
                                    @endphp
                                    @foreach ($carts as $key => $cartItem)
                                        @php
                                            $product = \App\Models\Product::find($cartItem['product_id']);
                                            $total_point += $product->earn_point * $cartItem['quantity'];
                                        @endphp
                                    @endforeach -->

                                    <div v-if="data.club_point" class="bg-soft-primary border-soft-primary mb-2 rounded border px-2">
                                        {{ 'Total Club point' }}:
                                        <span class="fw-700 float-right">{{ data.total_point }}</span>
                                    </div>
                                <!-- @endif -->
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="product-name">{{ 'Product' }}</th>
                                            <th class="product-total text-right">{{ 'Total' }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- @php
                                            $subtotal = 0;
                                            $tax = 0;
                                            $shipping = 0;
                                            $product_shipping_cost = 0;
                                            $shipping_region = $shipping_info['city'];
                                        @endphp
                                        @foreach ($carts as $key => $cartItem)
                                            @php
                                                $product = \App\Models\Product::find($cartItem['product_id']);
                                                $subtotal += cart_product_price($cartItem, $product, false, false) * $cartItem['quantity'];
                                                $tax += cart_product_tax($cartItem, $product, false) * $cartItem['quantity'];
                                                $product_shipping_cost = $cartItem['shipping_cost'];
                                                
                                                $shipping += $product_shipping_cost;
                                                
                                                $product_name_with_choice = $product->getTranslation('name');
                                                if ($cartItem['variant'] != null) {
                                                    $product_name_with_choice = $product->getTranslation('name') . ' - ' . $cartItem['variant'];
                                                }
                                            @endphp -->
                                            <tr v-for="(cartItem, index) in data.carts" :key="index" class="cart_item">
                                                <td class="product-name">
                                                    {{ cartItem.product_name_with_choice }}
                                                    <strong class="product-quantity">
                                                        × {{ cartItem.quantity }}
                                                    </strong>
                                                </td>
                                                <td class="product-total text-right">
                                                    <span
                                                        class="pl-4 pr-0">{{ cartItem.cart_product_single_price }}</span>
                                                </td>
                                            </tr>
                                    </tbody>
                                </table>
                                <input type="hidden" id="sub_total" :value="data.subtotal">
                                <table class="table">

                                    <tfoot>
                                        <tr class="cart-subtotal">
                                            <th>{{ 'Subtotal' }}</th>
                                            <td class="text-right">
                                                <span class="fw-600">{{ data.subtotal_single_price }}</span>
                                            </td>
                                        </tr>

                                        <tr class="cart-shipping">
                                            <th>{{ 'Tax' }}</th>
                                            <td class="text-right">
                                                <span class="font-italic">{{ data.tax_single_price }}</span>
                                            </td>
                                        </tr>

                                        <tr class="cart-shipping">
                                            <th>{{ 'Total Shipping' }}</th>
                                            <td class="text-right">
                                                <span class="font-italic">{{ data.shipping_single_price }}</span>
                                            </td>
                                        </tr>

                                      
                                            <tr v-if="club_point" class="cart-shipping">
                                                <th>{{ 'Redeem point' }}</th>
                                                <td class="text-right">
                                                    <span class="font-italic">{{ club_point }}</span>
                                                </td>
                                            </tr>

                                            <tr v-if="data.coupon_discount > 0" class="cart-shipping">
                                                <th>{{ 'Coupon Discount' }}</th>
                                                <td class="text-right">
                                                    <span class="font-italic">{{ data.coupon_discount_single_price }}</span>
                                                </td>
                                            </tr>

                                        

                                        <tr class="cart-total">
                                            <th><span class="strong-600">{{ 'Total' }}</span></th>
                                            <td class="text-right">
                                                <strong>
                                                    <span>{{ club_point  ? data.total - club_point :  data.coupon_discount > 0 ? data.total - data.coupon_discount : data.total}}</span>
                                                </strong>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>

                              
                                        <div v-if="data.club_point && club_point" class="mt-3">
                                            <form class="" 
                                                enctype="multipart/form-data">
                                               
                                                <div class="input-group">
                                                    <div class="form-control">{{  }}</div>
                                                    <div class="input-group-append">
                                                        <button type="submit"
                                                            class="btn btn-primary">{{ 'Remove Redeem Point' }}</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                   

                               
                                <templete v-if="auth.isAuthenticated == true && data.coupon_system == 1">
                                   
                                        <div v-if="data.coupon_discount > 0 && data.coupon_code" class="mt-3">
                                            <form class="" id="remove-coupon-form" enctype="multipart/form-data">
                                             
                                                <div class="input-group">
                                                    <div class="form-control">{{ data.coupon_code }}</div>
                                                    <div class="input-group-append">
                                                        <button type="button" id="coupon-remove"
                                                            class="btn btn-primary">{{ 'Change Coupon' }}</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    
                                        <div class="mt-3">
                                            <form class="" id="apply-coupon-form" enctype="multipart/form-data">
                                            
                                                <input type="hidden" name="owner_id" value="{{ data.carts[0]['owner_id'] }}">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" name="code"
                                                        onkeydown="return event.key != 'Enter';"
                                                        placeholder="{{ 'Have coupon code? Enter here' }}" required>
                                                    <div class="input-group-append">
                                                        <button type="button" id="coupon-apply"
                                                            class="btn btn-primary">{{ 'Apply' }}</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                  
                                </templete>

                            </div>
                        </div>
                </div>
            </div>
        </div>
  </section> 
</template>


<script>

  import axios from 'axios';
  export default {
    components:{},
    data(){
      return{
        auth:{
          isAuthenticated: false,
          user: {},
        },

        data: null,
        club_point: null

       
      }
    },
    created(){
        var user = localStorage.getItem("user");
        this.club_point = localStorage.getItem("club_point");
        if(user !== null){
            user = JSON.parse(user);
            this.auth.isAuthenticated = true;
            this.auth.user = user;

            this.getPaymentInfoForSelect();
            
        }
    },

    methods:{
        getPaymentInfoForSelect(){
            axios.get(this.selfDomain+"vueweb/checkout/payment_info", {
                headers: {
                    Authorization: "Bearer " + this.auth.user.access_token,
                }
            }).then(res=>{
                // console.log(res.data);
                this.data = res.data;
                this.toggleManualPaymentData($('input[name=payment_option]:checked').data('id'));

            }).catch(err=>{

            });
        } ,
        toggleManualPaymentData(id){
            if (typeof id != 'undefined') {
                $('#manual_payment_description').parent().removeClass('d-none');
                let data = $('#manual_payment_info_' + id).html();
                // console.log(data);
                $('#manual_payment_description').html();
            }
        },
        online_payment(){
            $('#manual_payment_description').parent().addClass('d-none');
        },
        submitOrder() {
            let el = document.getElementById("complete_order");
            let minimum_order_amount_check = this.data.minimum_order_amount_check;
            let minimum_order_amount = this.data.minimum_order_amount_check == 1 ? this.data.minimum_order_amount : 0;
            // $(el).prop('disabled', true);
            if ($('#agree_checkbox').is(":checked")) {
                if (minimum_order_amount_check && $('#sub_total').val() < minimum_order_amount) {
                    alert('You order amount is less then the minimum order amount');
                } else {
                    var offline_payment_active = this.data.offline_payment;
                    if (offline_payment_active == 'true' && $('.offline_payment_option').is(":checked") && $('#trx_id').val() == '') {
                       alert('You need to put Transaction id');
                        $(el).prop('disabled', false);
                    } else {

                        let payment_option = $('input[name=payment_option]:checked').val();

                        // console.log(payment_option);return;
                        if(payment_option != null){
                            localStorage.setItem("payment_type", 'cart_payment');
                        }
                        let combined_order_id = localStorage.getItem("combined_order_id");
                        let data={'combined_order_id' : combined_order_id};
                        localStorage.setItem("payment_data", data);

                        let trx_id = $("#trx_id").val();
                        let photo = $("#photo").val();

                        // $('#checkout-form').submit();
                        // alert('submit');

                        
                        axios.get(this.selfDomain+"vueweb/checkout/payment", {
                            params:{
                                combined_order_id: combined_order_id,
                                trx_id: trx_id,
                                photo: photo,
                                payment_option: payment_option,
                            },
                            headers: {
                                Authorization: "Bearer " + this.auth.user.access_token,
                            }
                        }).then(res=>{
                          console.log(res.data);
                          this.$router.push({
                            name: "OrderConfirmed",
                          });
                        }).catch(err=>{

                        });


                    }
                }
            } else {
                alert('You need to agree with our policies');
                $(el).prop('disabled', false);
            }
        }


    }
  }
  </script>
  
  <style>
  
  </style>
  