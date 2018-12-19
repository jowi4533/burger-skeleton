<template>
<div id = "ToppingsAndSauceContainer">

  <button :class="{tabButton : parentState === 'Drinks'}"> {{uiLabels.drinks}} </button>
  <button v-on:click= "switchTab('Sides')"> {{uiLabels.sides}} </button>

  <br>
  <br>


  <div id="ToggleBar">
    <button id="next" v-on:click= "switchTab('Sides')"> {{uiLabels.next}} </button>
    <button id="previous" v-on:click= "switchStage('Vegetables')"> {{uiLabels.previous}} </button>
  </div>

</div>

</template>

<script>
import Ingredient from '@/components/Ingredient.vue'
import sharedVueStuff from '@/components/sharedVueStuff.js'

export default{
  name: 'Drinks',

  data: function() {
    return {
    }
  },

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
.tabButton {
  background-color: green;
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

</style>
