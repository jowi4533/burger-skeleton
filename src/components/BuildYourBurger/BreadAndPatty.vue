<template>
<div id = "BreadAndPattyContainer">

<div id="ingredientButtons">

  <button id="BreadAndPattyTab">Bread and Patty</button>
  <button id="ToppingsAndSauceTab" v-on:click= "switchToToppingsAndSauce()">Toppings and Sauce</button>
  <button id="VegetablesTab" v-on:click= "switchToVegetables()">Vegetables</button>
</div>

<div id="BreadAndPatty">
  <p>hej</p>
</div>

<div id="ToggleBar">

  <button id="previous" v-on:click= "switchToMenuPage()">Previous</button>
  <button id="next" v-on:click= "switchToToppingsAndSauce()">Go to Topping and Sauce (next)</button>
</div>
</div>

</template>

<script>

export default{

  name: 'BreadAndPatty',

  components: {
  },
  data: function() {
    return {
    }
  },


  methods: {

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

#previous{
grid-column: 5;
grid-row: 4;

}
#next{
grid-column: 6;
grid-row: 4;

}
/*  --------------------------  */
</style>
