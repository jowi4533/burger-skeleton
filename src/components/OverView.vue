<template>
  <div id = "OverViewContainer">
    <h1> {{uiLabels.overViewHeader}} </h1>
    <button class="overviewButtons" id="previousButton" v-on:click= "switchStage('Sides')">{{uiLabels.previous}}</button>
    <button class="overviewButtons" id="purchaseButton" v-on:click= "placeOrder()"> {{uiLabels.purchaseItemsInOverview}} </button>
    <div id="wrapper">
      <section id="orderlist">
        <p> tja </p>
      </section>
      <button class="overviewButtons" id="addButton" v-on:click= "switchStage('MenuPage')"> {{uiLabels.addItemInOverview}} </button>
      <button class="overviewButtons" id="removeButton"> {{uiLabels.removeItemInOverview}} </button>
    </div>

  </div>
</template>

<script>
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
    sideAndDrinkItems: Array
  },

  components: {
    Ingredient
  },

  methods: {
    switchStage: function(stage) {
      this.$emit('switchStage', stage);
    },
    placeOrder: function () {
      //Wrap the order in an object

      for(let j = 0; j < this.burgers.length; j +=1){
        order = {
          ingredients: this.burgers[j].ingredients,
          price: 10
        };
        console.log(order.ingredients)
        // make use of socket.io's magic to send the stuff to the kitchen via the server (app.js)
        this.$store.state.socket.emit('order', {order: order});
        //this.$emit('order');
        //set all counters to 0. Notice the use of $refs
        for (let i = 0; i < this.$refs.ingredient.length; i += 1) {
          this.$refs.ingredient[i].resetCounter();
        }
        //this.price = 0;
      }
      this.burgerIngredients = [];
      this.sideAndDrinkItems = [];
    }
  }
}

</script>

<style scoped>

#OverViewContainer {
  background-color: rgb(220,220,220);
  width: 40em;
  height: 20em;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 20% 65% 15%;
  justify-items: center;
}

#wrapper {
  background-color: rgb(240,240,240);
  height: 15em;
  width: 25em;
  grid-column: 2;
  grid-row: 2 / span 2;
  display: grid;
  grid-template-rows: 80% 20%;
  justify-items: center;
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

#removeButton {
  background-color: rgb(254, 177, 43);
  grid-row: 2;
  grid-column: 2;
}


</style>
