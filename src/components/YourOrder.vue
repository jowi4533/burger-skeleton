<template>
<div class = "yourOrderContainer">
  <div class="yourOrder">
    <span class ="YourOrderText">{{uiLabels.yourOrder}}</span>
  </div>

  <div class="theIngedients" v-for ="ingredient in chosenIngredients">
      <li>{{ingredient["ingredient_"+ lang]}}, {{ingredient.selling_price}}:-</li>
  </div>
</div>
</template>

<script>
export default {
  name: 'YourOrder',
props:{
  uiLabels: Object,
  lang: String,
  chosenIngredients: Array
},
}


</script>

<style scoped>
.yourOrderContainer {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "order";
  border: 1px solid  	#000000;
  
}
.yourOrder {
  border-bottom: 1px solid #000000;
  margin-left: 0.1em;
  margin-top: 0.1em;
}
.theIngedients{
  padding-left: 1.5em;
}
li{
}
li::first-letter {
  text-transform: capitalize;
}
.YourOrderText{
  font-size: 1.2em;
  font-weight: bold;
}

</style>
