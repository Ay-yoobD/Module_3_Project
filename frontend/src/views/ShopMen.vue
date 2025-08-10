<template>

    <body>


        <nav>
            <ShopNavBar />
        </nav>
        <aside id="filterside">
           <ShopFilterBar/>
        </aside>
        <main>
            <ShopProdCard/>

        </main>

    </body>

</template>

<script>
import ShopNavBar from "../components/ShopNavBar.vue";
import ShopFilterBar from "../components/ShopFilterBar.vue";
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

/* --------------------------------CSS Load in for whole Page----------------------------------- */

.PageTargetter {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* --------------------------------------------------------------------------------------------- */

* {
    margin: 0;
    padding: 0;
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

}
/* 
aside {
    height: calc(100vh - 60px);
    top: 60px;
    position: sticky;
    grid-area: sidebar;
    border-right: 3px solid black;
} */

main {
    grid-area: main;
    padding: 15px;
}

@media(max-width:800px) {
    body {
        grid-template-columns: 1fr;
    }

    aside {
        position: fixed;
        width: 250px;
        display: none;
    }

    .show {
        display: block;
    }
}

</style>