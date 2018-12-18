<template>
<div id = "BreadAndPattyContainer">
<h1> This is the BreadAndPatty! </h1>
  <button> Bread and Patty</button>
  <button v-on:click= "switchToToppingsAndSauce()">Toppings and Sauce</button>
  <button v-on:click= "switchToVegetables()">Vegetables</button>
  <button v-on:click= "switchToMenuPage()">Previous</button>
  <button v-on:click= "switchToToppingsAndSauce()">Go to Topping and Sauce (next)</button>

</div>

</template>

<script>

export default{

  name: 'BreadAndPatty',

  components: {
  },
  data: function() {
    return {
    }
  },

  methods: {

    //Changes to the different components, these are used for navigating with the buttons
    switchToToppingsAndSauce: function() {
      this.$parent.state = "ToppingsAndSauce";
    },
    switchToVegetables: function() {
      this.$parent.state = "Vegetables"
    },
    switchToMenuPage: function() {
      this.$parent.state = "MenuPage"
    },
  }
}


</script>


<style scoped>


</style>
