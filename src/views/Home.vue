<template>
  <div class="home">
      <div class="intro">
      <img src="../assets/graphics/logo-sml.svg" alt="">
      <h1>AIR BEAN</h1>
      <p>DRONEDELIVERED COFFEE</p>
      </div>
    <img src="../assets/graphics/intro-graphic-left.svg" alt="">
    <img src="../assets/graphics/intro-graphic-right.svg" alt="">
  </div>
</template>


<style scoped lang="scss">
.home {
  background: #0E927D;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  color: white;
}

.intro{
  grid-column: 2/3;
  grid-row: 1;
  justify-self: center;
  align-self: center;
  img {
    width: 5rem;
    
  }
}

img:nth-of-type(1){
  grid-column: 1/2;
}
img:nth-of-type(2){
  grid-column: 3/4;
  justify-self: end;
}




</style>
