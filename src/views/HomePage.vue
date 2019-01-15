<template>
<div id="SiteContainer">
<!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
<header id="TopHeader">
  <div id = "rawsauce">RAW Sauce Burgers</div>
</header>

  <div class="wrapper" align="center">
      <button class="buttons" id="EatHere" v-on:click="OrderOption()" ><span>Eat here</span></button>
      <button class="buttons" id="EatThere" v-on:click="OrderOption()"><span>Take away</span></button>
  </div>

</div>
</template>

<script>

export default {
  name: 'HomePage',
  state: '',
  methods: {
    OrderOption: function (){
      window.location = 'http://localhost:8080/#/Ordering';
    },
  }
}
</script>

<style scoped>

body{
   background-color: rgb(192, 239, 232);
  font-family: 'Quicksand', sans-serif;
}

#TopHeader{
  font-size: 2.5em;
  text-align: center;
}
#SiteContainer{
    background-color: rgb(192, 239, 232);
    height: 98vh;

    border-style: Solid;
}

#rawsauce {
  font-size: 200%;
  font-family: 'Quicksand', sans-serif;
  background-color: rgb(28, 247, 189);
  border-color: rgb(42, 70, 145);
  border-bottom-style: solid;
  border-width: 0.2em;
  color: rgb(42, 70, 145);
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 0.7em;
  padding-top: 0.7em;
}

.wrapper{
  display: grid;
  grid-template-columns: 50% 50%;
  color: black;
  height: auto;
  width: auto;
  background-color: rgb(192, 239, 232);
}

button {
  display: inline-block;
  border-radius: 10px;
  background-color: rgb(255,255,255);
  border: none;
  color: rgb(42,70,145);
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 4em;
  width: 80%;
  transition: 0.5s;
  margin: 5% 0 5% 0%;
  height: 5em;
}

button:hover {
  background-color: rgb(0,200,250);
  opacity: 1;
  cursor: pointer;
}

.buttons span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.buttons span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -1em;
  transition: 0.5s;
}

.buttons:hover span {
  padding-right: 0.8em;
}

.buttons:hover span:after {
  opacity: 1;
  right: 0;
}
#EatHere{
  /* grid-column: 1;
  grid-row: 1; */
}
#EatThere{
  /* grid-column: 1;
  grid-row: 1;  */
}
@media (max-width: 500px) {
  #SiteContainer{height: 95vh;width: auto;}
  div#rawsauce { font-size: 75%; }
  div.wrapper{
    margin-top: 15%;
    display: grid;
    grid-template-columns:auto;
    grid-row: 50% 50%;
    color: black;
    height: 60vh;
  }
  button{
    font-size: 200%;
  }
}

</style>
