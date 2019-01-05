
<template>
  <!-- Note in this component that it is using another component -->
<div class = "displayNewOrder">
  <OrderItem
    :ui-labels="uiLabels"
    :lang="lang"
    :order-id="orderId"
    :order="order">
  </OrderItem>

  <div v-if="order.status !=='started' ">
  <button class = "OrderStartedButton" v-on:click="orderStarted" >
    {{uiLabels.started}}
  </button>
    </div>
    <div v-if="order.status == 'started'">
  <button class = "OrderDoneButton" v-on:click="orderDone">
    {{uiLabels.ready}}
  </button>

</div>

</div>
</template>
<script>

import OrderItem from '@/components/OrderItem.vue'

export default {
  name: 'OrderItemToPrepare',
  components: { OrderItem },
  props: {
    uiLabels: Object,
    order: Object,
    orderId: String,
    lang: String
  },

  methods: {
    orderDone: function () {
      // sending 'done' message to parent component or view so that it
      // can catch it with v-on:done in the component declaration
      this.$emit('done');
      this.$emit('order');
    },
    cancelOrder: function () {
      // not implemented
    },

    orderStarted: function () {
      this.$store.state.socket.emit('orderStarted', this.order.orderId);
      //this.order.status = 'started';
      // this.$parent.markStarted();    Det här ska gå att använda också istället för emit, då har man methoden markStarted i Kitchen.vue och där förändrar man .snygg tll blå bakgrund
      //this.$emit('click');
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Quicksand');

.displayNewOrder{
  position:relative;
  /*grid-template-rows: "1 2 3 4 5 6 7 8 9";*/

}
.OrderDoneButton {
  font-family: 'Quicksand', sans-serif;
  font-weight:  bold;
  background-color: #3e8e47;
  position:absolute;
  bottom: 2px;
  left: 2px;
  width: 70px;
  height: 25px;
  border-radius: 8px;
}
.OrderStartedButton {
  font-family: 'Quicksand', sans-serif;
  font-weight:  bold;
  background-color: #fcf574;
  position:absolute;
  bottom: 2px;
  right: 2px;
  width: 70px;
  height: 25px;
  border-radius: 8px;

}
</style>
