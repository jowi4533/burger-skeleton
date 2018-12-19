<template>
<div id = "ToppingsAndSauceContainer">
<h1> This is the ToppingsAndSauce! </h1>
  <button class="tabButtons" v-on:click= "switchTab('BreadAndPatty')">Bread and Patty</button>
  <button class="tabButtons"> Toppings and Sauce</button>
  <button class="tabButtons" v-on:click= "switchTab('Vegetables')">Vegetables</button>

  <br>
  <br>

  <div id="ToggleBar">
    <button id="next" v-on:click= "switchTab('Vegetables')">Next (//Insert uiLabel here// Vegetables)</button>
    <button id="previous" v-on:click= "switchTab('BreadAndPatty')">Previous (//Insert uiLabel here// Bread and Patty)</button>
  </div>

</div>

</template>

<script>

export default{
  name: 'BreadAndPatty',

  data: function() {
    return {
    }
  },

  methods: {
    switchTab: function(tab) {
      this.$emit('switchTab', tab);
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
