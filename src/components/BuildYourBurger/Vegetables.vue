<template>
<div id = "VegetablesContainer">
  <div id="ingredientButtons">
    <button class="ingredientButtons" id="breadPattyButton" v-on:click= "switchTab('BreadAndPatty')"> {{uiLabels.breadandpatty}} </button>
    <button class="ingredientButtons" v-on:click= "switchTab('ToppingsAndSauce')"> {{uiLabels.toppingsandsauce}} </button>
    <button class="ingredientButtons" :class="{tabButton : parentState === 'Vegetables'}"> {{uiLabels.veggies}} </button>
  </div>

  <div id="Vegetables" >
    <h4 class="ContainerText" id="VegetablesText"> {{uiLabels.veggies}} </h4>
    <div id="VegetableOptionsContainer" v-on:scroll="windowScroll('VegetableOptionsContainer')">
      <Ingredient
      class="ingredients"
      ref="ingredient"
      v-for="item in ingredients"
      v-if="item.category == 4"
      v-on:increment="addToOrder(item)"
      v-on:decrease="removeFromOrder(item)"
      :sideAndDrinkItems="sideAndDrinkItems"
      :burgerIngredients="burgerIngredients"
      :ui-labels="uiLabels"
      :item="item"
      :lang="lang"
      :key="item.ingredient_id">
      </Ingredient>
    </div>

    <div id="progress-Vegetablescontainer">
      <div class="progress-Vegetablesbar" id="myVegetablesBar">
      </div>
    </div>
  <!-- <div id="ToggleBar">
    <button id="next" v-on:click= "switchStage('Drinks')"> {{uiLabels.next}} </button>
    <button id="previous" v-on:click= "switchTab('ToppingsAndSauce')"> {{uiLabels.previous}} </button>
  </div> -->

</div>
</div>
</template>

<script>
import Ingredient from '@/components/Ingredient.vue'
//import sharedVueStuff from '@/components/sharedVueStuff.js'

export default{
  name: 'Vegetables',

  data: function() {
    return {
    }
  },

  props: {
    parentState: String,
    lang: String,
    uiLabels: Object,
    ingredients: Array,
    burgerIngredients: Array,
    sideAndDrinkItems: Array
  },

  components: {
    Ingredient
  },

  //mixins: [sharedVueStuff],

  methods: {
    switchTab: function(tab) {
      this.$emit('switchTab', tab);
    },

    switchStage: function(stage) {
      this.$emit('switchStage', stage);
    },
    addToOrder : function(item) {
      this.$parent.addToBurgerIngredients(item);
    },
    removeFromOrder : function(item){
      this.$parent.removeFromBurgerIngredients(item);
    },
    windowScroll: function(id) {
  var winScroll = document.body.scrollLeft || document.getElementById(id).scrollLeft;
  var width = document.getElementById(id).scrollWidth - document.getElementById(id).clientWidth;
  var scrolled = (winScroll / width) * 100;
  if (id == "VegetableOptionsContainer" ) {
      document.getElementById("myVegetablesBar").style.width = scrolled + "%";
    }
}
  }
}


</script>


<style scoped>
#breadPattyButton {
  border-left:hidden;
  margin: 0;
}

.ingredients {
  text-transform: capitalize;
}

.tabButton {
  background-color: rgb(0,200,250);
  margin: 0;
}

#VegetablesContainer{
  height: 87vh;
  display: grid;
  grid-template-areas: "ingredientButtons"
                        "Vegetables";
  grid-template-rows: auto 95%;
  grid-template-columns: 1fr;
    /* grid-template-columns: 16.5% 16.5% 16.5% 16.5% 16.5% 16.5%; */

}

#ingredientButtons{
display:block;
  grid-area: ingredientButtons;


}

#Vegetables{
  grid-area: Vegetables;
  display: grid;
  grid-template-areas: "VegetablesText"
                      "VegetableOptionsContainer"
                      "VegetablesBar"
                      "RestenText"
                      "Resten";
   grid-template-rows:5% auto 1% 5% 43.7%;
   grid-template-columns: 2fr;
   grid-row-gap: 0.3em;
   margin-left: 1%;

}
#VegetablesText{
  grid-area: VegetablesText;
  text-align: center;
  margin: 0;
}
#VegetableOptionsContainer{
  grid-area: VegetableOptionsContainer;
  overflow-x: scroll;
  overflow-y:hidden;
  display:grid;
  grid-template-columns:15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em;
  grid-column-gap: 2em;
}
#progress-Vegetablescontainer {
  grid-area: VegetablesBar;
  display:inline-block;
  vertical-align: bottom;
  width: auto;
  height: 5px;
  background: white;
}

.progress-Vegetablesbar {
  height: 5px;
  background: gray;
  width: 0%;
}


button {
  font-family: 'Quicksand', sans-serif;
  border-style: solid;
  border-width: thin;
  border-color: black;
  border-top-style: hidden;
  height: 3em;
  width: 15em;
  font-size: 0.6em;
  font-weight: bold;
  margin: 0;
  padding: 0;
}

button:hover {
  cursor: pointer;
}

@media (max-width: 600px) {
  #ingredientButtons {display:grid; margin-left: 18%;font-size: 0.8em;}
  #breadPattyButton{border-left-style: solid; border-left-width: thin}
  #Vegetables {grid-row-gap: 0em;grid-template-rows:3% auto 1% 3% auto 48% ; font-size: 0.9em;}
  #VegetablesContainer{height:82vh;}
  .ContainerText{font-size: 0.8em;}
  .ingredientButtons{width: 80%;}
}


/* #next{
  position: relative;
  bottom: 0;
  float: right;
  background-color: rgb(30,200,100);
}
#previous{
  position: relative;
  bottom: 0;
  float: right;
  background-color: rgb(30,100,200);
} */

</style>
