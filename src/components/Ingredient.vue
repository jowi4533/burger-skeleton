<template>
  <div class="ingredient">
    <div class="ingredient_name">
      <div>
        {{item["ingredient_"+ lang]}}, {{item.selling_price}}:-
      </div>
    </div>
    <div v-bind:class = "['ingredient_image_container', {'ingredient_choosen':(this.counter > 0)}]" align= "center">
      <img class ="ingredient_image" :src="getImage(item.ingredient_img)" alt="">
    </div>
    <div class="all_buttons" align="center">
      <button v-bind:class = "['minus_button_grey', {'minus_button_red':(this.counter > 0)}]" v-on:click="decreaseCounter" ></button>
      <div class = "counterBox">{{ counter }}</div>
      <button v-bind:class = "['plus_button', {'plus_button_white':(this.counter > 0 && item.category < 6)}]" v-on:click="incrementCounter"></button>



    </div>
    <!-- <button v-on:click="incrementCounter">{{ counter }}</button> -->
  </div>
</template>
<script>
export default {
  name: 'Ingredient',
  props: {
    item: Object,
    lang: String,
    uiLabels: Object,
    burgerIngredients: Array,
    sideAndDrinkItems: Array,
  },
  data: function () {
    return {

    };
  },
  methods: {
    breadInArray: function (){
      for(let i in this.burgerIngredients) {
        if (this.burgerIngredients[i].category == 1) {
          return true;

        }
      }
      return false;
    },
  pattyInArray: function(){
    for(var i = 0; i < this.burgerIngredients.length; i++) {
      if (this.burgerIngredients[i].category == 2) {
        return true;
      }
    }
    return false;
  },
    incrementCounter: function () {
      var breadtruth = this.breadInArray();
      var pattytruth = this.pattyInArray();
      if (this.item.category < 6){

      if (this.counter < 1){
        if(this.item.category == 1){
          if(breadtruth==true) {
            return;
          }
        }
        else if(this.item.category == 2){
          if(pattytruth==true) {
            return;
          }
        }
          this.$emit('increment');
      }
    }
    else {
      this.$emit('increment');
    }

    },
  resetCounter: function () {
    this.counter = 0;
  },
  decreaseCounter: function(){
    if (this.counter > 0){
      this.$emit('decrease');
    }
  },
    getImage: function(ing_img){
      var theImage = ing_img;
      let imagePath = require('../assets' + theImage);
      return imagePath;
    }
},
computed: {
   counter: function () {
     let count = 0;
     for (let i = 0; i < this.burgerIngredients.length; i += 1) {
       if (this.burgerIngredients[i].ingredient_id === this.item.ingredient_id) {
         count += 1;
       }
     }
     if (this.item.category == 6 || 7) {
       for (let i = 0; i < this.sideAndDrinkItems.length; i += 1) {
         if (this.sideAndDrinkItems[i].ingredient_id === this.item.ingredient_id) {
           count += 1;
         }
       }
     }
     return count;
   }
 }

}
</script>
<style scoped>

button:hover {
  cursor: pointer;
}

.ingredient_image{
object-fit: cover;
height: 100%;
width: 100%;
}

.ingredient_image_container{
  border: 3px solid rgb(0,0,0);
  height: 10em;
  width: 100%;
}

.all_button{
}

.counterBox{
  text-align: center;
  vertical-align: bottom;
  border-style: hidden;
  width: 2em;
  height: 1.8em;
  display: inline-block;
  border-radius: 30%;
}

.plus_button{
  border-style: hidden;
  display: inline-block;
  width: 2.7em;
  height: 2.7em;
  background-color: rgb(30,200,100);
  border-radius: 50%;
  background-image: url('~@/assets/plus_button.png');
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center;

}

.minus_button_grey{
  border-style: hidden;
  display: inline-block;
  width: 2.7em;
  height: 2.7em;
  background-color: white;
  border-radius: 50%;
  background-image: url('~@/assets/minus_button.png');
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center;

}
.minus_button_red{
  border-style: hidden;
  background-color: rgb(254, 56, 56);
}
.plus_button_white{
  border-style: hidden;
  background-color: white;
}
.ingredient_choosen{
  border: 3px solid #40ff00;
}
button:hover{
  cursor:pointer;
}
/* @media (max-width: 600px) {
  .ingredient_image_container{

    height: 8em;

  }
} */

</style>
