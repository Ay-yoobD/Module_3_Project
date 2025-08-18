<template>

    <body>


        <nav>
            <ShopNavBar />
        </nav>
        <main>
            <div class="ProductCardView">
                <ShopProdCard v-for="prod in products" :key="prod.id" :product="prod" />

            </div>

        </main>

    </body>

</template>

<script>
import ShopNavBar from "../components/ShopNavBar.vue";
import ShopProdCard from "@/components/ShopProdCard.vue";

export default {
    components: {
        ShopNavBar,
        ShopProdCard

    },
    data() {
        return {
            isFilterOpen: false,
            products: [] 

        };

    },
    methods: {
        toggleSide() {
            this.isFilterOpen = !this.isFilterOpen;
        },

        async loadProducts() {
            await this.$store.dispatch("getProductsFeatured");
            this.products = this.$store.state.products; 
            
        }

    },

    mounted() {
        this.loadProducts();

    }

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
        "main main";
}

nav {
    top: 0;
    grid-area: navbar;
    position: sticky;
    z-index: 9999;

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