<template>
  <div id="OrderingContainer">
    <div id ="menupage" v-if ="this.state === 'MenuPage'">
      <MenuPage
      @switchStage="state=$event"
      @switchLanguage="switchLang()"
      @createNewBurger="newBurger()"
      :ui-labels="uiLabels"
      :lang="lang">
    </MenuPage>
  </div>

  <div id="TopPanel" v-if = "this.state !== 'MenuPage'">
    <TopPanel
    @switchStage="state=$event"
    @wipeOrder="wipeOrder()"
    @wipeBurgerFromOrder="wipeBurgerFromOrder($event)"
    @createNewBurger="newBurger()"
    :parentState="state"
    :lang="lang"
    :ui-labels="uiLabels"
    :burgers="burgers"
    :ingredients="ingredients">
  </TopPanel>
</div>

<div id="MiddlePanel" v-if = "this.state !== 'MenuPage'">
  <div id = "overview" v-if = "this.state === 'OverView'">
    <OverView
    @switchStage="state=$event"
    @wipeOrder="wipeOrder()"
    :lang="lang"
    :ui-labels="uiLabels"
    :burgers="burgers"
    :sideAndDrinkItems="sideAndDrinkItems">
  </Overview>
</div>

<div id="AllFoodTabs" v-if = "this.state !== 'OverView'">
  <div id = "breadandpatty" v-if = "this.state === 'BreadAndPatty'">
    <BreadAndPatty
    @switchStage="state=$event"
    @switchTab="state=$event"
    :sideAndDrinkItems="sideAndDrinkItems"
    :burgerIngredients="burgerIngredients"
    :ingredients="ingredients"
    :parentState="state"
    :lang="lang"
    :ui-labels="uiLabels">
  </BreadAndPatty>
</div>

<div id = "toppingsandsauce" v-if = "this.state === 'ToppingsAndSauce'">
  <ToppingsAndSauce
  @switchTab="state=$event"
  :sideAndDrinkItems="sideAndDrinkItems"
  :burgerIngredients="burgerIngredients"
  :ingredients="ingredients"
  :parentState="state"
  :lang="lang"
  :ui-labels="uiLabels">
</ToppingsAndSauce>
</div>

<div id = "vegetables" v-if = "this.state === 'Vegetables'">
  <Vegetables
  @switchStage="state=$event"
  @switchTab="state=$event"
  :sideAndDrinkItems="sideAndDrinkItems"
  :burgerIngredients="burgerIngredients"
  :ingredients="ingredients"
  :parentState="state"
  :lang="lang"
  :ui-labels="uiLabels">
</Vegetables>
</div>

<div id = "drinks" v-if = "this.state === 'Drinks'">
  <Drinks
  @switchStage="state=$event"
  @switchTab="state=$event"
  :burgerIngredients="burgerIngredients"
  :sideAndDrinkItems="sideAndDrinkItems"
  :ingredients="ingredients"
  :parentState="state"
  :lang="lang"
  :ui-labels="uiLabels">
</Drinks>
</div>

</div>

<div id="Kundkorg">
  <YourOrder
  @displayBurger="displayBurger($event)"
  @removeFromBurgerIngredients= "removeFromBurgerIngredients($event)"
  @removeFromSideAndDrinkItems = "removeFromSideAndDrinkItems($event)"
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

    YourOrder
  },
  mixins: [sharedVueStuff],

  data: function() {
    return {
      states: ['MenuPage', 'BreadAndPatty', 'ToppingsAndSauce', 'Vegetables', 'Drinks', 'OverView'],
      burgerIngredients: [],
      sideAndDrinkItems: [],
      orderNumber: "",
      state: 'MenuPage',
      burgers: [],
      burgerOrder : 0,
      cancelPopupText: "Are you sure you want to Cancel? Your order will be discarded.",
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
      this.burgerOrder = 0;
    },

    wipeBurgerFromOrder: function (index) {
      this.burgers.splice(index, 1);
      this.burgerIngredients = [];
      this.burgerOrder -= 1;
    },

    newBurger: function () {
      this.burgerOrder += 1;

      for(let i = 0; i < this.burgers.length; i++){
        if(this.burgers[i].burgerID === this.burgerOrder){
          this.burgerOrder += 1;
        }
      }

      let burger = {
        burgerID : this.burgerOrder,
        isActive : true,
        lastActive : false,
        ingredients : []
      };

      this.burgers.push(burger);
    },

    breadInArray: function (){
      for(let i in this.burgerIngredients) {
        if (this.burgerIngredients[i].category == 1) {
          return true;

        }
      }
      return false;
    },
    pattyInArray: function(){
      for(var i = 0; i < this.burgerIngredients.length; i++) {
        if (this.burgerIngredients[i].category == 2) {
          return true;
        }
      }
    return false;
  },

    finishBurgerSwitchState: function () {
        for (let burger in this.burgers) {
          if (this.burgers[burger].isActive) {
            if (this.breadInArray() && this.pattyInArray()) {
              this.hideBurgerIngredients();
              this.burgerIngredients = [];
              this.changeToNextState();
            }
            else {
              alert(this.uiLabels.popupBurgerNotFinished);
            }

          }
        }

    },

    addToBurgerIngredients: function(item){
      this.burgerIngredients.push(item);
      for(let i = 0; i < this.burgers.length; i++){
        if(this.burgers[i].isActive){
          this.burgers[i].ingredients = this.burgerIngredients;
        }
      }
    },

    addToSideAndDrinkItems: function(item) {
      this.sideAndDrinkItems.push(item);
    },

    removeFromBurgerIngredients: function(item) {
      let index = this.burgerIngredients.findIndex(x => x.ingredient_id==item.ingredient_id);

      for(let i = 0; i < this.burgers.length; i++){
        if(this.burgers[i].isActive){
          this.burgerIngredients.splice(index, 1);
          this.burgers[i].ingredients = this.burgerIngredients;
        }
      }
    },

    removeFromSideAndDrinkItems: function(item) {
      let index = this.sideAndDrinkItems.findIndex(x => x.ingredient_id==item.ingredient_id);
      this.sideAndDrinkItems.splice(index, 1);
    },

    hideBurgerIngredients: function(){
      for(let i = 0; i < this.burgers.length; i++){
        this.burgers[i].lastActive = false;
        if(this.burgers[i].isActive){
          this.burgers[i].lastActive = true;
          this.burgers[i].isActive = false;
        }
      }
    },

    loadBurgerItems: function(burgerIngredients) {
      this.burgerIngredients = burgerIngredients;
    },

    displayBurger: function(burger) {
      this.hideBurgerIngredients();
      this.loadBurgerItems(burger.ingredients)
      this.state = 'BreadAndPatty'
      burger.isActive = true;
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
      if(this.state === 'Drinks'){
        for(let i = 0; i < this.burgers.length; i++){
          if(this.burgers[i].lastActive){
            this.displayBurger(this.burgers[i]);
          }
        }
        this.state = this.getStateFromIndex(indexOfState-1);
      }

      else if(this.state === 'BreadAndPatty' && confirm(this.cancelPopupText)){
        for(let i = 0; i < this.burgers.length; i++){
          if(this.burgers[i].isActive){
            this.state = this.getStateFromIndex(indexOfState-1);
            this.wipeBurgerFromOrder(i);
          }
        }
      }
      else if (this.state !== 'Drinks' && this.state !== 'BreadAndPatty'){
        this.state = this.getStateFromIndex(indexOfState-1);
      }

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
  font-family: 'Quicksand', sans-serif;
  bottom: 0;
  float: right;
  background-color: rgb(27, 183, 84);
  height: 4em;
  width: 12.1em;
  border-style: solid;
  border-color: black;
  border-width: thin;
  margin-left: 0;
}

#next:hover {
  cursor: pointer;
  opacity: 0.7;
}
#previous{
  position: relative;
  font-family: 'Quicksand', sans-serif;
  bottom: 0;
  float: right;
  background-color: rgb(0,200,250);
  height: 4em;
  width: 12.1em;
  border-style: solid;
  border-color: black;
  border-width: thin;
}

#previous:hover {
  cursor: pointer;
  opacity: 0.7;
}

#menupage {
  width: auto;
  height: auto;

}
#TopPanel{
  grid-area: TopPanel;

}
#ToggleBar{
  grid-area: ToggleBar;
  background-color: rgb(28, 247, 189);
  border-style: solid;
  border-width: thin;
  border-color: black;
}
#MiddlePanel{
  grid-area: MiddlePanel;
  background-color: rgb(192, 239, 232);
  display:grid;
  grid-template-areas: "AllFoodTabs Kundkorg";
  grid-template-columns: 77% 23%;
  border-left-style: solid;
  border-left-color: black;
  border-left-width: thin;

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
  color: white;
}
button:hover{
  cursor:pointer;
}
@media (max-width: 600px) {
  #MiddlePanel{grid-template-columns: 70% 30%;}
  #ToggleBar{border-top-style: hidden;}
  #next { font-size: 1.2em; height: 2em; width: 50%;}
  #previous{font-size: 1.2em; float:left; height: 2em; width: 50%;}
}
</style>
