<template>
  <div class="ingredient">
    <div class="ingredient_name">
      <div class="a">
          {{item["ingredient_"+ lang]}},{{item.selling_price}}:-
      </div>
    </div>
    <div class="ingredient_img" align= "center">
    </div>
      <button v-on:click="incrementCounter">{{ counter }}</button>
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
    }
  }
}
</script>
<style scoped>
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
