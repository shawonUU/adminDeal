<template>
    <section class="mb-4 pt-3">
        <div class="container sm-px-0">
            <form class="" id="search-form" action="" method="GET">
                <div class="row">
                    <div class="col-xl-3">
                        <div class="aiz-filter-sidebar collapse-sidebar-wrap sidebar-xl sidebar-right z-1035">
                            <div class="overlay overlay-fixed dark c-pointer" data-toggle="class-toggle" data-target=".aiz-filter-sidebar" data-same=".filter-sidebar-thumb"></div>
                            <div class="collapse-sidebar c-scrollbar text-left">
                                <div class="d-flex d-xl-none justify-content-between align-items-center pl-3 border-bottom">
                                    <h3 class="h6 mb-0 fw-600">Filters</h3>
                                    <button type="button" class="btn btn-sm p-2 filter-sidebar-thumb" data-toggle="class-toggle" data-target=".aiz-filter-sidebar" >
                                        <i class="las la-times la-2x"></i>
                                    </button>
                                </div>
                                
                                   <div class="bg-white shadow-sm rounded mb-3">
                                    <div class="fs-15 fw-600 p-3 border-bottom">
                                        Price range
                                    </div>
                                    <div class="p-3">
                                        <div class="aiz-range-slider">
                                            <div
                                                id="input-slider-range"
                                                data-range-value-min=" 0 "
                                                data-range-value-max=" 17990000 "
                                            ></div>

                                            <div class="row mt-2">
                                                <div class="col-6">
                                                    <span class="range-slider-value value-low fs-14 fw-600 opacity-70"
                                                                                                                    data-range-value-low="30"
                                                                                                                id="input-slider-range-value-low"
                                                    ></span>
                                                </div>
                                                <div class="col-6 text-right">
                                                    <span class="range-slider-value value-high fs-14 fw-600 opacity-70"
                                                                                                                    data-range-value-high="580"
                                                                                                                id="input-slider-range-value-high"
                                                    ></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="bg-white shadow-sm rounded mb-3">
                                    <div class="fs-15 fw-600 p-3 border-bottom">
                                        Categories
                                    </div>
                                    <div class="p-3">
                                        <ul class="list-unstyled">
                                                                                            <li class="mb-2">
                                                    <a class="text-reset fs-14 fw-600" href="https://admindeal.com.bd/search">
                                                        <i class="las la-angle-left"></i>
                                                        All categories
                                                    </a>
                                                </li>
                                                                                                <li class="mb-2">
                                                    <a class="text-reset fs-14 fw-600" href="https://admindeal.com.bd/category/groceries-lifestyle-medical">
                                                        <i class="las la-angle-left"></i>
                                                        Groceries, Lifestyle &amp; Medical
                                                    </a>
                                                </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/baking">Baking</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/ayurvedic">Ayurvedic</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/herbal">Herbal</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/diabetes-accessories">Diabetes Accessories</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/snacks">Snacks</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/bread-bakery">Bread &amp; Bakery</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/breakfast">Breakfast</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/dairy">Dairy</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/hygiene">Hygiene</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/frozen-canned">Frozen &amp; Canned</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/candy-chocolate">Candy &amp; Chocolate</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/medical-supplies">Medical Supplies</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/cooking">Cooking</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/meat-fish">Meat &amp; Fish</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/fruits-vegetables">Fruits &amp; Vegetables</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/lifestyle-accessories">Lifestyle Accessories</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/laundry--household">Laundry &amp; Household</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/cooking-ingredients">Cooking Ingredients</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/food-staples">Food Staples</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/breakfast-choco-snacks">Breakfast, Choco &amp; Snacks</a>
                                                    </li>
                                                                                                    <li class="ml-4 mb-2">
                                                        <a class="text-reset fs-14" href="https://admindeal.com.bd/category/beverages">Beverages</a>
                                                    </li>
                                                                                                                                    </ul>
                                    </div>
                                </div>
                             
                                                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by Display Type
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="LED"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>LED</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="LCD"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>LCD</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="IPS"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>IPS</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Retinal"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Retinal</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="OLED"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>OLED</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="TFT"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>TFT</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by Volume
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="100 ml"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>100 ml</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="200 ml"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>200 ml</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="1Liter"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>1Liter</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="500 mL"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>500 mL</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="250 mL"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>250 mL</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="470 ml"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>470 ml</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="950 ml"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>950 ml</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="240 ml"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>240 ml</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="400 ml"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>400 ml</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="600 ml"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>600 ml</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="5Liter"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>5Liter</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="2Liter"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>2Liter</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="430 ml"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>430 ml</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="960 ml"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>960 ml</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="750 ml"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>750 ml</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="700 ml"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>700 ml</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="450 ml"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>450 ml</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="900 ml"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>900 ml</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="550 ml"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>550 ml</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="510 ml"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>510 ml</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="350 ml"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>350 ml</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by Storage
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Stainless Steel"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Stainless Steel</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Waterproof"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Waterproof</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Cabinets"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Cabinets</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Dry and Cool Place"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Dry and Cool Place</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Room Temperature"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Room Temperature</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Refrigerated"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Refrigerated</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Below -18 Degree C (Below )"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Below -18 Degree C (Below )</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Freezer"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Freezer</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="1-3 Degree C (34-38 degree)"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>1-3 Degree C (34-38 degree)</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="1.5GB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>1.5GB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="32GB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>32GB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="64GB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>64GB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="128GB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>128GB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="256GB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>256GB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="100GB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>100GB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="16GB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>16GB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="128GB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>128GB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Freezer Refrigerated"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Freezer Refrigerated</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="1TB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>1TB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="2TB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>2TB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="64GB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>64GB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="120GB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>120GB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="512GB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>512GB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="320GB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>320GB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="240GB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>240GB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="500GB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>500GB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="480GB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>480GB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="4TB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>4TB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="300MB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>300MB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="3TB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>3TB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="250GB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>250GB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="256GB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>256GB</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="8GB"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>8GB</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by Shelf Life
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="1week-12 weeks"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>1week-12 weeks</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="1month-60 months"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>1month-60 months</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="1year-5years"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>1year-5years</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by flavor
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Almond"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Almond</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Others"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Others</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Mixed"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Mixed</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Natural"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Natural</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Fruity"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Fruity</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Banana"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Banana</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Wheat&amp;Honey"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Wheat&amp;Honey</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Chocolate"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Chocolate</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Apple"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Apple</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Strawberry"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Strawberry</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Wheat Flavor"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Wheat Flavor</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Sweet Potato"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Sweet Potato</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Multi Grain&amp;Garden Ve"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Multi Grain&amp;Garden Ve</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Rice&amp;Mixed Fruits"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Rice&amp;Mixed Fruits</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Egg flavor"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Egg flavor</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Vanilla"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Vanilla</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Rice&amp;Mixed Vegetables"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Rice&amp;Mixed Vegetables</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Cream"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Cream</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Rice"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Rice</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Honey"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Honey</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Mango"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Mango</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Cheese"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Cheese</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Oats,Wheat&amp;Prunes"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Oats,Wheat&amp;Prunes</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Peach"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Peach</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Rice&amp;Chicken"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Rice&amp;Chicken</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Blueberry"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Blueberry</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by Weight
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="0-4 kg"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>0-4 kg</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="0-11kg"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>0-11kg</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by EU Size
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="EU"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>EU</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="40"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>40</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="44"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>44</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="48"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>48</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="50"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>50</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="52"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>52</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="54"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>54</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="56"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>56</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="58"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>58</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="22mm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>22mm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="28mm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>28mm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="30mm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>30mm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="32mm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>32mm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="34mm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>34mm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="36mm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>36mm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="38mm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>38mm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="39mm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>39mm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="40mm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>40mm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="41 mm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>41 mm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="42mm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>42mm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="43 mm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>43 mm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="44mm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>44mm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="45mm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>45mm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="48mm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>48mm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="46"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>46</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="5"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>5</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="9"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>9</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="3"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>3</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="100"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>100</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="41-80 Pcs"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>41-80 Pcs</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="21-40 Pcs"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>21-40 Pcs</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="1-20 Pcs"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>1-20 Pcs</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="81 and Above"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>81 and Above</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Adjustable"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Adjustable</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="11"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>11</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="16"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>16</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="17"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>17</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="17.5"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>17.5</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="18"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>18</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="18.5"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>18.5</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="19"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>19</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="20"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>20</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="21"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>21</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="10 MM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>10 MM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="47 CM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>47 CM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="49 CM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>49 CM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="50 CM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>50 CM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="60 CM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>60 CM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="8MM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>8MM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="10MM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>10MM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="55 MM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>55 MM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="65 MM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>65 MM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="10 CM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>10 CM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="12 CM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>12 CM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="15 CM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>15 CM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="16 CM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>16 CM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="17 CM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>17 CM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="18 CM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>18 CM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="19 CM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>19 CM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="20 CM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>20 CM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="21 CM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>21 CM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="22 CM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>22 CM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="23 CM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>23 CM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="24 CM"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>24 CM</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="26"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>26</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="15-20 inches"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>15-20 inches</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="2"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>2</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="7"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>7</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="8"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>8</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="10X12"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>10X12</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="8X10"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>8X10</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="12X15"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>12X15</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="4X6"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>4X6</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="5X10"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>5X10</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="16X20"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>16X20</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="75"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>75</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="98"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>98</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="126 and Above"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>126 and Above</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Below 12"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Below 12</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="45-46"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>45-46</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="37-38"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>37-38</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="41-42"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>41-42</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by Size
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="0-6 months"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>0-6 months</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Newborn"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Newborn</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="12-18 months"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>12-18 months</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="0-12 months"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>0-12 months</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="0-3 months"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>0-3 months</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="6-9 months"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>6-9 months</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="S"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>S</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="18-24 months"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>18-24 months</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="3-6 months"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>3-6 months</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="9-12 months"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>9-12 months</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="6-12 months"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>6-12 months</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="2-3yrs"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>2-3yrs</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="One Size"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>One Size</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="3-4yrs"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>3-4yrs</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="1-2yrs"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>1-2yrs</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="4-5 yrs"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>4-5 yrs</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="0-3 years"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>0-3 years</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="3-12 months"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>3-12 months</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="3years"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>3years</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by Country of Origin
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Bangladesh"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Bangladesh</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="China"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>China</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Pakistan"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Pakistan</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="India"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>India</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="United States of America"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>United States of America</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Russia"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Russia</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Japan"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Japan</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Canada"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Canada</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Australia"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Australia</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="New Zealand"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>New Zealand</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="UK"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>UK</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Malaysia"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Malaysia</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="France"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>France</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Germany"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Germany</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Korea"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Korea</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Dubai"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Dubai</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Italy"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Italy</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by Warranty
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="No Warranty"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>No Warranty</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Brand Warranty"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Brand Warranty</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Seller Warranty"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Seller Warranty</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="7 Days"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>7 Days</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="10 Days"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>10 Days</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Life Time Warranty"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Life Time Warranty</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Local seller warranty"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Local seller warranty</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="1Year"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>1Year</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="3Months"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>3Months</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="3Years"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>3Years</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="4Years"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>4Years</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="6Months"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>6Months</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="2 Years"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>2 Years</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="5 Years"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>5 Years</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="6 Years"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>6 Years</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="1Month"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>1Month</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Shelf Life"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Shelf Life</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="1week-12 weeks"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>1week-12 weeks</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="1month-60 months"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>1month-60 months</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="1year-5years"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>1year-5years</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Non-local warranty"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Non-local warranty</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="International Manufacturer Warranty"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>International Manufacturer Warranty</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="International Seller Warranty"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>International Seller Warranty</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="10 Years and above"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>10 Years and above</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by Service
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Installment"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Installment</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Cash On Delivery"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Cash On Delivery</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Fulfilled By Daraz"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Fulfilled By Daraz</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Free Shipping"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Free Shipping</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Admin Deal Mall"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Admin Deal Mall</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Products only"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Products only</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Product with services"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Product with services</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Service only"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Service only</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Fulfilled By Admin Deal"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Fulfilled By Admin Deal</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by Location
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Dhaka"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Dhaka</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Chittagong"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Chittagong</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Khulna"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Khulna</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Sylhet"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Sylhet</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Rajjshahi"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Rajjshahi</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Mymensingh"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Mymensingh</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Barisal"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Barisal</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Rangpur"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Rangpur</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Comilla"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Comilla</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Narayanganj"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Narayanganj</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Gazipur"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Gazipur</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by Weight
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="10 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>10 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="20 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>20 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="30 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>30 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="40 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>40 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="50 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>50 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="60 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>60 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="70 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>70 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="80 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>80 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="90 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>90 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="100 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>100 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="110 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>110 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="120 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>120 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="130 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>130 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="140 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>140 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="150 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>150 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="160 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>160 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="170 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>170 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="180 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>180 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="190 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>190 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="200 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>200 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="220 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>220 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="230 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>230 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="250 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>250 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="260 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>260 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="270 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>270 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="280 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>280 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="290 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>290 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="300 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>300 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="330 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>330 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="350 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>350 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="400 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>400 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="450 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>450 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="470 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>470 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="480 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>480 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="500 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>500 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="600 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>600 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="700 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>700 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="750 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>750 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="800 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>800 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="900 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>900 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="960 gm"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>960 gm</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="0-4 kg"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>0-4 kg</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="0-11kg"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>0-11kg</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="0-13 kg"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>0-13 kg</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="0-15 Kg"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>0-15 Kg</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="0-18 kg"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>0-18 kg</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="0-20 kg"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>0-20 kg</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="0-23 kg"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>0-23 kg</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="0-25 kg"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>0-25 kg</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="0-30 kg"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>0-30 kg</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="3-8 kg"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>3-8 kg</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="3.5-11kg"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>3.5-11kg</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="3.5-12 kg"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>3.5-12 kg</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="3.5-15 kg"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>3.5-15 kg</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="4-6 kgs"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>4-6 kgs</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="6-12 kg"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>6-12 kg</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by Pack Type
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Single Item"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Single Item</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Multi-pack"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Multi-pack</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by Safety Warning
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Organic"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Organic</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Paraben Free"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Paraben Free</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Alcohol Free"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Alcohol Free</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Fragrance Free"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Fragrance Free</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Fat Free"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Fat Free</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Sugar Free"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Sugar Free</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Suitable for vegetarian"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Suitable for vegetarian</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="No Preservative"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>No Preservative</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="No Colourings"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>No Colourings</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="No Artificial Flavors"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>No Artificial Flavors</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Do not stand bottle on hot"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Do not stand bottle on hot</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Sodium Free"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Sodium Free</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Carbon Neutral"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Carbon Neutral</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Transport Upright"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Transport Upright</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by Usage Area
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Body"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Body</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Skin"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Skin</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Hand"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Hand</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Face"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Face</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Foot"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Foot</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Ears"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Ears</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Mouth"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Mouth</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Nose"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Nose</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by Ingredient
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Folic Acid"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Folic Acid</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Vitamin D"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Vitamin D</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Vitamin E"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Vitamin E</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Vitamin A"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Vitamin A</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Vitamin B"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Vitamin B</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="VITAMIN C"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>VITAMIN C</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Biotin"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Biotin</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Ginseng"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Ginseng</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Collagen"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Collagen</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Garcinia Cambogia"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Garcinia Cambogia</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Magnesium"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Magnesium</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Calcium"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Calcium</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Zinc"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Zinc</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Omega Fatty Acids"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Omega Fatty Acids</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Whey Protein"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Whey Protein</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by Inflation
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Manual"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Manual</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Automatic"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Automatic</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by Pack Size
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="1"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>1</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="3"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>3</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="36"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>36</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="10"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>10</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="9"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>9</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="30"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>30</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="12"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>12</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="15"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>15</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="6"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>6</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="72"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>72</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="18"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>18</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="100"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>100</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="2"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>2</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="50"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>50</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="20"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>20</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                    <div class="bg-white shadow-sm rounded mb-3">
                                        <div class="fs-15 fw-600 p-3 border-bottom">
                                            Filter by Food Type
                                        </div>
                                        <div class="p-3">
                                            <div class="aiz-checkbox-list" style="max-height: 150px; overflow:scroll;overflow-x: hidden;overflow-y:auto;">
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Dry"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Dry</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Oragnic"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Oragnic</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Gluten Free"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Gluten Free</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Raw"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Raw</span>
                                                    </label>
                                                                                                    <label class="aiz-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            name="selected_attribute_values[]"
                                                            value="Liquid"                                                             onchange="filter()"
                                                        >
                                                        <span class="aiz-square-check"></span>
                                                        <span>Liquid</span>
                                                    </label>
                                                                                            </div>
                                        </div>
                                    </div>
                                                                
                                
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-9">

                        <ul class="breadcrumb bg-transparent p-0">
                            <li class="breadcrumb-item opacity-50">
                                <a class="text-reset" href="https://admindeal.com.bd">Home</a>
                            </li>
                                                            <li class="breadcrumb-item opacity-50">
                                    <a class="text-reset" href="https://admindeal.com.bd/search">All categories</a>
                                </li>
                                                                                        <li class="text-dark fw-600 breadcrumb-item">
                                    <a class="text-reset" href="https://admindeal.com.bd/category/groceries-lifestyle-medical">"Groceries, Lifestyle &amp; Medical"</a>
                                </li>
                                                    </ul>

                        <div class="text-left">
                            <div class="row gutters-5 flex-wrap align-items-center">
                                <div class="col-lg col-10">
                                    <h1 class="h6 fw-600 text-body">
                                                                                    Groceries, Lifestyle &amp; Medical
                                                                            </h1>
                                    <input type="hidden" name="keyword" value="">
                                </div>
                                <div class="col-2 col-lg-auto d-xl-none mb-lg-3 text-right">
                                    <button type="button" class="btn btn-icon p-0" data-toggle="class-toggle" data-target=".aiz-filter-sidebar">
                                        <i class="la la-filter la-2x"></i>
                                    </button>
                                </div>
                                <div class="col-6 col-lg-auto mb-3 w-lg-200px">
                                                                            <label class="mb-0 opacity-50">Brands</label>
                                        <select class="form-control form-control-sm aiz-selectpicker" data-live-search="true" name="brand" onchange="filter()">
                                            <option value="">All Brands</option>
                                                                                            <option value="axe" >AXE</option>
                                                                                            <option value="dell" >Dell</option>
                                                                                            <option value="acer" >Acer</option>
                                                                                            <option value="asus" >Asus</option>
                                                                                            <option value="noor-electronics" >Noor Electronics</option>
                                                                                            <option value="ahl" >AHL</option>
                                                                                            <option value="wizard" >Wizard</option>
                                                                                            <option value="oraska" >ORASKA</option>
                                                                                            <option value="hi-tech" >HI-TECH</option>
                                                                                            <option value="aim" >AIM</option>
                                                                                            <option value="gss" >GSS</option>
                                                                                            <option value="transtec" >TRANSTEC</option>
                                                                                            <option value="anik-telecom" >Anik Telecom</option>
                                                                                            <option value="liitokala" >LiitoKala</option>
                                                                                            <option value="philips-light" >Philips Light</option>
                                                                                            <option value="microlink" >Microlink</option>
                                                                                            <option value="puluz" >PULUZ</option>
                                                                                            <option value="new-shop-bd" >New Shop BD</option>
                                                                                            <option value="energy-super" >Energy Super</option>
                                                                                            <option value="king-trading" >King Trading</option>
                                                                                            <option value="kamisafe" >KAMISAFE</option>
                                                                                            <option value="zamil-trading" >Zamil Trading</option>
                                                                                            <option value="jeepass" >JEEPASS</option>
                                                                                            <option value="conion" >Conion</option>
                                                                                            <option value="zhishunjia" >ZHISHUNJIA</option>
                                                                                            <option value="sunmoon" >SUNMOON</option>
                                                                                            <option value="sanford" >Sanford</option>
                                                                                            <option value="eforchina" >eForChina</option>
                                                                                            <option value="lencent" >Lencent</option>
                                                                                            <option value="akm-international" >AKM International</option>
                                                                                            <option value="regal-furniture" >Regal Furniture</option>
                                                                                            <option value="orient" >Orient</option>
                                                                                            <option value="national" >National</option>
                                                                                            <option value="kdk" >KDK</option>
                                                                                            <option value="kennede" >KENNEDE</option>
                                                                                            <option value="gazi" >Gazi</option>
                                                                                            <option value="tbs" >TBS</option>
                                                                                            <option value="jvjh" >JVJH</option>
                                                                                            <option value="himel-technology" >Himel Technology</option>
                                                                                            <option value="deermal" >Deermal</option>
                                                                                            <option value="tobi" >Tobi</option>
                                                                                            <option value="pureit" >Pureit</option>
                                                                                            <option value="kent" >Kent</option>
                                                                                            <option value="mideal" >Mideal</option>
                                                                                            <option value="havells" >Havells</option>
                                                                                            <option value="sanako" >SANAKO</option>
                                                                                            <option value="top-klean" >Top Klean</option>
                                                                                            <option value="cleansui" >Cleansui</option>
                                                                                            <option value="chuwi" >CHUWI</option>
                                                                                            <option value="godaddy" >GoDaddy</option>
                                                                                            <option value="hostinger" >Hostinger</option>
                                                                                            <option value="rolex" >Rolex</option>
                                                                                            <option value="uniqlo" >Uniqlo</option>
                                                                                            <option value="swarovski" >Swarovski</option>
                                                                                            <option value="burberry" >Burberry</option>
                                                                                            <option value="tom-ford" >Tom Ford</option>
                                                                                            <option value="the-north-face" >The North Face</option>
                                                                                            <option value="skechers" >Skechers</option>
                                                                                            <option value="burts-bees-onesies" >Burt’s Bees Onesies</option>
                                                                                            <option value="hanna-andersson" >Hanna Andersson</option>
                                                                                            <option value="gerber-childrenswear" >Gerber Childrenswear</option>
                                                                                            <option value="lovedbaby" >Lovedbaby</option>
                                                                                            <option value="jazzy-organics" >Jazzy Organics</option>
                                                                                            <option value="kate-quinn" >Kate Quinn</option>
                                                                                            <option value="posh-peanut" >Posh Peanut</option>
                                                                                            <option value="gap-baby" >Gap Baby</option>
                                                                                            <option value="carters" >Carter’s</option>
                                                                                            <option value="garanimals" >Garanimals</option>
                                                                                            <option value="vincero" >Vincero</option>
                                                                                            <option value="old-navy-baby" >Old Navy Baby</option>
                                                                                            <option value="cat-&amp;-jack" >Cat &amp; Jack</option>
                                                                                            <option value="zutano" >Zutano</option>
                                                                                            <option value="goumi" >Goumi</option>
                                                                                            <option value="freshly-picked" >Freshly Picked</option>
                                                                                            <option value="pact" >Pact</option>
                                                                                            <option value="patagonia-baby-and-kids-clothing" >Patagonia Baby and Kids Clothing</option>
                                                                                            <option value="l.l.bean-toddler-and-baby-clothing" >L.L.Bean Toddler and Baby Clothing</option>
                                                                                            <option value="agf" >AGF</option>
                                                                                            <option value="alcyon" >Alcyon</option>
                                                                                            <option value="automoto" >Automoto</option>
                                                                                            <option value="ardie" >Ardie</option>
                                                                                            <option value="alta-andhra-pradesh-scooters" >Alta Andhra Pradesh Scooters</option>
                                                                                            <option value="api" >API</option>
                                                                                            <option value="aeromere" >Aeromere</option>
                                                                                            <option value="autozodiaco" >Autozodiaco</option>
                                                                                            <option value="alexander-leutner" >Alexander Leutner</option>
                                                                                            <option value="ajw-motorcycles" >AJW Motorcycles</option>
                                                                                            <option value="ambassador-motorcycles" >Ambassador Motorcycles</option>
                                                                                            <option value="associated-motor-cycles" >Associated Motor Cycles</option>
                                                                                            <option value="armstrong" >Armstrong</option>
                                                                                            <option value="american-ironhorse" >American IronHorse</option>
                                                                                            <option value="brasil-&amp;-movimento" >Brasil &amp; Movimento</option>
                                                                                            <option value="bombardier-recreational-products" >Bombardier Recreational Products</option>
                                                                                            <option value="baotian-motorcycle" >Baotian Motorcycle</option>
                                                                                            <option value="blata" >Blata</option>
                                                                                            <option value="bmw-motorrad" >BMW Motorrad</option>
                                                                                            <option value="bajaj-auto" >Bajaj Auto</option>
                                                                                            <option value="benelli" >Benelli</option>
                                                                                            <option value="beta-motor" >Beta Motor</option>
                                                                                            <option value="bimota" >Bimota</option>
                                                                                            <option value="bultaco" >Bultaco</option>
                                                                                            <option value="boss-hoss-cycles" >Boss Hoss Cycles</option>
                                                                                            <option value="brammo-inc" >Brammo Inc</option>
                                                                                            <option value="bennett-&amp;-barkell-motorcycles" >Bennett &amp; Barkell Motorcycles</option>
                                                                                            <option value="brumana-pugliese" >Brumana Pugliese</option>
                                                                                            <option value="balkan" >Balkan</option>
                                                                                            <option value="bhmerland" >Böhmerland</option>
                                                                                            <option value="patek-philippe" >Patek Philippe</option>
                                                                                            <option value="audemars-piguet" >Audemars Piguet</option>
                                                                                            <option value="alange-&amp;-shne" >A.Lange &amp; Söhne</option>
                                                                                            <option value="omega" >Omega</option>
                                                                                            <option value="jaeger-lecoultre" >Jaeger-LeCoultre</option>
                                                                                            <option value="iwc-schaffhausen" >IWC Schaffhausen</option>
                                                                                            <option value="cartier" >Cartier</option>
                                                                                            <option value="nordgreen" >Nordgreen</option>
                                                                                            <option value="vacheron-constantin" >Vacheron Constantin</option>
                                                                                            <option value="montblanc" >Montblanc</option>
                                                                                            <option value="chopard" >Chopard</option>
                                                                                            <option value="piaget" >Piaget</option>
                                                                                            <option value="blancpain" >Blancpain</option>
                                                                                            <option value="ulysse-nardin" >Ulysse Nardin</option>
                                                                                            <option value="panerai" >Panerai</option>
                                                                                            <option value="girard-perregaux" >Girard-Perregaux</option>
                                                                                            <option value="hublot" >Hublot</option>
                                                                                            <option value="bulgar" >Bulgari</option>
                                                                                            <option value="nomos-glashütte" >NOMOS Glashütte</option>
                                                                                            <option value="liv-watches" >LIV Watches</option>
                                                                                            <option value="breitling" >Breitling</option>
                                                                                            <option value="bremont" >Bremont</option>
                                                                                            <option value="tag-heuer" >TAG Heuer</option>
                                                                                            <option value="baume-&amp;-mercier" >Baume &amp; Mercier</option>
                                                                                            <option value="rado" >Rado</option>
                                                                                            <option value="maurice-lacroix" >Maurice Lacroix</option>
                                                                                            <option value="roger-dubuis" >Roger Dubuis</option>
                                                                                            <option value="f.p.journe" >F.P.Journe</option>
                                                                                            <option value="tiffany-&amp;-co." >Tiffany &amp; Co.</option>
                                                                                            <option value="bamford" >Bamford</option>
                                                                                            <option value="zenith" >Zenith</option>
                                                                                            <option value="bell-&amp;-ross" >Bell &amp; Ross</option>
                                                                                            <option value="arnold-&amp;-son" >Arnold &amp; Son</option>
                                                                                            <option value="tudor" >Tudor</option>
                                                                                            <option value="alpina" >Alpina</option>
                                                                                            <option value="seiko" >Seiko</option>
                                                                                            <option value="jaquet-droz" >Jaquet Droz</option>
                                                                                            <option value="hamilton" >Hamilton</option>
                                                                                            <option value="longines" >Longines</option>
                                                                                            <option value="maurice-de-mauriac" >Maurice de Mauriac</option>
                                                                                            <option value="parmigiani-fleurier" >Parmigiani Fleurier</option>
                                                                                            <option value="gucci" >Gucci</option>
                                                                                            <option value="weiss" >Weiss</option>
                                                                                            <option value="bmw" >BMW</option>
                                                                                            <option value="bianchi" >Bianchi</option>
                                                                                            <option value="beardmore-precision" >Beardmore Precision</option>
                                                                                            <option value="armani" >Armani</option>
                                                                                            <option value="blackburne" >Blackburne</option>
                                                                                            <option value="tissot" >Tissot</option>
                                                                                            <option value="brough-motorcycles" >Brough Motorcycles</option>
                                                                                            <option value="van-cleef-&amp;-arpels" >Van Cleef &amp; Arpels</option>
                                                                                            <option value="brough-superior" >Brough Superior</option>
                                                                                            <option value="bsa" >BSA</option>
                                                                                            <option value="can-am-motorcycles" >Can-Am Motorcycles</option>
                                                                                            <option value="chang-jiang" >Chang Jiang</option>
                                                                                            <option value="ceska-zbrojovka-strakonice" >Česká zbrojovka Strakonice</option>
                                                                                            <option value="laurent-ferrier" >Laurent Ferrier</option>
                                                                                            <option value="amd" >AMD</option>
                                                                                            <option value="avaya" >Avaya</option>
                                                                                            <option value="cisco" >Cisco</option>
                                                                                            <option value="alpine" >Alpine</option>
                                                                                            <option value="alpine" >Alpine</option>
                                                                                            <option value="casio" >Casio</option>
                                                                                            <option value="aetna-inc" >Aetna Inc</option>
                                                                                            <option value="medtronic" >Medtronic</option>
                                                                                            <option value="optum-health" >Optum Health</option>
                                                                                            <option value="cigna" >CIGNA</option>
                                                                                            <option value="express-scripts" >Express Scripts</option>
                                                                                            <option value="tenet-healthcare" >Tenet Healthcare</option>
                                                                                            <option value="stryker" >Stryker</option>
                                                                                            <option value="essilor" >Essilor</option>
                                                                                            <option value="centene" >Centene</option>
                                                                                            <option value="davita" >DaVita</option>
                                                                                            <option value="l’oréal" >L’Oréal</option>
                                                                                            <option value="unilever" >Unilever</option>
                                                                                            <option value="este-lauder" >Estée Lauder</option>
                                                                                            <option value="proctor-and-gamble" >Proctor and Gamble</option>
                                                                                            <option value="coty" >Coty</option>
                                                                                            <option value="beiersdorf" >Beiersdorf</option>
                                                                                            <option value="johnson-&amp;-johnson" >Johnson &amp; Johnson</option>
                                                                                            <option value="amore-pacific" >Amore Pacific</option>
                                                                                            <option value="kao-corporation" >Kao Corporation</option>
                                                                                            <option value="colgate" >Colgate</option>
                                                                                            <option value="lvmh" >LVMH</option>
                                                                                            <option value="l-brands" >L Brands</option>
                                                                                            <option value="henkel" >Henkel</option>
                                                                                            <option value="avon" >Avon</option>
                                                                                            <option value="natura" >Natura</option>
                                                                                            <option value="kose" >Kose</option>
                                                                                            <option value="revlon" >Revlon</option>
                                                                                            <option value="gillette" >Gillette</option>
                                                                                            <option value="clarion" >Clarion</option>
                                                                                            <option value="fujifilm" >Fujifilm</option>
                                                                                            <option value="nivea" >NIVEA</option>
                                                                                            <option value="hltachi" >Hltachi</option>
                                                                                            <option value="konica" >Konica</option>
                                                                                            <option value="renesas" >Renesas</option>
                                                                                            <option value="gigabyte" >Gigabyte</option>
                                                                                            <option value="clinique" >CLINIQUE</option>
                                                                                            <option value="via-technologles" >VIA Technologles</option>
                                                                                            <option value="surya" >SURYA</option>
                                                                                            <option value="guerlain" >GUERLAIN</option>
                                                                                            <option value="benq" >BenQ</option>
                                                                                            <option value="shiseido" >SHISEIDO</option>
                                                                                            <option value="haler" >Haler</option>
                                                                                            <option value="voltas" >Voltas</option>
                                                                                            <option value="garnier" >GARNIER</option>
                                                                                            <option value="epcos" >Epcos</option>
                                                                                            <option value="pantene" >PANTENE</option>
                                                                                            <option value="grundig" >Grundig</option>
                                                                                            <option value="dove" >DOVE</option>
                                                                                            <option value="head-&amp;-shoulders" >HEAD &amp; SHOULDERS</option>
                                                                                            <option value="loewe" >Loewe</option>
                                                                                            <option value="clarins" >CLARINS</option>
                                                                                            <option value="humax" >Humax</option>
                                                                                            <option value="sindoh" >Sindoh</option>
                                                                                            <option value="lancome" >LANCOME</option>
                                                                                            <option value="trust" >Trust</option>
                                                                                            <option value="amazon" >Amazon</option>
                                                                                            <option value="benefit" >BENEFIT</option>
                                                                                            <option value="at&amp;t-telecoms" >AT&amp;T Telecoms</option>
                                                                                            <option value="verizon" >Verizon</option>
                                                                                            <option value="facebook" >Facebook</option>
                                                                                            <option value="ntt-group" >NTT Group</option>
                                                                                            <option value="deutsche" >Deutsche</option>
                                                                                            <option value="ibm" >IBM</option>
                                                                                            <option value="olay" >OLAY</option>
                                                                                            <option value="crest" >Crest</option>
                                                                                            <option value="oral-b" >Oral-B</option>
                                                                                            <option value="rexona" >REXONA</option>
                                                                                            <option value="axe" >AXE</option>
                                                                                            <option value="neutrogena" >NEUTROGENA</option>
                                                                                            <option value="samsung" >Samsung</option>
                                                                                            <option value="huawei" >Huawei</option>
                                                                                            <option value="nokia" >Nokia</option>
                                                                                            <option value="htc" >HTC</option>
                                                                                            <option value="lenovo" >Lenovo</option>
                                                                                            <option value="panasonic" >Panasonic</option>
                                                                                            <option value="motorola" >Motorola</option>
                                                                                            <option value="oppo" >Oppo</option>
                                                                                            <option value="vivo" >Vivo</option>
                                                                                            <option value="realme" >Realme</option>
                                                                                            <option value="oneplus" >One Plus</option>
                                                                                            <option value="tecno" >Tecno</option>
                                                                                            <option value="asus" >Asus</option>
                                                                                            <option value="zte" >ZTE</option>
                                                                                            <option value="lenovo" >Lenovo</option>
                                                                                            <option value="hp" >HP</option>
                                                                                            <option value="dell" >Dell</option>
                                                                                            <option value="microsoft" >Microsoft</option>
                                                                                            <option value="walton" >Walton</option>
                                                                                            <option value="cagiva" >Cagiva</option>
                                                                                            <option value="razer" >Razer</option>
                                                                                            <option value="carabela" >Carabela</option>
                                                                                            <option value="cheney-racing" >Cheney Racing</option>
                                                                                            <option value="clews-competition-motorcycles" >Clews Competition Motorcycles</option>
                                                                                            <option value="toshiba" >Toshiba</option>
                                                                                            <option value="lg" >LG</option>
                                                                                            <option value="cleveland-cyclewerks" >Cleveland CycleWerks</option>
                                                                                            <option value="gigabyte" >Gigabyte</option>
                                                                                            <option value="confederate-motors" >Confederate Motors</option>
                                                                                            <option value="xiaomi" >Xiaomi</option>
                                                                                            <option value="iball" >iBall</option>
                                                                                            <option value="ceccato" >Ceccato</option>
                                                                                            <option value="cyberpowerpc" >CyberpowerPC</option>
                                                                                            <option value="cimatti" >Cimatti</option>
                                                                                            <option value="buck-mason" >Buck Mason</option>
                                                                                            <option value="cooper" >Cooper</option>
                                                                                            <option value="centralne-warsztaty-samochodowe" >Centralne Warsztaty Samochodowe</option>
                                                                                            <option value="everlane" >Everlane</option>
                                                                                            <option value="calthorpe-motor" >Calthorpe Motor Company</option>
                                                                                            <option value="mack-weldon" >Mack Weldon</option>
                                                                                            <option value="clyno" >Clyno</option>
                                                                                            <option value="bonobos" >Bonobos</option>
                                                                                            <option value="cotton-motor" >Cotton Motor</option>
                                                                                            <option value="fear-of-cod" >Fear of Cod</option>
                                                                                            <option value="uniqlo" >Uniqlo</option>
                                                                                            <option value="coventry-eagle-crocker-motorcycle" >Coventry-Eagle Crocker Motorcycle</option>
                                                                                            <option value="cushman" >Cushman</option>
                                                                                            <option value="dafra-motos" >Dafra Motos</option>
                                                                                            <option value="dayun" >Dayun</option>
                                                                                            <option value="champion" >Champion</option>
                                                                                            <option value="ducati-motor" >Ducati Motor</option>
                                                                                            <option value="dyl-motorcycles" >DYL Motorcycles</option>
                                                                                            <option value="outdoor-voices" >Outdoor Voices</option>
                                                                                            <option value="patagonia" >Patagonia</option>
                                                                                            <option value="new-balance-fresh-foam" >New Balance Fresh Foam</option>
                                                                                            <option value="carhartt" >Carhartt</option>
                                                                                            <option value="moncler" >Moncler</option>
                                                                                            <option value="acne-studios" >Acne Studios</option>
                                                                                            <option value="junghans" >Junghans</option>
                                                                                            <option value="reigning-champ" >Reigning Champ</option>
                                                                                            <option value="levi’s" >Levi’s</option>
                                                                                            <option value="bulova" >Bulova</option>
                                                                                            <option value="nike" >Nike</option>
                                                                                            <option value="bovet-fleurier" >Bovet Fleurier</option>
                                                                                            <option value="louis-vuitton" >Louis Vuitton</option>
                                                                                            <option value="oris" >Oris</option>
                                                                                            <option value="hermes" >Hermes</option>
                                                                                            <option value="mikimoto" >Mikimoto</option>
                                                                                            <option value="zalado" >Zalado</option>
                                                                                            <option value="bvlgari" >BVLgari</option>
                                                                                            <option value="adidas" >Adidas</option>
                                                                                            <option value="graff" >graff</option>
                                                                                            <option value="tiffany" >Tiffany</option>
                                                                                            <option value="buccellati" >BUccellati</option>
                                                                                            <option value="zara" >Zara</option>
                                                                                            <option value="harry-winston" >Harry Winston</option>
                                                                                            <option value="kate-spade" >kate spade</option>
                                                                                            <option value="certier" >Certier</option>
                                                                                            <option value="michael-kors" >Michael kors</option>
                                                                                            <option value="lululemon" >Lululemon</option>
                                                                                            <option value="chanel" >Chanel</option>
                                                                                            <option value="hermes" >Hermes</option>
                                                                                            <option value="balenciaga" >Balenciaga</option>
                                                                                            <option value="prada" >Prada</option>
                                                                                            <option value="marc-jacobs" >Marc jacobs</option>
                                                                                            <option value="christian-dior" >Christian Dior</option>
                                                                                            <option value="asics" >ASICS</option>
                                                                                            <option value="fila" >Fila</option>
                                                                                            <option value="vf-corporation" >VF Corporation</option>
                                                                                            <option value="under-armour" >Under Armour</option>
                                                                                            <option value="columbia-sportswear" >Columbia sportswear</option>
                                                                                            <option value="reebok" >Reebok</option>
                                                                                            <option value="lego" >lego</option>
                                                                                            <option value="bandai-namco" >Bandai Namco</option>
                                                                                            <option value="fisher-price" >fisher price</option>
                                                                                            <option value="barbie" >barbie</option>
                                                                                            <option value="nerf" >nerf</option>
                                                                                            <option value="hasbro" >hasbro</option>
                                                                                            <option value="hot-wheels" >Hot Wheels</option>
                                                                                            <option value="my-little-pony" >My little pony</option>
                                                                                            <option value="mattle" >mattle</option>
                                                                                            <option value="mobile-suit-gundam" >mobile suit gundam</option>
                                                                                            <option value="play-doh" >play doh</option>
                                                                                            <option value="monopoly" >Monopoly</option>
                                                                                            <option value="playskool" >Playskool</option>
                                                                                            <option value="magic:-the-gathering" >Magic: The gathering</option>
                                                                                            <option value="derbi" >Derbi</option>
                                                                                            <option value="delta-gnom" >Delta-Gnom</option>
                                                                                            <option value="moster-high" >Moster high</option>
                                                                                            <option value="dollar" >Dollar</option>
                                                                                            <option value="mega-bloks" >Mega Bloks</option>
                                                                                            <option value="d-rad" >D-Rad</option>
                                                                                            <option value="yo-kai-watch" >Yo kai Watch</option>
                                                                                            <option value="transformers" >Transformers</option>
                                                                                            <option value="power-rangers" >power rangers</option>
                                                                                            <option value="dkw" >DKW</option>
                                                                                            <option value="amaerican-girls" >Amaerican girls</option>
                                                                                            <option value="tomica" >Tomica</option>
                                                                                            <option value="della-ferrera" >Della Ferrera</option>
                                                                                            <option value="tomy" >Tomy</option>
                                                                                            <option value="dot-cycle-and-motor" >Dot Cycle and Motor</option>
                                                                                            <option value="walt-disney" >Walt Disney</option>
                                                                                            <option value="douglas" >Douglas</option>
                                                                                            <option value="dnepr" >Dnepr</option>
                                                                                            <option value="comcast" >Comcast</option>
                                                                                            <option value="dresch" >Dresch</option>
                                                                                            <option value="evoke-motorcycles" >Evoke Motorcycles</option>
                                                                                            <option value="energica-motor" >Energica Motor</option>
                                                                                            <option value="electric-motor" >Electric Motor</option>
                                                                                            <option value="erik-buell-racing" >Erik Buell Racing</option>
                                                                                            <option value="eso" >Eso</option>
                                                                                            <option value="express-werke" >Express Werke</option>
                                                                                            <option value="escorts" >Escorts</option>
                                                                                            <option value="eisenacher-motorenwerk" >Eisenacher Motorenwerk</option>
                                                                                            <option value="emc-motorcycles" >EMC Motorcycles</option>
                                                                                            <option value="excelsior-motor" >Excelsior Motor</option>
                                                                                            <option value="excelsior-motor-manufacturing-supply" >Excelsior Motor Manufacturing &amp; Supply</option>
                                                                                            <option value="excelsior-henderson-motorcycle" >Excelsior-Henderson Motorcycle</option>
                                                                                            <option value="fantic-motor" >Fantic Motor</option>
                                                                                            <option value="fn" >FN</option>
                                                                                            <option value="fb-mondial" >FB Mondial</option>
                                                                                            <option value="frera" >Frera</option>
                                                                                            <option value="fusi" >Fusi</option>
                                                                                            <option value="famel" >FAMEL</option>
                                                                                            <option value="francis-barnett-fischer-motor-company" >Francis-Barnett Fischer Motor Company</option>
                                                                                            <option value="flying-merkel" >Flying Merkel</option>
                                                                                            <option value="chevrolet" >Chevrolet</option>
                                                                                            <option value="honda" >Honda</option>
                                                                                            <option value="nissan" >Nissan</option>
                                                                                            <option value="ford" >Ford</option>
                                                                                            <option value="fiat" >Fiat</option>
                                                                                            <option value="jeep" >Jeep</option>
                                                                                            <option value="volkswagen" >Volkswagen</option>
                                                                                            <option value="jaguar" >jaguar</option>
                                                                                            <option value="audi" >Audi</option>
                                                                                            <option value="netflix" >Netflix</option>
                                                                                            <option value="sony" >Sony</option>
                                                                                            <option value="charter-communication" >Charter Communication</option>
                                                                                            <option value="thomson-reuters" >Thomson Reuters</option>
                                                                                            <option value="paramount-global" >Paramount Global</option>
                                                                                            <option value="fox" >Fox</option>
                                                                                            <option value="whirlpool" >Whirlpool</option>
                                                                                            <option value="amana" >Amana</option>
                                                                                            <option value="land-rover" >land rover</option>
                                                                                            <option value="lexus" >Lexus</option>
                                                                                            <option value="porsche" >Porsche</option>
                                                                                            <option value="bugatti" >Bugatti</option>
                                                                                            <option value="bentley" >Bentley</option>
                                                                                            <option value="rolls-royce" >Rolls Royce</option>
                                                                                            <option value="tesla" >Tesla</option>
                                                                                            <option value="mercedes-benz" >Mercedes Benz</option>
                                                                                            <option value="cvs-health" >CVS Health</option>
                                                                                            <option value="united-health" >United Health</option>
                                                                                            <option value="mckesson" >McKesson</option>
                                                                                            <option value="amerisourcebergen" >AmerisourceBergen</option>
                                                                                            <option value="cigna" >Cigna</option>
                                                                                            <option value="cardinal-health" >Cardinal Health</option>
                                                                                            <option value="anthem" >Anthem</option>
                                                                                            <option value="centene" >Centene</option>
                                                                                            <option value="humana" >Humana</option>
                                                                                            <option value="frigidaire" >FRigidaire</option>
                                                                                            <option value="maytag" >Maytag</option>
                                                                                            <option value="miele" >Miele</option>
                                                                                            <option value="gaggenau" >Gaggenau</option>
                                                                                            <option value="bosch" >Bosch</option>
                                                                                            <option value="kitchenaid" >KitchenAid</option>
                                                                                            <option value="alibaba" >Alibaba</option>
                                                                                            <option value="xfinity" >Xfinity</option>
                                                                                            <option value="oracle" >Oracle</option>
                                                                                            <option value="tencent" >Tencent</option>
                                                                                            <option value="vodafone" >Vodafone</option>
                                                                                            <option value="orange" >Orange</option>
                                                                                            <option value="accenture" >Accenture</option>
                                                                                            <option value="au" >Au</option>
                                                                                            <option value="intel" >Intel</option>
                                                                                            <option value="godaddy" >GoDaddy</option>
                                                                                            <option value="namecheap" >Namecheap</option>
                                                                                            <option value="tucows-domains" >Tucows Domains</option>
                                                                                            <option value="google-domains" >Google Domains</option>
                                                                                            <option value="network-solutions" >Network Solutions</option>
                                                                                            <option value="ionos" >IONOS</option>
                                                                                            <option value="pdr" >PDR</option>
                                                                                            <option value="onamae-gmo-internet" >Onamae(GMO Internet)</option>
                                                                                            <option value="namesilo" >Name Silo</option>
                                                                                            <option value="ovh-cloud" >OVH Cloud</option>
                                                                                            <option value="enom" >Enom</option>
                                                                                            <option value="alibaba-cloud-computing-beijing" >Alibaba Cloud Computing Beijing</option>
                                                                                            <option value="name-bright" >Name Bright</option>
                                                                                            <option value="dynadot" >Dynadot</option>
                                                                                            <option value="reg.ru" >REG.RU</option>
                                                                                            <option value="hichina" >HiChina</option>
                                                                                            <option value="key-systems" >Key-Systems</option>
                                                                                            <option value="wix" >Wix</option>
                                                                                            <option value="fastdomain" >FastDomain</option>
                                                                                            <option value="inmotion-hosting" >InMotion Hosting</option>
                                                                                            <option value="cloudways" >Cloudways</option>
                                                                                            <option value="hostgator" >HostGator</option>
                                                                                            <option value="hostwinds" >Hostwinds</option>
                                                                                            <option value="bluehost" >Bluehost</option>
                                                                                            <option value="ipage" >iPage</option>
                                                                                            <option value="hostfav" >HostFav</option>
                                                                                            <option value="dreamhost" >DreamHost</option>
                                                                                            <option value="host-monster" >Host Monster</option>
                                                                                            <option value="fasthosts" >Fasthosts</option>
                                                                                            <option value="greengeeks" >GreenGeeks</option>
                                                                                            <option value="justhost" >Justhost</option>
                                                                                            <option value="siteground" >SiteGround</option>
                                                                                            <option value="host1plus" >Host1Plus</option>
                                                                                            <option value="eukhost" >eUKhost</option>
                                                                                            <option value="arvixe" >Arvixe</option>
                                                                                            <option value="google" >Google</option>
                                                                                            <option value="youtube" >Youtube</option>
                                                                                            <option value="yahoo" >Yahoo</option>
                                                                                            <option value="reddit" >Reddit</option>
                                                                                            <option value="wikipedia" >Wikipedia</option>
                                                                                            <option value="ebay" >eBay</option>
                                                                                            <option value="bing" >Bing</option>
                                                                                            <option value="aarong" >Aarong</option>
                                                                                            <option value="cats-eye" >Cats Eye</option>
                                                                                            <option value="richman" >Richman</option>
                                                                                            <option value="yellow" >Yellow</option>
                                                                                            <option value="ecstasy" >Ecstasy</option>
                                                                                            <option value="le-reve" >Le Reve</option>
                                                                                            <option value="kay-kraft" >Kay Kraft</option>
                                                                                            <option value="dorjibari" >Dorjibari</option>
                                                                                            <option value="anjans" >Anjan’s</option>
                                                                                            <option value="westecs" >Westecs</option>
                                                                                            <option value="artisti" >Artisti</option>
                                                                                            <option value="gentlepark" >GentlePark</option>
                                                                                            <option value="grameen-uniqlo" >Grameen Uniqlo</option>
                                                                                            <option value="illiyeen" >ILLIYEEN</option>
                                                                                            <option value="twelve-clothing" >Twelve Clothing</option>
                                                                                            <option value="lubnan" >Lubnan</option>
                                                                                            <option value="grameencheck" >Grameencheck</option>
                                                                                            <option value="klubhaus" >Klubhaus</option>
                                                                                            <option value="jotey" >Jotey</option>
                                                                                            <option value="hostever" >Hostever</option>
                                                                                            <option value="my-light-host" >My light host</option>
                                                                                            <option value="nogordola" >Nogordola</option>
                                                                                            <option value="hostingbangladesh" >Hostingbangladesh</option>
                                                                                            <option value="web-host-bd" >Web host bd</option>
                                                                                            <option value="hostmight" >Hostmight</option>
                                                                                            <option value="eicra-soft" >Eicra Soft</option>
                                                                                            <option value="dhaka-web-host" >Dhaka web host</option>
                                                                                            <option value="zhostbd" >Zhostbd</option>
                                                                                            <option value="eyhost" >Eyhost</option>
                                                                                            <option value="hype-dhaka" >Hype Dhaka</option>
                                                                                            <option value="wphostsell" >Wphostsell</option>
                                                                                            <option value="hosting-dokan" >Hosting Dokan</option>
                                                                                            <option value="domain-racer" >Domain Racer</option>
                                                                                            <option value="dianahost" >Dianahost</option>
                                                                                            <option value="xenobd" >Xenobd</option>
                                                                                            <option value="hosting4bd" >Hosting4bd</option>
                                                                                            <option value="putulhost" >Putulhost</option>
                                                                                            <option value="greenweb" >Greenweb</option>
                                                                                            <option value="starhostbd" >Starhostbd</option>
                                                                                            <option value="acros-mxico" >Acros (México)</option>
                                                                                            <option value="affresh-washer-cleaners" >Affresh Washer Cleaners</option>
                                                                                            <option value="ariston" >Ariston</option>
                                                                                            <option value="bauknecht" >Bauknecht</option>
                                                                                            <option value="brastemp-brazil" >Brastemp (Brazil)</option>
                                                                                            <option value="consul" >Consul</option>
                                                                                            <option value="diqua-china" >Diqua (China)</option>
                                                                                            <option value="estate" >Estate</option>
                                                                                            <option value="everydrop" >EveryDrop</option>
                                                                                            <option value="gladiator-garageworks" >Gladiator GarageWorks</option>
                                                                                            <option value="hefei-sanyo-china" >Hefei Sanyo (China)</option>
                                                                                            <option value="hotpoint-europe" >Hotpoint (Europe)</option>
                                                                                            <option value="ignis" >Ignis</option>
                                                                                            <option value="indesit" >Indesit</option>
                                                                                            <option value="jenn-air" >Jenn-Air</option>
                                                                                            <option value="polar" >Polar</option>
                                                                                            <option value="privileg" >Privileg</option>
                                                                                            <option value="roper" >Roper</option>
                                                                                            <option value="royalstar-china" >Royalstar (China)</option>
                                                                                            <option value="stinol" >Stinol</option>
                                                                                            <option value="mars-petcare-inc." >Mars Petcare Inc.</option>
                                                                                            <option value="p-&amp;-g-pet-care" >P &amp; G Pet Care</option>
                                                                                            <option value="total-alimentos-sa" >Total Alimentos SA</option>
                                                                                            <option value="nutro-products" >Nutro Products</option>
                                                                                            <option value="del-monte-pet" >Del Monte Pet</option>
                                                                                            <option value="affinity-petcare-sa" >Affinity Petcare SA</option>
                                                                                            <option value="nutriara-alimentos" >Nutriara Alimentos</option>
                                                                                            <option value="hill’s-pet-nutrition" >Hill’s Pet Nutrition</option>
                                                                                            <option value="j-m-smucker" >J M Smucker</option>
                                                                                            <option value="diamond-pet-foods" >Diamond Pet Foods</option>
                                                                                            <option value="united-pet" >United Pet</option>
                                                                                            <option value="ainsworth-pet-nutrition" >Ainsworth Pet Nutrition</option>
                                                                                            <option value="uniross" >Uniross</option>
                                                                                            <option value="konka" >Konka</option>
                                                                                            <option value="beelink" >Beelink</option>
                                                                                            <option value="tanix" >Tanix</option>
                                                                                            <option value="deli" >Deli</option>
                                                                                            <option value="thermaltake" >Thermaltake</option>
                                                                                            <option value="square-pharmaceuticals" >Square Pharmaceuticals</option>
                                                                                            <option value="renata" >Renata</option>
                                                                                            <option value="healthcare-pharmaceuticals-limited" >Healthcare Pharmaceuticals Limited</option>
                                                                                            <option value="opsonin-pharma" >Opsonin Pharma</option>
                                                                                            <option value="unicharm-corp" >Unicharm Corp</option>
                                                                                            <option value="deuerer" >Deuerer</option>
                                                                                            <option value="thai-union" >Thai Union</option>
                                                                                            <option value="heristo-ag" >Heristo AG</option>
                                                                                            <option value="wellpet" >WellPet</option>
                                                                                            <option value="agrolimen-sa" >Agrolimen SA</option>
                                                                                            <option value="jeil-feed" >Jeil Feed</option>
                                                                                            <option value="eskayef-pharmaceuticals" >Eskayef Pharmaceuticals</option>
                                                                                            <option value="c&amp;d-foods" >C&amp;D Foods</option>
                                                                                            <option value="aristopharma-limited" >Aristopharma Limited</option>
                                                                                            <option value="petmate" >Petmate</option>
                                                                                            <option value="bizcope" >Bizcope</option>
                                                                                            <option value="mammoth-pet-products" >Mammoth Pet Products</option>
                                                                                            <option value="outsource-2-bd" >Outsource 2 BD</option>
                                                                                            <option value="opro-infotech" >OPRO INFOTECH</option>
                                                                                            <option value="idrobeinc" >iDrobeinc</option>
                                                                                            <option value="happy-pet" >Happy Pet</option>
                                                                                            <option value="studio-backdoor" >Studio Backdoor</option>
                                                                                            <option value="rosewood-pet" >Rosewood Pet</option>
                                                                                            <option value="zoetis" >Zoetis</option>
                                                                                            <option value="al-amin-it" >Al Amin It</option>
                                                                                            <option value="merial" >Merial</option>
                                                                                            <option value="acme-laboratories" >ACME Laboratories</option>
                                                                                            <option value="blackboard-digital" >Blackboard Digital</option>
                                                                                            <option value="msd-animal-health" >MSD Animal Health</option>
                                                                                            <option value="keya" >Keya</option>
                                                                                            <option value="crack-brigade" >Crack Brigade</option>
                                                                                            <option value="bayer" >Bayer</option>
                                                                                            <option value="kohinoor" >Kohinoor</option>
                                                                                            <option value="digitomark" >Digitomark</option>
                                                                                            <option value="lalbagh-chemical" >Lalbagh Chemical</option>
                                                                                            <option value="doodle-digital" >Doodle Digital</option>
                                                                                            <option value="lead-gravity" >Lead Gravity</option>
                                                                                            <option value="unilever-bangladesh" >Unilever Bangladesh</option>
                                                                                            <option value="marico" >Marico</option>
                                                                                            <option value="kumarika" >Kumarika</option>
                                                                                            <option value="cute" >Cute</option>
                                                                                            <option value="lily-cosmetics" >Lily Cosmetics</option>
                                                                                            <option value="rident-digital" >Rident Digital</option>
                                                                                            <option value="technosmith" >Technosmith</option>
                                                                                            <option value="green-pets-organic" >Green Pets Organic</option>
                                                                                            <option value="elanco" >Elanco</option>
                                                                                            <option value="dog-is-good" >Dog Is Good</option>
                                                                                            <option value="beaphar" >Beaphar</option>
                                                                                            <option value="petguard" >PetGuard</option>
                                                                                            <option value="american-health-kennels" >American Health Kennels</option>
                                                                                            <option value="blue-buffalo" >Blue Buffalo</option>
                                                                                            <option value="taste-of-the-wild" >Taste Of The Wild</option>
                                                                                            <option value="pure-balance" >Pure Balance</option>
                                                                                            <option value="wellness-natural-pet-food" >Wellness Natural Pet Food</option>
                                                                                            <option value="rachael-ray’s-nutrish" >Rachael Ray’s Nutrish</option>
                                                                                            <option value="natural-balance" >Natural Balance</option>
                                                                                            <option value="canidae" >Canidae</option>
                                                                                            <option value="merrick" >Merrick</option>
                                                                                            <option value="olevs" >OLEVS</option>
                                                                                            <option value="helix" >Helix</option>
                                                                                            <option value="skmei" >SKMEI</option>
                                                                                            <option value="naviforce" >Naviforce</option>
                                                                                            <option value="titan" >TITAN</option>
                                                                                            <option value="al-amin-jewellers" >Al-Amin Jewellers</option>
                                                                                            <option value="amin-jewellers" >Amin Jewellers</option>
                                                                                            <option value="purobi-jewellers" >Purobi Jewellers</option>
                                                                                            <option value="royal-diamond" >Royal Diamond</option>
                                                                                            <option value="louiswill" >LouisWill</option>
                                                                                            <option value="trek-bicycle-corporation" >Trek Bicycle Corporation</option>
                                                                                            <option value="president" >PRESIDENT</option>
                                                                                            <option value="connondale" >Connondale</option>
                                                                                            <option value="ssb-leather" >SSB Leather</option>
                                                                                            <option value="pink-flash" >Pink Flash</option>
                                                                                            <option value="kona-bikes" >Kona Bikes</option>
                                                                                            <option value="colnago" >Colnago</option>
                                                                                            <option value="bata" >Bata</option>
                                                                                            <option value="apex-footwear" >Apex Footwear</option>
                                                                                            <option value="bay-emporium" >Bay Emporium</option>
                                                                                            <option value="orion-footwear" >Orion Footwear</option>
                                                                                            <option value="jennys" >Jennys</option>
                                                                                            <option value="walkar-footwear" >Walkar Footwear</option>
                                                                                            <option value="step-footwear" >Step Footwear</option>
                                                                                            <option value="lotto" >Lotto</option>
                                                                                            <option value="raleigh" >Raleigh</option>
                                                                                            <option value="cervelo" >Cervelo</option>
                                                                                            <option value="orbea" >Orbea</option>
                                                                                            <option value="bmc-switzerland" >BMC Switzerland</option>
                                                                                            <option value="merida" >Merida</option>
                                                                                            <option value="abbotsfor" >Abbotsfor</option>
                                                                                            <option value="abe-star" >Abe-Star</option>
                                                                                            <option value="abra" >Abra</option>
                                                                                            <option value="acabion" >Acabion</option>
                                                                                            <option value="access-motors" >Access Motors</option>
                                                                                            <option value="ace-motor-corporation" >Ace Motor Corporation</option>
                                                                                            <option value="adiva" >Adiva</option>
                                                                                            <option value="adler" >Adler</option>
                                                                                            <option value="adly-moto" >Adly Moto</option>
                                                                                            <option value="aeon" >Aeon</option>
                                                                                            <option value="symphony" >symphony</option>
                                                                                            <option value="itel" >itel</option>
                                                                                            <option value="infinix" >infinix</option>
                                                                                            <option value="honor" >honor</option>
                                                                                            <option value="blackberry" >Blackberry</option>
                                                                                            <option value="alcatel" >alcatel</option>
                                                                                            <option value="tcl" >TCL</option>
                                                                                            <option value="meizu" >meizu</option>
                                                                                            <option value="umidigi" >umidigi</option>
                                                                                            <option value="lava" >lava</option>
                                                                                            <option value="maximus" >maximus</option>
                                                                                            <option value="helio" >helio</option>
                                                                                            <option value="dcl" >DCL</option>
                                                                                            <option value="fujitsu" >fujitsu</option>
                                                                                            <option value="msi" >MSI</option>
                                                                                            <option value="etoro" >Etoro</option>
                                                                                            <option value="wirex" >wirex</option>
                                                                                            <option value="cex" >CEX</option>
                                                                                            <option value="binance" >binance</option>
                                                                                            <option value="kraken" >kraken</option>
                                                                                            <option value="coinmama" >coinmama</option>
                                                                                            <option value="paxful" >paxful</option>
                                                                                            <option value="local-bitcoins" >local bitcoins</option>
                                                                                            <option value="crypto" >crypto</option>
                                                                                            <option value="shwapno" >Shwapno</option>
                                                                                            <option value="agora" >Agora</option>
                                                                                            <option value="unimart" >Unimart</option>
                                                                                            <option value="pick-&amp;-pay" >Pick &amp; Pay</option>
                                                                                            <option value="square-food-&amp;-beverage" >Square Food &amp; Beverage</option>
                                                                                            <option value="akij-food-and-beverage" >Akij Food and Beverage</option>
                                                                                            <option value="pran-foods" >PRAN Foods</option>
                                                                                            <option value="aci-foods" >ACI Foods</option>
                                                                                            <option value="ispahani-foods-ltd" >Ispahani Foods Ltd</option>
                                                                                            <option value="bombay-sweets" >Bombay Sweets</option>
                                                                                            <option value="incepta-pharmaceutical-ltd" >Incepta Pharmaceutical Ltd</option>
                                                                                            <option value="beximco-pharmaceuticals" >Beximco Pharmaceuticals</option>
                                                                                            <option value="drug" >Drug</option>
                                                                                            <option value="aermacchi" >Aermacchi</option>
                                                                                            <option value="agrati-garelli" >Agrati Garelli</option>
                                                                                            <option value="ajp" >AJP</option>
                                                                                            <option value="ajs" >AJS</option>
                                                                                            <option value="akt-motos" >AKT Motos</option>
                                                                                            <option value="alfer" >Alfer</option>
                                                                                            <option value="alligator-motorcycle" >Alligator Motorcycle</option>
                                                                                            <option value="allstate" >Allstate</option>
                                                                                            <option value="aprilia" >Aprilia</option>
                                                                                            <option value="atlas-honda" >Atlas Honda</option>
                                                                                            <option value="ap-honda" >A.P. Honda</option>
                                                                                            <option value="ariel-motor" >Ariel Motor</option>
                                                                                            <option value="arch-motorcycle" >Arch Motorcycle</option>
                                                                                            <option value="atk-motorcycles" >ATK Motorcycles</option>
                                                                                            <option value="agrale" >Agrale</option>
                                                                                            <option value="inglis" >Inglis</option>
                                                                                            <option value="others" >Others</option>
                                                                                            <option value="hamdard" >Hamdard</option>
                                                                                            <option value="my-one-ap59y" >My One</option>
                                                                                            <option value="jamuna" >Jamuna</option>
                                                                                            <option value="TVS-1LjnX" >TVS</option>
                                                                                            <option value="Runner-MAvUs" >Runner</option>
                                                                                            <option value="Hero-3KKsT" >Hero</option>
                                                                                            <option value="Lifan-GzwOU" >Lifan</option>
                                                                                            <option value="KTM-8eyxs" >KTM</option>
                                                                                            <option value="KEEWAY-sAUwH" >KEEWAY</option>
                                                                                            <option value="KAWASAKI-opHpV" >KAWASAKI</option>
                                                                                            <option value="Royal-Enfield-kGhKy" >Royal Enfield</option>
                                                                                            <option value="singer" >Singer</option>
                                                                                    </select>
                                                                    </div>
                                <div class="col-6 col-lg-auto mb-3 w-lg-200px">
                                    <label class="mb-0 opacity-50">Sort by</label>
                                    <select class="form-control form-control-sm aiz-selectpicker" name="sort_by" onchange="filter()">
                                        <option value="newest" >Newest</option>
                                        <option value="oldest" >Oldest</option>
                                        <option value="price-asc" >Price low to high</option>
                                        <option value="price-desc" >Price high to low</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <input type="hidden" name="min_price" value="">
                        <input type="hidden" name="max_price" value="">
                        <div class="row gutters-5 row-cols-xxl-5 row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/coriander-leaves-dhonia-pata-10-gm-2" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/BmCScDBn9c286So1e0Vf2CIM8bdO6xNAXNBKU6KF.webp"
                alt="Coriander Leaves (Dhonia Pata) ± 10 gm"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7980)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7980)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7980)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳30 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/coriander-leaves-dhonia-pata-10-gm-2" class="d-block text-reset">Coriander Leaves (Dhonia Pata) ± 10 gm</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
            <span class="badge-custom">OFF<span class="box ml-1 mr-0">&nbsp;10%</span></span>
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/tummy-trimmer-exerciser-home-fitness-equipment-double-spring" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/U3llnOnkXJqDInqU6ZJ1aZN60ciB6XQxvQR6zoLj.jpg"
                alt="Tummy Trimmer Exerciser - Home Fitness Equipment (Double Spring)"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7234)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7234)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7234)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                            <del class="fw-600 opacity-50 mr-1">৳500</del>
                        <span class="fw-700 text-primary">৳450 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-10%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/tummy-trimmer-exerciser-home-fitness-equipment-double-spring" class="d-block text-reset">Tummy Trimmer Exerciser - Home Fitness Equipment (Double Spring)</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
            <span class="badge-custom">OFF<span class="box ml-1 mr-0">&nbsp;40%</span></span>
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/5-in-1-beauty-care-massager-3" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/D7b7q4NEkekNYufusLMXWpq0K2rmH6uovRebslo9.jpg"
                alt="5 in 1 Beauty Care Massager"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7233)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7233)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7233)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                            <del class="fw-600 opacity-50 mr-1">৳250</del>
                        <span class="fw-700 text-primary">৳150 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-40%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/5-in-1-beauty-care-massager-3" class="d-block text-reset">5 in 1 Beauty Care Massager</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
            <span class="badge-custom">OFF<span class="box ml-1 mr-0">&nbsp;26%</span></span>
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/flawless-hair-remover-by-finishing-touch" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/jToABj7rfA6MIwRYN5a4oFxfMXTM4V5W9ATP6xhR.png"
                alt="FLAWLESS Hair Remover by Finishing Touch"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7232)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7232)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7232)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                            <del class="fw-600 opacity-50 mr-1">৳380</del>
                        <span class="fw-700 text-primary">৳280 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-26%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/flawless-hair-remover-by-finishing-touch" class="d-block text-reset">FLAWLESS Hair Remover by Finishing Touch</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/sugar-free-pretzel-minimum-2-pcs" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/XT4tgGw22qII557G80zM3W8udd0OUobPBoQ9x9TF.webp"
                alt="Sugar free Pretzel (Minimum 2 pcs)"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7100)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7100)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7100)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳210 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/sugar-free-pretzel-minimum-2-pcs" class="d-block text-reset">Sugar free Pretzel (Minimum 2 pcs)</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/baklava-bokas-175-gm" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/gmpWY1UAQgnOdb43a29DehZXdJpVbI4IBa6jJKcK.webp"
                alt="Baklava Bokas -175 gm"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7099)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7099)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7099)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳350 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (2)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/baklava-bokas-175-gm" class="d-block text-reset">Baklava Bokas -175 gm</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/kunafa-belorian" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/LCR3dbC71k7oRCPuafhIjbOHnCV2tSzm4RtRKLq4.webp"
                alt="Kunafa Belorian"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7098)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7098)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7098)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳390 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/kunafa-belorian" class="d-block text-reset">Kunafa Belorian</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/halawet-el-jibn-8-pcs" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/BQbEwwqcWyJ8PmbHetmh4InmaaChTDO49Uv35LFc.webp"
                alt="Halawet El Jibn – (8 pcs)"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7097)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7097)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7097)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳370 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/halawet-el-jibn-8-pcs" class="d-block text-reset">Halawet El Jibn – (8 pcs)</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/sesame-cookies-200-gm" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/8OdierF6zqwTwi6CShPO7geS7EQwL9YExDsqJzBR.webp"
                alt="Sesame Cookies -200 gm"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7096)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7096)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7096)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳310 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/sesame-cookies-200-gm" class="d-block text-reset">Sesame Cookies -200 gm</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/salt-cookies-premium-200-gm-minimum-2-pcs" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/tNbc4bdhMOlycfFpfAJYvv4TNmDDR9xk8Gac6c9g.webp"
                alt="Salt Cookies Premium -200 gm (Minimum 2 pcs"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7095)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7095)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7095)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳215 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/salt-cookies-premium-200-gm-minimum-2-pcs" class="d-block text-reset">Salt Cookies Premium -200 gm (Minimum 2 pcs</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/pistachio-biscotti-200-gm" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/njdJkqnq4BYjriQiKeNf4xS5bVRMkaikvxyB6mVb.webp"
                alt="Pistachio Biscotti -200 gm"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7094)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7094)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7094)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳270 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/pistachio-biscotti-200-gm" class="d-block text-reset">Pistachio Biscotti -200 gm</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/peanut-butter-cookies-200-gm" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/a7iqFngd1qscFiGXOpGzgsMK2JygwqXcQJGQ81o4.webp"
                alt="Peanut Butter Cookies -200 gm"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7093)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7093)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7093)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳240 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/peanut-butter-cookies-200-gm" class="d-block text-reset">Peanut Butter Cookies -200 gm</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/garlic-rusk-300-gm-minimum-2-box" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/v0n6rk2hoVMVKr7OJ0QeW88ZV7hrHHh8dk5a01MN.webp"
                alt="Garlic Rusk -300 gm (Minimum 2 Box)"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7092)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7092)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7092)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳160 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/garlic-rusk-300-gm-minimum-2-box" class="d-block text-reset">Garlic Rusk -300 gm (Minimum 2 Box)</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/flavoured-macarons-5-pcs" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/n4AGgZOjp5RSgM4K0U9B7UOabIDtbrutEL1KtodB.webp"
                alt="Flavoured Macarons (5 pcs)"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7091)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7091)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7091)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳280 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/flavoured-macarons-5-pcs" class="d-block text-reset">Flavoured Macarons (5 pcs)</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/flavoured-macarons-10-pcs" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/grVmBszYCE0mwBYVSuZtOHO3YkFoC046gxTbxJOo.webp"
                alt="Flavoured Macarons (10 pcs)"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7090)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7090)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7090)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳580 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/flavoured-macarons-10-pcs" class="d-block text-reset">Flavoured Macarons (10 pcs)</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/chocolate-chip-cookies-200-gm" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/oLjVlpbrDcL12lsGzoGjrTuOKtFIXgffhGctkPs1.webp"
                alt="Chocolate Chip Cookies 200 gm"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7089)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7089)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7089)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳260 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/chocolate-chip-cookies-200-gm" class="d-block text-reset">Chocolate Chip Cookies 200 gm</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/chocolate-almond-cookies-200-gm" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/mYCxnKoY4NCEvogZ5yb4LyFj79uC5vapdKMYowPJ.webp"
                alt="Chocolate Almond Cookies – 200 gm"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7088)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7088)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7088)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳260 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/chocolate-almond-cookies-200-gm" class="d-block text-reset">Chocolate Almond Cookies – 200 gm</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/chocolate-walnut-cookies" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/mYCxnKoY4NCEvogZ5yb4LyFj79uC5vapdKMYowPJ.webp"
                alt="Chocolate Walnut Cookies"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7087)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7087)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7087)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳270 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/chocolate-walnut-cookies" class="d-block text-reset">Chocolate Walnut Cookies</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/cheese-ampamp-pepper-cookies-200-gm" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/eCh7DLete3f38Y5Q9vtbZZXo66DKPcSdIHo3A2Y4.webp"
                alt="Cheese &amp;amp;amp; Pepper Cookies -200 gm"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7086)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7086)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7086)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳280 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/cheese-ampamp-pepper-cookies-200-gm" class="d-block text-reset">Cheese &amp;amp;amp; Pepper Cookies -200 gm</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/nankhatai-cookies-200-gm" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/0vqyvKmGchYzni4NaFVHJSbqJAd77OJH8dkYruXw.webp"
                alt="Nankhatai Cookies – 200 gm"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7085)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7085)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7085)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳255 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/nankhatai-cookies-200-gm" class="d-block text-reset">Nankhatai Cookies – 200 gm</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/hot-spicy-rusk-300-gm-minimum-2-pcs" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/8yD8ZtkiSnQ1OXzQ7jDv3PLQHbw8YI1Ag3ye1DZZ.webp"
                alt="Hot Spicy Rusk -300 gm (Minimum 2 pcs)"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7084)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7084)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7084)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳180 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/hot-spicy-rusk-300-gm-minimum-2-pcs" class="d-block text-reset">Hot Spicy Rusk -300 gm (Minimum 2 pcs)</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/baqarah-laban-400m" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/BAyu9QatlgE5HPobOrGQUwCq85z3gKFPTJrZIeza.webp"
                alt="Baqarah Laban-400m"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7081)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7081)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7081)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳65 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/baqarah-laban-400m" class="d-block text-reset">Baqarah Laban-400m</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/baqarah-pasteurized-full-cream-milk-pouch-pack-1000-ml-weekly-subscription-minimum-6-ltr" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/zxWRSuR8lcQckox9yvjHAZfyy5OMX337FPBpHIAD.webp"
                alt="Baqarah Pasteurized Full Cream Milk (Pouch Pack) 1000 ml– Weekly Subscription (Minimum 6 ltr)"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7080)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7080)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7080)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳120 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/baqarah-pasteurized-full-cream-milk-pouch-pack-1000-ml-weekly-subscription-minimum-6-ltr" class="d-block text-reset">Baqarah Pasteurized Full Cream Milk (Pouch Pack) 1000 ml– Weekly Subscription (Minimum 6 ltr)</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                            <div class="col">
                                    <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
        <div class="position-relative">
                <a href="https://admindeal.com.bd/product/baqarah-pasteurized-milk-full-cream-1000-ml-weekly-subscription-minimum-3-ltr-2" class="d-block">
            <img
                class="img-fit lazyload mx-auto h-140px h-md-210px"
                src="https://admindeal.com.bd/public/assets/img/placeholder.jpg"
                data-src="https://admindeal.s3.ap-southeast-1.amazonaws.com/uploads/all/mCLCZAtQUcq8mVr02pRvF3sT8oC96N3VY2WE6lhj.webp"
                alt="Baqarah Pasteurized Milk ( Full Cream) 1000 ml-Weekly Subscription (Minimum 3 ltr)"
                onerror="this.onerror=null;this.src='https://admindeal.com.bd/public/assets/img/placeholder.jpg';"
            >
        </a>
                <div class="absolute-top-right aiz-p-hov-icon">
            <a href="javascript:void(0)" onclick="addToWishList(7079)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left">
                <i class="la la-heart-o"></i>
            </a>
            <a href="javascript:void(0)" onclick="addToCompare(7079)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
                <i class="las la-sync"></i>
            </a>
            <a href="javascript:void(0)" onclick="showAddToCartModal(7079)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
                <i class="las la-shopping-cart"></i>
            </a>
        </div>
    </div>
    <div class="p-md-3 p-2 text-left">
        <div class="fs-15">
                        <span class="fw-700 text-primary">৳145 <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;-0%</span> </span> 
        </div>
        <div class="rating rating-sm mt-1">
            <i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i><i class = 'las la-star active'></i> (1)
        </div>
        <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
            <a href="https://admindeal.com.bd/product/baqarah-pasteurized-milk-full-cream-1000-ml-weekly-subscription-minimum-3-ltr-2" class="d-block text-reset">Baqarah Pasteurized Milk ( Full Cream) 1000 ml-Weekly Subscription (Minimum 3 ltr)</a>
        </h3>
                    <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                Cashback :
                <span class="fw-700 float-right">0</span>
            </div>
            </div>
</div>
                                </div>
                                                    </div>
                        <div class="aiz-pagination aiz-pagination-center mt-4">
                            <nav>
        <ul class="pagination">
            
                            <li class="page-item disabled" aria-disabled="true" aria-label="« Previous">
                    <span class="page-link" aria-hidden="true">&lsaquo;</span>
                </li>
            
            
                            
                
                
                                                                                        <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
                                                                                                <li class="page-item"><a class="page-link" href="https://admindeal.com.bd/category/groceries-lifestyle-medical?page=2">2</a></li>
                                                                                                <li class="page-item"><a class="page-link" href="https://admindeal.com.bd/category/groceries-lifestyle-medical?page=3">3</a></li>
                                                                                                <li class="page-item"><a class="page-link" href="https://admindeal.com.bd/category/groceries-lifestyle-medical?page=4">4</a></li>
                                                                                                <li class="page-item"><a class="page-link" href="https://admindeal.com.bd/category/groceries-lifestyle-medical?page=5">5</a></li>
                                                                                                <li class="page-item"><a class="page-link" href="https://admindeal.com.bd/category/groceries-lifestyle-medical?page=6">6</a></li>
                                                                                                <li class="page-item"><a class="page-link" href="https://admindeal.com.bd/category/groceries-lifestyle-medical?page=7">7</a></li>
                                                                                                <li class="page-item"><a class="page-link" href="https://admindeal.com.bd/category/groceries-lifestyle-medical?page=8">8</a></li>
                                                                                                <li class="page-item"><a class="page-link" href="https://admindeal.com.bd/category/groceries-lifestyle-medical?page=9">9</a></li>
                                                                                                <li class="page-item"><a class="page-link" href="https://admindeal.com.bd/category/groceries-lifestyle-medical?page=10">10</a></li>
                                                                                        
                                    <li class="page-item disabled" aria-disabled="true"><span class="page-link">...</span></li>
                
                
                                            
                
                
                                                                                        <li class="page-item"><a class="page-link" href="https://admindeal.com.bd/category/groceries-lifestyle-medical?page=24">24</a></li>
                                                                                                <li class="page-item"><a class="page-link" href="https://admindeal.com.bd/category/groceries-lifestyle-medical?page=25">25</a></li>
                                                                        
            
                            <li class="page-item">
                    <a class="page-link" href="https://admindeal.com.bd/category/groceries-lifestyle-medical?page=2" rel="next" aria-label="Next »">&rsaquo;</a>
                </li>
                    </ul>
    </nav>

                        </div>
                        
                        	                          <div class="bg-white shadow-sm card my-5 px-4">
                            <div class="mb-3 pt-3 h-250px" style="overflow: hidden;" id="description">
                                <p >
                                                                        
                                </p>

                            </div>
                            <span class="more text-center p-2 m-2 bg-primary w-100px" onclick="more()">More..</span>
                        </div>
                                            </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>