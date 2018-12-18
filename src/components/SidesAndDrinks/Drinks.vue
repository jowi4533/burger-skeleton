<template>
<div id = "ToppingsAndSauceContainer">
  <h1> This is the Drinks! </h1>

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
      this.$parent.state = "Vegetables";
      this.$refs.topPanel.parentState = "Vegetables";
    },

    switchToSides: function() {
      this.$parent.state = "Sides";
    }
  }
}


</script>


<style scoped>


</style>
