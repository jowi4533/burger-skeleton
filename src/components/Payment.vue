<template>
  <div id = "PaymentContainer">
    <h1> Hello! This is the Payment whalecum! </h1>

    <button v-on:click= "switchStage('OverView')">Previous</button>
    <button>Pay</button>


  </div>

</template>

<script>

export default{
  name: 'payment',

  data: function() {
    return {
    }
  },

  props: {
    lang: String,
    uiLabels: Object,
    ingredients: Array
  },

  methods: {
    switchStage: function(stage) {
      this.$emit('switchStage', stage);
    }
  }
}


</script>


<style scoped>


</style>
