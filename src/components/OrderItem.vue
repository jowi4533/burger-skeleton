<template>
	<div class="order">
		{{orderId}} <br> {{order.type}}  {{ order.ingredients.map(item=>item["ingredient_"+ lang]).join(", ") }}
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
</style>
