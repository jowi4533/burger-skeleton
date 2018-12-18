<template>
<div id = "ToppingsAndSauceContainer">
<h1> This is the Vegetables! </h1>

  <button v-on:click= "switchToBreadAndPatty()">Bread and Patty</button>
  <button v-on:click= "switchToToppingsAndSauce()">Toppings and Sauce</button>
  <button>Vegetables</button>
  <button v-on:click= "switchToToppingsAndSauce()">Previous</button>
  <button v-on:click= "switchToDrinks()">Go to Drinks (next)</button>

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
    switchToToppingsAndSauce: function() {
      this.$parent.state = "ToppingsAndSauce";
    },

    switchToVegetables: function() {
      this.$parent.state = "Vegetables";
    },

    switchToBreadAndPatty: function() {
      this.$parent.state = "BreadAndPatty";
    },

    switchToDrinks: function() {
      this.$parent.state = "Drinks";
      this.$refs.TopPanel.switchToDrinks();

    }
  }
}


</script>


<style scoped>


</style>
