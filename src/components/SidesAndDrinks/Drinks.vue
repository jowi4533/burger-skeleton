<template>
  <div id = "DrinksAndSidesContainer">
    <div id="DrinksAndSides">

      <h4 class="ContainerText" id="DrinksText"> {{uiLabels.drinks}} </h4>
      <h4 class="ContainerText" id="SidesText"> {{uiLabels.sides}} </h4>

      <div id="DrinksContainer" v-on:scroll="windowScroll('DrinksContainer')">
        <Ingredient
        class="ingredients"
        ref="ingredient"
        v-for="item in ingredients"
        v-if="item.category == 7"
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
    <div id="progress-Drinkscontainer">
      <div class="progress-Drinksbar" id="myDrinksBar">
      </div>
    </div>

    <div id="SidesContainer" v-on:scroll="windowScroll('SidesContainer')">
      <Ingredient
      class="ingredients"
      ref="ingredient"
      v-for="item in ingredients"
      v-if="item.category == 6"
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

  <div id="progress-Sidescontainer">
    <div class="progress-Sidesbar" id="mySidesBar">
    </div>
  </div>

</div>
</div>

</template>

<script>
import Ingredient from '@/components/Ingredient.vue'

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
    ingredients: Array,
    burgerIngredients: Array,
    sideAndDrinkItems: Array
  },

  components: {
    Ingredient
  },

  methods: {
    switchTab: function(tab) {
      this.$emit('switchTab', tab);
    },

    switchStage: function(stage) {
      this.$emit('switchStage', stage);
    },
    addToOrder : function(item) {
      this.$parent.addToSideAndDrinkItems(item);
    },
    removeFromOrder : function(item){
      this.$parent.removeFromSideAndDrinkItems(item);
    },
    windowScroll: function(id) {
      var winScroll = document.body.scrollLeft || document.getElementById(id).scrollLeft;
      var width = document.getElementById(id).scrollWidth - document.getElementById(id).clientWidth;
      var scrolled = (winScroll / width) * 100;
      if (id == "DrinksContainer" ) {
        document.getElementById("myDrinksBar").style.width = scrolled + "%";
      }
      if (id == "SidesContainer") {
        document.getElementById("mySidesBar").style.width = scrolled + "%";
      }

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
  background-color: yellow;
}
#DrinksAndSidesContainer{
  height: 87vh;
  display: grid;
  grid-template-areas: "ingredientButtons"
  "DrinksAndSides";
  grid-template-rows: auto 95%;
  grid-template-columns: 1fr;
  /* grid-template-columns: 16.5% 16.5% 16.5% 16.5% 16.5% 16.5%; */


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
  "DrinksBar"
  "SidesText"
  "Sides"
  "SidesBar";
  grid-template-rows:5% auto 1% 5% auto 1%;
  grid-template-columns: 2fr;
  grid-row-gap: 0.3em;
  margin-left: 1%;
}

#DrinksText{
  grid-area: DrinksText;
  text-align: center;
  margin: 0;
}
#SidesText{
  grid-area: SidesText;
  text-align: center;
  margin: 0;
}
#DrinksContainer{


  grid-area: Drinks;

  overflow-x: scroll;
  overflow-y:hidden;


  display:grid;
  grid-template-columns:15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em;
  grid-column-gap: 2em;


}
#SidesContainer{

  grid-area: Sides;
  overflow-x: scroll;
  overflow-y:hidden;


  display:grid;
  grid-template-columns:15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em;
  grid-column-gap: 2em;


  /*  grid-template-columns:  repeat(auto-fit, calc(14em)); */

}
#progress-Drinkscontainer {
  grid-area: DrinksBar;
  display:inline-block;
  vertical-align: bottom;
  width: auto;
  height: 5px;
  background: white;
}
#progress-Sidescontainer {
  grid-area: SidesBar;
  display:inline-block;
  vertical-align: bottom;
  width: auto;
  height: 5px;
  background: white;
}
.progress-Drinksbar {
  height: 5px;
  background: gray;
  width: 0%;
}
.progress-Sidesbar {
  height: 5px;
  background: gray;
  width: 0%;
}
button {
  font-family: 'Quicksand', sans-serif;
  border-style: hidden;
  height: 3em;
  width: 15em;
  font-size: 0.6em;
  font-weight: bold;
  margin-right: 1em;
  padding: 0;
}
@media (max-width: 600px) {

  #breadPattyButton{border-left-style: solid; border-left-width: thin}
  #DrinksAndSidesContainer{grid-template-rows: 12.3% 95%;height:82vh;}
  #DrinksAndSides  {grid-row-gap: 0em;grid-template-rows:3% auto 1% 3% auto 9% ;font-size: 0.9em;}



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
