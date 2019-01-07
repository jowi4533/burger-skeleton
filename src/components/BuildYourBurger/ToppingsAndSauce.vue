<template>
<div id = "ToppingsAndSauceContainer">
  <div id="ingredientButtons">
    <button v-on:click= "switchTab('BreadAndPatty')" :class="{tabButton : parentState === 'BreadAndPatty'}"> {{uiLabels.breadandpatty}} </button>
    <button :class="{tabButton : parentState === 'ToppingsAndSauce'}"> {{uiLabels.toppingsandsauce}} </button>
    <button v-on:click= "switchTab('Vegetables')" :class="{tabButton : parentState === 'BreadAndPatty'}"> {{uiLabels.veggies}} </button>
  </div>

<div id="ToppingsAndSauce">

      <h4 id="ToppingsText"> {{uiLabels.toppings}} </h4>
      <h4 id="SauceText"> {{uiLabels.sauce}} </h4>

  <div id="ToppingContainer">
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

    <div id="SauceContainer">
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


#ToppingsAndSauceContainer{
    height: 87vh;
  display: grid;
  grid-template-areas: "ingredientButtons"
                        "ToppingsAndSauce";
  grid-template-rows: auto 95%;
  grid-template-columns: 1fr;
    /* grid-template-columns: 16.5% 16.5% 16.5% 16.5% 16.5% 16.5%; */

    grid-gap: 1em;
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
                        "SauceText"
                        "Sauce";
     grid-template-rows:5% auto 5% auto ;
     grid-template-columns: 2fr;
     grid-row-gap: 0.5em;
   }
   #ToppingsText{
     grid-area: ToppingsText;
     text-align: center;
     background-color: darkgreen;
     margin: 0;
   }
   #SauceText{
     grid-area: SauceText;
     text-align: center;
     background-color: darkgreen;
     margin: 0;
   }

   #ToppingContainer{
     grid-area: Toppings;

     display: grid;
     grid-template-columns: repeat(auto-fit, calc(7em + 12px));
     grid-gap: 0.5em;
   }
   #SauceContainer{
     grid-area: Sauce;

     display: grid;
     grid-template-columns: repeat(auto-fit, calc(7em + 12px));
     grid-gap: 0.5em;
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
  border-style: solid;
  height: 3em;
  width: 15em;
  font-size: 0.6em;
  padding: 0;
}
</style>
