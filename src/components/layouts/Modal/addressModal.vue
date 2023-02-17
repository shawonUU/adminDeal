<template>
    <a @click="hidModal()" class="sb-lightbox-overlay; pointer: normal;" style=" position: fixed;width: 100%;height: 100%;top: 0;right: 0;left: 0;bottom: 0;z-index: 100;background-color: rgba(0, 0, 0, 0.6);display: block;animation: sb-fade-animation;"></a>
    <div class="modal fade show" style="z-index: 1040; display: block; padding-right: 17px;" id="new-address-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{ 'New Address' }}</h5>
                <button @click="hidModal()" type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form class="form-default" role="form" action="{{'addresses.store' }}" method="POST">
                <div class="modal-body">
                    <div class="p-3">
                        <div class="row">
                            <div class="col-md-2">
                                <label>{{ 'Address'}}</label>
                            </div>
                            <div class="col-md-10">
                                <textarea id="address" class="form-control mb-3" placeholder="'Your Address'" rows="2" name="address" required></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <label>{{ 'Country'}}</label>
                            </div>
                            <div class="col-md-10">
                                <div class="mb-3">
                                    <select id="countryId" @change="get_states()" class="form-control aiz-selectpicker" data-live-search="true" data-placeholder="Select your country" name="country_id" required>
                                        <option  value="">{{ 'Select your country' }}</option>
                                        
                                            <option v-for="(country, index) in countries" :key="index" :value="country.id">{{ country.name }}</option>
                                        
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-2">
                                <label>{{ 'State'}}</label>
                            </div>
                            <div class="col-md-10">
                                <select id="stateId" @change="get_city()" class="form-control mb-3 aiz-selectpicker" data-live-search="true" name="state_id" required>
                                    <option value="">Select State</option>
                                    <option v-for="(state, index) in states" :key="index" :value="state.id">{{state.name}}</option>
                                </select>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-2">
                                <label>{{ 'City'}}</label>
                            </div>
                            <div class="col-md-10">
                                <select id="cityId" class="form-control mb-3 aiz-selectpicker" data-live-search="true" name="city_id" required>
                                    <option value="">Select City</option>
                                    <option v-for="(city, index) in cities" :key="index" :value="city.id">{{city.name}}</option>
                                </select>
                            </div>
                        </div>

                        <!-- @if (get_setting('google_map') == 1)
                            <div class="row">
                                <input id="searchInput" class="controls" type="text" placeholder="{{'Enter a location'}}">
                                <div id="map"></div>
                                <ul id="geoData">
                                    <li style="display: none;">Full Address: <span id="location"></span></li>
                                    <li style="display: none;">Postal Code: <span id="postal_code"></span></li>
                                    <li style="display: none;">Country: <span id="country"></span></li>
                                    <li style="display: none;">Latitude: <span id="lat"></span></li>
                                    <li style="display: none;">Longitude: <span id="lon"></span></li>
                                </ul>
                            </div>

                            <div class="row">
                                <div class="col-md-2" id="">
                                    <label for="exampleInputuname">Longitude</label>
                                </div>
                                <div class="col-md-10" id="">
                                    <input type="text" class="form-control mb-3" id="longitude" name="longitude" readonly="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2" id="">
                                    <label for="exampleInputuname">Latitude</label>
                                </div>
                                <div class="col-md-10" id="">
                                    <input type="text" class="form-control mb-3" id="latitude" name="latitude" readonly="">
                                </div>
                            </div>
                        @endif -->
                        
                        <div class="row">
                            <div class="col-md-2">
                                <label>{{ 'Postal code'}}</label>
                            </div>
                            <div class="col-md-10">
                                <input id="postalCode" type="text" class="form-control mb-3" placeholder="Your Postal Code" name="postal_code" value="" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <label>{{ 'Phone'}}</label>
                            </div>
                            <div class="col-md-10">
                                <input id="phone" type="text" class="form-control mb-3" placeholder="+880" name="phone" value="" required>
                            </div>
                        </div>
                        <div class="form-group text-right">
                            <button @click="storeAddress()" type="button" class="btn btn-sm btn-primary">{{'Save'}}</button>
                        </div>

                        <!-- <h1>Location</h1>
                        <h1><span>{{ coordinate.lat }}</span><span>{{ coordinate.lan }}</span></h1> -->

                    </div>
                </div>
            </form>
        </div>
    </div>

</div>

<div class="modal fade" id="edit-address-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{ 'New Address' }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" id="edit_modal_body">
    
            </div>
        </div>
    </div>
</div>

</template>

<!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBx8Ged-Hntnvs9kfv48zUnathey0QxvXI&libraries=places&language=en&callback=initialize" async defer></script> -->
<script>
import axios from 'axios';


export default {
    data(){
      return{
        auth:{
            isAuthenticated: false,
            user: {},
        },
        coordinate:{
            lat: 0,
            lan: 0,
        },
        countries:[],
        states:[],
        cities:[],

        }
    },
    created(){
      var user = localStorage.getItem("user");
        if(user !== null){
            user = JSON.parse(user);
            this.auth.isAuthenticated = true;
            this.auth.user = user;
            let ele = document.getElementsByTagName('body');
            ele[0].classList.add("modal-open");
            this.getAddressInfo();
            // this.getMap();
        }
        


    },
    methods:{
        hidModal(){
            this.emitter.emit("addressModal", false);
            let ele = document.getElementsByTagName('body');
            ele[0].classList.remove("modal-open");
        },

        getAddressInfo(){
            axios.get(this.selfDomain+"vueweb/checkout/get/address-info", {
              headers: {
                Authorization: "Bearer " + this.auth.user.access_token,
              }
            })
            .then((response)=>{
               this.countries = response.data;
            })
        },
        get_states() {
            countryId = document.getElementById("countryId").value;

            axios.get(this.selfDomain+"vueweb/get-states", {
              params:{
                country_id: countryId,
              },
              headers: {
                Authorization: "Bearer " + this.auth.user.access_token,
              }
            })
            .then((res)=>{
                this.states = res.data;
            });

           
        },
        get_city() {
            stateId = document.getElementById("stateId").value;

            axios.get(this.selfDomain+"vueweb/get-cities", {
              params:{
                state_id: stateId,
              },
              headers: {
                Authorization: "Bearer " + this.auth.user.access_token,
              }
            })
            .then((res)=>{
                this.cities = res.data;
            });
        },
        getMap(){
           
            

            // navigator.permissions.query({ name: 'geolocation' })
            // .then(permissionStatus => {
            //     if (permissionStatus.state === 'granted') {
            //         this.$getLocation()
            //         .then((coordinates) => {
            //             console.log("okkk");
            //             this.coordinate = coordinates;
            //         })
            //         .catch((error) => {
            //             console.log(error);
            //         });
            //     } else {
            //       console.log("no permission");
            //     }
            // })
            // .catch(error => {
            //     console.log('Error checking geolocation permission:', error);
            // });



            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                (position) => {
                    // latitude.value = position.coords.latitude;
                    // longitude.value = position.coords.longitude;
                    // console.log(position);
                },
                (err) => {
                    // error.value = err.message;
                    // console.log(err);
                }
                );
            } else {
                console.log('Geolocation is not supported by this browser.');
            }

        },
        storeAddress(){
            let address       = document.getElementById("address").value;
            let country_id    = document.getElementById("countryId").value;
            let state_id      = document.getElementById("stateId").value;
            let city_id       = document.getElementById("cityId").value;
            let longitude     = 0
            let latitude      = 0
            let postal_code   = document.getElementById("postalCode").value;
            let phone         = document.getElementById("phone").value;

            axios.get(this.selfDomain+"vueweb/address-store", {
              params:{
                address:address,
                country_id:country_id,
                state_id:state_id,
                city_id:city_id,
                longitude:longitude,
                latitude:latitude,
                postal_code:postal_code,
                phone:phone,
              },
              headers: {
                Authorization: "Bearer " + this.auth.user.access_token,
              }
            })
            .then((res)=>{
                console.log(res.data);
            });
        }
    }
}
</script>

<style>

</style>