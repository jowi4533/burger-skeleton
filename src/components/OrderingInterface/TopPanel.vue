<template>
  <div id = "TopPanelContainer">
    <div class = "tabAndText" v-if = "parentState !== 'Payment'">
      <button class="tabBar" v-on:click= "switchStage('BreadAndPatty')" :class="{stageButton : parentState === 'BreadAndPatty' || parentState === 'ToppingsAndSauce' || parentState === 'Vegetables'}"> 1 </button>
      <button class="tabBar" v-on:click= "switchStage('Drinks')" :class="{stageButton : parentState === 'Drinks' }">2</button>
      <button class="tabBar" v-on:click= "switchStage('OverView')" :class="{stageButton : parentState === 'OverView' }">3</button>


        <!-- <span v-if="parentState == 'BreadAndPatty'
              || parentState == 'ToppingsAndSauce'
              || parentState == 'Vegetables'"
              >
              {{uiLabels.stageOne}}
        </span > -->

      <div id="span">
        <span class="OverlayText" v-if ="parentState == 'BreadAndPatty'">
          {{uiLabels.chooseBreadAndPatty}}
        </span>
        <span class="OverlayText" v-if ="parentState == 'ToppingsAndSauce'">
          {{uiLabels.chooseToppingsAndSauce}}
        </span>
        <span class="OverlayText" v-if ="parentState == 'Vegetables'">
            {{uiLabels.chooseVegetables}}
        </span>
        <span class="OverlayText" v-if ="parentState == 'Drinks'">
            {{uiLabels.chooseDrinkAndSides}}
        </span>
      </div>

        <button id="Cancel" v-on:click= "switchStageWipeOrder('MenuPage')">{{uiLabels.cancel}}</button>
    </div>
</div>
</template>

<script ref = "topPanel">
//import sharedVueStuff from '@/components/sharedVueStuff.js'

export default{

  name: 'TopPanel',
  data: function() {
    return {
      cancelPopupText: "Are you sure you want to Cancel? Your order will be discarded.",
      popupTextSidesAndDrinks: "Are you sure you want to go to Sides and Drinks? Your current burger will be discarded.",
      popupTextOverview: "Are you sure you want to go to Overview? Your current burger will be discarded."

    }
  },
  props: {
    parentState: String,
    lang: String,
    uiLabels: Object,
    burgers: Array,
    ingredients: Array,
  },

  created: function() {
    this.lang = this.$parent.lang;
    this.uiLabels = this.$parent.uiLabels;
  },

  methods: {

    switchStage: function(stage) {
      if (this.parentState ==='BreadAndPatty' || this.parentState === 'ToppingsAndSauce' || this.parentState === 'Vegetables') {
        if(stage !== 'BreadAndPatty' && this.burgers[this.burgers.length-1].ingredients.length > 0){
          if (stage === 'Drinks' && confirm(this.popupTextSidesAndDrinks)) {
            this.$emit('switchStage', stage);
            this.$emit('wipeBurgerFromOrder', this.burgers.length-1);
          }

          else if(stage === 'OverView' && confirm(this.popupTextOverview)) {
            this.$emit('switchStage', stage);
            this.$emit('wipeBurgerFromOrder', this.burgers.length-1);
          }
        }
        else if (stage !== 'BreadAndPatty' && this.burgers[this.burgers.length-1].ingredients.length === 0){
          this.$emit('switchStage', stage);
          this.$emit('wipeBurgerFromOrder', this.burgers.length-1)
        }
      }

      else {
        if(stage === 'BreadAndPatty'){
          this.$emit('createNewBurger');
        }
        this.$emit('switchStage', stage);
      }
    },

    switchStageWipeOrder: function(stage) {
      if (confirm(this.cancelPopupText)) {
        this.$emit('wipeOrder');
        this.$emit('switchStage', stage)
      }
    }
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Quicksand');

#span {
  margin-top: 1em;
  margin-bottom: 1em;
  display: inline-block;
  margin-right: 10%
}

.heading {
  text-align: center;
}

.tabBar {
  height: 3.5em;
  width: 3.5em;
  border-radius: 50%;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-right: 1.5em;
  margin-left: 1em;
  text-align: center;
  border-style: solid;
  border-color: black;
  border-width: thin;
  font-weight: bold;
}

#TopPanelContainer {
  align-items: center;
  vertical-align: middle;
  display:grid;
  background-color: rgb(28, 247, 189);
  height: 4em;
  border-style: solid;
  border-color: black;
  border-width: thin;
}

.tabAndText{
  height: 100%;
  text-align: center;
  font-size: 100%;
  font-weight: bold;
}

#Parent{
  text-align: center;
}

.stageText{
  display: inline-block;
}

button {
  font-family: 'Quicksand', sans-serif;
  border-style: solid;
  float:left;
  margin: 0;
}

button:hover {
  cursor: pointer;
}

.stageButton {
  background-color: rgb(0,200,250);
}

.stageButton:hover {

}

#sidesAndDrinksPage {
  grid-column: 2;
  grid-row: 1;
}

#overViewPage {
  grid-column: 3;
  grid-row: 1;
}

#DescriptionText{
  font-size: 1em;
  float: right;
  margin: 0em;
}

#Cancel {
  background-color: rgb(254, 56, 56);
  font-family: 'Quicksand', sans-serif;
  border-style: solid;
  float: right;
  height: 100%;
  width: 9em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  border-color: black;
  border-width: thin;
  opacity: 1;
  }


#Cancel:hover {
background-color: rgb(250, 117, 117);

}
@media (max-width: 670px){
  .tabBar{margin:0; height: 2.5em; width: 2.5em;}
  .OverlayText{font-size: 0.5em;}
  #Cancel {height: 2.5em; width: 4em; margin-left: 4%; margin-right: 2%; padding:0;}
}

</style>
