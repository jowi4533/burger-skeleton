<template>
	<div class="order">
		<div class="orderId">
			{{orderId}}
		</div>
		<div class = "orderItems" v-for ="item in order.ingredients">
			<div v-if ="item.category !== 7 && item.category !== 6">
				{{item["ingredient_"+ lang]}}

			</div>
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
  },
	data: function() { //Not that data is a function!
    return {
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
	text-align: center;
	font-size: 1.3em;
	font-weight: bold;
	background-color: #5e6b6d;
	border-bottom-style: solid;
	border-bottom-width: 1.5pt;
	border-bottom-color: black;
}

.orderItems{
}
</style>
