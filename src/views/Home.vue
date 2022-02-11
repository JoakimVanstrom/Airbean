<template>
    <router-link to="/nav" class="home"> 
      <div class="intro">
      <img src="../assets/graphics/logo-sml.svg" alt="">
      <h1>AIR BEAN</h1>
      <p>DRONEDELIVERED COFFEE</p>
      </div>
    <img src="../assets/graphics/intro-graphic-left.svg" alt="">
    <img src="../assets/graphics/intro-graphic-right.svg" alt="">
    </router-link>
</template>


<style scoped lang="scss">
.home {
  background: #0E927D;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  color: white;
  text-decoration: none;
  height: 915px;
}

.intro{
  grid-column: 1/4;
  grid-row: 1;
  justify-self: center;
  align-self: center;
  text-align: center;
  z-index: 1;
  img {
    width: 5rem;
  }
  h1{
    padding: 0 0 1rem 0;
    font-size: 4rem;
  
  }
}

img:nth-of-type(1){
  grid-row: 1;
  grid-column: 1/2;
  height: 100%;
  z-index: 0;
}
img:nth-of-type(2){
  grid-row: 1;
  grid-column: 3/4;
  justify-self: end;
  height: 100%;
  z-index: 0;
}




</style>
