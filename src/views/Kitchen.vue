<template>
<div id="orders">
  <h1 align ="center"> Raw Sauce Burgers Kitchen System</h1>

  <div id= "gridContainer" v-if = "NewState == 'OrderState'">
    <button id = "StorageButton" v-on:click="OpenStorage">
      {{uiLabels.storage}}
    </button>
    <OrderItemToPrepare ref="OITP" class ="snygg"
    v-bind:class="{'snygg': true, 'active': (order.status === 'started')}"
    v-for="(order, key) in orders"
    v-if="order.status !== 'done'"
    v-on:done="markDone(key)"
    :ui-labels="uiLabels"
    :lang="lang"
    :key="key"
    :order-id="key"
    :order="order">
    </OrderItemToPrepare>

  </div>

  <div v-else-if= "NewState =='StorageState'">
    <button id = "StorageButton" v-on:click="BackToOrders">
      {{uiLabels.backtoorder}}
    </button>
    <StorageItem
      :ui-labels="uiLabels"
      :lang="lang">
    </StorageItem>
  </div>
</div>
</template>

<script>
import OrderItem from '@/components/OrderItem.vue'
import OrderItemToPrepare from '@/components/OrderItemToPrepare.vue'
import StorageItem from '@/components/StorageItem.vue'
//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'

export default {
  name: 'Ordering',
  components: {
    OrderItem,
    OrderItemToPrepare,
    StorageItem
  },
  mixins: [sharedVueStuff], // include stuff that is used in both
                            //the ordering system and the kitchen
  data: function(){
    return {
      chosenIngredients: [],
      price: 0,
      NewState: "OrderState",
      bgc: { backgroundColor: ''}
    }
  },

    methods: {
    markDone: function (orderid) {
      this.$store.state.socket.emit("orderDone", orderid);
    },
    OpenStorage: function () {
      this.NewState = "StorageState";
      // console.log(this.NewState);
    },
    BackToOrders: function () {
      this.NewState = "OrderState";
    },
    // markStarted: function () {
    //   this.
    // }
    }
}

</script>
<style id="style" scoped>
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
    "a a a a"
    "a a a a";
    background-color: white;
  }

.snygg {
  color: #100080;
  left: 10px;
  margin-left: 5pt;
  margin-top: 3pt;
  background-color: #999999;
  border-color: black;
  border-style: solid;
}

.snygg active {
  color: #100080;
  left: 10px;
  margin-left: 5pt;
  margin-top: 3pt;
  background-color: #111111;
  border-color: black;
  border-style: solid;
}
#StorageButton{
  width: 100px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
}

</style>
