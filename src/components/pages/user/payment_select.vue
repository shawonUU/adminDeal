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
  <!-- <section class="mb-4">
        <div class="container text-left">
            <div class="row">
                <div class="col-lg-8">
                    <form class="form-default" role="form" id="checkout-form">
                        <input type="hidden" name="owner_id" value="{{ $carts[0]['owner_id'] }}">


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
                                            @if (get_setting('paypal_payment') == 1)
                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="paypal" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img src="{{ static_asset('assets/img/cards/paypal.png') }}"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{'Paypal' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            @endif
                                            @if (get_setting('stripe_payment') == 1)
                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="stripe" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img src="{{ static_asset('assets/img/cards/stripe.png') }}"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Stripe' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            @endif
                                            @if (get_setting('mercadopago_payment') == 1)
                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="mercadopago" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img src="{{ static_asset('assets/img/cards/mercadopago.png') }}"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Mercadopago' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            @endif
                                            @if (get_setting('sslcommerz_payment') == 1)
                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="sslcommerz" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img src="{{ static_asset('assets/img/cards/sslcommerz.png') }}"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ translate('sslcommerz') }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            @endif
                                            @if (get_setting('instamojo_payment') == 1)
                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="instamojo" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img src="{{ static_asset('assets/img/cards/instamojo.png') }}"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Instamojo' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            @endif
                                            @if (get_setting('razorpay') == 1)
                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="razorpay" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img src="{{ static_asset('assets/img/cards/rozarpay.png') }}"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Razorpay' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            @endif
                                            @if (get_setting('paystack') == 1)
                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="paystack" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img src="{{ static_asset('assets/img/cards/paystack.png') }}"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Paystack' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            @endif
                                            @if (get_setting('voguepay') == 1)
                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="voguepay" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img src="{{ static_asset('assets/img/cards/vogue.png') }}"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'VoguePay' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            @endif
                                            @if (get_setting('payhere') == 1)
                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="payhere" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img src="{{ static_asset('assets/img/cards/payhere.png') }}"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'payhere' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            @endif
                                            @if (get_setting('ngenius') == 1)
                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="ngenius" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img src="{{ static_asset('assets/img/cards/ngenius.png') }}"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'ngenius' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            @endif
                                            @if (get_setting('iyzico') == 1)
                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="iyzico" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img src="{{ static_asset('assets/img/cards/iyzico.png') }}"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Iyzico' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            @endif
                                            @if (get_setting('nagad') == 1)
                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="nagad" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img src="{{ static_asset('assets/img/cards/nagad.png') }}"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Nagad' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            @endif
                                            @if (get_setting('bkash') == 1)
                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="bkash" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img src="{{ static_asset('assets/img/cards/bkash.png') }}"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Bkash' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            @endif
                                            @if (get_setting('aamarpay') == 1)
                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="aamarpay" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img src="{{ static_asset('assets/img/cards/aamarpay.png') }}"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Aamarpay' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            @endif
                                            @if (get_setting('authorizenet') == 1)
                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="authorizenet" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img src="{{ static_asset('assets/img/cards/authorizenet.png') }}"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ translate('Authorize Net') }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            @endif
                                            @if (get_setting('payku') == 1)
                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="payku" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img src="{{ static_asset('assets/img/cards/payku.png') }}"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Payku' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            @endif
                                            @if (addon_is_activated('african_pg'))
                                                @if (get_setting('mpesa') == 1)
                                                    <div class="col-6 col-md-4">
                                                        <label class="aiz-megabox d-block mb-3">
                                                            <input value="mpesa" class="online_payment" type="radio"
                                                                name="payment_option" checked>
                                                            <span class="d-block aiz-megabox-elem p-3">
                                                                <img src="{{ static_asset('assets/img/cards/mpesa.png') }}"
                                                                    class="img-fluid mb-2">
                                                                <span class="d-block text-center">
                                                                    <span
                                                                        class="d-block fw-600 fs-15">{{ 'mpesa' }}</span>
                                                                </span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                @endif
                                                @if (get_setting('flutterwave') == 1)
                                                    <div class="col-6 col-md-4">
                                                        <label class="aiz-megabox d-block mb-3">
                                                            <input value="flutterwave" class="online_payment" type="radio"
                                                                name="payment_option" checked>
                                                            <span class="d-block aiz-megabox-elem p-3">
                                                                <img src="{{ static_asset('assets/img/cards/flutterwave.png') }}"
                                                                    class="img-fluid mb-2">
                                                                <span class="d-block text-center">
                                                                    <span
                                                                        class="d-block fw-600 fs-15">{{ 'flutterwave' }}</span>
                                                                </span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                @endif
                                                @if (get_setting('payfast') == 1)
                                                    <div class="col-6 col-md-4">
                                                        <label class="aiz-megabox d-block mb-3">
                                                            <input value="payfast" class="online_payment" type="radio"
                                                                name="payment_option" checked>
                                                            <span class="d-block aiz-megabox-elem p-3">
                                                                <img src="{{ static_asset('assets/img/cards/payfast.png') }}"
                                                                    class="img-fluid mb-2">
                                                                <span class="d-block text-center">
                                                                    <span
                                                                        class="d-block fw-600 fs-15">{{ 'payfast' }}</span>
                                                                </span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                @endif
                                            @endif
                                            @if (addon_is_activated('paytm') && get_setting('paytm_payment') == 1)
                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="paytm" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img src="{{ static_asset('assets/img/cards/paytm.jpg') }}"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'Paytm' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            @endif
                                            @if (addon_is_activated('paytm') && get_setting('toyyibpay_payment') == 1)
                                                <div class="col-6 col-md-4">
                                                    <label class="aiz-megabox d-block mb-3">
                                                        <input value="toyyibpay" class="online_payment" type="radio"
                                                            name="payment_option" checked>
                                                        <span class="d-block aiz-megabox-elem p-3">
                                                            <img src="{{ static_asset('assets/img/cards/toyyibpay.png') }}"
                                                                class="img-fluid mb-2">
                                                            <span class="d-block text-center">
                                                                <span
                                                                    class="d-block fw-600 fs-15">{{ 'ToyyibPay' }}</span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            @endif
                                            @if (get_setting('cash_payment') == 1)
                                                @php
                                                    $digital = 0;
                                                    $cod_on = 1;
                                                    foreach ($carts as $cartItem) {
                                                        $product = \App\Models\Product::find($cartItem['product_id']);
                                                        if ($product['digital'] == 1) {
                                                            $digital = 1;
                                                        }
                                                        if ($product['cash_on_delivery'] == 0) {
                                                            $cod_on = 0;
                                                        }
                                                    }
                                                @endphp
                                                @if ($digital != 1 && $cod_on == 1)
                                                    <div class="col-6 col-md-4">
                                                        <label class="aiz-megabox d-block mb-3">
                                                            <input value="cash_on_delivery" class="online_payment"
                                                                type="radio" name="payment_option" checked>
                                                            <span class="d-block aiz-megabox-elem p-3">
                                                                <img src="{{ static_asset('assets/img/cards/cod.png') }}"
                                                                    class="img-fluid mb-2">
                                                                <span class="d-block text-center">
                                                                    <span
                                                                        class="d-block fw-600 fs-15">{{ translate('Cash on Delivery') }}</span>
                                                                </span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                @endif
                                            @endif
                                            @if (Auth::check())
                                                @if (addon_is_activated('offline_payment'))
                                                    @foreach (\App\Models\ManualPaymentMethod::all() as $method)
                                                        <div class="col-6 col-md-4">
                                                            <label class="aiz-megabox d-block mb-3">
                                                                <input value="{{ $method->heading }}" type="radio"
                                                                    name="payment_option" class="offline_payment_option"
                                                                    onchange="toggleManualPaymentData({{ $method->id }})"
                                                                    data-id="{{ $method->id }}" checked>
                                                                <span class="d-block aiz-megabox-elem p-3">
                                                                    <img src="{{ uploaded_asset($method->photo) }}"
                                                                        class="img-fluid mb-2">
                                                                    <span class="d-block text-center">
                                                                        <span
                                                                            class="d-block fw-600 fs-15">{{ $method->heading }}</span>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    @endforeach

                                                    @foreach (\App\Models\ManualPaymentMethod::all() as $method)
                                                        <div id="manual_payment_info_{{ $method->id }}" class="d-none">
                                                            @php echo $method->description @endphp
                                                            @if ($method->bank_info != null)
                                                                <ul>
                                                                    @foreach (json_decode($method->bank_info) as $key => $info)
                                                                        <li>{{ translate('Bank Name') }} -
                                                                            {{ $info->bank_name }},
                                                                            {{ translate('Account Name') }} -
                                                                            {{ $info->account_name }},
                                                                            {{ translate('Account Number') }} -
                                                                            {{ $info->account_number }},
                                                                            {{ translate('Routing Number') }} -
                                                                            {{ $info->routing_number }}
                                                                        </li>
                                                                    @endforeach
                                                                </ul>
                                                            @endif
                                                        </div>
                                                    @endforeach
                                                @endif
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                @if (addon_is_activated('offline_payment'))
                                    <div class="d-none mb-3 rounded border bg-white p-3 text-left">
                                        <div id="manual_payment_description">

                                        </div>
                                        <br>
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label>{{ 'Transaction ID'}} <span class="text-danger">*</span></label>
                                            </div>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control mb-3" name="trx_id" id="trx_id" placeholder="{{ 'Transaction ID' }}" required>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-md-3 col-form-label">{{ 'Photo' }}</label>
                                            <div class="col-md-9">
                                                <div class="input-group" data-toggle="aizuploader" data-type="image">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text bg-soft-secondary font-weight-medium">{{ 'Browse'}}</div>
                                                    </div>
                                                    <div class="form-control file-amount">{{ 'Choose image' }}</div>
                                                    <input type="hidden" name="photo" class="selected-files">
                                                </div>
                                                <div class="file-preview box sm">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endif
                                @if (Auth::check() && get_setting('wallet_system') == 1)
                                    <div class="separator mb-3">
                                        <span class="bg-white px-3">
                                            <span class="opacity-60">{{ 'Or' }}</span>
                                        </span>
                                    </div>
                                    <div class="py-4 text-center">
                                        <div class="h6 mb-3">
                                            <span class="opacity-80">{{ 'Your wallet balance :' }}</span>
                                            <span
                                                class="fw-600">{{ single_price(Auth::user()->balance) }}</span>
                                        </div>
                                        @if (Auth::user()->balance < $total)
                                            <button type="button" class="btn btn-secondary" disabled>
                                                {{ 'Insufficient balance' }}
                                            </button>
                                        @else
                                            <button type="button" onclick="use_wallet()" class="btn btn-primary fw-600">
                                                {{ 'Pay with wallet' }}
                                            </button>
                                        @endif
                                    </div>
                                @endif
                            </div>
                        </div>
                        <div class="pt-3">
                            <label class="aiz-checkbox">
                                <input type="checkbox" required id="agree_checkbox">
                                <span class="aiz-square-check"></span>
                                <span>{{ 'I agree to the' }}</span>
                            </label>
                            <a href="{{ route('terms') }}">{{'terms and conditions' }}</a>,
                            <a href="{{ route('returnpolicy') }}">{{ 'return policy' }}</a> &
                            <a href="{{ route('privacypolicy') }}">{{ 'privacy policy' }}</a>
                        </div>

                        <div class="row align-items-center pt-3">
                            <div class="col-6">
                                <a href="{{ route('home') }}" class="link link--style-3">
                                    <i class="las la-arrow-left"></i>
                                    {{ 'Return to shop' }}
                                </a>
                            </div>
                            <div class="col-6 text-right">
                                <button type="button" onclick="submitOrder(this)"
                                    class="btn btn-primary fw-600">{{ 'Complete Order' }}</button>
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
                {{ count($carts) }}
                {{ 'Items' }}
            </span>
            @php
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
            @endforeach

            @if (get_setting('minimum_order_amount_check') == 1 && $subtotal_for_min_order_amount < get_setting('minimum_order_amount'))
                <span class="badge badge-inline badge-primary">
                    {{ translate('Minimum Order Amount') . ' ' . single_price(get_setting('minimum_order_amount')) }}
                </span>
            @endif
        </div>
    </div>

    <div class="card-body">
        @if (addon_is_activated('club_point'))
            @php
                $total_point = 0;
            @endphp
            @foreach ($carts as $key => $cartItem)
                @php
                    $product = \App\Models\Product::find($cartItem['product_id']);
                    $total_point += $product->earn_point * $cartItem['quantity'];
                @endphp
            @endforeach

            <div class="bg-soft-primary border-soft-primary mb-2 rounded border px-2">
                {{ translate('Total Club point') }}:
                <span class="fw-700 float-right">{{ $total_point }}</span>
            </div>
        @endif
        <table class="table">
            <thead>
                <tr>
                    <th class="product-name">{{ translate('Product') }}</th>
                    <th class="product-total text-right">{{ translate('Total') }}</th>
                </tr>
            </thead>
            <tbody>
                @php
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
                    @endphp
                    <tr class="cart_item">
                        <td class="product-name">
                            {{ $product_name_with_choice }}
                            <strong class="product-quantity">
                                × {{ $cartItem['quantity'] }}
                            </strong>
                        </td>
                        <td class="product-total text-right">
                            <span
                                class="pl-4 pr-0">{{ single_price(cart_product_price($cartItem, $cartItem->product, false, false) * $cartItem['quantity']) }}</span>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        <input type="hidden" id="sub_total" value="{{ $subtotal }}">
        <table class="table">

            <tfoot>
                <tr class="cart-subtotal">
                    <th>{{ translate('Subtotal') }}</th>
                    <td class="text-right">
                        <span class="fw-600">{{ single_price($subtotal) }}</span>
                    </td>
                </tr>

                <tr class="cart-shipping">
                    <th>{{ translate('Tax') }}</th>
                    <td class="text-right">
                        <span class="font-italic">{{ single_price($tax) }}</span>
                    </td>
                </tr>

                <tr class="cart-shipping">
                    <th>{{ translate('Total Shipping') }}</th>
                    <td class="text-right">
                        <span class="font-italic">{{ single_price($shipping) }}</span>
                    </td>
                </tr>

                @if (Session::has('club_point'))
                    <tr class="cart-shipping">
                        <th>{{ translate('Redeem point') }}</th>
                        <td class="text-right">
                            <span class="font-italic">{{ single_price(Session::get('club_point')) }}</span>
                        </td>
                    </tr>
                @endif

                @if ($coupon_discount > 0)
                    <tr class="cart-shipping">
                        <th>{{ 'Coupon Discount' }}</th>
                        <td class="text-right">
                            <span class="font-italic">{{ single_price($coupon_discount) }}</span>
                        </td>
                    </tr>
                @endif

                @php
                    $total = $subtotal + $tax + $shipping;
                    if (Session::has('club_point')) {
                        $total -= Session::get('club_point');
                    }
                    if ($coupon_discount > 0) {
                        $total -= $coupon_discount;
                    }
                @endphp

                <tr class="cart-total">
                    <th><span class="strong-600">{{ 'Total' }}</span></th>
                    <td class="text-right">
                        <strong><span>{{ single_price($total) }}</span></strong>
                    </td>
                </tr>
            </tfoot>
        </table>

        @if (addon_is_activated('club_point'))
            @if (Session::has('club_point'))
                <div class="mt-3">
                    <form class="" action="{{ route('checkout.remove_club_point') }}" method="POST"
                        enctype="multipart/form-data">
                        @csrf
                        <div class="input-group">
                            <div class="form-control">{{ Session::get('club_point') }}</div>
                            <div class="input-group-append">
                                <button type="submit"
                                    class="btn btn-primary">{{ 'Remove Redeem Point' }}</button>
                            </div>
                        </div>
                    </form>
                </div>
            @endif
        @endif

        @if (Auth::check() && get_setting('coupon_system') == 1)
            @if ($coupon_discount > 0 && $coupon_code)
                <div class="mt-3">
                    <form class="" id="remove-coupon-form" enctype="multipart/form-data">
                        @csrf
                        <div class="input-group">
                            <div class="form-control">{{ $coupon_code }}</div>
                            <div class="input-group-append">
                                <button type="button" id="coupon-remove"
                                    class="btn btn-primary">{{ 'Change Coupon' }}</button>
                            </div>
                        </div>
                    </form>
                </div>
            @else
                <div class="mt-3">
                    <form class="" id="apply-coupon-form" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="owner_id" value="{{ $carts[0]['owner_id'] }}">
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
            @endif
        @endif

    </div>
</div>
                </div>
            </div>
        </div>
  </section> -->
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

        carts:[],
        shipping_info: '',
        total: 0,

       
      }
    },
    created(){
        var user = localStorage.getItem("user");
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
                console.log(res.data);
                this.carts = res.data.carts;
                this.carts = res.data.carts;
                this.total = res.data.total;


            }).catch(err=>{

            });
        } 
    }
  }
  </script>
  
  <style>
  
  </style>