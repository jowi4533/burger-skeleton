<template>
<div id = "ToppingsAndSauceContainer">
<h1> This is the Vegetables! </h1>

  <button v-on:click= "switchTab('BreadAndPatty')">Bread and Patty</button>
  <button v-on:click= "switchTab('ToppingsAndSauce')">Toppings and Sauce</button>
  <button>Vegetables</button>
  <button v-on:click= "switchTab('ToppingsAndSauce')">Previous</button>
  <button v-on:click= "switchStage('Drinks')">Go to Drinks (next)</button>

  <div id="ToggleBar">
    <button id="next" v-on:click= "switchStage('Drinks')">Next (//Insert uiLabel here// Drinks)</button>
    <button id="previous" v-on:click= "switchTab('ToppingsAndSauce')">Previous (//Insert uiLabel here// Toppings and Sauce)</button>
  </div>

</div>

</template>

<script>

export default{
  name: 'Vegetables',

  data: function() {
    return {
    }
  },

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


</style>
