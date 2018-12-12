<template>
	<div class="order">
		<div class="orderId">
			{{orderId}}
		</div>
		<div class="orderItems" v-for="item in order.ingredients">


		</div>
	</div>
</template>
<script>
export default {
  name: 'OrderItem',
  props: {
    uiLabels: Object,
    order: Object,
    orderId: String,
    lang: String
  }
}
</script>
<style scoped>
.order {
	text-transform: capitalize;
}

.order .orderId{
	text-align: center;
	font-size: 12pt;
	font-weight: bold;
	background-color: gray;
	border-bottom-style: solid;
	border-bottom-width: 1pt;
	border-bottom-color: black;
}

.orderItems {
	white-space: pre-line;
}
</style>
