<template>
  <!-- Note in this component that it is using another component -->
<div>
  <OrderItem
    :ui-labels="uiLabels"
    :lang="lang"
    :order-id="orderId"
    :order="order">
  </OrderItem>
  <button id="orderDoneButton" v-if = "order.status == 'started'" v-on:click="orderDone">
    {{uiLabels.ready}}
  </button>

  <button id="orderStartedButton" v-if = "order.status !== 'started'" v-on:click="orderStarted">
    {{uiLabels.started}}
  </button>

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
.orderDoneButton {
  width: 30px;
  height: 25px;
}

.orderStartedButton {
  width: 30px;
  height: 25px;
}

</style>
