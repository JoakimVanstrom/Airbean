<template>
    <div class="nav">
      <img src="../assets/graphics/close.svg" alt="">
<div class="links">
    <router-link to="/menu"> Meny </router-link>
    <router-link to="/about"> Vårt Kaffe </router-link>
    <router-link to="/"> Min profil </router-link>
    <router-link to="/"> OrderStatus </router-link>
</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.nav {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(10, 1fr);
  background-color: #2F2926;
  height: 915px;
  width: 412px;
  img{
    grid-row: 1;
    width: 2rem;
    background-color: white;
    border: 2px solid white;
    border-radius: 50%;
    padding: 1rem;
    margin: 1rem;
  }
}
.links{
    grid-row: 5/9;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: auto;
    a{
      text-decoration: none;
      color: white;
      font-size: 2rem;
    }
  }

</style>