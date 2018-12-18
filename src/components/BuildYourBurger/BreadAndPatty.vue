<template>
<div id = "BreadAndPattyContainer">

<div id="ingredientButtons">

  <button id="BreadAndPattyTab">Bread and Patty</button>
  <button id="ToppingsAndSauceTab" v-on:click= "switchTab('ToppingsAndSauce')">Toppings and Sauce</button>
  <button id="VegetablesTab" v-on:click= "switchTab('Vegetables')">Vegetables</button>
</div>

<div id="BreadAndPatty">

<Ingredient
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

    //Changes to the different components, these are used for navigating with the buttons
    switchToToppingsAndSauce: function() {
      this.$parent.state = "ToppingsAndSauce";
    },
    switchToVegetables: function() {
      this.$parent.state = "Vegetables"
    },
    switchToMenuPage: function() {
      this.$parent.state = "MenuPage"
    },
  }
}


</script>


<style scoped>
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
