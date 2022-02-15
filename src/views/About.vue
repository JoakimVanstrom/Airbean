<template>
  <div class="about">
    <header>
      <img src="../assets/graphics/graphics-header.svg" alt="" />
      <div class="header-navi">
        <router-link to="/">
          <img src="../assets/graphics/navicon.svg" alt="" />
        </router-link>
      </div>
    </header>
    <main>
      <article>
        <h1>Vårt Kaffe</h1>
        <p class="para-bold">
          Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
          grounds dripper, crema, strong whipped, variety extra iced id lungo
          half and half mazagran. Pumpkin spice.
        </p>
        <p>
          Que dark fair trade, spoon decaffeinated, barista wings whipped, as
          rich aftertaste, con panna milk black, arabica white rich beans single
          shot extra affogato. So affogato macchiato sit extraction instant
          grinder seasonal organic, turkish single shot, single origin, and
          robusta strong to go so dripper. Viennese froth, grounds
          caramelization skinny aromatic cup kopi-luwak, fair trade flavour,
          frappuccino medium, café au lait flavour cultivar ut bar instant
          kopi-luwak.
        </p>
        <p>
          Roast id macchiato, single shot siphon mazagran milk fair trade est
          aroma a half and half and, so, galão iced to go, whipped as cream cup
          pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half
          and half at, that, percolator macchiato trifecta and body as arabica
          dripper. In galão black java milk sit trifecta, robusta, acerbic café
          au lait instant shop latte. Seasonal bar shop filter aroma id, crema,
          affogato viennese cultivar aftertaste, seasonal, percolator cream
          black, galão flavour, milk aromatic turkish skinny crema.
        </p>
      </article>
      <article class="eva">
          <img src="../assets/graphics/eva-cortado.jpg" alt="">
          <h2>Eva Cortado</h2>
          <p>VD & Grundare</p>
      </article>
    </main>
    <footer><img src="../assets/graphics/graphics-footer.svg" alt="" /></footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.about {
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
  .header-navi {
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
}

main{
    padding: 0 2rem 0 2rem;

    h1{
        padding-top: 1rem;
        font-size: 2.5rem;
        font-family: "PT Serif", serif;
    }

    p{
        padding-top: 1rem;
        font-size: 12px;
        line-height: 1.1rem;
        font-family: "Work Sans", sans-serif;
    }
    .para-bold{
        font-size: 14;
        font-weight: bolder;
    }
    .eva{
        display: grid;
        place-items: center;
        padding-top: 2rem;
        img{
            border-radius: 50%;
        }
        p{
            padding-top: 0;
        }
    }
}

footer {
  img {
    width: 100%;
    padding-top: 2.7rem;
  }
}
</style>
