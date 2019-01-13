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

        <span v-if ="parentState == 'BreadAndPatty'">
          {{uiLabels.chooseBreadAndPatty}}
        </span>
        <span v-if ="parentState == 'ToppingsAndSauce'">
          {{uiLabels.chooseToppingsAndSauce}}
        </span>
        <span v-if ="parentState == 'Vegetables'">
            {{uiLabels.chooseVegetables}}
        </span>
        <span v-if ="parentState == 'Drinks'">
            {{uiLabels.chooseDrinkAndSides}}
        </span>

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
      popupText: "Are you sure you want to Cancel? Your order will be discarded.",
      popupTextSidesAndDrinks: "Are you sure you want to go to Sides and Drinks? Your current burger will be discarded."
    }
  },
  props: {
    parentState: String,
    lang: String,
    uiLabels: Object
  },

  created: function() {
    this.lang = this.$parent.lang;
    this.uiLabels = this.$parent.uiLabels;
  },

  //mixins: [sharedVueStuff],

  methods: {

    switchStage: function(stage) {
        if (this.parentState=='BreadAndPatty' || this.parentState === 'ToppingsAndSauce' || this.parentState === 'Vegetables') {

          if (confirm(this.popupTextSidesAndDrinks)) {
            this.$emit('switchStage', stage);
            this.$emit('wipeOrder');
            console.log("confirm");
          }
        }
        else {
          this.$emit('switchStage', stage);
          this.$emit('wipeOrder');
          console.log("else");
        }
    },

    switchStageWipeOrder: function(stage) {
      if (this.parentState=='BreadAndPatty' || this.parentState === 'ToppingsAndSauce' || this.parentState === 'Vegetables') {

        if (confirm(this.popupText)) {
          this.$emit('switchStageWipeOrder');
          this.switchStage(stage);
          console.log("confirm");
        }
      }
      else {
        this.$emit('switchStageWipeOrder');
        this.switchStage(stage);
        console.log("else");
      }

    }
  }
}


</script>


<style scoped>
span {

}

.heading {
  text-align: center;
}

.tabBar {
  height: 3.5em;
  width: 3.5em;
  border-radius: 50%;
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
background-color: #b9c0cc;
height: 4em;
border-style: solid;
border-color: black;
border-width: thin;
}

.tabAndText{
  text-align: center;
  font-size: 150%;
  font-weight: bold;
}

#Parent{
  text-align: center;
}

.stageText{
  display: inline-block;
}

button {
  border-style: solid;
  float:left;
}



.stageButton {
  background-color: yellow;
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
  background-color: red;
  border-style: solid;
  float: right;
  height: 3.5em;
  width: 7em;
  margin-left: 5%;
  margin-right: 2%;
  font-weight: bold;
  border-color: black;
  border-width: thin;



}

</style>
