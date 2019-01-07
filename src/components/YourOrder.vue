<template>
<div class = "yourOrderContainer">
  <div class="yourOrderTextBox">
    <div class ="YourOrderText">{{uiLabels.yourOrder}}</div>
      </div>
    <div class="theIngredients" v-for ="ingredient in chosenIngredients">
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
  border: 1px solid #000000;
  height:100%

}
.yourOrderTextBox{



}
.theIngredients{
  padding-left: 1.5em;
}
li{
}
li::first-letter {
  text-transform: capitalize;
}
.YourOrderText{
  padding-top: 0.155em;
  padding-left: 0.1em;
  font-size: 1.2em;
  font-weight: bold;
  border-bottom: 1px solid #000000;
}

</style>
