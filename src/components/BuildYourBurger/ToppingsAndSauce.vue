<template>
<div id = "ToppingsAndSauceContainer">
<h1> This is the ToppingsAndSauce! </h1>
  <button v-on:click= "switchTab('BreadAndPatty')">Bread and Patty</button>
  <button> Toppings and Sauce</button>
  <button v-on:click= "switchTab('Vegetables')">Vegetables</button>

  <br>
  <br>

  <div id="ToggleBar">
    <button id="next" v-on:click= "switchTab('Vegetables')"> {{uiLabels.next}} </button>
    <button id="previous" v-on:click= "switchTab('BreadAndPatty')"> {{uiLabels.previous}} </button>
  </div>

</div>

</template>

<script>
import Ingredient from '@/components/Ingredient.vue'
import sharedVueStuff from '@/components/sharedVueStuff.js'

export default{
  name: 'BreadAndPatty',

  data: function() {
    return {
    }
  },
  components: {
    Ingredient
  },

  mixins: [sharedVueStuff],

  methods: {
    switchTab: function(tab) {
      this.$emit('switchTab', tab);
    },
  }
}


</script>


<style scoped>
#next{
  position: relative;
  bottom: 0;
  float: right;
}
#previous{
  position: relative;
  bottom: 0;
  float: right;
}

</style>
