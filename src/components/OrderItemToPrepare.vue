<template>
  <!-- Note in this component that it is using another component -->
<div class = "displayNewOrder">
  <OrderItem
    :ui-labels="uiLabels"
    :lang="lang"
    :order-id="orderId"
    :order="order">
  </OrderItem>
  <button class = "OrderStartedButton" v-on:click="orderStarted">
    {{uiLabels.started}}
  </button>
  <button class = "OrderDoneButton" v-on:click="orderDone">
    {{uiLabels.ready}}
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
    orderStarted: function (){
      this.$emit('started')
    }
  }
}
</script>
<style scoped>
.displayNewOrder{
  display: grid;

}
.OrderDoneButton {
  top: 50px;
  width: 70px;
  height: 19px;
}

</style>
