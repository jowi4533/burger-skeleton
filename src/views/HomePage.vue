<template>

<body id="body">


<div id="all">
<meta name="viewport" content="width=device-width, initial-scale=1">

<header id="TopHeader">
  <img id="headerImg" src="https://i.imgur.com/1NLTXH0.png">
</header>

  <div class="wrapper" align="center">
      <button id="EatHere" v-on:click="OrderOption()" >Eat Here</button>
      <button id="EatThere" v-on:click="OrderOption()">Take Away</button>

  </div>
</div>
</body>
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
#body{
  background-color: black;
  overflow: hidden;
}
#TopHeader{
  font-size: 2em;
  text-align: center;
  background-color: black;


}
#headerImg{
  width: 100%;
  opacity: 0.8;
  border-bottom: 2px dashed red;
}



.wrapper{
  display: grid;
  grid-gap: 3%;
  grid-template-columns: 50% 50%;
  color: black;
  background-color: black;






}
#EatHere{
/*  position: absolute;*/
  display: block;
  color: green;
  font-size: 200%;
  width: 80%;
  background-color: lightgrey;
  margin: 5%;
  margin-bottom: 30%;
  margin-top: 30%;
  border: dashed 2px black;
  grid-column: 1;
  grid-row: 1;




}
#EatHere:hover{
  background-color: darkblue;

}
#EatThere{
  display: block;
  color: green;
  font-size: 200%;
  width: 80%;
  text: bold;
  margin: 5%;
  margin-bottom: 30%;
  margin-top: 30%;
  padding: 5%;
  background-color: lightgrey;
  border: dashed 2px black;
  grid-column: 2;
  grid-row: 1;
}
#EatThere:hover{
  background-color: darkblue;
}

</style>
