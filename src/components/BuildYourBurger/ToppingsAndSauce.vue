<template>
<div id = "ToppingsAndSauceContainer">
  <div id="ingredientButtons">
    <button id="breadPattyButton" v-on:click= "switchTab('BreadAndPatty')" :class="{tabButton : parentState === 'BreadAndPatty'}"> {{uiLabels.breadandpatty}} </button>
    <button :class="{tabButton : parentState === 'ToppingsAndSauce'}"> {{uiLabels.toppingsandsauce}} </button>
    <button v-on:click= "switchTab('Vegetables')" :class="{tabButton : parentState === 'BreadAndPatty'}"> {{uiLabels.veggies}} </button>
  </div>

<div id="ToppingsAndSauce">

      <h4 id="ToppingsText"> {{uiLabels.toppings}} </h4>
      <h4 id="SauceText"> {{uiLabels.sauce}} </h4>

  <div id="ToppingContainer" v-on:scroll="windowScroll('ToppingContainer')">
      <Ingredient
      class="ingredients"
      ref="ingredient"
      v-for="item in ingredients"
      v-if="item.category == 3"
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

    <div id="progress-Toppingscontainer">
      <div class="progress-Toppingsbar" id="myToppingsBar">
      </div>
    </div>

    <div id="SauceContainer" v-on:scroll="windowScroll('SauceContainer')">
        <Ingredient
        class="ingredients"
        ref="ingredient"
        v-for="item in ingredients"
        v-if="item.category == 5"
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
      <div id="progress-Saucecontainer">
        <div class="progress-Saucebar" id="mySauceBar">
        </div>
      </div>
    </div>

  <!-- <div id="ToggleBar">
    <button id="next" v-on:click= "switchTab('Vegetables')"> {{uiLabels.next}} </button>
    <button id="previous" v-on:click= "switchTab('BreadAndPatty')"> {{uiLabels.previous}} </button>
  </div> -->

</div>

</template>

<script>
import Ingredient from '@/components/Ingredient.vue'
//import sharedVueStuff from '@/components/sharedVueStuff.js'

export default{
  name: 'BreadAndPatty',

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
  if (id == "ToppingContainer" ) {
      document.getElementById("myToppingsBar").style.width = scrolled + "%";
    }
  if (id == "SauceContainer") {
      document.getElementById("mySauceBar").style.width = scrolled + "%";
  }
  }
}
}


</script>


<style scoped>
#breadPattyButton {
  border-left:hidden;
}

.tabButton {
  background-color: yellow;
}

.ingredients {
  text-transform: capitalize;
}


#ToppingsAndSauceContainer{
    height: 87vh;
  display: grid;
  grid-template-areas: "ingredientButtons"
                        "ToppingsAndSauce";
  grid-template-rows: auto 95%;
  grid-template-columns: 1fr;
    /* grid-template-columns: 16.5% 16.5% 16.5% 16.5% 16.5% 16.5%; */


  }
  #ingredientButtons{
    display: block;
    grid-area: ingredientButtons;

  }
  #ToppingsAndSauce{
    grid-row: ToppingsAndSauce;
    display: grid;
    grid-template-areas: "ToppingsText"
                        "Toppings"
                        "ToppingsBar"
                        "SauceText"
                        "Sauce"
                        "SauceBar";
     grid-template-rows:5% auto 1% 5% auto 1% ;
     grid-template-columns: 2fr;
     grid-row-gap: 0.3em;
     margin-left: 1%;

   }
   #ToppingsText{
     grid-area: ToppingsText;
     text-align: center;
     margin: 0;
   }
   #SauceText{
     grid-area: SauceText;
     text-align: center;
     margin: 0;
   }

   #ToppingContainer{
     grid-area: Toppings;

     overflow-x: scroll;
     overflow-y:hidden;


     display:grid;
     grid-template-columns:15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em;
     grid-column-gap: 2em;

   }
   #SauceContainer{
     grid-area: Sauce;
     overflow-x: scroll;
     overflow-y:hidden;


     display:grid;
     grid-template-columns:15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em;
     grid-column-gap: 2em;


   }
   #progress-Toppingscontainer {
     grid-area: ToppingsBar;
     display:inline-block;
     vertical-align: bottom;
     width: auto;
     height: 5px;
     background: white;
   }
   #progress-Saucecontainer {
     grid-area: SauceBar;
     display:inline-block;
     vertical-align: bottom;
     width: auto;
     height: 5px;
     background: white;
   }
   .progress-Toppingsbar {
     height: 5px;
     background: gray;
     width: 0%;
   }
   .progress-Saucebar {
     height: 5px;
     background: gray;
     width: 0%;
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
button {
  font-family: 'Quicksand', sans-serif;
  height: 3em;
  width: 15em;
  font-size: 0.6em;
  font-weight: bold;
  margin-right: 1em;
  padding: 0;
  border-style: solid;
  border-width: thin;
  border-color: black;
  border-top-style: hidden;
}
@media (max-width: 600px) {
  #ingredientButtons {display:grid; text-align:center; margin-left: 25%;}
  #breadPattyButton{border-left-style: solid; border-left-width: thin;}
  #ToppingsAndSauce  {grid-row-gap: 0em;grid-template-rows:5% auto 1% 5% auto 10% ;}
}
</style>
