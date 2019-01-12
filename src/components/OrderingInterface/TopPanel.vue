<template>
  <div id = "TopPanelContainer">

    <div class = "tabAndText" v-if = "parentState !== 'Payment'">

      <button class="tabBar" v-on:click= "switchStage('BreadAndPatty')" :class="{stageButton : parentState === 'BreadAndPatty' || parentState === 'ToppingsAndSauce' || parentState === 'Vegetables'}"> 1 </button>
      <button class="tabBar" v-on:click= "switchStage('Drinks')" :class="{stageButton : parentState === 'Drinks' || parentState === 'Sides' }">2</button>
      <button class="tabBar" v-on:click= "switchStage('OverView')" :class="{stageButton : parentState === 'OverView' }">3</button>


        <span v-if="parentState == 'BreadAndPatty'
              || parentState == 'ToppingsAndSauce'
              || parentState == 'Vegetables'"
              >
              {{uiLabels.stageOne}}
        </span>

        <span v-if="parentState == 'Sides'
              || parentState == 'Drinks'"
              >
              {{uiLabels.stageTwo}}
        </span>

        <button id="Cancel" v-on:click= "switchStage('MenuPage')">{{uiLabels.cancel}}</button>
    </div>
</div>
</template>

<script ref = "topPanel">
//import sharedVueStuff from '@/components/sharedVueStuff.js'

export default{

  name: 'TopPanel',
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
      this.$emit('switchStage', stage);
    },
  },
}


</script>


<style scoped>
.heading {
  text-align: center;
}

.tabBar {
  height: 2.3em;
  width: 2.3em;
  border-radius: 50%;
  margin-right: 1.5em;
  text-align: center;
}

#TopPanelContainer {
display:grid;
background-color: grey;
}

.tabAndText{
  text-align: center;
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
} */
#DescriptionText{
    font-size: 1em;
    float: right;
    margin: 0em;
}
#Cancel {
  float: right;
  height: 2.3em;
  width: auto;
  margin-left: 7.5%;




}

</style>
