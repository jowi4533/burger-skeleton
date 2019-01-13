<template>
  <div class = "yourOrderContainer">
    <div class="yourOrderTextBox">
      <div class ="yourOrderText">{{uiLabels.yourOrder}}</div>

    </div>


    <div class="scrollableText">

      <div class="theBurgers"  v-for = "burger in burgers">
        <li> Burger: {{burger.state}} </li>
      </div>

      <div class="theIngredients" v-for ="ingredient in burgerIngredients">
        <li>{{ingredient["ingredient_"+ lang]}}, {{ingredient.selling_price}}:-</li>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'YourOrder',
  props:{
    uiLabels: Object,
    lang: String,
    burgerIngredients: Array,
    burgers: Array,
    sideAndDrinkItems: Array,
  },
}


</script>

<style scoped>

.scrollableText{
  height: 95%;
  overflow-y: scroll;
}
.yourOrderContainer {
  border: 1px solid #000000;
  height:87vh;
  overflow: hidden;

}
.yourOrderTextBox{
  height: 1.5em;
  border-bottom: 1px solid #000000;

}
.theIngredients{
  padding-left: 1.5em;
}
li{
}
li::first-letter {
  text-transform: capitalize;
}
.yourOrderText{
  padding-top: 0.155em;
  padding-left: 0.1em;
  font-size: 1.2em;
  font-weight: bold;
}
@media (max-width: 500px) {
  div.yourOrderText { font-size: 0.7em; }
  div.theIngredients {font-size: 0.7em;}
  div.yourOrderTextBox {height: 1em;}

}



</style>
