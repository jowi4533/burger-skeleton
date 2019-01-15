<template>

  <div class="">
  <div id = "OverViewContainer">
    <h1> {{uiLabels.overViewHeader}} </h1>
    <!-- <button class="overviewButtons" id="previousButton" v-on:click= "switchStage('Sides')">{{uiLabels.previous}}</button>
    <button class="overviewButtons" id="purchaseButton" v-on:click= "switchStage('Payment')"> {{uiLabels.purchaseItemsInOverview}} </button>
    <div id="wrapper">
    <section id="orderlist">
    <p> tja </p>
  </section>
  <button class="overviewButtons" id="addButton" v-on:click= "switchStage('MenuPage')"> {{uiLabels.addItemInOverview}} </button>
  <button class="overviewButtons" id="removeButton"> {{uiLabels.removeItemInOverview}} </button>
</div> -->
<button class="overviewButtons" id="addButton" v-on:click= "switchStage('MenuPage')"> {{uiLabels.addItemInOverview}} </button>
<button class="overviewButtons" id="purchaseButton" v-on:click= "placeOrder()"> {{uiLabels.purchaseItemsInOverview}} </button>
<button class="overviewButtons" id="previousButton" v-on:click= "switchStage('Drinks')">{{uiLabels.previous}}</button>
<<<<<<< HEAD
</div>
<div class="bottomBar">
=======

    <div id="yourOrderOmg">
      <YourOrder @displayBurger="displayBurger($event)"
      @removeFromBurgerIngredients= "removeFromBurgerIngredients($event)"
      @removeFromSideAndDrinkItems = "removeFromSideAndDrinkItems($event)"
      @removeItem = "removeItem($event)"
      :sideAndDrinkItems ="sideAndDrinkItems"
      :burgers = "burgers"
      :ui-labels="uiLabels"
      :lang="lang">

      </YourOrder>


    </div>
>>>>>>> c7233fc17c1e4d817e67024814cce7f8fca80700


</div>
  </div>
</template>

<script>

import YourOrder from '@/components/YourOrder.vue'
import Ingredient from '@/components/Ingredient.vue'

export default{
  name: 'overview',
  data: function() {
    return {
    }
  },

  props: {
    lang: String,
    uiLabels: Object,
    ingredients: Array,
    burgers: Array,
    sideAndDrinkItems: Array,
    state: String
  },

  components: {
    Ingredient,
    YourOrder
  },

  methods: {
    displayBurger: function(burger) {
      this.$parent.displayBurger(burger);
    },
    removeFromBurgerIngredients: function (item) {
      this.$parent.removeFromBurgerIngredient(item);
    },
    removeFromSideAndDrinkItems: function (item) {
      this.$parent.removeFromSideAndDrinkItems(item);
    },

    removeItem(array){
      this.$parent.removeItem(array[0], array[1]);
    },

    switchStage: function(stage) {
    this.$emit('switchStage', stage);
    },

    placeOrder: function () {
      //Wrap the order in an object
      if (confirm(this.uiLabels.popupPlaceOrder)) {
        for(let j = 0; j < this.burgers.length; j +=1){
            let order = {
              ingredients: this.burgers[j].ingredients,
              price: 10
            };
            // make use of socket.io's magic to send the stuff to the kitchen via the server (app.js)
            this.$store.state.socket.emit('order', {order: order});
            //this.$emit('order');
            //set all counters to 0. Notice the use of $refs
            // for (let i = 0; i < this.$refs.ingredient.length; i += 1) {
            //   this.$refs.ingredient[i].resetCounter();
            // }
            //this.price = 0;
          }
        this.$emit('wipeOrder');
        window.location = 'http://localhost:8080/#/';
      }
    },

    wipeOrder: function() {
      this.$emit('wipeOrder')
    }

  }
}

</script>

<style scoped>

#OverViewContainer {

  float:right;
  background-color: rgb(220,220,220);
<<<<<<< HEAD
  width: 70%;
  height: 70vh;
=======
  width: 100vw;
  height: 100vh;
>>>>>>> c7233fc17c1e4d817e67024814cce7f8fca80700
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 20% 65% 15%;
  justify-items: center;
  margin: 0;
}

/* #wrapper {
  background-color: rgb(240,240,240);
  height: 15em;
  width: 25em;
  grid-column: 2;
  grid-row: 2 / span 2;
  display: grid;
  grid-template-rows: 80% 20%;
  justify-items: center;
} */

#youOrderOmg {
  grid-row: 1;
  grid-column: 2;
}

#yourOrderContainer {
  width: 100em;
}

h1 {
  grid-column: 1 / span 3;
  grid-row: 1;
}

.overviewButtons {
  width: 9em;
  height: 4em;
  justify-items: center;
  border: 1px;
  border-style: hidden;
  border-radius: 4px;
}

#previousButton {
  background-color: rgb(30,100,200);
  grid-column: 1;
  grid-row: 3;
}

#purchaseButton {
  background-color: rgb(30,200,100);
  grid-column: 3;
  grid-row: 3;
}
#orderlist {
  grid-row: 1;
  grid-column: 1 / span 2;
  background-color: rgb(244,244,244);
  height: 9em;
  width: 18em;
  margin-top: 1em;
}

#addButton {
  background-color: rgb(251, 248, 198);
  grid-row: 2;
  grid-column: 1;
}
button:hover {
  cursor: pointer;
}
button {
  font-family: 'Quicksand', sans-serif;
  font-size: 1em;
}

/* #removeButton {
  background-color: rgb(254, 177, 43);
  grid-row: 2;
  grid-column: 2;
} */


</style>
