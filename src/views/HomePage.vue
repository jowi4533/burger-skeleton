<template>

<div>

<header id="TopHeader">
  <img id="headerImg" src="https://i.imgur.com/1NLTXH0.png">
</header>

  <div id="lillaSkit">
      <button id="EatHere" v-on:click="OrderOption()">Eat Here</button>
      <button id="EatThere" v-on:click="OrderOption()">Take Away</button>

  </div>
</div>
</template>




<script>



export default {
  name: 'HomePage',
  methods: {
    OrderOption: function (){
      window.location = 'http://localhost:8080/#/Ordering'
    },
  }
  }
</script>





<style lang="css">

#TopHeader{
  font-size: 2em;
  text-align: center;
  overflow: hidden;
  background-color: black;


}
#headerImg{
  width: 100%;
  opacity: 0.8;
  border-bottom: 2px dashed red;
}



#lillaSkit{
  display: grid;
  background-color: black;
  overflow: hidden;



}
#EatHere{
/*  position: absolute;*/
  width: 400px;
  height: 300px;
  color: green;
  font-size: 50px;
  border: 2px dashed black;
  background-color: lightgrey;
  grid-column: 2;
  grid-row: 1;


}
#EatHere:hover{
  background-color: darkblue;

}
#EatThere{
  width: 400px;
  height: 300px;
  color: green;
  font-size: 50px;
  text: bold;
  border: 2px dashed black;
  background-color: lightgrey;
  grid-column: 4;
  grid-row: 1;
}
#EatThere:hover{
  background-color: darkblue;
}
</style>
