<template>
  <div id = "BreadAndPattyContainer">
    <div id="ingredientButtons">
      <button id="breadPattyButton" :class="{tabButton : parentState === 'BreadAndPatty'}"> {{uiLabels.breadandpatty}} </button>
      <button v-on:click= "switchTab('ToppingsAndSauce')"> {{uiLabels.toppingsandsauce}} </button>
      <button v-on:click= "switchTab('Vegetables')"> {{uiLabels.veggies}} </button>
    </div>

    <div id="BreadAndPatty">

      <h4 id="BreadText"> {{uiLabels.bread}} </h4>

      <h4 id="PattyText"> {{uiLabels.patty}} </h4>

  <div id="BreadContainer"  v-on:scroll="windowScroll('BreadContainer')">

        <Ingredient
        class="ingredients"
        ref="ingredient"
        v-for="item in ingredients"
        v-if="item.category == 1"
        v-on:increment="addToOrder(item)"
        v-on:decrease="removeFromOrder(item)"
        :ui-labels="uiLabels"
        :item="item"
        :lang="lang"
        :key="item.ingredient_id">
      </Ingredient>

    </div>

  <div id="progress-Breadcontainer">
    <div class="progress-Breadbar" id="myBreadBar">
    </div>


  <div id="PattyContainer" v-on:scroll="windowScroll('PattyContainer')">

      <Ingredient
      class="ingredients"
      ref="ingredient"
      v-for="item in ingredients"
      v-if="item.category == 2"
      v-on:increment="addToOrder(item)"
      v-on:decrease="removeFromOrder(item)"
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
    burgerIngredients: Array
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
  // computed: {
  //   windowScroll: function() {
  //     window.onscroll = function() {myFunction()};
  //     console.log("hej");
  //
  //
  //   }
  // }
}


</script>


<style scoped>

h4 {
  margin: 1%;
}

.ingredients {
  text-transform: capitalize;
}

.tabButton {
  background-color: yellow;

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


  /*  grid-template-columns:  repeat(auto-fit, calc(14em)); */

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
  height: 3em;
  width: 15em;
  font-size: 0.6em;
  padding: 0;
}

</style>
