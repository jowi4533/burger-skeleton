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
      </div>

      <div id = "drinks" v-if = "this.state === 'Drinks'">
        <Drinks @switchStage="state=$event" @switchTab="state=$event"
        :ingredients="ingredients"
        :parentState="state"
        :lang="lang"
        :ui-labels="uiLabels">
        </Drinks>
      </div>

      <div id = "sides" v-if = "this.state === 'Sides'">
        <Sides @switchStage="state=$event" @switchTab="state=$event"
        :ingredients="ingredients"
        :parentState="state"
        :lang="lang"
        :ui-labels="uiLabels">
        </Sides>
      </div>

      <div id="basket">


      <YourOrder
      :chosenIngredients ="chosenIngredients"
      :ui-labels="uiLabels"
      :lang="lang">
      </YourOrder>
  </div>
    </div>

<!-- </div> -->

<div id="ToggleBar">
  <button id="next" v-on:click= "switchTab('ToppingsAndSauce')"> {{uiLabels.next}} </button>
  <button id="previous" v-on:click= "switchStage('MenuPage')"> {{uiLabels.previous}} </button>


</div>

    <div id="ordering" v-if="this.state === 'Ordering'">
      <img class="example-panel" src="@/assets/exampleImage.jpg">
      <button v-on:click="switchLang()">{{ uiLabels.language }}</button>
      <div id="ingredients_">
        <h1>{{ uiLabels.ingredients }}</h1>

          <Ingredient
            ref="ingredient"
            v-for="item in ingredients"
            v-on:increment="addToOrder(item)"
            :item="item"
            :lang="lang"
            :key="item.ingredient_id">
          </Ingredient>
      </div>
      <div id="chosen_ingredients">
        <h1>{{ uiLabels.order }} hej</h1>
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
    Sides,
    YourOrder
  },
  mixins: [sharedVueStuff], // include stuff that is used in both
  // the ordering system and the kitchen
  data: function() { //Note that data is a function!
    return {
      chosenIngredients: [],
      price: 0,
      orderNumber: "",
      state: 'MenuPage', //denna var MenuPage
    }
  },

  created: function () {
    this.$store.state.socket.on('orderNumber', function (data) {
      this.orderNumber = data;
    }.bind(this));
  },

  methods: {

    addToOrder: function (item) {
      this.chosenIngredients.push(item);
      this.price += +item.selling_price;
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
#OrderingContainer{
  margin:auto;
    width: auto;
    /*background-color: rgb(0,100,200);*/
    display: grid;
    grid-template-areas: "TopPanel MiddlePanel ToggleBar";
    grid-template-columns: 1fr;
    grid-template-rows: 0.1fr 1fr 0.1fr;
    grid-gap: 1em;
    border-width: 0.4em;
    border-style: solid;
    border-color: rgb(0, 125, 149);



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
grid-row: 1;
}
#MiddlePanel{
grid-row: 2;
display: grid;
grid-template-areas: "AllFoodTabs Kundkorg";
grid-template-columns: 80% 20%;
grid-template-rows: 1fr;
}
#basket{
  float:left;
  width:100%;
  grid-area: Kundkorg;
}
#ToggleBar{
  grid-row: 3;
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
</style>
