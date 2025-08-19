<template>
  <body>
    <nav>
      <ShopNavBar />
    </nav>

    <div class="filter-btn-container" style="top:60px">
      <button class="filter-toggle" @click="toggleSide">
        <img src="../assets/filter.png" alt="filterbtn" />
      </button>
    </div>

    <aside id="filterside" :class="{ show: isFilterOpen }" class="PageTargetter">
      <ShopFilterBar />
    </aside>

    <main>
      <div class="ProductCardView">
        <ShopProdCard v-for="prod in products" :key="prod.id" :product="prod" />
      </div>
    </main>
  </body>
</template>

<script>
import ShopNavBar from "../components/ShopNavBar.vue";
import ShopFilterBar from "../components/ShopFilterBar.vue";
import ShopProdCard from "@/components/ShopProdCard.vue";

export default {
  components: { ShopNavBar, ShopFilterBar, ShopProdCard },

  data() {
    return {
      isFilterOpen: false,
    };
  },

  computed: {
    products() {
      return this.$store.state.products; // reactive source of truth
    },
  },

  methods: {
    toggleSide() {
      this.isFilterOpen = !this.isFilterOpen;
    },
  },

  created() {
    // initial load for Tops
    this.$store.dispatch("getProductsAccessories");
  },
};
</script>



<style scoped>
/* -----------------------------------------Grid CSS-------------------------------------------- */

* {
    margin: 0;
    padding: 0;
    font-family: FontInter;
}

body {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
        "navbar navbar"
        "sidebar main";
}

nav {
    grid-area: navbar;
    
    top: 0;
    position: sticky;
    z-index: 9999;

}

aside {
    grid-area: sidebar;

    height: calc(100dvh - 60px);
    top: 60px;
    position: sticky;
    border-right: none;
    border-radius: 8px;
    box-shadow: 6px 0 5px 0px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;

}

@media (max-width: 900px) {
    body {
        grid-template-columns: 1fr;
        grid-template-areas:
            "navbar"
            "main";
    }

    aside {
        position: fixed;
        top: 60px;
        left: 0;
        width: 250px;
        height: calc(100dvh - 60px);
        background: white;
        transform: translateX(-100%);
        z-index: 9998;
    }

    aside.show {
        transform: translateX(0);
    }

    .filter-btn-container {
        display: block;
    }
}

main {
    grid-area: main;
    
    padding: 15px;

}

.ProductCardView {

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;


}

/* --------------------------------------------------------------------------------------------- */
</style>