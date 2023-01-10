import axios from 'axios';
import { defineStore } from 'pinia';

export const useProductStore = defineStore('ProductStore',{
                    //state
                    state:()=>({
                            getTodaysDealProducts: [],
                        }),

                    //actions
                    actions:{
                        getTodaysDealProduct(rootDomain){
                                axios.get(rootDomain+'vue/v3/products/todays-deal')
                                .then((response)=>{
                                  this.getTodaysDealProducts = response.data.data;
                                })
                        },

                     
                    },
});