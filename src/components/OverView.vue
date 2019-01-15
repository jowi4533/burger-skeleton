<template>

  <div id = "OverViewContainer">
    <p id="heading">{{uiLabels.overViewHeader}}</p>

    <!-- <button class="overviewButtons" id="previousButton" v-on:click= "switchStage('Sides')">{{uiLabels.previous}}</button>
    <button class="overviewButtons" id="purchaseButton" v-on:click= "switchStage('Payment')"> {{uiLabels.purchaseItemsInOverview}} </button>
     <div id="wrapper">
      <section id="orderlist">
        <p> tja </p>
      </section>
      <button class="overviewButtons" id="addButton" v-on:click= "switchStage('MenuPage')"> {{uiLabels.addItemInOverview}} </button>
      <button class="overviewButtons" id="removeButton"> {{uiLabels.removeItemInOverview}} </button>
    </div> -->
  <div class="addButton">
    <button id="addButton" v-on:click= "switchStage('MenuPage')"> {{uiLabels.addItemInOverview}} </button>
  </div>
  <div class="purchaseButton">
    <button id="purchaseButton" v-on:click= "placeOrder()"> {{uiLabels.purchaseItemsInOverview}} </button>
  </div>
  <div class="previousButton">
    <button id="previousButton" v-on:click= "switchStage('Drinks')">{{uiLabels.previous}}</button>
  </div>



    <div id="yourOrderContainerInOverview">
      <YourOrder class="yourOrderInOverview" @displayBurger="displayBurger($event)"
      @removeFromBurgerIngredients= "removeFromBurgerIngredients($event)"
      @removeFromSideAndDrinkItems = "removeFromSideAndDrinkItems($event)"
      @removeItem = "removeItem($event)"
      :sideAndDrinkItems ="sideAndDrinkItems"
      :burgers = "burgers"
      :ui-labels="uiLabels"
      :lang="lang">

      </YourOrder>


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
    },

    placeOrder: function () {
      let totPrice = this.price();
      if (confirm(this.uiLabels.popupPlaceOrder)) {
        for(let j = 0; j < this.burgers.length; j +=1){
          let order = {
            ingredients: this.burgers[j].ingredients,
            price: totPrice
          };
          // make use of socket.io's magic to send the stuff to the kitchen via the server (app.js)
          this.$store.state.socket.emit('order', {order: order});
          //this.$emit('order');
          //set all counters to 0. Notice the use of $refs
          // for (let i = 0; i < this.$refs.ingredient.length; i += 1) {
          //   this.$refs.ingredient[i].resetCounter();
          // }
          //this.price = 0;
          this.$emit('wipeOrder');
          window.location = 'http://localhost:8080/#/';
        }
      }
    },

    wipeOrder: function() {
      this.$emit('wipeOrder')
    }

  }
}

</script>

<style scoped>
#heading {
  grid-area: topmiddle;
  margin-top: 1%;
  margin-bottom: 0;
  font-size: 2em;
  align-items: center;
}

.yourOrderInOverview {
  border-style: solid;
  border-color: black;
  border-width: medium;
  height: 80vh;
  width: 55vw;
  overflow: hidden;
  align-self: center;
}

#OverViewContainer {

  float:right;
  background-color: rgb(192, 239, 232);
  width:100%;
  height: 90vh;
  display: grid;
  grid-template-areas:  "topleft topmiddle topright"
                        "left middle right";
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: auto;
  grid-gap: 0.3em;
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

#yourOrderContainerInOverview {
  grid-area:middle;
}

#yourOrderContainer {
  width: 100em;
}


.previousButton {
  position:absolute;
  bottom: 0;
  left: 6%;
  align-self:bottom;
  grid-area: left;

}
#previousButton {
  vertical-align: bottom;
  background-color: rgb(30,100,200);
  width: 9em;
  height: 4em;
  border: 1px;
  border-style: hidden;
  border-radius: 4px;
}


.purchaseButton{
  grid-area: right;
  position: absolute;
  bottom: 0;
  right: 6%;
  align-self: center;
}
#purchaseButton {
  background-color: rgb(30,200,100);
  width: 9em;
  height: 4em;
  border: 1px;
  border-style: hidden;
  border-radius: 4px;

}

.addButton{
grid-area: right;
position: absolute;
bottom: 11%;
right: 6%;
align-self: center;
}
#addButton {
  background-color: rgb(251, 248, 198);
  width: 9em;
  height: 4em;
  border: 1px;
  border-style: hidden;
  border-radius: 4px;
}

#orderlist {
  background-color: rgb(244,244,244);
  height: 9em;
  width: 18em;
  margin-top: 1em;
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
@media (max-width: 500px) {
    #OverViewContainer { width: 96vw;}
    div.previousButton { font-size: 0.4em; }
    div.addButton { font-size: 0.4em; }
    div.purchaseButton { font-size: 0.4em; }
    #previousButton {position: absolute; left: 0em; bottom: 5em;}
    #addButton {position: absolute; right: 0em; bottom:5em; }
    #purchaseButton {position: absolute; right: 0em; bottom:5em; }
}

</style>
