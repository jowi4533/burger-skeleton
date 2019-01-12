<template>
<div id = "BreadAndPattyContainer">
  <div id="ingredientButtons">
    <button :class="{tabButton : parentState === 'BreadAndPatty'}"> {{uiLabels.breadandpatty}} </button>
    <button v-on:click= "switchTab('ToppingsAndSauce')"> {{uiLabels.toppingsandsauce}} </button>
    <button v-on:click= "switchTab('Vegetables')"> {{uiLabels.veggies}} </button>
  </div>

<div id="BreadAndPatty">
  <h4 id="BreadText"> {{uiLabels.bread}} </h4>
  <h4 id="PattyText"> {{uiLabels.patty}} </h4>
  <div id="BreadContainer">

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

  <div id="PattyContainer">

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
</div>


</div>

</template>

<script>
import Ingredient from '@/components/Ingredient.vue'
//import sharedVueStuff from '@/components/sharedVueStuff.js'
export default {
  name: 'BreadAndPatty',
	// props: {
	// uiLabels: Object,
	// lang: String,
	// ingredients: Array,
	// item: Object
  // },

  props: {
    parentState: String,
    lang: String,
    uiLabels: Object,
    ingredients: Array,
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
    },
    removeFromOrder : function(item){
      this.$parent.removeFromOrder(item);
    }

  }
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
  background-color: rgb(40,170,150);

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
  border-color: black;
  border:2px;


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
                      "PattyText"
                      "Patty";
   grid-template-rows:5% auto 5% auto ;
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
::-webkit-scrollbar {
 display: none;
}

button {
  border-style: solid;
  height: 3em;
  width: 15em;
  font-size: 0.6em;
  padding: 0;
}

</style>
