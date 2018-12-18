<template>
  <div id = "TopPanelContainer">
    <div id = "buildYourBurgerPage">
      <button v-on:click= "switchStage('BreadAndPatty')" :class="{thisButton1 : parentState !== 'Drinks' && parentState !== 'Sides' && parentState !== 'OverView'}"> 1 </button>
      <button v-on:click= "switchStage('Drinks')" :class="{thisButton1 : parentState === 'Drinks' || parentState === 'Sides' }">2</button>
      <button v-on:click= "switchStage('OverView')" :class="{thisButton1 : parentState === 'OverView' }">3</button>

      <button v-on:click= "switchStage('MenuPage')">Cancel</button>

    </div>
<!--
    <div id = "sidesAndDrinksPage" v-if = "parentState === 'Drinks' || parentState === 'Sides'">
      <button>1</button>
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
      <button v-on:click= "switchToMenuPage()">Cancel</button>
    </div> -->



</div>
</template>

<script ref = "topPanel">

export default{

  name: 'TopPanel',
  props: {
    parentState: String
  },
  data: function() {
    return {
    }
  },
  methods: {

    switchStage: function(stage) {
      this.$emit('switchStage', stage);
    },
  },
}


</script>


<style scoped>

#TopPanelContainer {

}

.thisButton1 {
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
