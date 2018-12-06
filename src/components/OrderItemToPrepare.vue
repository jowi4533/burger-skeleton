
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
    },
    cancelOrder: function () {
      // not implemented
    },

    orderStarted: function () {
      this.order.status = 'started';
      this.$emit('started');

    }
  }
}
</script>
<style scoped>

.displayNewOrder{
  position:relative;
  /*grid-template-rows: "1 2 3 4 5 6 7 8 9";*/

}
.OrderDoneButton {
  position:absolute;
  bottom:0;
  left:0;
  width: 70px;
  height: 19px;

}
.OrderStartedButton {
  position:absolute;
  bottom:0;
  right:0;
  width:70px;
  height:19px;
}
</style>
