<template>
  <div id = "TopPanelContainer">

    <div id = "buildYourBurgerPage" v-if = "parentState === 'BreadAndPatty' ||
      parentState === 'ToppingsAndSauce' || parentState === 'Vegetables' ">
      <button id="thisButton1"> 1 </button>
      <button v-on:click= "switchToDrinks()">2</button>
      <button v-on:click= "switchToOverView()">3</button>
      <h1> 1: Build Your Burger </h1>
      <button v-on:click= "switchToMenuPage()">Cancel</button>
    </div>

    <div id = "sidesAndDrinksPage" v-if = "parentState === 'Drinks' || parentState === 'Sides'">
      <button v-on:click= "switchToBreadAndPatty()">1</button>
      <button id="thisButton2"> 2 </button>
      <button v-on:click= "switchToOverView()">3</button>
      <h1> 2: Sides and Drinks </h1>
      <button v-on:click= "switchToMenuPage()">Cancel</button>
    </div>

    <div id = "overViewPage" v-if = "parentState === 'OverView'">
      <button v-on:click= "switchToBreadAndPatty()">1</button>
      <button v-on:click= "switchToDrinks()">2</button>
      <button id="thisButton3"> 3 </button>
      <h1> 3: Overview </h1>
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
      this.$parent.state = "MenuPage";
    },

    switchToOverView: function() {
      this.$parent.state = "OverView";
    },
  },

  computed: {
    updateParentState: function() {
      parentState=this.$parent.state;
  }
}
}


</script>


<style scoped>

#TopPanelContainer {
  display: grid;
}

#thisButton1 {
  background-color: yellow;
}
#thisButton2 {
  background-color: yellow;
}
#thisButton3 {
  background-color: yellow;
}
#buildYourBurgerPage {
  grid-column: 1;
  grid-row: 1;
}
#sidesAndDrinksPage {
  grid-column: 2;
  grid-row: 1;
}
#overViewPage {
  grid-column: 3;
  grid-row: 1;
}

</style>
