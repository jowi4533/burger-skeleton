<template>
  <div id ="MenuPageContainer">
    <title>MenuPage</title>
    <h1 id="welcome"> Choose a step to begin with </h1>

    <div id="buttons">

      <button v-on:click= "switchToBreadAndPatty()" class="pictureButtton" id="buttonPicOne"><img src="https://classroomclipart.com/images/gallery/Animations/Food/TN_animated-clipart-gif-building-cheese-burger-animation-05c.jpg"></button>
      <button v-on:click= "switchToSidesAndDrinks()" class="pictureButtton" id="buttonPicTwo"><img src="https://st3.depositphotos.com/5934840/12771/v/950/depositphotos_127717872-stock-illustration-french-fries-and-soda-design.jpg"></button>
      <button v-on:click= "switchToOverView()" class="pictureButtton" id="buttonPicThree"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrk3fOyuSsjA4DKyItpI_9Wh2Cfff8iIEZZnIZCMA3yM7XYfn"></button>
      <button class="pictureButtton" id="buttonPicFour"><img src="http://www.smalandselfstorage.se/wp-content/uploads/2017/05/cash-payment-icon-5.jpg"></button>

      <button v-on:click= "switchToBreadAndPatty()" class="textButton" id="buttonTextOne">1: Build your own burger </button>
      <button v-on:click= "switchToSidesAndDrinks()" class="textButton" id="buttonTextTwo">2: Sides and drinks</button>
      <button v-on:click= "switchToOverView()" class="textButton" id="buttonTextThree">3: Order overview</button>
      <button class="textButton" id="buttonTextFour">4: Payment</button>

    </div>
  </div>
</template>

<script>

export default {
  name: 'menupage',

  data: function() {
    return {
    }
  },

  methods: {

    //Changes to the different components, these are used for navigating with the buttons
    switchToBreadAndPatty: function() {
      this.$parent.state = "BreadAndPatty";
    },
    switchToSidesAndDrinks: function() {
      this.$parent.state = "ToppingsAndSauce"
    },
    switchToOverView: function() {
      this.$parent.state = "OverView"
    }
  }
}
</script>


<style scoped>

#MenuPageContainer {
  height: auto;
  width: auto;
  border-color: black;
  background-color: rgb(192, 239, 232);
}

#welcome {
  color: black;
  text-align: center;
  font-family: sans-serif, Trebuchet;
}

#buttons {
  display: grid;
  justify-items: center;
  grid-template-columns: 25%;
}

button {
  background-color: rgb(0,200,250);
  color: rgb(4, 40, 51);
  font-size: 0.8em;
  font-family: sans-serif, Trebuchet;
  font-weight: bold;
  width: 10em;
  opacity: 0.7;
  transition: 0.3s;
}

img {
  height: 9em;
  width: 9em;
  border-radius: 50%;
}

.pictureButtton {
  border-radius: 50%;
  width: 10em;
  height: 10em;
  align: center;
  margin: 0.5em;
}

.textButton {
  border-radius: 10px;
  margin: 1em;
  height: 4em;
}

button:hover {
  cursor: pointer;
  opacity: 1;
  box-shadow: 3px rgb(0,170,230);
}

#buttonPicOne {
  grid-column: 1;
  grid-row: 1;
}

#buttonTextOne {
  grid-column: 1;
  grid-row: 2;
}

#buttonPicTwo {
  grid-column: 2;
  grid-row: 1;
}

#buttonTextTwo {
  grid-column: 2;
  grid-row: 2;
}

#buttonPicThree {
  grid-column: 3;
  grid-row: 1;
}

#buttonTextThree {
  grid-column: 3;
  grid-row: 2;
}

#buttonPicFour {
  grid-column: 4;
  grid-row: 1;
}

#buttonTextFour {
  grid-column: 4;
  grid-row: 2;
}

</style>
