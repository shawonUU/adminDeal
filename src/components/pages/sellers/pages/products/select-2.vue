<template>
    <div class="select2-container">
      <input class="select2-input" type="text" :value="selectedOption.label" @input="updateSelectedOption">
      <ul class="select2-dropdown">
        <li v-for="option in filteredOptions" :key="option.value" @click="selectOption(option)">
          {{ option.label }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      options: {
        type: Array,
        required: true
      },
      value: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        selectedOption: this.value || { value: '', label: '' },
        filter: ''
      };
    },
    computed: {
      filteredOptions() {
        return this.options.filter(option => option.label.toLowerCase().includes(this.filter.toLowerCase()));
      }
    },
    mounted() {
      document.addEventListener('click', this.handleOutsideClick);
    },
    destroyed() {
      document.removeEventListener('click', this.handleOutsideClick);
    },
    methods: {
      updateSelectedOption(event) {
        this.selectedOption = { value: '', label: event.target.value };
      },
      selectOption(option) {
        this.selectedOption = option;
        this.filter = '';
        this.$emit('input', this.selectedOption);
      },
      handleOutsideClick(event) {
        if (!this.$el.contains(event.target)) {
          this.filter = '';
        }
      }
    },
    watch: {
      value(newValue) {
        this.selectedOption = newValue;
      }
    }
  };
  </script>
  
  <style scoped>
  .select2-container {
    position: relative;
    width: 200px;
  }
  
  .select2-input {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
  }
  
  .select2-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 200px;
    overflow-y: auto;
  }
  
  .select2-dropdown li {
    padding: 5px;
    cursor: pointer;
  }
  
  .select2-dropdown li:hover {
    background-color: #ccc;
  }
  </style>