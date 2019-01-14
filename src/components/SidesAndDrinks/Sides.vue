<template>
<div id = "ToppingsAndSauceContainer">
  <div id="ingredientButtons">
    <button v-on:click= "switchTab('Drinks')"> {{uiLabels.drinks}} </button>
    <button :class="{tabButton : parentState === 'Sides'}"> {{uiLabels.sides}} </button>
  </div>

    <div id="Sides">
      <h4> {{uiLabels.sides}} </h4>
      <Ingredient
      class="ingredients"
      ref="ingredient"
      v-for="item in ingredients"
      v-if="item.category == 6"
      v-on:increment="addToOrder(item)"
      v-on:decrease="removeFromOrder(item)"
      :ui-labels="uiLabels"
      :item="item"
      :lang="lang"
      :key="item.ingredient_id">
      </Ingredient>
    </div>


  <!-- <div id="ToggleBar">
    <button id="next" v-on:click= "switchStage('OverView')"> {{uiLabels.next}} </button>
    <button id="previous" v-on:click= "switchTab('Drinks')"> {{uiLabels.previous}} </button>
  </div> -->

</div>

</template>

<script>
import Ingredient from '@/components/Ingredient.vue'
//import sharedVueStuff from '@/components/sharedVueStuff.js'

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

    switchStage: function(stage) {
      this.$emit('switchStage', stage);
    },
    addToOrder : function(item) {
      this.$parent.addToSideAndDrinkItems(item);
    },
    removeFromOrder : function(item){
      this.$parent.removeFromSideAndDrinkItems(item);
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
      border-style: hidden;
      height: 3em;
      width: 15em;
      font-size: 0.6em;
      font-weight: bold;
      margin-right: 1em;
      padding: 0;
}


</style>
