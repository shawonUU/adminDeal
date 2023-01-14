import axios from 'axios';
import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('CategoryStore',{
    //state
    state:()=>({
            categories: [],
            subcategories:[],
            featuredCategories:[],
            ck:0,
        }),

    //actions
    actions:{
        getCat(rootDomain){
                axios.get(rootDomain)
                .then((response)=>{
                // console.log(response.data.featured_categories);
                this.categories = response.data.categories;
                this.featuredCategories = response.data.featured_categories.data;
                })
        },
        getSubcategory(rootDomain,id){
            
                this.subcategories = [];
                axios.get(rootDomain+"category/nav-element-list",{params:{id:id}})
                .then((response)=>{
                    let subCategorys = response.data.subCategorys;
                    this.subcategories = subCategorys;
                })
        }
    },
});