<template>
	<div class="order">
		<div class="orderId">
			{{orderId}}
		</div>
			{{order.ingredients.map(item=>item["ingredient_"+ lang]) }}
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
  },
	data: function(){
		return {
			orderArray: []
		}
	}
}
</script>
<style scoped>
.order {
	text-transform: capitalize;
	padding-left: 0.2em;
	padding-top: 0.2em;
}
.orderId{
	font-size: 1.3em;

}
</style>
