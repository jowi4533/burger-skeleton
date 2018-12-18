<template>
<div id = "ToppingsAndSauceContainer">
<h1> This is the ToppingsAndSauce! </h1>
  <button v-on:click= "switchTab('BreadAndPatty')">Bread and Patty</button>
  <button> Toppings and Sauce</button>
  <button v-on:click= "switchTab('Vegetables')">Vegetables</button>
  <button v-on:click= "switchTab('BreadAndPatty')">Previous</button>
  <button v-on:click= "switchTab('Vegetables')">Go to Vegetables (next)</button>

  <div id="ToggleBar">
    <button id="next" v-on:click= "switchTab('BreadAndPatty')">Next (//Insert uiLabel here// Bread and Patty)</button>
    <button id="previous" v-on:click= "switchTab('Vegetables')">Previous (//Insert uiLabel here// Vegetables)</button>
  </div>

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
    switchTab: function(tab) {
      this.$emit('switchTab', tab);
    },
  }
}


</script>


<style scoped>


</style>
