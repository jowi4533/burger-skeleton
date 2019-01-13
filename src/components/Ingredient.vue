<template>
  <div class="ingredient">
    <div class="ingredient_name">
      <div>
          {{item["ingredient_"+ lang]}}, {{item.selling_price}}:-
      </div>
    </div>
    <div v-bind:class = "['ingredient_img', {'ingredient_choosen':(this.counter > 0)}]" align= "center">
    </div>
    <div class="all_buttons" align="center">
        <button v-bind:class = "['minus_button_grey', {'minus_button_red':(this.counter > 0)}]" v-on:click="decreaseCounter" ></button>
        <div class = "counterBox">{{ counter }}</div>
        <button v-bind:class = "['plus_button', {'plus_button_white':(this.counter > 0)}]" v-on:click="incrementCounter"></button>



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
  },
  data: function () {
    return {
      counter:0
    };
  },
  methods: {
    incrementCounter: function () {
      var breadtruth = this.breadInArray();
      var pattytruth = this.pattyInArray();

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
          console.log("balle")
          this.counter +=1;
          this.$emit('increment');

      }
    },
    resetCounter: function () {
      this.counter = 0;
    },
    decreaseCounter: function(){
      if (this.counter > 0){
        this.counter -= 1 ;
      this.$emit('decrease');
    }

    }
  }
}
</script>
<style scoped>
.ingredient_img{
  border: 3px solid #000000;
  height: 70%;
  width: 100%;
  background-image: url('~@/assets/patty/beef.jpg');
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center;
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
  background-color:white;
  width: 2.7em;
  height: 2.7em;
  background-color: lightgreen;
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
  background-color: #ff4d4d;
}
.plus_button_white{
  border-style: hidden;
  background-color: white;
}
.ingredient_choosen{
  border: 3px solid #40ff00;
}


</style>
