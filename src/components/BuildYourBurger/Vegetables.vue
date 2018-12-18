<template>
<div id = "ToppingsAndSauceContainer">
<h1> This is the Vegetables! </h1>

  <button v-on:click= "switchTab('BreadAndPatty')">Bread and Patty</button>
  <button v-on:click= "switchTab('ToppingsAndSauce')">Toppings and Sauce</button>
  <button>Vegetables</button>

  <br>
  <br>


  <div id="ToggleBar">
    <button id="next" v-on:click= "switchStage('Drinks')"> {{uiLabels.next}} </button>
    <button id="previous" v-on:click= "switchTab('ToppingsAndSauce')"> {{uiLabels.previous}} </button>
  </div>

</div>

</template>

<script>
import Ingredient from '@/components/Ingredient.vue'
import sharedVueStuff from '@/components/sharedVueStuff.js'

export default{
  name: 'Vegetables',

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

    switchStage: function(stage) {
      this.$emit('switchStage', stage);
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
