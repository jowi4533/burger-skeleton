<template>

<body id="body">



<meta name="viewport" content="width=device-width, initial-scale=1">

<header id="TopHeader">
  <img id="headerImg" src="https://i.imgur.com/1NLTXH0.png">
</header>

  <div class="wrapper" align="center">
      <button id="EatHere" v-on:click="OrderOption()" >Eat Here</button>
      <button id="EatThere" v-on:click="OrderOption()">Take Away</button>
  </div>

</body>
</template>


<script>

export default {
  name: 'HomePage',
  state: '',
  methods: {
    OrderOption: function (){
      window.location = 'http://localhost:8080/#/Ordering';
      this.state = "MenuPage";
    },
  }
}
</script>

<style lang="css">

#body{
  background-color: rgb(192, 239, 232);
/*  overflow: hidden;*/
}

#TopHeader{
  font-size: 2em;
  text-align: center;
  background-color: black;
}

#headerImg{
  width: 100%;
  opacity: 0.8;
  border-bottom: 2px solid red;
}

.wrapper{
  display: grid;
  grid-template-columns: 50% 50%;
  color: black;
  height: 60vh;
  /*background-color: rgb(192, 239, 232);*/
}

button {
  background-color: rgb(0,200,250);
  color: rgb(4, 40, 51);
  font-size: 200%;
  width: 80%;
  margin: 5% 0 5% 0;
  opacity: 0.7;
  transition: 0.3s;
  border-style: hidden;
  border-radius: 10px;
}

#EatHere{
/*  position: absolute;*/
  /*display: block;*/
  grid-column: 1;
  grid-row: 1;
}

#EatHere:hover{
  opacity: 1;
  cursor: pointer;
}

#EatThere{
  /*display: block;*/
  grid-column: 2;
  grid-row: 1;
}

#EatThere:hover{
  opacity: 1;
  cursor: pointer;
}

</style>
