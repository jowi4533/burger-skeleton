<template>
  <div class="ingredient">
    <div class="ingredient_name">
      <div>
          {{item["ingredient_"+ lang]}},{{item.selling_price}}:-
      </div>
    </div>
    <div class="ingredient_img" align= "center">
    </div>
    <div class="all_buttons"align="center">
        <button class ="minus_button"></button>
        <div class = "counterBox">{{ counter }}</div>
        <button class ="plus_button"v-on:click="incrementCounter"></button>



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
    uiLabels: Object
  },
  data: function () {
    return {
      counter: 0
    };
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1;
      // sending 'increment' message to parent component or view so that it
      // can catch it with v-on:increment in the component declaration
      this.$emit('increment');
    },
    resetCounter: function () {
      this.counter = 0;
    },
    decreaseCounter: function(){
      this.counter -= 1 ;
    }
  }
}
</script>
<style scoped>

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
.minus_button{
  display: inline-block;
  background-color:white;
  width: 2.7em;
  height: 2.7em;
  background-color: #ff4d4d;
  border-radius: 50%;
  background-image: url('~@/assets/minus_button.png');
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center;
  
}
.ingredient_img{
  border: 1px solid #000000;
  height: 70%;
  width: 100%;
  background-image: url('~@/assets/patty/beef.jpg');
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center;
}

</style>
