<template>
<div id = "VegetablesContainer">
  <div id="ingredientButtons">
    <button id="breadPattyButton" v-on:click= "switchTab('BreadAndPatty')"> {{uiLabels.breadandpatty}} </button>
    <button v-on:click= "switchTab('ToppingsAndSauce')"> {{uiLabels.toppingsandsauce}} </button>
    <button :class="{tabButton : parentState === 'Vegetables'}"> {{uiLabels.veggies}} </button>
  </div>

  <div id="Vegetables">
    <h4 id="VegetablesText"> {{uiLabels.veggies}} </h4>
    <div id="VegetableOptionsContainer">
      <Ingredient
      class="ingredients"
      ref="ingredient"
      v-for="item in ingredients"
      v-if="item.category == 4"
      v-on:increment="addToOrder(item)"
      v-on:decrease="removeFromOrder(item)"
      :ui-labels="uiLabels"
      :item="item"
      :lang="lang"
      :key="item.ingredient_id">
      </Ingredient>
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
    ingredients: Array
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
    removeFromBurgerIngredients : function(item){
      this.$parent.removeFromBurgerIngredients(item);
    }
  }
}


</script>


<style scoped>
#breadPattyButton {
  border-left:hidden;
}

.ingredients {
  text-transform: capitalize;
}

.tabButton {
  background-color: yellow;
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
                      "RestenText"
                      "Resten";
   grid-template-rows:5% auto 5% 43.7%;
   grid-template-columns: 2fr;
   grid-row-gap: 0.3em;
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
  margin-right: 1em;
  padding: 0;
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
