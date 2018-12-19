<template>
  <div id = "TopPanelContainer">

    <div id = "buildYourBurgerPage" v-if = "parentState !== 'Payment'">

      <button v-on:click= "switchStage('BreadAndPatty')" :class="{stageButton : parentState === 'BreadAndPatty' || parentState === 'ToppingsAndSauce' || parentState === 'Vegetables'}"> 1 </button>
      <button v-on:click= "switchStage('Drinks')" :class="{stageButton : parentState === 'Drinks' || parentState === 'Sides' }">2</button>
      <button v-on:click= "switchStage('OverView')" :class="{stageButton : parentState === 'OverView' }">3</button>
      <button v-on:click= "switchStage('MenuPage')">Cancel</button>

      <h3 v-if="parentState == 'BreadAndPatty'
            || parentState == 'ToppingsAndSauce'
            || parentState == 'Vegetables'" class ="heading">
            {{uiLabels.stageOne}}
      </h3>

      <h3 v-if="parentState == 'Sides'
            || parentState == 'Drinks'" class ="heading">
            {{uiLabels.stageTwo}}
      </h3>

      <h3 v-if="parentState == 'OverView'" class ="heading">
            {{uiLabels.stageThree}}
      </h3>

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
import sharedVueStuff from '@/components/sharedVueStuff.js'

export default{

  name: 'TopPanel',
  props: {
    parentState: String
  },
  data: function() {
    return {
    }
  },

  mixins: [sharedVueStuff],

  methods: {

    switchStage: function(stage) {
      this.$emit('switchStage', stage);
    },
  },
}


</script>


<style scoped>
.heading {
  margin-top: 2.4%;
  margin-left: 37.5%;
  position: absolute;
  top: 0;
  left: 0;
}

#TopPanelContainer {

}

.stageButton {
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
