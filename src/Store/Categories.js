import axios from 'axios';
import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('CategoryStore',{
                    //state
                    state:()=>({
                            categories: [],
                            subcategories:[],
                            featuredCategories:[],
                        }),

                    //actions
                    actions:{
                        getCat(rootDomain){
                            // console.log(rootDomain);
                                axios.get(rootDomain)
                                .then((response)=>{
                                    // console.log(response.data.caregories);
                                this.categories = response.data.caregories;
                                this.featuredCategories = response.data.featured_categories;
                                })
                        },
                        getSubcategory(rootDomain,id, ele){
                                // console.log(ele.originalTarget.classList.contains('loaded'));
                                this.subcategories = [];
                                axios.get(rootDomain+"category/nav-element-list",{params:{id:id}})
                                .then((response)=>{
                                    let subCategorys = response.data.subCategorys;
                                    // console.log(subCategorys);
                                    this.subcategories = subCategorys;
                                })
                        }
                    },
});