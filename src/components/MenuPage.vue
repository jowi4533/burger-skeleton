<template>
  <div id ="MenuPageContainer">
    <title>MenuPage</title>
    <div id="WelcomeText">{{uiLabels.menuPageHeader}}</div>

      <div id="LanguageButton">
      <button v-on:click= "switchLanguage()" id="langbutton"> {{uiLabels.language}} </button>
      </div>

    <div id="ButtonContainer">
      <div id="Pictures">

      <!-- <div id="bread"> -->
      <button v-on:click= "initiateBurgerOrder('BreadAndPatty')" class="pictureButtons" id="PictureBreadAndPatty"><img src="https://classroomclipart.com/images/gallery/Animations/Food/TN_animated-clipart-gif-building-cheese-burger-animation-05c.jpg"></button>
      <span class="mediaLabel"> {{uiLabels.stageOne}}</span>
      <!-- </div> -->

      <!-- <div id="drinks"> -->
      <button v-on:click= "switchStage('Drinks')" class="pictureButtons" id=" PictureDrinksAndSides"><img src="https://st3.depositphotos.com/5934840/12771/v/950/depositphotos_127717872-stock-illustration-french-fries-and-soda-design.jpg"></button>
      <span class="mediaLabel"> {{uiLabels.stageTwo}}</span>
      <!-- </div> -->

      <!-- <div id="Overview"> -->
      <button v-on:click= "switchStage('OverView')" class="pictureButtons" id="PictureOverview"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrk3fOyuSsjA4DKyItpI_9Wh2Cfff8iIEZZnIZCMA3yM7XYfn"></button>
      <span class="mediaLabel"> {{uiLabels.stageThree}}</span>
      <!-- </div> -->
    </div>

      <div id="Texts">
      <button v-on:click= "initiateBurgerOrder('BreadAndPatty')" class="textButtons" id="TextBreadAndPatty"><span> {{uiLabels.stageOne}}</span> </button>
      <button v-on:click= "switchStage('Drinks')" class="textButtons" id="TextDrinksAndSides"><span> {{uiLabels.stageTwo}} </span></button>
      <button v-on:click= "switchStage('OverView')" class="textButtons" id="TextOverview"><span> {{uiLabels.stageThree}} </span> </button>
      </div>

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
  height: 98vh;
  width: auto;
  border-style: solid;
  border-color: black;
  background-color: rgb(192, 239, 232);
  grid-template-areas: "WelcomeText"
                      "LanguageButton"
                      "ButtonContainer";

  grid-template-rows: 20% 10% 70%;
  grid-template-columns: 100%;
  grid-row-gap:1em;

  text-align: center;

}
#WelcomeText {
  grid-area:WelcomeText;
  background-color: rgb(28, 247, 189);
  color: rgb(42, 70, 145);
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 3em;

  padding-top: 0.7em;
  padding-bottom: 0.7em;
  border-bottom-style: solid;
  border-color: rgb(42, 70, 145);
}
#LanguageButton{
grid-area:LanguageButton;
height: 10%;
}

#langbutton {
  width: 15em;
  height: 3em;
  font-size: 1.2em;

  border-radius: 0.25em;
  background-color: rgb(165, 254, 203);
}
#langbutton:hover {
  background-color: rgb(28, 247, 189);
}


#ButtonContainer {
  grid-area: ButtonContainer;
  display: grid;
  height: 65vh;
  grid-template-areas: "Pictures"
                      "Texts";
  grid-template-columns: 100%;
  grid-template-rows: 75% 25%;
  grid-row-gap: 1em;



/*  margin-right: 10%;*/
  /* grid-template-columns: 33%;
  grid-template-rows: 45% 45% 10%; */
  justify-items: center;
  /* padding-top: 2em;
  margin-left: 0;
  margin-right: 3%; */
}

#Pictures{
  grid-area:Pictures;
  width: 100%;







}
#Texts{
  grid-area:Texts;

}
#PictureBreadAndPatty{

  }
#PictureDrinksAndSides{

  }
#PictureOverview{

}
#TextBreadAndPatty{

  }
#TextDrinksAndSides{

  }
#TextOverview{
margin:7;
}





button {
  background-color: rgb(255,255,255);
  color: rgb(42, 70, 145);
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  border-style: hidden;
}
button:hover {
  cursor: pointer;
  opacity: 1;
}

img {
  height: 20em;
  width: 20em;
align: center;

  /* margin-left: -0.5em;
  margin-top: -0.1em; */
  border-radius: 50%;
}

.mediaLabel{

  font-size: 0;
}



.pictureButtons {
  margin: 5em;
  margin-bottom: 0;
  margin-top:0;
  border-radius: 50%;
  width: 20em;
  height: 20em;
align: center;
  opacity: 0.7;
  transition: 0.3s;

}

.textButtons {
  display:inline-block;
  border-radius: 0.3em;
  margin: 3.6em;
  margin-bottom: 0;
  margin-top: 0;
  padding: 0;
  width: 12em;
  height: 4em;
  font-size: 1.3em;
}
.textButtons:hover {
  background-color: rgb(0,200,250);
}



.textButtons span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.textButtons span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -1em;
  transition: 0.5s;
}

.textButtons:hover span {
  padding-right: 0.8em;
}

.textButtons:hover span:after {
  opacity: 1;
  right: 0;
}
@media (max-width: 800px){
  #MenuPageContainer{height: 97vh;width: auto;}
  #ButtonContainer{
  /* grid-template-areas: "BreadAndPatty"
                                          "Drinks"
                                          "Overview";
                  grid-template-rows: 100% 100% 100%; */
                  }
  #PictureBreadAndPatty{display: block;}
  #TextBreadAndPatty{display: block;}
  #PictureDrinksAndSides{display: block;}
  #TextDrinksAndSides{display: block;}
  #PictureOverview{display: block;}
  #TextOverview{display: block;}

  img{height:7em;width:7em;;display: block;padding:0;}
  .pictureButtons{height:7em;width:7em;display: block;padding: 0;margin-left: 38%;}
  .textButtons{height: 4em;width: 7em;font-size: 0.8em;visibility: hidden;}
  .mediaLabel{font-size: 1em;}
}
/*
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

} */

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
