<template>
<div id = "ToppingsAndSauceContainer">
<h1> Hello! This is the Vegetables, whalecum! </h1>

  <button v-on:click= "switchToBreadAndPatty()">Bread and Patty</button>
  <button v-on:click= "switchToToppingsAndSauce()">Toppings and Sauce</button>
  <button>Vegetables</button>
  <button v-on:click= "switchToToppingsAndSauce()">Previous</button>
  <button v-on:click= "switchToDrinks()">Go to Vegetables (next)</button>

</div>

</template>

<script>

export default{
  name: 'BreadAndPatty',

  data: function() {
    return {
    }
  },

  methods: {

    switchToVegetables: function() {
      this.$parent.state = "Vegetables"
    },

    switchToBreadAndPatty: function() {
      this.$parent.state = "BreadAndPatty";
    },

    switchToDrinks: function() {
      this.$parent.state = "Drinks";
    }
  }
}


</script>


<style scoped>


</style>
