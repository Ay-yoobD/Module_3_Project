<template>

    <body>


        <nav>
            <ShopNavBar />
        </nav>

        <!-- Filter Button (only visible on mobile) -->
        
        <aside >
            <ShopFilterBar/>
        </aside>
        <main>
          <ShopProdCard/>
        </main>


    </body>
</template>

<script>
import ShopFilterBar from "@/components/ShopFilterBar.vue";
import ShopNavBar from "../components/ShopNavBar.vue";
import ShopProdCard from "@/components/ShopProdCard.vue";

export default {
  components: {
    ShopNavBar,
    ShopFilterBar,
    ShopProdCard
  }

}


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
    top: 0;
    grid-area: navbar;
    position: sticky;
    z-index: 9999;

}

aside {
    height: calc(100dvh - 60px);
    top: 60px;
    position: sticky;
    grid-area: sidebar;
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

/* --------------------------------------------------------------------------------------------- */
</style>