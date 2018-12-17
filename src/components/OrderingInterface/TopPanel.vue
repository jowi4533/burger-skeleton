<template>
  <div id = "TopPanelContainer">

    <div id = "buildYourBurgerPage" v-if = "parentState === 'BreadAndPatty' ||
      parentState === 'ToppingsAndSauce' || parentState === 'Vegetables' ">
      <button v-on:click= "switchToBreadAndPatty()"> 1 </button>
      <button v-on:click= "switchToDrinks()">2</button>
      <button v-on:click= "switchToOverView()">3</button>
      <h1> Hello this is 1: Build Your Burger </h1>
      <button class="cancel" v-on:click= "switchToMenuPage()">Cancel</button>
    </div>


    <div id = "sidesAndDrinksPage" v-if = "parentState === 'Drinks' || parentState === 'Sides'">
      <button v-on:click= "switchToBreadAndPatty()">1</button>
      <button v-on:click= "switchToDrinks()"> 2 </button>
      <button v-on:click= "switchToOverView()">3</button>
      <h1> Hello this is 2: Sides and Drinks </h1>
      <button class="cancel" v-on:click= "switchToMenuPage()">Cancel</button>
    </div>

    <div id = "overViewPage" v-if = "parentState === 'OverView'">
      <button v-on:click= "switchToBreadAndPatty()">1</button>
      <button v-on:click= "switchToDrinks()">2</button>
      <button v-on:click= "switchToOverView()"> 3 </button>
      <h1> Hello this is 3: Overview </h1>
      <button class="cancel" v-on:click= "switchToMenuPage()">Cancel</button>
    </div>

  </div>
</template>

<script ref = "topPanel">

export default{

  name: 'TopPanel',

  data: function() {
    return {
      parentState: this.$parent.state,
    }
  },

  methods: {
    reset () {
      this.name = 'RESETED'
    },
    switchToBreadAndPatty: function() {
      this.$parent.state = "BreadAndPatty";
      this.parentState = "BreadAndPatty";
    },

    switchToDrinks: function() {
      this.$parent.state = "Drinks";
      this.parentState = "Drinks";
    },
    switchToMenuPage: function() {
      this.$parent.state = "MenuPage";
      this.parentState = "MenuPage";
    },

    switchToOverView: function() {
      this.$parent.state = "OverView";
      this.parentState = "OverView";
    },
  },

  // computed: {
  //   updateParentState: function() {
  //     parentState=this.$parent.state;
  //     return {
  //       parentState
  //     }
  //   }
  // }
}


</script>


<style scoped>
.cancel {
  float: right;
}

</style>
