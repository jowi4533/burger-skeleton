<template>
<div id = "ToppingsAndSauceContainer">
  <h1> This is the Sides! </h1>

  <button class="tabButtons" v-on:click= "switchTab('Drinks')">Drinks</button>
  <button class="tabButtons">Sides</button>

  <br>
  <br>


  <div id="ToggleBar">
    <button id="next" v-on:click= "switchStage('OverView')">Next (//Insert uiLabel here// Order overview)</button>
    <button id="previous" v-on:click= "switchTab('Drinks')">Previous (//Insert uiLabel here// Drinks)</button>
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
  background-color: rgb(234, 234, 234);
}
#previous {
  background-color: rgb(30,100,200);

}

#next {
  background-color: rgb(30,200,100);

}

</style>
