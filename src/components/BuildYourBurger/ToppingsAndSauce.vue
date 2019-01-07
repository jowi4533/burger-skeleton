<template>
<div id = "ToppingsAndSauceContainer">
<div id="ingredientButtons">
  <button v-on:click= "switchTab('BreadAndPatty')" :class="{tabButton : parentState === 'BreadAndPatty'}"> {{uiLabels.breadandpatty}} </button>
  <button :class="{tabButton : parentState === 'ToppingsAndSauce'}"> {{uiLabels.toppingsandsauce}} </button>
  <button v-on:click= "switchTab('Vegetables')" :class="{tabButton : parentState === 'BreadAndPatty'}"> {{uiLabels.veggies}} </button>



</div>
<div id="ToppingsAndSauce">
  <div id="Toppings">

      <h4> {{uiLabels.toppings}} </h4>
      <Ingredient
      class="ingredients"
      ref="ingredient"
      v-for="item in ingredients"
      v-if="item.category == 3"
      v-on:increment="addToOrder(item)"
      :ui-labels="uiLabels"
      :item="item"
      :lang="lang"
      :key="item.ingredient_id">
      </Ingredient>
    </div>

    <div id="Sauce">

        <h4> {{uiLabels.sauce}} </h4>
        <Ingredient
        class="ingredients"
        ref="ingredient"
        v-for="item in ingredients"
        v-if="item.category == 5"
        v-on:increment="addToOrder(item)"
        :ui-labels="uiLabels"
        :item="item"
        :lang="lang"
        :key="item.ingredient_id">
        </Ingredient>
      </div>
    </div>

  <div id="ToggleBar">
    <button id="next" v-on:click= "switchTab('Vegetables')"> {{uiLabels.next}} </button>
    <button id="previous" v-on:click= "switchTab('BreadAndPatty')"> {{uiLabels.previous}} </button>
  </div>

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
    addToOrder : function(item) {
      this.$parent.addToOrder(item);
    }
  }
}


</script>


<style scoped>

.tabButton {
  background-color: rgb(40,170,150);
}

.ingredients {
  text-transform: capitalize;
}

button {
  border-style: solid;
  height: 3em;
  width: 15em;
  font-size: 0.6em;
  padding: 0;
}
#ToppingsAndSauceContainer{
  display: grid;
  grid-template-areas: "ingredientButtons ToppingsAndSauce";
  grid-template-rows: 15% 85%;
  grid-template-columns: 1fr;
    /* grid-template-columns: 16.5% 16.5% 16.5% 16.5% 16.5% 16.5%; */

    grid-gap: 1em;
  }

#ToppingsAndSauce{
  grid-row: 2;
  display: grid;
  grid-template-areas: "Toppings Sauce";
   grid-template-rows:50% 50% ;
   grid-template-columns: 2fr;
}
#Toppings{
  grid-row: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, calc(7em + 12px));
  grid-gap: 0.5em;
}

#Sauce{
  grid-row: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, calc(7em + 12px));
  grid-gap: 0.5em;
}
#next{
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
}

</style>
