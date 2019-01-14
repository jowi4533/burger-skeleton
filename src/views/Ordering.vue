<template>
  <div id="OrderingContainer">
    <div id ="menupage" v-if ="this.state === 'MenuPage'">
      <MenuPage @switchStage="state=$event" @switchLanguage="switchLang()" @createNewBurger="newBurger()"
      :ui-labels="uiLabels"
      :lang="lang">
    </MenuPage>
  </div>

  <div id = "payment" v-if = "this.state === 'Payment'">
    <Payment @switchStage="state=$event"
    :parentState="state"
    :lang="lang"
    :ui-labels="uiLabels">
  </Payment>
</div>

<div id="TopPanel" v-if = "this.state !== 'MenuPage'">
  <TopPanel @switchStage="state=$event" @wipeOrder="wipeOrder()"
  :parentState="state"
  :lang="lang"
  :ui-labels="uiLabels"
  :burgers="burgers"
  :ingredients="ingredients">
</TopPanel>
</div>

<div id="MiddlePanel" v-if = "this.state !== 'MenuPage'">
  <div id = "overview" v-if = "this.state === 'OverView'">
    <OverView @switchStage="state=$event" @wipeOrder="wipeOrder()"
    :lang="lang"
    :ui-labels="uiLabels"
    :burgers="burgers"
    :sideAndDrinkItems="sideAndDrinkItems">
  </Overview>
</div>

<div id="AllFoodTabs" v-if = "this.state !== 'OverView'">
  <div id = "breadandpatty" v-if = "this.state === 'BreadAndPatty'">
    <BreadAndPatty @switchStage="state=$event" @switchTab="state=$event"
    :sideAndDrinkItems="sideAndDrinkItems"
    :burgerIngredients="burgerIngredients"
    :ingredients="ingredients"
    :parentState="state"
    :lang="lang"
    :ui-labels="uiLabels">
  </BreadAndPatty>
</div>

<div id = "toppingsandsauce" v-if = "this.state === 'ToppingsAndSauce'">
  <ToppingsAndSauce @switchTab="state=$event"
  :sideAndDrinkItems="sideAndDrinkItems"
  :burgerIngredients="burgerIngredients"
  :ingredients="ingredients"
  :parentState="state"
  :lang="lang"
  :ui-labels="uiLabels">
</ToppingsAndSauce>
</div>

<div id = "vegetables" v-if = "this.state === 'Vegetables'">
  <Vegetables @switchStage="state=$event" @switchTab="state=$event"
  :sideAndDrinkItems="sideAndDrinkItems"
  :burgerIngredients="burgerIngredients"
  :ingredients="ingredients"
  :parentState="state"
  :lang="lang"
  :ui-labels="uiLabels">
</Vegetables>
</div>

<div id = "drinks" v-if = "this.state === 'Drinks'">
  <Drinks @switchStage="state=$event" @switchTab="state=$event"
  :burgerIngredients="burgerIngredients"
  :sideAndDrinkItems="sideAndDrinkItems"
  :ingredients="ingredients"
  :parentState="state"
  :lang="lang"
  :ui-labels="uiLabels">
</Drinks>
</div>

<div id = "sides" v-if = "this.state === 'Sides'">
  <Sides @switchStage="state=$event" @switchTab="state=$event"
  :burgerIngredients="burgerIngredients"
  :sideAndDrinkItems="sideAndDrinkItems"
  :ingredients="ingredients"
  :parentState="state"
  :lang="lang"
  :ui-labels="uiLabels">
</Sides>
</div>
</div>

<div id="Kundkorg">
  <YourOrder
  :burgerIngredients ="burgerIngredients"
  :sideAndDrinkItems ="sideAndDrinkItems"
  :burgers = "burgers"
  :ui-labels="uiLabels"
  :lang="lang">
</YourOrder>
</div>

</div>

<div id="ToggleBar" v-if = "this.state !== 'MenuPage' && this.state !== 'OverView'">
  <button id="next" v-if = "this.state !== 'Vegetables'" v-on:click= "changeToNextState()"> {{uiLabels.next}} </button>
  <button id="next" v-if = "this.state === 'Vegetables'" v-on:click= "finishBurgerSwitchState()"> {{uiLabels.finishburger}} </button>
  <button id="previous" v-on:click= "changeToPreviousState()"> {{uiLabels.previous}} </button>
</div>

</div>
</template>

<script>
import MenuPage from '@/components/MenuPage.vue'
import OverView from '@/components/OverView.vue'
import TopPanel from '@/components/OrderingInterface/TopPanel.vue'

import BreadAndPatty from '@/components/BuildYourBurger/BreadAndPatty.vue'
import ToppingsAndSauce from '@/components/BuildYourBurger/ToppingsAndSauce.vue'
import Vegetables from '@/components/BuildYourBurger/Vegetables.vue'

import Drinks from '@/components/SidesAndDrinks/Drinks.vue'
import Sides from '@/components/SidesAndDrinks/Sides.vue'

import Ingredient from '@/components/Ingredient.vue'
import OrderItem from '@/components/OrderItem.vue'
import YourOrder from '@/components/YourOrder.vue'
import sharedVueStuff from '@/components/sharedVueStuff.js'

export default {
  name: 'Ordering',
  components: {
    Ingredient,
    OrderItem,

    MenuPage,
    OverView,
    TopPanel,

    BreadAndPatty,
    ToppingsAndSauce,
    Vegetables,
    Drinks,

    Sides,
    YourOrder
  },
  mixins: [sharedVueStuff],

  data: function() {
    return {
      states: ['MenuPage', 'BreadAndPatty', 'ToppingsAndSauce', 'Vegetables', 'Drinks', 'OverView'],
      chosenIngredients: [],
      burgerIngredients: [],
      sideAndDrinkItems: [],
      price: 0,
      orderNumber: "",
      state: 'MenuPage',
      burgers: [],
      burgerOrder : 1,
    }
  },

  created: function () {
    this.$store.state.socket.on('orderNumber', function (data) {
      this.orderNumber = data;
    }.bind(this));
  },

  methods: {
    //All functions handling burgerIngredients and the items included in the order -----
    wipeOrder: function () {
      this.burgers = [];
      this.sideAndDrinkItems = [];
      this.burgerIngredients = [];
    },

    newBurger: function () {
      let burger = {
        state : this.burgerOrder,
        burgerFinished : "No",
        ingredients : []
      };

        this.burgers.push(burger);
    },

    finishBurgerSwitchState: function () {
      this.burgerFinished = "Yes"
      this.burgerIngredients = [];
      this.burgerOrder += 1;

      this.changeToNextState();
    },

    addToBurgerIngredients: function(item){
      this.burgerIngredients.push(item);
      this.burgers[this.burgers.length-1].ingredients = this.burgerIngredients;
    },

    addToSideAndDrinkItems: function(item) {
      this.sideAndDrinkItems.push(item);
    },

    removeFromBurgerIngredients: function(item) {
      let index = this.burgerIngredients.findIndex(x => x.ingredient_id==item.ingredient_id);
      this.burgerIngredients.splice(index, 1);
      this.burgers[this.burgers.length-1].ingredients = this.burgerIngredients;
    },

    removeFromSideAndDrinkItems: function(item) {
      let index = this.sideAndDrinkItems.findIndex(x => x.ingredient_id==item.ingredient_id);
      this.sideAndDrinkItems.splice(index, 1);
    },

    //These 2 are currently not used
    addToOrder: function (item) {
      this.chosenIngredients.push(item);
      this.burgerIngredients.push(item);
      this.price += +item.selling_price;
    },

    removeFromOrder: function (item){
      let index = this.chosenIngredients.findIndex(x => x.ingredient_id==item.ingredient_id);

      this.chosenIngredients.splice(index,1);
      this.price = this.price - item.selling_price;
    },
    //--------------

    //All functions handling state ---
    getIndexOfState: function () {
      var indexOfState=this.states.indexOf(this.state)
      return indexOfState;
    },

    getStateFromIndex: function (index) {
      var currentState = this.states[index];
      return currentState;
    },

    changeToNextState: function () {
      let indexOfState = this.getIndexOfState();
      this.state = this.getStateFromIndex(indexOfState+1);
    },

    changeToPreviousState: function () {
      let indexOfState = this.getIndexOfState();
      this.state = this.getStateFromIndex(indexOfState-1);
    },
    // ------------

  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Quicksand');



#OrderingContainer{
    font-family: 'Quicksand', sans-serif;
    height:auto;
    overflow: hidden;
    /*background-color: rgb(0,100,200);*/
    display: grid;
    grid-template-areas: "TopPanel"
                          "MiddlePanel"
                          "ToggleBar";
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;

    grid-column-gap: 0;


}

#next{
  position: relative;
  bottom: 0;
  float: right;
  background-color: rgb(30,200,100);
  height: 3em;
  width: 9em;
  border-radius: 1em;
  border-style: solid;
  border-color: black;
  border-width: thin;
  margin-left: 0.8em;
}

#previous{
  position: relative;
  bottom: 0;
  float: right;
  background-color: rgb(30,100,200);
  height: 3em;
  width: 9em;
  border-radius: 1em;
  border-style: solid;
  border-color: black;
  border-width: thin;
}

/* #ingredients_ {
background-color: rgb(240,240,240);
grid-column: 1;
grid-row: 2 / span 3;
}
#chosen_ingredients {
background-color: rgb(220,150,200);
grid-column: 2;
grid-row: 2 / span 3;
}
#order_item {
background-color: rgb(200,200,200);
grid-column: 3;
grid-row: 2 / span 3;
} */

#menupage {
  width: auto;
  height: auto;

}
#TopPanel{
  grid-area: TopPanel;
}

#ToggleBar{
  grid-area: ToggleBar;
  background-color: lightgray;
  border-style: solid;
  border-width: thin;
  border-color: black;


}
#MiddlePanel{
grid-area: MiddlePanel;
background-color: lightgray;
display:grid;
grid-template-areas: "AllFoodTabs Kundkorg";
grid-template-columns: 80% 20%;
border-left-style: solid;
border-left-color: black;
border-left-width: thin;
/* grid-template-rows: 1fr; */
}
#AllFoodTabs{
  grid-area: AllFoodTabs;
}
#Kundkorg{
  grid-area: Kundkorg;
  float:left;
}

.example-panel {
  position: fixed;
  left:0;
  top:0;
  z-index: -2;
}
.ingredient {
  border: 1px solid #ccd;
  padding: 1em;
  background-color:  rgb(20,100,120);
  /*background-image: url('~@/assets/exampleImage.jpg');*/
  color: white;
}
@media (max-width: 600px) {
  #MiddlePanel{grid-template-columns: 70% 30%;}
  #ToggleBar{border-top-style: hidden;}
  #next {height: 2em; width: 7em;}
  #previous{float:left; height: 2em; width: 7em;}
}
/* @media (max-width: 500px) {
  button
  button#previous {}
} */



</style>
