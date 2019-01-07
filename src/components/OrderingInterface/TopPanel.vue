<template>
  <div id = "TopPanelContainer">

    <div id = "buildYourBurgerPage" v-if = "parentState !== 'Payment'">

      <button v-on:click= "switchStage('BreadAndPatty')" :class="{stageButton : parentState === 'BreadAndPatty' || parentState === 'ToppingsAndSauce' || parentState === 'Vegetables'}"> 1 </button>
      <button v-on:click= "switchStage('Drinks')" :class="{stageButton : parentState === 'Drinks' || parentState === 'Sides' }">2</button>
      <button id="Button3" v-on:click= "switchStage('OverView')" :class="{stageButton : parentState === 'OverView' }">3</button>




      <inline id="StageText" v-if="parentState == 'BreadAndPatty'
            || parentState == 'ToppingsAndSauce'
            || parentState == 'Vegetables'"
            class ="heading">
            {{uiLabels.stageOne}}
      </inline>

      <inline v-if="parentState == 'Sides'
            || parentState == 'Drinks'"
            class ="heading">
            {{uiLabels.stageTwo}}
      </inline>

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

#TopPanelContainer {
display:grid;
}
#Button3{

}
#buildYourBurgerPage{
  text-align: center;
}
#ParentStageText{
  text-align: center;
}
#StageText{
  display: inline-block;
}
button {
  border-style: solid;
  float:left;
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
    float: right;
    margin: 0em;
}
#Cancel {
  float: right;




}

</style>
