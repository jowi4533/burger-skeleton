<template>
  <div class = "yourOrderContainer">
    <div class="yourOrderTextBox">
      <div class ="yourOrderText">{{uiLabels.yourOrder}}</div>

    </div>

    <div class="scrollableText">
      <div class="theBurgers" v-for = "burger in burgers">
        <li v-if= "burger.ingredients.length > 0"> Burger: {{burger.burgerID}}
          <button v-if= "burger.isActive === false" v-on:click = "displayBurger(burger)"> Show Burger Ingredients </button> </li>
          <div id="burgerIngredients">
            <div v-if= "burger.isActive === true" v-for = "ingredient in burger.ingredients">
              <div class="burgerImage" v-if = "ingredient.category < 6 ">
              </div>
              {{ingredient["ingredient_"+ lang]}}, {{ingredient.selling_price}}:-
              <button class ="removeIngredientButton" v-on:click = "removeFromBurgerIngredients(ingredient)"> X </button>
            </div>
          </div>

        </div>
        <div class="categoryDivider">

        </div>
        <div class="sidesAndDrinks" v-for ="item in sideAndDrinkItems">
          <div class="drinkImage" v-if = "item.category == 7">
          </div>
          <div class="sidesImage" v-if = "item.category ==6">
          </div>
          <li class ="sides_drinks">{{item["ingredient_"+ lang]}}, {{item.selling_price}}:-
          <button class ="removeIngredientButton" v-on:click = "removeFromSideAndDrinkItems(item)"> X </button></li>
        </div>
      </div>
      <div class="totalPrice">
        {{uiLabels.totalPrice}} {{price}}:-
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
    },
    computed: {
      price: function () {
        let price = 0;
        for(let j = 0; j < this.burgers.length; j += 1){
          for (let i = 0; i < this.burgers[j].ingredients.length; i += 1){
            price = price + this.burgers[j].ingredients[i].selling_price;
        }
        }
        for(let o = 0; o < this.sideAndDrinkItems.length; o +=1 ){
          price = price + this.sideAndDrinkItems[o].selling_price;
        }
        return price;
      }
    }
  }


  </script>

  <style scoped>
  .categoryDivider{
    border-top: thin solid #000000;
  }
  .sides_drinks{
    display: inline-block;
  }
  .burgerImage{
    display: inline-block;
    background-image: url('~@/assets/hamburger.png');
    height: 1.2em;
    width: 1.2em;
    background-size:cover;
    background-repeat:   no-repeat;
    background-position: center center;
  }
  .sidesImage{
    display: inline-block;
    background-image: url('~@/assets/sides.png');
    height: 1.2em;
    width: 1.2em;
    background-size:cover;
    background-repeat:   no-repeat;
    background-position: center center;
  }
  .drinkImage{
    display: inline-block;
    background-image: url('~@/assets/drinks.png');
    height: 1.2em;
    width: 1.2em;
    background-size:cover;
    background-repeat:   no-repeat;
    background-position: center center;
  }
  .sidesAndDrinks{

  }
  #burgerIngredients{
    margin: 0;
  }

  .scrollableText{
    height: 92%;
    overflow-y: scroll;
    border-bottom: thin solid #000000;
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
    margin-left: 2px;
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

  .totalPrice{
    height:3vh;
    margin-left: 5%;
  }
  .removeIngredientButton{
    float:right;
  }
  @media (max-width: 500px) {
    div.yourOrderText { font-size: 0.9em; }
    div.theIngredients {font-size: 0.7em;}
    div.yourOrderTextBox {
    border-bottom: thin solid #000000;}
    .yourOrderContainer{border-bottom-style:solid;}
    .totalPrice{
      font-size: 0.85em;
      margin-left: 0;
    }


  }
  </style>
