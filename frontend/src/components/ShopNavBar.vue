<!-- ONLY FOR ALL THE SHOP PAGES -->
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
                    Women

                </router-link>

                <router-link to="/men">
                    Men

                </router-link>

                <router-link to="/youth">
                    Youth(17-1)

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
/* --------------------------------------------------------------------------------------------- */
</style>