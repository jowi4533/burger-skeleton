<template>
  <div id = "PaymentContainer">
    <h1> Hello! This is the Payment whalecum! </h1>

    <button v-on:click= "switchToSides()">Previous</button>
    <button> Add item to Order</button>
    <button> Edit </button>
    <button>Purchase selected items</button>

  </div>

</template>

<script>

export default{
  name: 'overview',

  data: function() {
    return {
    }
  },

  methods: {

    switchToSides: function() {
      this.$parent.state = "Sides";
    }
  }
}


</script>


<style scoped>


</style>
