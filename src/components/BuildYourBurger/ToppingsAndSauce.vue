<template>
<div id = "ToppingsAndSauceContainer">
<h1> This is the ToppingsAndSauce! </h1>
  <button v-on:click= "switchToBreadAndPatty()">Bread and Patty</button>
  <button> Toppings and Sauce</button>
  <button v-on:click= "switchToVegetables()">Vegetables</button>
  <button v-on:click= "switchToBreadAndPatty()">Previous</button>
  <button v-on:click= "switchToVegetables()">Go to Vegetables (next)</button>

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
      this.$parent.state = "Vegetables";
    },

    switchToBreadAndPatty: function() {
      this.$parent.state = "BreadAndPatty";
    },
  }
}


</script>


<style scoped>


</style>
