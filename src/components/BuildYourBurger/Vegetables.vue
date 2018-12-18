<template>
<div id = "ToppingsAndSauceContainer">
<h1> This is the Vegetables! </h1>

  <button v-on:click= "switchTab('BreadAndPatty')">Bread and Patty</button>
  <button v-on:click= "switchTab('ToppingsAndSauce')">Toppings and Sauce</button>
  <button>Vegetables</button>
  <button v-on:click= "switchTab('ToppingsAndSauce')">Previous</button>
  <button v-on:click= "switchTab('Drinks')">Go to Drinks (next)</button>

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
  }
}


</script>


<style scoped>


</style>
