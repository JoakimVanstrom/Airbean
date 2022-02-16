<template>
  <div>
    <div class="cart-background"></div>
    <div class="cart">
      <main>
      <h1>Din Beställning</h1>
        <ul v-for="item in getOrder" :key="item.id">
          <div class="order">
          <div class="change-amount">
            <img
              src="../assets/graphics/arrow-up.svg"
              alt="add icon"
              @click="$store.dispatch('addItem', item)"
            />
            <p>{{ item.amount }} st</p>
            <img
              src="../assets/graphics/arrow-down.svg"
              alt="add icon"
              @click="$store.dispatch('removeItem', item)"
            />
          </div>
          <div class="title-price">
            <h2>{{ item.title }}</h2>
            <p>{{ item.price * item.amount }} kr</p>
          </div>
          </div>
        </ul>
        <div class="total-counter">
        <h2>Total: {{ totalCounter }} kr</h2>
        <p>inkl moms + drönarleverans</p>
      <button>Take my money!</button>
      </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getOrder() {
      return this.$store.state.orderList;
    },
    totalCounter(){
        return this.$store.getters.getTotal
    },
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");
.cart-background {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
}

.cart {
  display: grid;
  background-color: white;
  z-index: 10;
  height: 700px;
  border-radius: 5px;
  transform: translateY(-20px);

  h1 {
    font-family: "PT Serif", serif;
    text-align: center;
    padding: 0.5rem 0 1rem 0;
  }
  ul {
      padding: 1rem;
  }
}
.order {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
  
  .change-amount{
      grid-row: 1;
      grid-column: 11/13;
      justify-self: center;
      align-self: center;
  }
  img {
    width: 10px;
    cursor: pointer;
  }
  h2{
          font-family: "PT Serif", serif;
  }
  .title-price {
    grid-row: 1;
    grid-column: 1/7;
  }
}
  .total-counter{
     padding: 0 0 0 1rem;
     
     button{
         background-color: #2F2926;
         color: white;
     }
  }
</style>
