<template>
<div id = "ToppingsAndSauceContainer">
  <h1> This is the Sides! </h1>

  <button v-on:click= "switchTab('Drinks')">Drinks</button>
  <button>Sides</button>
  <button v-on:click= "switchTab('Drinks')">Previous</button>
  <button v-on:click= "switchStage('OverView')">Go to menu Overview (next)</button>

  <div id="ToggleBar">
    <button id="next" v-on:click= "switchStage('OverView')">Next (//Insert uiLabel here// Order overview)</button>
    <button id="previous" v-on:click= "switchTab('Drinks')">Previous (//Insert uiLabel here// Drinks)</button>
  </div>

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
