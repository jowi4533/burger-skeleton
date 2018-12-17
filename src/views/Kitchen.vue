<template>
  <div id="orders">
    <h1 align ="center"> Raw Sauce Burgers Kitchen System</h1>
    <div id= "gridContainer" v-if = "NewState == 'OrderState'">
      <button id = "StorageButton" v-on:click="OpenStorage">
        {{uiLabels.storage}}
      </button>
      <!-- (HJÄLP) -->
      <OrderItemToPrepare
      v-bind:class = "['orderBox', {'active': (order.status === 'started')}]"
      v-for="(order, key, index) in orders"
      v-if="order.status !== 'done' "
      v-on:done="markDone(key)"
      :ui-labels="uiLabels"
      :lang="lang"
      :key="key"
      :order-id="key"
      :order="order">
    </OrderItemToPrepare>
    <div v-bind:class="['NumberOfOrders ',{'ManyOrders':(orderCount >= 15)}]">
      Total orders: {{orderCount}}
      </div>
      <div class="test123">
      </div>
  </div>

  <div v-else-if= "NewState =='StorageState'">
    <button id = "StorageButton2" v-on:click="BackToOrders">
      {{uiLabels.backtoorder}}
    </button>
    <h1 align ="center"> Storage </h1>
    <StorageItem
    :ingredients="ingredients"
    :lang="lang"
    :ui-labels="uiLabels">
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
    StorageItem,

  },
  mixins: [sharedVueStuff], // include stuff that is used in both
  //the ordering system and the kitchen
  data: function(){
    return {
      chosenIngredients: [],
      price: 0,
      NewState: "OrderState",
      bgc: { backgroundColor: ''},
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
    }

  },
  computed:   {
    orderCount: function () {
      var orderCount1 = 0;
      var i = 0;
        for (this.order in this.orders) {
          i = i+1;
          if (this.orders[i].status !=='done'){
            orderCount1 = orderCount1 +1 ;
          }

          }
          return orderCount1
        }
}
}
</script>
<style id="style" scoped>

#orders {
  margin: 0px 10px 5px 0px;
  font-size:13pt;
}

h1 {
  text-transform: uppercase;
  font-size: 1em;
}

#gridContainer {
  margin: 5px 0px 5px 0px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 300px 300px;
  grid-template-areas:
  "grid grid grid grid"
  "grid grid grid grid";
  background-color: white;
}

.orderBox {
  color: #100080;
  margin-left: 5pt;
  margin-top: 3pt;
  background-color: #999999;
  border-color: black;
  border-style: solid;
}

.active {
  background-color: lightblue;
}
#StorageButton{
  width: 9em;
  height: 3em;
  position: absolute;
  top: 0;
  right: 0;
}
#StorageButton2{
  width: 9em;
  height: 3em;
  position: absolute;
  top: 0;
  right: 0;
}
#footer {
  position:fixed;
  width:100%;
  border-top:1px solid #aaa;
  background:#fff;
}
.NumberOfOrders{
  position: absolute;
  top: 0.2em;
  right: 13em;
  border: 1px solid #aaa;
  font-size: 1.2em;
}
.ManyOrders {
  background-color: rgba(255, 0, 0, 0.7);

}




</style>
