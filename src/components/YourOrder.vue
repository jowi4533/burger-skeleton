<template>
  <div class = "yourOrderContainer">
    <div class="yourOrderTextBox">
      <div class ="yourOrderText">{{uiLabels.yourOrder}}</div>

    </div>


    <div class="scrollableText">
      <div class="theBurgers" v-for = "burger in burgers">
        <li v-if= "burger.ingredients.length > 0"> Burger: {{burger.burgerID}}
          <button v-if= "burger.isActive === false" v-on:click = "displayBurger(burger)"> Show Burger Ingredients </button> </li>

          <ul id="burgerIngredients">
            <li v-if= "burger.isActive === true" v-for = "ingredient in burger.ingredients">{{ingredient["ingredient_"+ lang]}}, {{ingredient.selling_price}}:-
              <button v-on:click = "removeFromBurgerIngredients(ingredient)"> X </button>
            </li>
          </ul>

        </div>

        <div class="sidesAndDrinks" v-for ="item in sideAndDrinkItems">
          <li>{{item["ingredient_"+ lang]}}, {{item.selling_price}}:-
          <button v-on:click = "removeFromSideAndDrinkItems(item)"> X </button></li>
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
      burgers: Array,
      sideAndDrinkItems: Array,
    },

    methods: {
      displayBurger(burger){
        this.$emit('displayBurger', burger)
      },

      removeFromBurgerIngredients(ingredient) {
        this.$emit('removeFromBurgerIngredients', ingredient)
      },

      removeFromSideAndDrinkItems(item) {
        this.$emit('removeFromSideAndDrinkItems', item)
      }
    }
  }


  </script>

  <style scoped>

  #burgerIngredients{
    margin: 0;
  }

  .scrollableText{
    height: 95%;
    overflow-y: scroll;
  }

  .yourOrderContainer {
    border: thin solid #000000;
    border-top-style: hidden;
    border-bottom-style: hidden;
    height:87vh;
    overflow: hidden;
  }

  .yourOrderTextBox{
    height: 1.5em;
    border-bottom: thin solid #000000;
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

  @media (max-width: 600px) {
    div.yourOrderText { font-size: 0.7em; }
    div.theIngredients {font-size: 0.7em;}
    div.yourOrderTextBox {height: 1em; }
    .yourOrderContainer{border-bottom-style:solid;}


  }



  </style>
