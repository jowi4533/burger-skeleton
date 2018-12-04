<template>
<div id="orders">
<<<<<<< HEAD
  <h1>{{ uiLabels.ordersInQueue }}</h1>
  <div>
    <OrderItemToPrepare
      v-for="(order, key) in orders"
      v-if="order.status !== 'done'"
      v-on:done="markDone(key)"
      :order-id="key"
      :order="order"
      :ui-labels="uiLabels"
      :lang="lang"
      :key="key">
    </OrderItemToPrepare>
  </div>
  <h1>{{ uiLabels.ordersFinished }}</h1>
  <div>
    <OrderItem
      v-for="(order, key) in orders"
      v-if="order.status === 'done'"
      :order-id="key"
      :order="order"
      :lang="lang"
      :ui-labels="uiLabels"
      :key="key">
    </OrderItem>
=======
  <h1 align ="center"> Raw Sauce Burgers Kitchen System</h1>
  <div id= "gridContainer">
    <OrderItemToPrepare id ="snygg" v-for="(order, key) in orders"
    v-if="order.status !== 'done'"
    v-on:done="markDone(key)"
    :ui-labels="uiLabels"
    :lang="lang"
    :key="key"
    :order-id="key"
    :order="order">
</OrderItemToPrepare>
</homepage>

>>>>>>> 7d7ed550c9be55840e563df9361b8492df517279
  </div>
</div>
</template>
<script>
import OrderItem from '@/components/OrderItem.vue'
import OrderItemToPrepare from '@/components/OrderItemToPrepare.vue'

//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'

export default {
  name: 'Ordering',
  components: {
    OrderItem,
    OrderItemToPrepare
  },
  mixins: [sharedVueStuff], // include stuff that is used in both
                            //the ordering system and the kitchen
  data: function(){
    return {
      chosenIngredients: [],
      price: 0,
    }
  },
  methods: {
    markDone: function (orderid) {
      this.$store.state.socket.emit("orderDone", orderid);
    },
    markStarted: function (orderid) {
      this.$store.state.socket.emit("orderStarted", orderid);
    }
  }
}
</script>
<style scoped>
	#orders {
    font-size:13pt;
  }

  h1 {
    text-transform: uppercase;
    font-size: 1em;
  }

   #gridContainer {
    margin: 5px 25px 25px 25px;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 300px 300px;
    /*border: 5px dashed #000000;*/
    grid-template-areas:
    "grid grid grid grid"
    "grid grid grid grid";
    background-color: white;
  }
<<<<<<< HEAD
=======
  #gridContainer > grid,grid1,grid2,grid3,grid4,grid5,grid6,grid7,grid8 {

}

#snygg {
  color: #800080;
  left: 10px;
  margin-left: 5pt;
  margin-top: 3pt;
  background-color: #696969;
  border-color: black;
  border-style: solid;
}



>>>>>>> 7d7ed550c9be55840e563df9361b8492df517279
</style>
