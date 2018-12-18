<template>
<div id = "ToppingsAndSauceContainer">

  <button v-on:click= "switchTab('Drinks')"> {{uiLabels.drinks}} </button>
  <button :class="{tabButton : parentState === 'Sides'}"> {{uiLabels.sides}} </button>

  <br>
  <br>


  <div id="ToggleBar">
    <button id="next" v-on:click= "switchStage('OverView')"> {{uiLabels.next}} </button>
    <button id="previous" v-on:click= "switchTab('Drinks')"> {{uiLabels.previous}} </button>
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
