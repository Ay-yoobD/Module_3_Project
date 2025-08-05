<template>          
    <ShopNavBar/>
    <router-view/>

    <main class="PageTargetter">
        <div class="title">
            <h3>Our Women's Selection:</h3>

        </div>

        <div class="filterBar">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

        </div>


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

/* ------------------------------General Styling for page:-------------------------------------- */
main{
    font-family: inherit,sans-serif,arial;
}

.title{
    text-align: center;
    padding: 30px;
    font-style: oblique;
    font-weight: 900;
}

.title h3{
    font-weight: 600;
}


</style>