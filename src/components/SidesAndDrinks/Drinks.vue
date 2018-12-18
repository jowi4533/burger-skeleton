<template>
<div id = "ToppingsAndSauceContainer">
  <h1> This is the Drinks! </h1>

  <button>Drinks</button>
  <button v-on:click= "switchTab('Sides')">Sides</button>

  <br>
  <br>


  <div id="ToggleBar">
    <button id="next" v-on:click= "switchTab('Sides')">Next (//Insert uiLabel here// Sides)</button>
    <button id="previous" v-on:click= "switchStage('Vegetables')">Previous (//Insert uiLabel here// Vegetables)</button>
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
