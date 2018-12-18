<template>
  <div id = "TopPanelContainer">

    <div id = "buildYourBurgerPage" v-if = "parentState === 'BreadAndPatty' ||
      parentState === 'ToppingsAndSauce' || parentState === 'Vegetables' ">
      <button id="thisButton1"> 1 </button>
      <button v-on:click= "switchToDrinks()">2</button>
      <button v-on:click= "switchToOverView()">3</button>
      <h1 id="DescriptionText"> 1: Build Your Burger </h1>
      <button id="Cancel" v-on:click= "switchToMenuPage()">Cancel</button>
    </div>

    <div id = "sidesAndDrinksPage" v-if = "parentState === 'Drinks' || parentState === 'Sides'">
      <button v-on:click= "switchToBreadAndPatty()">1</button>
      <button id="thisButton2"> 2 </button>
      <button v-on:click= "switchToOverView()">3</button>
      <button id="Cancel" v-on:click= "switchToMenuPage()">Cancel</button>
      <h1> 2: Sides and Drinks </h1>
    </div>

    <div id = "overViewPage" v-if = "parentState === 'OverView'">
      <button v-on:click= "switchToBreadAndPatty()">1</button>
      <button v-on:click= "switchToDrinks()">2</button>
      <button id="thisButton3"> 3 </button>
      <button id="Cancel" v-on:click= "switchToMenuPage()">Cancel</button>
      <h1> 3: Overview </h1>
    </div>

  

</div>
</template>

<script ref = "topPanel">

export default{

  name: 'TopPanel',

  data: function() {
    return {
      parentState: this.$parent.state,
    }
  },

  methods: {
    reset () {
      this.name = 'RESETED'
    },
    switchToBreadAndPatty: function() {
      this.$parent.state = "BreadAndPatty";
      this.parentState = "BreadAndPatty";
    },

    switchToDrinks: function() {
      this.$parent.state = "Drinks";
      this.parentState = "Drinks";
    },
    switchToMenuPage: function() {
      this.$parent.state = "MenuPage";
      this.parentState = "MenuPage";
    },

    switchToOverView: function() {
      this.$parent.state = "OverView";
      this.parentState = "OverView";
    },

  },

  // computed: {
  //   updateParentState: function() {
  //     parentState=this.$parent.state;
  //     return {
  //       parentState
  //     }
  //   }
  // }
}


</script>


<style scoped>

#TopPanelContainer {

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
/* #buildYourBurgerPage {
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
} */
#DescriptionText{
    font-size: 1em;
}
#Cancel {
  float: right;
}

</style>
