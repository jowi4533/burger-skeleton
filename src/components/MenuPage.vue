<template>
  <div id ="MenuPageContainer">
    <title>MenuPage</title>
    <div id="welcome">{{uiLabels.menuPageHeader}}</div>

    <div id="buttons">
      <button v-on:click= "initiateBurgerOrder('BreadAndPatty')" class="pictureButtons" id="buttonPicOne"><img src="https://classroomclipart.com/images/gallery/Animations/Food/TN_animated-clipart-gif-building-cheese-burger-animation-05c.jpg"></button>
      <button v-on:click= "switchStage('Drinks')" class="pictureButtons" id="buttonPicTwo"><img src="https://st3.depositphotos.com/5934840/12771/v/950/depositphotos_127717872-stock-illustration-french-fries-and-soda-design.jpg"></button>
      <button v-on:click= "switchStage('OverView')" class="pictureButtons" id="buttonPicThree"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrk3fOyuSsjA4DKyItpI_9Wh2Cfff8iIEZZnIZCMA3yM7XYfn"></button>
      <!-- <button class="pictureButtton" id="buttonPicFour"><img src="http://www.smalandselfstorage.se/wp-content/uploads/2017/05/cash-payment-icon-5.jpg"></button> -->

      <button v-on:click= "initiateBurgerOrder('BreadAndPatty')" class="textButtons" id="buttonTextOne"> {{uiLabels.stageOne}} </button>
      <button v-on:click= "switchStage('Drinks')" class="textButtons" id="buttonTextTwo"> {{uiLabels.stageTwo}} </button>
      <button v-on:click= "switchStage('OverView')" class="textButtons" id="buttonTextThree"> {{uiLabels.stageThree}} </button>
      <!-- <button class="textButton" id="buttonTextFour"> {{uiLabels.stageFour}} </button> -->

      <button v-on:click= "switchLanguage()"> {{uiLabels.language}} </button>

    </div>
  </div>

</template>

<script>
export default {
  name: 'menupage',
  props: {
    uiLabels: Object,
    lang: String
  },

  data: function() {
    return {
    }
  },

  methods: {

    //Changes to the different components, these are used for navigating with the buttons
    switchStage: function(stage) {
      this.$emit('switchStage', stage);
    },
    switchLanguage: function(){
      this.$emit('switchLanguage');
    },

    initiateBurgerOrder: function(stage){
      this.$emit('createNewBurger')
      this.switchStage(stage);

    }
  }
}
</script>
<style scoped>

#MenuPageContainer {
  height: 100vh;
  width: 100vw;
  border-color: black;
  background-color: rgb(192, 239, 232);
  grid-template-columns: 33%;
  grid-template-rows: 45% 45% 10%;

}

#welcome {
  font-size: 2.3em;
  color: black;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
}

#buttons {
  display: grid;
  /* grid-template-columns: 33%;
  grid-template-rows: 45% 45% 10%; */
  justify-items: center;
}

button {
  background-color: rgb(0,200,250);
  color: rgb(4, 40, 51);
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  width: 10em;
  opacity: 0.7;
  transition: 0.3s;
  border-style: hidden;
}

img {
  height: 20em;
  width: 20em;
  margin-left: -0.5em;
  margin-top: -0.1em;
  border-radius: 50%;
}



/* .buildYourBurger:hover {
  cursor: pointer;
  opacity: 1;
  box-shadow: 3px rgb(0,170,230);
}

.sidesAndDrinks:hover {
  cursor: pointer;
  opacity: 1;
  box-shadow: 3px rgb(0,170,230);
}

.overview:hover {
  cursor: pointer;
  opacity: 1;
  box-shadow: 3px rgb(0,170,230);
} */
.pictureButtons {
  border-radius: 50%;
  width: 20em;
  height: 20em;
  align: center;
  margin: 3%;
}

.textButtons {
  border-radius: 0.5em;
  margin: 3%;
  width: 95%;
  height: 4em;
  font-size: 1.7em;
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

/* #buttonPicFour {
  grid-column: 4;
  grid-row: 1;
  border-radius: 50%;
  width: 10em;
  height: 10em;
  align: center;
  margin: 0.5em;
}

#buttonTextFour {
  grid-column: 4;
  grid-row: 2;
  border-radius: 10px;
  margin: 1em;
  height: 4em;
} */

</style>
