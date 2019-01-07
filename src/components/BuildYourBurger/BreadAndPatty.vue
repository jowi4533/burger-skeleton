<template>
<div id = "BreadAndPattyContainer">
  <div id="ingredientButtons">
    <button :class="{tabButton : parentState === 'BreadAndPatty'}"> {{uiLabels.breadandpatty}} </button>
    <button v-on:click= "switchTab('ToppingsAndSauce')"> {{uiLabels.toppingsandsauce}} </button>
    <button v-on:click= "switchTab('Vegetables')"> {{uiLabels.veggies}} </button>
  </div>

<div id="BreadAndPatty">

  <div id="BreadContainer">
    <h4> {{uiLabels.bread}} </h4>
    <Ingredient
    class="ingredients"
    ref="ingredient"
    v-for="item in ingredients"
    v-if="item.category == 1"
    v-on:increment="addToOrder(item)"
    :ui-labels="uiLabels"
    :item="item"
    :lang="lang"
    :key="item.ingredient_id">
    <!-- :img="item.ingredient_pic"> -->

    </Ingredient>
  </div>

  <div id="PattyContainer">
    <h4> {{uiLabels.patty}} </h4>
    <Ingredient
    class="ingredients"
    ref="ingredient"
    v-for="item in ingredients"
    v-if="item.category == 2"
    v-on:increment="addToOrder(item)"
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
  display: grid;
  grid-template-areas: "ingredientButtons BreadAndPatty";
  grid-template-rows: 15% 85%;
  grid-template-columns: 1fr;
    /* grid-template-columns: 16.5% 16.5% 16.5% 16.5% 16.5% 16.5%; */
  grid-gap: 1em;

}

#ingredientButtons{
  grid-row: 1;
  position: relative;
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
  grid-row: 2;
  display: grid;
  grid-template-areas: "Bread Patty";
   grid-template-rows:50% 50% ;
   grid-template-columns: 2fr;
}
#BreadContainer{
  grid-row: 1;

  display: grid;
  grid-template-columns: repeat(auto-fit, calc(7em + 12px));
  grid-gap: 1em;
}
#PattyContainer{
  grid-row: 2;

  display: grid;
  grid-template-columns: repeat(auto-fit, calc(7em + 12px));
  grid-gap: 1em;
}

button {
  border-style: solid;
  height: 3em;
  width: 15em;
  font-size: 0.6em;
  padding: 0;
}

</style>
