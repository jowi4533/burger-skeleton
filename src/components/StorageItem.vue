<template>
	<div class = "StorageGrid">
		<div class= "bread">
			<h3> {{uiLabels.bread}} </h3>
		<div v-for = "item in ingredients">
			<div v-if = "item.category == 1">
				<div id ="name">
					{{item["ingredient_"+ lang]}} {{item.stock}}
				</div>
			</div>
		</div>
		</div>
		<div class ="patty">
			<h3> {{uiLabels.patty}} </h3>
		<div v-for = "item in ingredients">
			<div v-if = "item.category == 2">
				<div id ="name">
					{{item["ingredient_"+ lang]}}  <h20> {{item.stock}} </h20>
				</div>
		</div>
		</div>
	</div>
		<div class= "toppings">
		<h3> {{uiLabels.toppings}} </h3>
		<div v-for = "item in ingredients">
			<div v-if = "item.category == 3">
				<div id ="name">
					{{item["ingredient_"+ lang]}}  <h20> {{item.stock}} </h20>
				</div>
		</div>
	</div>
		</div>
		<div class= "veggies">
		<h3> {{uiLabels.veggies}} </h3>
		<div v-for = "item in ingredients">
			<div  v-if = "item.category == 4">
				<div id ="name">
					{{item["ingredient_"+ lang]}}  <h20> {{item.stock}} </h20>
				</div>
		</div>
		</div>
		</div>
		<div class= "sauce">
		<h3> {{uiLabels.sauce}} </h3>
		<div v-for = "item in ingredients">
			<div  v-if = "item.category == 5">
				<div id ="name">
					{{item["ingredient_"+ lang]}}  <h20> {{item.stock}} </h20>
				</div>
		</div>
	</div>
		</div>
		<div class= "sides">
		<h3> {{uiLabels.sides}} </h3>
		<div v-for = "item in ingredients">
			<div v-if = "item.category == 6">
				<div id ="name">
					{{item["ingredient_"+ lang]}}  <h20> {{item.stock}} </h20>
				</div>
		</div>
		</div>
		</div>
		<div class= "drinks">
		<h3> {{uiLabels.drinks}} </h3>
		<div v-for = "item in ingredients">
			<div  v-if = "item.category == 7">
				<div id ="name">
					{{item["ingredient_"+ lang]}}
				</div>
				<div id ="stock">
					{{item.stock}} pcs
				</div>
		</div>
		</div>
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
#name {
 }

#abc {

	align: right;

 }


.ingredient {
  border: 1px solid #ccd;
  padding: 1em;
  background-color:  rgb(20,100,120);
  /*background-image: url('~@/assets/exampleImage.jpg');*/
  color: white;
}


</style>
