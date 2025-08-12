<!-- ONLY FOR ALL THE SHOP PAGES
<template>
    <header class="header">
        <div class="introText">
            Select an option:
        </div>

        <div class="center-container">
            <nav class="nav-links">
                <router-link to="/shop">
                    Featured

                </router-link>

                <router-link to="/women">
                    Tops

                </router-link>

                <router-link to="/men">
                    Bottoms

                </router-link>

                <router-link to="/youth">
                    Sneakers

                </router-link>

                <router-link to="/accessories">
                    Accessories

                </router-link>


            </nav>

        </div>

    </header>

</template>

<script>
export default {


}

</script>

<style scoped>
/*---------------------------------------- Main Header CSS-------------------------------------- */
.header {
    position: relative;
    display: flex;
    align-items: center;
    height: 60px;
    background-color: #111;
    padding: 0 2rem;
    font-family: Playfair-Display;
    font-size: 18px;
    z-index: 9999;

}

.introText {
    position: absolute;
    left: 2rem;
    font-weight: bold;
    color: rgb(255, 255, 255);
}

.center-container {
    flex: 1;
    display: flex;
    justify-content: center;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-links a {
    font-size: clamp(1.1rem,1vw,1rem);
    position: relative;
    text-decoration: none;
    color: #ffffff;
    padding: 0.5rem;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-links a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #d7d7d7;
    transition: width 0.4s ease, right 0.4s ease;
}

.nav-links a:hover::after {
    width: 100%;
    left: 0;
}

.nav-links a.router-link-active::after {
    width: 100%;
    left: 0;
}

@media(max-width:800px){
    .introText{
        visibility: hidden;
    }
    
}
/* --------------------------------------------------------------------------------------------- */
</style> -->

<template>
    <header class="header">
        <div class="introText">
            Browse options:
        </div>

        <div class="center-container">
            <nav class="nav-links">
                <router-link to="/shop">
                    New Arrivals
                </router-link>

                <router-link to="/tops">
                    Tops
                </router-link>

                <router-link to="/bottoms">
                    Bottoms
                </router-link>

                <router-link to="/sneakers">
                    Sneakers
                </router-link>

                <router-link to="/accessories">
                    Accessories
                </router-link>
            </nav>
        </div>

        <!-- Filter Button -->
        <!-- <button class="filter-btn" @click="$emit('toggle-filters')">
            Filters
        </button> -->
    </header>
</template>

<script>
export default {
    name: "Navbar",
};
</script>

<style scoped>
/*---------------------------------------- Main Header CSS-------------------------------------- */
.header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background: linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899);
    padding: 0 2rem;
    font-family: Playfair-Display;
    font-size: 18px;
    z-index: 9999;
    border-radius: 0 0 18px 18px ;
}

.introText {
    font-weight: bold;
    color: rgb(255, 255, 255);
    font-family: FontInter;
}

.center-container {
    flex: 1;
    display: flex;
    justify-content: center;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-links a {
    font-size: clamp(1.1rem,1vw,1rem);
    position: relative;
    text-decoration: none;
    color: #ffffff;
    padding: 0.5rem;
    font-weight: 500;
    transition: color 0.3s ease;
    font-family: FontInter;
}

.nav-links a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #d7d7d7;
    transition: width 0.4s ease, right 0.4s ease;
}

.nav-links a:hover::after {
    width: 100%;
    left: 0;
}

.nav-links a.router-link-active::after {
    width: 100%;
    left: 0;
}

 @media(max-width:800px){
    .introText {
        visibility: hidden;
    }
}

/* Filter button style */
/* .filter-btn {
    background-color: #6a0dad;
    color: white;
    padding: 0.4rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

.filter-btn:hover {
    background-color: #540a91;
} */


/*
@media(min-width:801px){
    .filter-btn {
        display: none;
    }
} */
/* --------------------------------------------------------------------------------------------- */
</style>
