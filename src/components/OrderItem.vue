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

}
.orderId{
	text-align: center;
	font-size: 1.3em;
	font-weight: bold;
	background-color: rgb(28, 247, 189);
	border-bottom-style: solid;
	border-bottom-width: 1.5pt;
	border-bottom-color: black;
}

.orderItems{
	padding-left: 0.2em;
	border-bottom-style: solid;
	border-bottom-width: thin;
}
</style>
