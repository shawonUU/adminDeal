<template>
<select2 :options="options" v-model="selectedOption" />
</template>

<script>
import Select2 from './select-2.vue';
export default {
    data(){
        return{
            options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' }
      ],
      selectedOption: 'option1'
        }
    },
    components:{Select2},
    mounted() {
    this.emitter.emit("headerFooter", false);
    console.log('unmounted has been called'); 
    },
    unmounted() {
    this.emitter.emit("headerFooter", false);
    console.log('unmounted has been called'); 
    },
}
</script>

<style>

</style>