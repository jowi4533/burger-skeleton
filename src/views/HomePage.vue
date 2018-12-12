<template>

<div>

<header id="TopHeader">
  <img id="headerImg" src="https://i.imgur.com/1NLTXH0.png">
</header>

  <div class="wrapper" align="center">
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



.wrapper{
  display: grid;
  grid-gap: 5%;
  grid-template-columns: 20% 20% 20% 20% 20%;
  align-items: center;
  background-color: black;





}
#EatHere{
/*  position: absolute;*/
  width: 6em;
  height: 3em;
  color: green;
  font-size: 3em;
  border: 2px dashed black;
  margin-top: 30%;
  margin-bottom:50%;
  background-color: lightgrey;
  grid-column: 2;
  grid-row: 1;



}
#EatHere:hover{
  background-color: darkblue;

}
#EatThere{
  width:6em;
  height: 3em;
  color: green;
  font-size: 3em;
  text: bold;
  border: 2px dashed black;
  background-color: lightgrey;
  margin-top: 30%;
  margin-bottom: 50%;
  grid-column: 3;
  grid-row:1;
}
#EatThere:hover{
  background-color: darkblue;
}

</style>
