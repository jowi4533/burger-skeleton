<template>
<div id = "DrinksAndSidesContainer">
  <div id="ingredientButtons">
    <button :class="{tabButton : parentState === 'Drinks'}"> {{uiLabels.drinks}} </button>
    <button v-on:click= "switchTab('Sides')"> {{uiLabels.sides}} </button>
  </div>

<div id="DrinksAndSides">

  <h4 id="DrinksText"> {{uiLabels.drinks}} </h4>
  <h4 id="SidesText"> {{uiLabels.sides}} </h4>

<div id="DrinksContainer">
      <Ingredient
      class="ingredients"
      ref="ingredient"
      v-for="item in ingredients"
      v-if="item.category == 7"
      v-on:increment="addToOrder(item)"
      :ui-labels="uiLabels"
      :item="item"
      :lang="lang"
      :key="item.ingredient_id">
      </Ingredient>
</div>
<div id="SidesContainer">
  <Ingredient
  class="ingredients"
  ref="ingredient"
  v-for="item in ingredients"
  v-if="item.category == 6"
  v-on:increment="addToOrder(item)"
  :ui-labels="uiLabels"
  :item="item"
  :lang="lang"
  :key="item.ingredient_id">
  </Ingredient>
</div>

</div>

  <!-- <div id="ToggleBar">
    <button id="next" v-on:click= "switchTab('Sides')"> {{uiLabels.next}} </button>
    <button id="previous" v-on:click= "switchStage('Vegetables')"> {{uiLabels.previous}} </button>
  </div> -->

</div>

</template>

<script>
import Ingredient from '@/components/Ingredient.vue'
//import sharedVueStuff from '@/components/sharedVueStuff.js'

export default{
  name: 'Drinks',

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

#ingredientButtons{
  grid-row: 1;
  position: relative;
}

.ingredients {
  text-transform: capitalize;
}

.tabButton {
  background-color: rgb(40,170,150);
}
#DrinksAndSidesContainer{
  height: 87vh;
  display: grid;
  grid-template-areas: "ingredientButtons"
                        "DrinksAndSides";
  grid-template-rows: auto 95%;
  grid-template-columns: 1fr;
    /* grid-template-columns: 16.5% 16.5% 16.5% 16.5% 16.5% 16.5%; */
  grid-gap: 0.3em;

}

#ingredientButtons{
display:block;
  grid-area: ingredientButtons;

}

/* #next{
  position: relative;
  bottom: 0;

  grid-column: 6;
  grid-row: 4;
  float: right;
  background-color: rgb(30,200,100);
}

#previous{
  grid-column: 5;
  grid-row: 4;

  background-color: rgb(30,100,200);
  position: relative;
  bottom: 0;
  float: right;
} */

#DrinksAndSides{
  grid-area: DrinksAndSides;
  display: grid;

  grid-template-areas: "DrinksText"
                      "Drinks"
                      "SidesText"
                      "Sides";
   grid-template-rows:5% auto 5% auto ;
   grid-template-columns: 2fr;
   grid-row-gap: 0.3em;
}
#DrinksText{
  grid-area: DrinksText;
  text-align: center;
  background-color: darkgreen;
  margin: 0;
}
#SidesText{
  grid-area: SidesText;
    text-align: center;
    background-color: darkgreen;
    margin: 0;
}
#DrinksContainer{


  grid-area: Drinks;

  overflow-x: scroll;
  overflow-y:hidden;


  display:grid;
  grid-template-columns:13em 13em 13em 13em 13em 13em 13em 13em 13em 13em 13em 13em 13em;
  grid-column-gap: 4em;

}
#SidesContainer{

  grid-area: Sides;
  overflow-x: scroll;
  overflow-y:hidden;


  display:grid;
  grid-template-columns:13em 13em 13em 13em 13em 13em 13em 13em 13em 13em 13em 13em 13em;
  grid-column-gap: 4em;

/*  grid-template-columns:  repeat(auto-fit, calc(14em)); */

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
