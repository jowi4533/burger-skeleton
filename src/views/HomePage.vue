<template>

<body id="body">
<meta name="viewport" content="width=device-width, initial-scale=1">

<header id="TopHeader">
  <h1 id = "rawsauce">RAW Sauce Burgers</h1>
</header>

  <div class="wrapper" align="center">
      <button class="buttons" id="EatHere" v-on:click="OrderOption()" ><span>Eat here</span></button>
      <button class="buttons" id="EatThere" v-on:click="OrderOption()"><span>Take away</span></button>
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
    },
  }
}
</script>

<style lang="css">

#body{
  background-color: rgb(192, 239, 232);
  font-family: 'Quicksand', sans-serif;
}

#TopHeader{
  font-size: 2.5em;
  text-align: center;
}

#rawsauce {
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
  height: 60vh;
}

button {
  display: inline-block;
  border-radius: 10px;
  background-color: #rgb(255,255,255);
  border: none;
  color: rgb(42,70,145);
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 4em;
  width: 80%;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5% 0 5% 0;
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
  grid-column: 1;
  grid-row: 1;
}

#EatThere{
  grid-column: 2;
  grid-row: 1;
}

</style>
