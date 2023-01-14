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
                                 <router-link :to="{name:'productShop'}" class="text-reset fs-14 fw-600">
                                 <i class="las la-angle-left"></i>
                                  All categories
                                 </router-link>
                              </li>
                              <li class="mb-2">
                                 <a class="text-reset fs-14 fw-600" @click="receiveCategorySlug(categoryInfo.slug)">
                                 <i class="las la-angle-left"></i>
                                  {{ categoryInfo.name }}
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
                     <router-link :to="{name:'home'}" class="text-reset" >Home</router-link>
                  </li>
                  <li class="breadcrumb-item opacity-50">
                     <router-link :to="{name:'productShop'}" class="text-reset" >All categories</router-link>
                  </li>
                  <li class="text-dark fw-600 breadcrumb-item">
                     <a class="text-reset" @click="receiveCategorySlug(categoryInfo.slug)">{{ categoryInfo.name }}</a>
                  </li>
               </ul>
               <div class="text-left">
                  <div class="row gutters-5 flex-wrap align-items-center">
                     <div class="col-lg col-10">
                        <h1 class="h6 fw-600 text-body">
                           {{ categoryInfo.name }}
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
                  <div class="col" v-for="(product,index) in categoryWiseProducts" :key="index">
                      <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
                         <div class="position-relative">
                            <a style="cursor:pointer" @click="productDetails(product.slug)" class="d-block">
                            <img
                               class="img-fit lazyload mx-auto h-140px h-md-210px"
                               :src="product.thumbnail_image"
                               :alt="product.name"
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
                               <span class="fw-700 text-primary">{{ product.main_price }} <span class="my-danger" style="color: #000 !important; font-size: 12px;">&nbsp;{{ product.discount }}</span> </span> 
                            </div>
                            
                            <div class="rating rating-sm mt-1">
                              <template v-for="index in 5" :key="index">
                                 <i v-if="index<=product.rating" class = 'las la-star active'></i>
                                 <i v-else class = 'las la-star'></i>
                              </template>
                            </div>
                              ({{ product.rating }})
                            <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
                               <a style="cursor:pointer" @click="productDetails(product.slug)" class="d-block text-reset">{{ product.name }}</a>
                            </h3>
                            <!-- <div class="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                               Cashback :
                               <span class="fw-700 float-right">0</span>
                            </div> -->
                         </div>
                      </div>
                   </div>
               </div>
               <div class="aiz-pagination aiz-pagination-center mt-4">
                   <!-- Pagination here -->
               </div>
               <div class="bg-white shadow-sm card my-5 px-4">
                  <div class="mb-3 pt-3 h-250px" style="overflow: hidden;" id="description">
                     <p >
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </form>
   </div>
</section>
</template>

<script>
import axios from 'axios';
export default {
    props: ['slug'],
    data(){
      return{
         categoryWiseProducts:[],
         categoryInfo:[],
      }
    },
     mounted(){
        this.getCategoryWiseProduct(this.rootDomain);
     },
     watch:{

     },
     methods:{
         getCategoryWiseProduct(rootDomain,slug){
            axios.get(rootDomain+'vue/v3/products/category/'+this.slug)
            .then((response)=>{
               this.categoryWiseProducts = response.data[0].data;
               this.categoryInfo = response.data[1]
            })
            .catch((error)=>{
               console.log(error);
            })
         },
         receiveCategorySlug(slug){
            this.$router.push({
                name:'CategoryWiseProduct',
                params: {
                    slug: slug
                }
            }); 
      },
         productDetails(slug){
         this.$router.push({
         name: "singleProduct",
         params: {
            slug: slug
         }
         });
      },

      allCategoryProduct(rootDomain){
         this.$router.push({
                name:'shop',
                params: {
                    slug: slug
                }
            }); 
      }
     },
  
}

</script>


<style>

</style>