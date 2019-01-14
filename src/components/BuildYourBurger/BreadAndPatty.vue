<template>
  <div id = "BreadAndPattyContainer">
    <div id="ingredientButtons">
      <button class="ingredientButtons" id="breadPattyButton" :class="{tabButton : parentState === 'BreadAndPatty'}"> {{uiLabels.breadandpatty}} </button>
      <button class="ingredientButtons" v-on:click= "switchTab('ToppingsAndSauce')"> {{uiLabels.toppingsandsauce}} </button>
      <button class="ingredientButtons" v-on:click= "switchTab('Vegetables')"> {{uiLabels.veggies}} </button>
    </div>

    <div id="BreadAndPatty">
      <h4 class="ContainerText" id="BreadText"> {{uiLabels.bread}} </h4>
      <h4 class="ContainerText" id="PattyText"> {{uiLabels.patty}} </h4>

      <div id="BreadContainer" v-on:scroll="windowScroll('BreadContainer')">
        <Ingredient
        class="ingredients"
        ref="ingredient"
        v-for="item in ingredients"
        v-if="item.category == 1"
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

    <div id="progress-Breadcontainer">
      <div class="progress-Breadbar" id="myBreadBar">
      </div>
    </div>

    <div id="PattyContainer" v-on:scroll="windowScroll('PattyContainer')">
      <Ingredient
      class="ingredients"
      ref="ingredient"
      v-for="item in ingredients"
      v-if="item.category == 2"
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

  <div id="progress-Pattycontainer">
    <div class="progress-Pattybar" id="myPattyBar">
    </div>
  </div>

</div>
</div>

</template>

<script>
import Ingredient from '@/components/Ingredient.vue'
export default {
  name: 'BreadAndPatty',
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
      this.$parent.addToBurgerIngredients(item);
    },
    removeFromOrder : function(item){
      this.$parent.removeFromBurgerIngredients(item);
    },

    windowScroll: function(id) {
      var winScroll = document.body.scrollLeft || document.getElementById(id).scrollLeft;
      var width = document.getElementById(id).scrollWidth - document.getElementById(id).clientWidth;
      var scrolled = (winScroll / width) * 100;
      if (id == "BreadContainer" ) {
        document.getElementById("myBreadBar").style.width = scrolled + "%";
      }
      if (id == "PattyContainer") {
        document.getElementById("myPattyBar").style.width = scrolled + "%";
      }
    }
  },

}
</script>

<style scoped>
button:hover {
  cursor: pointer;
}
h4 {
  margin: 1%;
}

.ingredients {
  text-transform: capitalize;
}

.tabButton {
  background-color: rgb(0,200,250);
  margin: 0;
}

#breadPattyButton {
  border-left-style: hidden;
}

#BreadAndPattyContainer{
  height: 87vh;
  display: grid;
  grid-template-areas: "ingredientButtons"
  "BreadAndPatty";
  grid-template-rows: auto 95%;
  grid-template-columns: 1fr;
}

#ingredientButtons{
  display:block;
  grid-area: ingredientButtons;
}

#BreadAndPatty{
  grid-area: BreadAndPatty;
  display: grid;
  grid-template-areas: "BreadText"
  "Bread"
  "BreadBar"
  "PattyText"
  "Patty"
  "PattyBar";
  grid-template-rows:5% auto 1% 5% auto 1% ;
  grid-template-columns: 2fr;
  grid-row-gap: 0.3em;
  margin-left: 1%;
  background-color: rgb(192, 239, 232);
}

#BreadText{
  grid-area: BreadText;
  text-align: center;

  margin: 0;
}
#PattyText{
  grid-area: PattyText;
  text-align: center;
  margin: 0;
}

#BreadContainer{
  grid-area: Bread;
  overflow-x: scroll;
  overflow-y:hidden;

  display:grid;
  grid-template-columns:15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em;
  grid-column-gap: 2em;

}
#PattyContainer{
  grid-area: Patty;
  overflow-x: scroll;
  overflow-y:hidden;

  display:grid;
  grid-template-columns:15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em 15em;
  grid-column-gap: 2em;

}
#progress-Breadcontainer {
  grid-area: BreadBar;
  display:inline-block;
  vertical-align: bottom;
  width: auto;
  height: 5px;
  background: white;
}
#progress-Pattycontainer {
  grid-area: PattyBar;
  display:inline-block;
  vertical-align: bottom;
  width: auto;
  height: 5px;
  background: white;
}
.progress-Breadbar {
  height: 5px;
  background: gray;
  width: 0%;
}
.progress-Pattybar {
  height: 5px;
  background: gray;
  width: 0%;
}
::-webkit-scrollbar {
  display: none;
}

button {
  font-family: 'Quicksand', sans-serif;
  border-style: solid;
  border-color: black;
  border-width: thin;
  border-top-style: hidden;
  margin: 0;
  height: 3em;
  width: 15em;
  font-size: 0.6em;
  font-weight: bold;
  padding: 0;
}

@media (max-width: 600px) {
  #ingredientButtons {display:grid; margin-left: 18%;font-size: 0.8em;}
  #breadPattyButton{border-left-style: solid;}
  #BreadAndPatty  {grid-row-gap: 0em;grid-template-rows:3% auto 1% 3% auto 9% ;font-size: 0.9em;}
  .ContainerText{font-size: 0.8em;}
  .ingredientButtons{width: 80%;}
}
</style>
