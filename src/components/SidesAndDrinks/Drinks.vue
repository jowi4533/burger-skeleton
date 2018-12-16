<template>
<div id = "ToppingsAndSauceContainer">
  <h1> Hello! This is the Drinks, whalecum! </h1>

  <button>Drinks</button>
  <button v-on:click= "switchToSides()">Sides</button>
  <button v-on:click= "switchToVegetables()">Previous</button>
  <button v-on:click= "switchToSides()">Go to Sides (next)</button>

</div>

</template>

<script>

export default{
  name: 'Drinks',

  data: function() {
    return {
    }
  },

  methods: {

    switchToVegetables: function() {
      this.$parent.state = "Vegetables"
    },

    switchToSides: function() {
      this.$parent.state = "Sides";
    }
  }
}


</script>


<style scoped>


</style>
