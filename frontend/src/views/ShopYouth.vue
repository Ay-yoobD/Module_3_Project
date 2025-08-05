<template>
    <ShopNavBar/>
    <router-view/>

    <main class="PageTargetter">
        Youth store here:
    </main>

</template>

<script>
import ShopNavBar from "../components/ShopNavBar.vue";

export default {
  components: {
    ShopNavBar
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


</style>