<template>
    <ShopNavBar />
    <router-view />

    <main class="PageTargetter">
        <section class="featured-products">
            <h2 class="section-title">Featured Products</h2>
            <div class="product-grid">
                <ProductCard v-for="product in featuredProducts" :key="product.id" :product="product" />
            </div>
        </section>

    </main>

</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import ShopNavBar from "../components/ShopNavBar.vue";

export default {
    components: {
        ShopNavBar,
        ProductCard
    },
    data() {
        return {
            featuredProducts: [
                {
                    id: 1,
                    title: 'Classic Denim Jacket',
                    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR14ezS7pLUOPQEPUx6kHEFDTMVoIroQjFUaZYJvcM3b1YtWhFjDfBX-iejW5l2fW_-0jZY8bolyE7tkPeImkBlXuTZQ4OdcUs48xUWqFdBfA-ltfbyNsZVEdeT9Q&usqp=CAc',
                    price: 899.99,
                },
                {
                    id: 2,
                    title: 'Streetwear Hoodie',
                    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQk2qfWxhV0iEFbr08PbR4_UI6gDsUSqJeiE6iHCoL225g2g_RbJDSyCT6Ke9PTSF1HtqbiUB_jHOK6AhD234icV_u75Kj4RO6f4-Mzmi_Gw0jI639p48bVO1w&usqp=CAc',
                    price: 499.99,
                },
                {
                    id: 3,
                    title: 'Retro Sneakers',
                    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSWueMn7UBAbrFTD-4evlsYKZmex78XIbI00rjYm2N--QwPuQcQ3QrD3W7O7KS_xZwSDQSb87H5ZYYHI7CxIGIpgZ71gOohoBqw2fFe8xv_B-4sKFX6-uSq&usqp=CAc',
                    price: 1199.99,
                },
                // other product must still be added here , for now , but later it will be fetched from the backend sql database
            ]
        };
    },

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

/* -----------------------------------Product Grid Styling-------------------------------------- */
.featured-products {
    padding: 2rem 1rem;
    text-align: center;
}

.section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
}

.product-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

</style>