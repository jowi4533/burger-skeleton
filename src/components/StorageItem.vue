<template>
	<div class = "StorageGrid" >
		<div class= "bread">
			<table style="width: 100%;">
				<th>{{uiLabels.bread}}</th>
				<tr v-for = "item in ingredients" v-if = "item.category == 1">
					<td v-bind:class ="['stockStatus',{'criticalStock':(item.stock <=15)}]">
						{{item["ingredient_"+ lang]}}</td>
						<td class="alignRight"> {{item.stock}} </td></tr>
					</table>
				</div>
				<div class ="patty">
					<table style="width: 100%;">
						<th>{{uiLabels.patty}}</th>
						<tr v-for = "item in ingredients" v-if = "item.category == 2">
							<td v-bind:class = "['stockStatus', {'criticalStock':(item.stock <=15)}]" >
								{{item["ingredient_"+ lang]}}</td>
								<td class="alignRight"> {{item.stock}} </td></tr>
							</table>
						</div>
						<div class= "toppings">
							<table style="width: 100%;">
								<th>{{uiLabels.toppings}}</th>
								<tr v-for = "item in ingredients" v-if = "item.category == 3">
									<td v-bind:class = "['stockStatus', {'criticalStock':(item.stock <=15)}]" >
										{{item["ingredient_"+ lang]}}</td>
										<td class="alignRight"> {{item.stock}} </td></tr>
									</table>
								</div>
								<div class= "veggies">
									<table style="width: 100%;">
										<th>{{uiLabels.veggies}}</th>
										<tr v-for = "item in ingredients" v-if = "item.category == 4">
											<td v-bind:class = "['stockStatus', {'criticalStock':(item.stock <=15)}]" >
												{{item["ingredient_"+ lang]}}</td>
												<td class="alignRight"> {{item.stock}} </td></tr>
											</table>
										</div>
										<div class= "sauce">
											<table style="width: 100%;">
												<th>{{uiLabels.sauce}}</th>
												<tr v-for = "item in ingredients" v-if = "item.category == 5">
													<td v-bind:class = "['stockStatus', {'criticalStock':(item.stock <=15)}]" >
														{{item["ingredient_"+ lang]}}</td>
														<td class="alignRight"> {{item.stock}} </td></tr>
													</table>
												</div>
												<div class= "sides">
													<table style="width: 100%;">
														<th>{{uiLabels.sides}}</th>
														<tr v-for = "item in ingredients" v-if = "item.category == 6">
															<td v-bind:class ="['stockStatus',{'criticalStock':(item.stock <=15)}]" >
																{{item["ingredient_"+ lang]}}</td>
																<td class="alignRight"> {{item.stock}} </td></tr>
															</table>
														</div>
														<div class= "drinks">
															<table style="width: 100%;">
																<th>{{uiLabels.drinks}}</th>
																<tr v-for = "item in ingredients" v-if = "item.category == 7">
																	<td v-bind:class = "['stockStatus', {'criticalStock':(item.stock <=15)}]" >
																		{{item["ingredient_"+ lang]}}</td>
																		<td class="alignRight"> {{item.stock}} </td></tr>
																	</table>
																</div>

															</div>
</template>

<script>
import Ingredient from '@/components/Ingredient.vue'
export default {
	name: 'StorageItem',
	props: {
	uiLabels: Object,
	lang: String,
	ingredients: Array,
	item: Object
},
	components: {
	Ingredient
}
	}
	</script>

	<style scoped>

	.StorageGrid{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr ;
		grid-template-rows: 1fr 1fr;
		grid-template-areas: "bread patty toppings veggies"
		"sauce sides drinks .";

		text-transform: capitalize;
	}
	.bread {
		grid-area: bread;

	}
	.patty { grid-area: patty;

	}
	.toppings { grid-area: toppings;


	}
	.veggies { grid-area: veggies;

	}
	.sauce { grid-area: sauce;

	}
	.sides { grid-area: sides;

	}
	.drinks { grid-area: drinks;

	}

	.ingredient {
		border: 1px solid #ccd;
		padding: 1em;
		background-color:  rgb(20,100,120);
		/*background-image: url('~@/assets/exampleImage.jpg');*/
		color: white;
	}
	td {
		border-bottom: 1px solid #ddd;
	}
	tr:hover {background-color: #f5f5f5;}

	.alignRight {
		float: right;
	}
	.bread , .patty , .toppings, .sauce, .sides, .drinks, .veggies{
		margin-right: 0.55em;
		border-right: 1px solid #ccd;
		border-bottom: 1px solid #ccd;
	}
	.stockStatus{

	}
	.criticalStock{
		background-color: rgba(255, 0, 0, 0.7);
	}


	</style>
