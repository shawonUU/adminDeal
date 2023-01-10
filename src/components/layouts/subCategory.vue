
<template>
    <h1>{{ index }}</h1>
    <div v-if="subcategories.length==0" class=" text-center absolute-center">
        <i class="las la-spinner la-spin la-3x opacity-70"></i>
    </div>
    
      <div v-else class="card-columns">
            <div v-for="(subcategory, index) in subcategories" :key="index" class="card shadow-none border-0">
                <ul class="list-unstyled mb-3">
                    <li class="fw-600 border-bottom pb-2 mb-3">
                        <a class="text-reset" href="">{{ subcategory.name }}</a>
                    </li>
                      <li v-for="(childcategory, index) in subcategory.childCategorys" :key="index" class="mb-2">
                          <a class="text-reset" href="">{{ childcategory.name }}</a>
                      </li>
                </ul>
            </div>
      </div>
</template>

<script>
import { useCategoryStore } from "@/Store/Categories";
import { mapState, mapActions} from "pinia";
export default {
  props:['index'],


  computed:{
  ...mapState(useCategoryStore,['subcategories']),
 },

 mounted(){
  this.getSubcategory(this.rootDomain, this.index);
 },

 methods:{
  ...mapActions(useCategoryStore,['getSubcategory']),
 }


}
</script>

<style>

</style>