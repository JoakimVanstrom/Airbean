<template>
  <div class="menu">
    <header>
      <img src="../assets/graphics/graphics-header.svg" alt="" />
      <div class="header-navi">
      <router-link to="/">
      <img  src="../assets/graphics/navicon.svg" alt="">
      </router-link>
      </div>
      <div class="header-bag">
      <router-link to="/">
        <img  src="../assets/graphics/bag.svg" alt="">
      </router-link>
      </div>
      <div class="counter">
        <p>{{getCounter}}</p>
      </div>
    </header>
    <main>
      <h1>Meny</h1>
      <div class="container-menu">
        <ul v-for="item in getMenu" :key="item.id">
          <div class="wrapper-menu">
            <div class="title">
              <img
                class="add-icon"
                src="../assets/graphics/add.svg"
                alt="add icon"
              />
              <p>{{ item.title }}</p>
              <li>{{ item.desc }}</li>
              <p>{{ item.price }} kr</p>
            </div>
          </div>
        </ul>
      </div>
    </main>
    <footer><img src="../assets/graphics/graphics-footer.svg" alt="" /></footer>
  </div>
</template>

<script>
export default {
  computed: {
    getMenu() {
      return this.$store.state.menu.menu;
    },
    getCounter(){
      return this.$store.state.counter
    }
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");
.menu {
  background-color: #f3e4e1;
  height: 915px;
  width: 412px;
}
header {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);
  img {
    grid-column: 1/13;
    grid-row: 1/3;
    width: 100%;
    z-index: 0;
  }
  .header-navi{
    grid-row: 1/2;
    grid-column: 1/3;
    justify-self: end;
    align-self: end;
    width: 1.5rem;
    z-index: 1;
    background-color: white;
    border: 0.8rem white solid;
    border-radius: 50%;
  }
  .header-bag{
    grid-row: 1/3;
    grid-column: 10/12;
   
    justify-self: center;
    align-self: center;
    width: 1rem;
    z-index: 1;
    background-color: #2f2926;
    border: 1.5rem #2f2926 solid;
    border-radius: 50%;
  }
  .counter{
    grid-row: 1/2;
    grid-column: 10/12;
    justify-self: end;
    align-self: center;
    z-index: 2;
    background-color: red;
    width: 1rem;
    height: 1rem;
    border: 0.5rem red solid;
    border-radius: 50%;
    text-align: center;
  }
}

main {
  h1 {
    color: #2f2926;
    text-align: center;
    font-size: 42px;
    font-family: "PT Serif", serif;
  }
  p {
    font-family: "PT Serif", serif;
  }
  .container-menu {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  .wrapper-menu {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
  }

  ul {
    list-style-type: none;
  }

  .title {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 1fr);
    font-size: 1.5rem;
    width: 100%;
    li {
      grid-row: 2;
      grid-column: 3/13;
      font-size: 1rem;
      color: #2f2926;
      font-weight: 700;
      font-family: "Work Sans", sans-serif;
    }

    p:nth-of-type(1) {
      grid-row: 1;
      grid-column: 3/10;
      font-size: 1.5rem;
      color: #2f2926;
      font-weight: 700;
    }
    p:nth-of-type(2) {
      grid-row: 1;
      grid-column: 10/13;
      color: #2f2926;
    }
  }
  .add-icon {
    grid-row: 1/3;
    grid-column: 1/3;
    align-self: center;
    justify-self: center;
    background-color: #2f2926;
    width: 1rem;
    border: #2f2926 0.6rem solid;
    border-radius: 9999rem;
    margin-bottom: 0.7rem;
  }
}

footer {
  img {
  width: 100%;
  padding-top: 8.9rem;
  }
}
</style>
