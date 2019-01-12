<template>
<div id = "VegetablesContainer">
  <div id="ingredientButtons">
    <button v-on:click= "switchTab('BreadAndPatty')"> {{uiLabels.breadandpatty}} </button>
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
      this.$parent.addToOrder(item);
    }
  }
}


</script>


<style scoped>
.ingredients {
  text-transform: capitalize;
}

.tabButton {
  background-color: rgb(40,170,150);
}

#VegetablesContainer{
  height: 87vh;
  display: grid;
  grid-template-areas: "ingredientButtons"
                        "Vegetables";
  grid-template-rows: auto 95%;
  grid-template-columns: 1fr;
    /* grid-template-columns: 16.5% 16.5% 16.5% 16.5% 16.5% 16.5%; */
  grid-gap: 1em;
}

#ingredientButtons{
display:block;
  grid-area: ingredientButtons;

}

#Vegetables{
  grid-area: Vegetables;
  display: grid;
  grid-template-areas: "VegetablesText"
                      "VegetableOptionsContainer";
   grid-template-rows:5% auto;
   grid-template-columns: 2fr;
   grid-row-gap: 0.5em;
}
#VegetablesText{
  grid-area: VegetablesText;
  text-align: center;
  background-color: darkgreen;
  margin: 0;
}
#VegetableOptionsContainer{
  grid-area: VegetableOptionsContainer;

  display: grid;
  grid-template-columns:  repeat(auto-fit, calc(7em + 12px));
  grid-gap: calc(10px + 10em);
  grid-row-gap: 1em;
}

button {
  border-style: solid;
  height: 3em;
  width: 15em;
  font-size: 0.6em;
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
