<template>
  <div id="OrderingContainer">

    <div id ="menupage" v-if ="this.state === 'MenuPage'">
      <MenuPage @switchStage="state=$event" @switchLanguage="switchLang()"
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

    <!-- <div id = "orderingComponents" v-if = "this.state !== 'MenuPage'"> -->
      <!-- Everything that uses topPanel  -->
      <div id="TopPanel" v-if = "this.state !== 'MenuPage'">

      <TopPanel @switchStage="state=$event"
      :parentState="state"
      :lang="lang"
      :ui-labels="uiLabels">
      </TopPanel>
      </div>



      <div id="MiddlePanel" v-if = "this.state !== 'MenuPage'">

            <div id = "overview" v-if = "this.state === 'OverView'">

        <OverView @switchStage="state=$event"
        :lang="lang"
        :ui-labels="uiLabels">
        </Overview>
      </div>
      <div id="AllFoodTabs">


      <div id = "breadandpatty" v-if = "this.state === 'BreadAndPatty'">
        <BreadAndPatty @switchStage="state=$event" @switchTab="state=$event"
        :ingredients="ingredients"
        :parentState="state"
        :lang="lang"
        :ui-labels="uiLabels">
        </BreadAndPatty>
      </div>

      <div id = "toppingsandsauce" v-if = "this.state === 'ToppingsAndSauce'">
        <ToppingsAndSauce @switchTab="state=$event"
        :ingredients="ingredients"
        :parentState="state"
        :lang="lang"
        :ui-labels="uiLabels">
        </ToppingsAndSauce>
      </div>

      <div id = "vegetables" v-if = "this.state === 'Vegetables'">
        <Vegetables @switchStage="state=$event" @switchTab="state=$event"
        :ingredients="ingredients"
        :parentState="state"
        :lang="lang"
        :ui-labels="uiLabels">
        </Vegetables>

        <!-- <button v-on:click="placeOrder()">{{ uiLabels.placeOrder }}</button> -->
      </div>

      <div id = "drinks" v-if = "this.state === 'Drinks'">
        <Drinks @switchStage="state=$event" @switchTab="state=$event"
        :ingredients="ingredients"
        :parentState="state"
        :lang="lang"
        :ui-labels="uiLabels">
        </Drinks>
      </div>

      <!-- <div id = "sides" v-if = "this.state === 'Sides'">
        <Sides @switchStage="state=$event" @switchTab="state=$event"
        :ingredients="ingredients"
        :parentState="state"
        :lang="lang"
        :ui-labels="uiLabels">
        </Sides>
      </div> -->
      </div>

      <div id="Kundkorg">
      <YourOrder
      :chosenIngredients ="chosenIngredients"
      :ui-labels="uiLabels"
      :lang="lang">
      </YourOrder>
      </div>
    </div>

<!-- </div> -->

<div class="ToggleBar" v-if = "this.state !== 'MenuPage'">
  <button id="next" v-on:click= "changeToNextState()"> {{uiLabels.next}} </button>
  <button id="previous" v-on:click= "changeToPreviousState()"> {{uiLabels.previous}} </button>
</div>


    <div id="ordering" v-if="this.state === 'Ordering'">
      <!-- <img class="example-panel" src="@/assets/{{item.ingredient_img}}"> -->
      <img class="example-panel" src="@/assets/exampleImage.jpg">
      <button v-on:click="switchLang()">{{ uiLabels.language }}</button>
      <div id="ingredients_">
        <h1>{{ uiLabels.ingredients }}</h1>
          <Ingredient
            ref="ingredient"
            v-if="item.stock > 1"
            v-for="item in ingredients"
            v-on:decrease="removeFromOrder(item)"
            v-on:increment="addToOrder(item)"
            :item="item"
            :lang="lang"
            :key="item.ingredient_id">
          </Ingredient>
      </div>
      <div id="chosen_ingredients">
        <h1>{{ uiLabels.order }}</h1>
          {{ chosenIngredients.map(item => item["ingredient_"+lang]).join(', ') }}, {{ price }} kr
          <button v-on:click="placeOrder()">{{ uiLabels.placeOrder }}</button>
      </div>
      <div id="order_item">
        <YourOrder
          :chosenIngredients ="chosenIngredients"
          :ui-labels="uiLabels"
          :lang="lang">
        </YourOrder>
      </div>
    </div>

</div>



</template>

<script>

//import the components that are used in the template, the name that you
//use for importing will be used in the template above and also below in
//components
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


/* instead of defining a Vue instance, export default allows the only
necessary Vue instance (found in main.js) to import your data and methods */
export default {
  name: 'Ordering',
  components: {
    Ingredient,
    OrderItem,

    //The different components used for orientation through pages
    MenuPage,
    OverView,
    TopPanel,
    BreadAndPatty,
    ToppingsAndSauce,
    Vegetables,
    Drinks,
    //Sides,
    YourOrder
  },
  mixins: [sharedVueStuff], // include stuff that is used in both
  // the ordering system and the kitchen
  data: function() { //Note that data is a function!
    return {
      states: ['MenuPage', 'BreadAndPatty', 'ToppingsAndSauce', 'Vegetables', 'Drinks', 'OverView'],
      chosenIngredients: [],
      price: 0,
      orderNumber: "",
      state: 'Ordering',///denna var MenuPage
    }
  },

  created: function () {
    this.$store.state.socket.on('orderNumber', function (data) {
      this.orderNumber = data;
    }.bind(this));
  },

  methods: {

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

    addToOrder: function (item) {
      this.chosenIngredients.push(item);
      this.price += +item.selling_price;
    },
    removeFromOrder: function (item){
      let index = this.chosenIngredients.findIndex(x => x.ingredient_id==item.ingredient_id);


      this.chosenIngredients.splice(index,1);
      this.price = this.price - item.selling_price;
    },
    placeOrder: function () {
      var i,
      //Wrap the order in an object
      order = {
        ingredients: this.chosenIngredients,
        price: this.price
      };
      // make use of socket.io's magic to send the stuff to the kitchen via the server (app.js)
      this.$store.state.socket.emit('order', {order: order});
      //this.$emit('order');
      //set all counters to 0. Notice the use of $refs
      for (i = 0; i < this.$refs.ingredient.length; i += 1) {
        this.$refs.ingredient[i].resetCounter();
      }
      this.price = 0;
      this.chosenIngredients = [];
    }
  }
}
</script>


<style scoped>
/* scoped in the style tag means that these rules will only apply to elements, classes and ids in this template and no other templates. */
@import url('https://fonts.googleapis.com/css?family=Quicksand');



#OrderingContainer{

  height: 100vh;

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

.ToggleBar{
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

@media (max-width: 500px) {
  button#next {height: 2em; width: 6.5em;}
  button#previous {height: 2em; width: 6.5em;}
}

</style>
