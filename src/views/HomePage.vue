<template>

<div>

<header id="TopHeader">
  <img id="headerImg" src="https://i.imgur.com/1NLTXH0.png">
  <h1 id="WelcomeText">Welcome zum RawSauce</h1>
</header>

  <div id="lillaSkit">
      <button id="EatHere">Eat Here</button>
      <button id="EatThere">Take Away</button>

  </div>
</div>
</template>




<script>
export default {
  name: 'HomePage'
}
</script>





<style lang="css">
#TopHeader{
  font-size: 2em;
  text-align: center;
  overflow: hidden;
}
#headerImg{
  width: 500px;
  height: 100px;

}


#lillaSkit{
  display: grid;


}
#EatHere{
/*  position: absolute;*/
  width: 400px;
  height: 300px;
  color: red;
  font-size: 50px;
  text: bold;
  grid-column: 2;
  grid-row: 1;

}
#EatThere{
/*  position: absolute; */
  width: 400px;
  height: 300px;
  color: red;
  font-size: 50px;
  text: bold;
  grid-column: 4;
  grid-row: 1;
}
</style>
