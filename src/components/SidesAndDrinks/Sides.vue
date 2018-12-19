<template>
<div id = "ToppingsAndSauceContainer">

<<<<<<< HEAD
  <button class="tabButtons" v-on:click= "switchTab('Drinks')">Drinks</button>
  <button class="tabButtons">Sides</button>
=======
  <button v-on:click= "switchTab('Drinks')"> {{uiLabels.drinks}} </button>
  <button :class="{tabButton : parentState === 'Sides'}"> {{uiLabels.sides}} </button>
>>>>>>> 39bf9b61ab3095f738f4d9e3ac0d969310075214

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
  background-color: rgb(30,200,100);
}
#previous{
  position: relative;
  bottom: 0;
  float: right;
    background-color: rgb(30,100,200);
}
button {
      border-style: hidden;
      height: 3em;
    }


</style>
