<template>
<div id = "ToppingsAndSauceContainer">
  <h1> This is the Drinks! </h1>

  <button class="tabButtons">Drinks</button>
  <button class="tabButtons" v-on:click= "switchTab('Sides')">Sides</button>

  <br>
  <br>

  <div id="ToggleBar">
    <button id="next" v-on:click= "switchTab('Sides')">Next (//Insert uiLabel here// Sides)</button>
    <button id="previous" v-on:click= "switchStage('Vegetables')">Previous (//Insert uiLabel here// Vegetables)</button>
  </div>

</div>

</template>

<script>

export default{
  name: 'Drinks',

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
  background-color: rgb(234,234,234);
}
#next {
  background-color: rgb(30,200,100);

}
#previous {
  background-color: rgb(30,100,200);

}

</style>
