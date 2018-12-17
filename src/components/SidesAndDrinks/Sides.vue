<template>
<div id = "ToppingsAndSauceContainer">
  <h1> Hello! This is the Sides, whalecum! </h1>

  <button v-on:click= "switchToDrinks()">Drinks</button>
  <button>Sides</button>
  <button v-on:click= "switchToDrinks()">Previous</button>
  <button v-on:click= "switchToOverView()">Go to menu Overview (next)</button>

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

    switchToOverView: function() {
      this.$parent.state = "OverView";
      this.$refs.topPanel.switchToOverView();
    },

    switchToDrinks: function() {
      this.$parent.state = "Drinks";
    }
  }
}


</script>


<style scoped>


</style>
