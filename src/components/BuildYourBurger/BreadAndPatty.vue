<template>
<div id = "BreadAndPattyContainer">
<div id="ingredientButtons">

  <button :class="{tabButton : parentState === 'BreadAndPatty'}"> {{uiLabels.breadandpatty}} </button>
  <button v-on:click= "switchTab('ToppingsAndSauce')"> {{uiLabels.toppingsandsauce}} </button>
  <button v-on:click= "switchTab('Vegetables')"> {{uiLabels.veggies}} </button>

</div>

<div id="BreadAndPatty">
  <div id="Bread">
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
    </Ingredient>
  </div>

  <div id="Patty">
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

<div id="ToggleBar">
  <button id="next" v-on:click= "switchTab('ToppingsAndSauce')"> {{uiLabels.next}} </button>
  <button id="previous" v-on:click= "switchStage('MenuPage')"> {{uiLabels.previous}} </button>


</div>
</div>

</template>

<script>
import Ingredient from '@/components/Ingredient.vue'
import sharedVueStuff from '@/components/sharedVueStuff.js'
export default {
  name: 'BreadAndPatty',
	// props: {
	// uiLabels: Object,
	// lang: String,
	// ingredients: Array,
	// item: Object
  // },

  props: {
    parentState: String
  },
  components: {
    Ingredient
  },

mixins: [sharedVueStuff],

  methods: {
    switchTab: function(tab) {
      this.$emit('switchTab', tab);
    },

    switchStage: function(stage) {
      this.$emit('switchStage', stage);
    },

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
  background-color: green;
}

#BreadAndPattyContainer{
  display: grid;
  grid-template-rows: 20% 30% 30% 20%;
  grid-template-columns: 15% 15% 15% 15% 15% 15%
}
/*  --------------------------  */
#ingredientButtons{
  grid-row: 1;
  grid-column: 1/ span 6;
}

#BreadAndPattyTab{
grid-column: 1;
}
#ToppingsAndSauceTab{
grid-column: 3;
}
#VegetablesTab{
grid-column: 5;
}
/*  ----------------------------  */

#BreadAndPatty{
  grid-row: 2/ span 2;
  grid-column: 1 / span 6;
}
/*  --------------------------  */
#ToggleBar{
  grid-row: 4;
  grid-column: 1 / span 6;

}
#next{
  position: relative;
  bottom: 0;
  float: right;
}
#previous{
  position: relative;
  bottom: 0;
  float: right;
}




/*  --------------------------  */
</style>
