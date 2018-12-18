<template>
  <div id = "TopPanelContainer">

    <div id = "buildYourBurgerPage" v-if = "parentState === 'BreadAndPatty' ||
    parentState === 'ToppingsAndSauce' || parentState === 'Vegetables' ">
    <button> 1 </button>
    <button v-on:click= "switchToDrinks()">2</button>
    <button v-on:click= "switchToOverView()">3</button>
    <h1> Hello this is 1: Build Your Burger </h1>
    <button v-on:click= "switchToMenuPage()">Cancel</button>
  </div>


  <div id = "sidesAndDrinksPage" v-if = "parentState === 'Drinks' || parentState === 'Sides'">
    <button v-on:click= "switchToBreadAndPatty()">1</button>
    <button> 2 </button>
    <button v-on:click= "switchToOverView()">3</button>
    <h1> Hello this is 2: Sides and Drinks </h1>
    <button v-on:click= "switchToMenuPage()">Cancel</button>
  </div>

  <div id = "overViewPage" v-if = "parentState === 'OverView'">
    <button v-on:click= "switchToBreadAndPatty()">1</button>
    <button v-on:click= "switchToDrinks()">2</button>
    <button> 3 </button>
    <h1> Hello this is 3: Overview </h1>
    <button v-on:click= "switchToMenuPage()">Cancel</button>
  </div>

</div>
</template>

<script>

export default{

  name: 'TopPanel',

  data: function() {
    return {
      parentState: this.$parent.state
    }
  },

  methods: {

    switchToBreadAndPatty: function() {
      this.$parent.state = "BreadAndPatty";
    },

    switchToDrinks: function() {
      this.$parent.state = "Drinks";
    },
    switchToMenuPage: function() {
      this.$parent.state = "MenuPage"
    },

    switchToOverView: function() {
      this.$parent.state = "OverView"
    },
  }
}


</script>


<style scoped>


</style>
