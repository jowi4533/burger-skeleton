<template>
<div id = "ToppingsAndSauceContainer">
<h1> This is the Vegetables! </h1>

  <button class="tabButtons" v-on:click= "switchTab('BreadAndPatty')">Bread and Patty</button>
  <button class="tabButtons" v-on:click= "switchTab('ToppingsAndSauce')">Toppings and Sauce</button>
  <button class="tabButtons" >Vegetables</button>

  <br>
  <br>


  <div id="ToggleBar">
    <button id="next" v-on:click= "switchStage('Drinks')">Next (//Insert uiLabel here// Drinks)</button>
    <button id="previous" v-on:click= "switchTab('ToppingsAndSauce')">Previous (//Insert uiLabel here// Toppings and Sauce)</button>
  </div>

</div>

</template>

<script>

export default{
  name: 'Vegetables',

  data: function() {
    return {
    }
  },

  methods: {
    switchTab: function(tab) {
      this.$emit('switchTab', tab);
    },

    switchStage: function(stage) {
      this.$emit('switchStage', stage);
    },
  }
}


</script>


<style scoped>
button {
  border-style: hidden;
  height: 3em;
}
.tabButtons {
  background-color: rgb(234, 234, 234);
}

#previous {
  background-color: rgb(30,100,200);

}

#next {
  background-color: rgb(30,200,100);

}

</style>
