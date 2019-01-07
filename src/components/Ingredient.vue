<template>
  <span class="ingredient">
    <label>
      <button v-on:click="incrementCounter">{{ counter }}</button>
      {{item["ingredient_"+ lang]}}, {{item.selling_price}}:-
      <img :src="/assets/item.ingredient_img">
    </label>
  </span>
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

</style>
