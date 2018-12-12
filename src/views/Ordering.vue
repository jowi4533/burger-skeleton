<template>
  <div>
    <div v-if = "allPages[0].showMenu">
      <MenuPage>
      </MenuPage>

      <button v-on:click= "showBurgerPage()">Build Your Burger!</button>
      <button v-on:click= "showSidesAndDrinksPage()">Sides and Drinks</button>
      <button v-on:click= "showOverViewPage()">Order Overview</button>

    </div>

    <div v-if = "allPages[0].showBreadAndPatty" >
      <BreadAndPatty>
      </BreadAndPatty>

      <button v-on:click= "showMenuPage()">Previous</button>
      <button v-on:click= "showToppingsPage()">Go to Toppings and Sauce</button>
    </div>

    <div v-if = "allPages[0].showToppingsAndSauce" >
      <ToppingsAndSauce>
      </ToppingsAndSauce>

      <button v-on:click= "showBurgerPage()">Previous</button>
      <button v-on:click= "showVegetablesPage()">Go to Vegetables</button>
    </div>

    <div v-if = "allPages[0].showVegetables" >
      <Vegetables>
      </Vegetables>

      <button v-on:click= "showToppingsPage()">Previous</button>
      <button v-on:click= "showSidesAndDrinksPage()">Go to Sides and Drinks</button>
    </div>


    <div v-if = "allPages[0].showSides" >
      <Sides>
      </Sides>

      <button v-on:click= "showVegetablesPage()">Previous</button>
      <button v-on:click= "showDrinksPage()">Go to Drinks </button>
    </div>

    <div v-if = "allPages[0].showDrinks" >
      <Drinks>
      </Drinks>

      <button v-on:click= "showSidesAndDrinksPage()">Previous</button>
      <button v-on:click= "showOverViewPage()">Go to Order Overview</button>
    </div>

    <div v-if = "allPages[0].showOverView" >
      <OverView>
      </OverView>

      <button v-on:click= "showDrinksPage()">Previous</button>
    </div>



    <div id="ordering" v-if = "showOrdering">
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
      <h1>{{ uiLabels.ordersInQueue }} tja</h1>

      <h1>{{ uiLabels.ordersInQueue }}</h1>
      <div>
        <OrderItem
        v-for="(order, key) in orders"
        v-if="order.status !== 'done'"
        :order-id="key"
        :order="order"
        :ui-labels="uiLabels"
        :lang="lang"
        :key="key">
        hej
      </OrderItem>
    </div>
  </div>
</div>
</div>
</template>
<script>

//import the components that are used in the template, the name that you
//use for importing will be used in the template above and also below in
//components
import Ingredient from '@/components/Ingredient.vue'
import OrderItem from '@/components/OrderItem.vue'
import MenuPage from '@/components/MenuPage.vue'
import OverView from '@/components/OverView.vue'

import BreadAndPatty from '@/components/BuildYourBurger/BreadAndPatty.vue'
import ToppingsAndSauce from '@/components/BuildYourBurger/ToppingsAndSauce.vue'
import Vegetables from '@/components/BuildYourBurger/Vegetables.vue'

import Sides from '@/components/SidesAndDrinks/Sides.vue'
import Drinks from '@/components/SidesAndDrinks/Drinks.vue'

//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'


/* instead of defining a Vue instance, export default allows the only
necessary Vue instance (found in main.js) to import your data and methods */
export default {
  name: 'Ordering',
  components: {
    Ingredient,
    OrderItem,
    MenuPage,
    OverView,

    BreadAndPatty,
    ToppingsAndSauce,
    Vegetables,

    Sides,
    Drinks,
    //FrontPage
  },
  mixins: [sharedVueStuff], // include stuff that is used in both
  // the ordering system and the kitchen

  data: function() { //Not that data is a function!
    return {
      chosenIngredients: [],
      price: 0,
      orderNumber: "",

      //Variables for showing the different pages used in ordering -Start-

      showOrdering: false, //temporary boolean for hiding original ordering

      //Array of all the booleans for pages, for usage in method: hideAllPages
      allPages: [
        {
        "showMenu": true,
        "showBreadAndPatty": false,
        "showToppingsAndSauce": false,
        "showVegetables": false,
        "showSides": false,
        "showDrinks": false,
        "showOverView": false}],
      // -End-
    }
  },
  created: function () {
    this.$store.state.socket.on('orderNumber', function (data) {
      this.orderNumber = data;
    }.bind(this));
  },
  methods: {

    hideAllPages: function() {
      for (var key in this.allPages[0]){
        this.allPages[0][key] = false;
      }
    },

    showMenuPage: function(){
      this.hideAllPages();
      this.allPages[0].showMenu = true;
    },

    showOverViewPage: function () {
      this.hideAllPages();
      this.allPages[0].showOverView = true;
    },

    showBurgerPage: function () {
      this.hideAllPages();
      this.allPages[0].showBreadAndPatty= true;
    },

    showToppingsPage: function () {
      this.hideAllPages();
      this.allPages[0].showToppingsAndSauce = true;
    },

    showVegetablesPage: function () {
      this.hideAllPages();
      this.allPages[0].showVegetables = true;
    },

    showSidesAndDrinksPage: function () {
      this.hideAllPages();
      this.allPages[0].showSides = true;
    },

    showDrinksPage: function () {
      this.hideAllPages();
      this.allPages[0].showDrinks = true;
    },


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
#ordering {
  margin:auto;
  width: 40em;
  background-color: rgb(0,100,200);
  display: grid;
  grid-template-columns: 33% 33% 33%;

}

#frontpage {
  height: 500px;
  background-color: rgb(0,150,150);
  grid-column: 1 / span 3;
  grid-row: 1 / span 3;
}

#ingredients_ {
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
