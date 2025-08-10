<template>

    <body>


        <nav>
            <ShopNavBar />
        </nav>

        <!-- Filter Button (only visible on mobile) -->
        <div class="filter-btn-container">
            <button class="filter-toggle" @click="toggleSide">
                <img src="../assets/filter.png" alt="filterbtn">
                Filters
            </button>
        </div>

        <aside id="filterside" :class="{ show: isFilterOpen }" class="PageTargetter">
            <div class="ShopContainer">
                <div class="filterBar">
                    <div class="filterHead">
                        <h3 class="display-5">Filters:</h3>

                    </div>

                    <ul>
                        <li>
                            Type:
                            <div class="TypeFilter">
                                <ul>
                                    <li><input type="radio" name="type" value="Men"> Men</li>
                                    <li><input type="radio" name="type" value="Women"> Women</li>
                                    <li><input type="radio" name="type" value="Youth"> Youth</li>

                                </ul>

                            </div>

                        </li>
                        <br>
                        <li>
                            Style
                            <div class="StyleFilter">
                                <ul>
                                    <li><input type="radio" name="style" value="Casual"> Casual</li>
                                    <li> <input type="radio" name="style" value="SmartCasual"> Smart Casual</li>
                                    <li><input type="radio" name="style" value="Formal"> Formal</li>
                                    <li><input type="radio" name="style" value="Sport"> Sporty</li>

                                </ul>

                            </div>
                        </li>
                        <br>
                        <li>
                            Price
                            <div class="PriceRangeFilter">
                                <ul>
                                    <li>
                                        <label for="minPrice">Minimum Price:</label>
                                        R<span id="minVal">{{ minPrice }}</span>
                                        <br>
                                        <input type="range" id="minPrice" min="0" max="1500" step="5"
                                            v-model="minPrice">

                                    </li>

                                    <li>
                                        <label for="maxPrice">Maximum Price:</label>
                                        R<span id="maxVal">{{ maxPrice }}</span>
                                        <br>
                                        <input type="range" id="maxPrice" min="0" max="1500" step="5"
                                            v-model="maxPrice">

                                    </li>

                                </ul>

                            </div>

                        </li>
                        <br>
                        <li>
                            In Stock?
                            <div class="StockFilter">
                                <ul>
                                    <li> <input type="radio" name="stock" value="StockAvailable"> Stock Available</li>
                                    <li><input type="radio" name="stock" value="StockUnavailable"> Out of Stock</li>

                                </ul>



                            </div>

                        </li>

                    </ul>

                </div>

            </div>
        </aside>
        <main>
            <div class="ProductCardView">
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>

                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>

                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <div class="ProdCard">
                    <img class="imgprod"
                        src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                        alt="productImg">
                    <div class="scrollwrapper">
                        <h3 class="ProdText scrolltext">Prod Name Here</h3>

                    </div>
                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>
                </div>
                <!-- <div class="ProdCard">
                    <img class="imgprod" src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp" alt="productImg">

                    <div class="scroll-wrapper">
                        <div class="scroll-content">
                            <h3 class="scroll-text">This is a very long product name that scrolls seamlessly when you
                                hover the card</h3>
                            <h3 class="scroll-text">This is a very long product name that scrolls seamlessly when you
                                hover the card</h3>
                        </div>
                    </div>

                    <p class="lead ProdText">Some Details Here</p>
                    <p class="fw-lighter ProdText">Pricing details go here</p>
                    <button>More Details btn</button>

                </div> -->

            </div>

        </main>


    </body>





</template>

<script>
import ShopNavBar from "../components/ShopNavBar.vue";



export default {
    data() {
        return {
            minPrice: 100,
            maxPrice: 900,
             isFilterOpen: false

        };

    },

    components: {
        ShopNavBar
    },

    methods: {
        toggleSide() {
            this.isFilterOpen = !this.isFilterOpen;
        }
    },

    watch: {
        minPrice(Num) {
            if (Num >= +this.maxPrice) {
                this.minPrice = +this.maxPrice - 5;
            }
        },
        maxPrice(Num) {
            if (Num <= +this.minPrice) {
                this.maxPrice = +this.minPrice + 5;
            }
        },
    },

}


</script>


<style scoped>
/* --------------------------------CSS Load in for whole Page----------------------------------- */

/* .PageTargetter {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
} */

/* --------------------------------------------------------------------------------------------- */

/* --------------------------------Filter Bar CSS Styling:-------------------------------------- */
/* 
.ShopContainer {
    display: flex;
    flex: 1;
    overflow: hidden;
}
 */

.filterBar {
    width: 250px;
    overflow-y: auto;
    padding-left: 10px;
    padding-top: 10px;


}

.filterBar ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
    padding-top: 5px;
}

.filterBar h3 {
    width: 100px
}

/* Filter Button Styling */
.filter-btn-container {
  display: none; /* hidden on desktop */
  padding: 0.5rem;
  background: #f8f8f8;
  text-align: center;
}

.filter-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(to right, #3315dec4, rgb(54, 142, 237));
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
}

.filter-toggle img {
  width: 20px;
  height: 20px;
}

/* --------------------------------------------------------------------------------------------- */

/* ------------------------------General Styling for page:-------------------------------------- */
/* main {
    font-family: inherit, sans-serif, arial;

} */
/* 
.title {
    text-align: center;
    padding: 10px;
    margin-bottom: 10px;
    font-style: oblique;
    font-weight: 900;

}

.title h3 {
    font-weight: 600;

} */
/* 
.pageWrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
}
 */


/* --------------------------------------------------------------------------------------------- */

/* GRID TESTING */
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
    grid-template-columns: 1fr; /* full width for main content */
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
    display: block; /* show button on mobile */
  }
}

main {
    grid-area: main;
    padding: 15px;

}



button {
    height: 51.95px;
    width: 51.9px;
    border: none;
    background-color: white;

}

button img {
    height: 51.95px;
    width: 51.9px;

}

.filterHead {
    display: flex;
    align-items: center;
    gap: 10px;
}

.filterHead h3 {
    margin: 0;
}

/* ----------------------------------------Product Card CSS------------------------------------- */

.ProductCardView {

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;


}

.ProdCard {

    height: 400px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;

    box-shadow:
        /* right shadow */
        6px 0px 10px -1px rgba(25, 96, 250, 0.414),
        /* left shadow */
        -4px 0px 3.5px -2px rgba(152, 30, 246, 0.414),
        /* top shadow */
        0px -4px 3.5px -2px rgba(152, 30, 246, 0.414),
        /* bottom shadow */
        0px 6px 8px -1px rgba(25, 96, 250, 0.414);


}

.ProdText {
    padding-bottom: 10px;
}

.imgprod {
    width: 120px;
    height: auto;
    margin-bottom: 10px;
}

.PriceRangeFilter input {
    -webkit-appearance: none;
    appearance: none;
    background-color: linear-gradient(to right, #3315dec4, rgb(54, 142, 237));
}

.PriceRangeFilter input::-webkit-slider-runnable-track {
    background: linear-gradient(to right, #3315dec4, rgb(54, 142, 237));
    border-radius: 5px;
    height: 6px;
    box-shadow:
        /* right shadow */
        6px 0px 10px -1px rgba(25, 96, 250, 0.414),
        /* left shadow */
        -4px 0px 3.5px -2px rgba(152, 30, 246, 0.414),
        /* top shadow */
        0px -4px 3.5px -2px rgba(152, 30, 246, 0.414),
        /* bottom shadow */
        0px 6px 8px -1px rgba(25, 96, 250, 0.414);

}



.PriceRangeFilter input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: linear-gradient(to right, #3315de, rgb(54, 142, 237));
    border: solid black 2px;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -4px;
    transition: background 0.3s;


}

.ProdCard button {

    border-radius: 10px;
    width: 130px;
    height: 40px;
    background: linear-gradient(to right, #3315dec4, rgb(54, 142, 237));
    color: white;
    justify-self: center;
    cursor: pointer;
    margin: 10px;
    transition: transform 0.3s ease;

    box-shadow:
        /* right shadow */
        6px 0px 10px -1px rgba(25, 96, 250, 0.414),
        /* left shadow */
        -4px 0px 3.5px -2px rgba(152, 30, 246, 0.414),
        /* top shadow */
        0px -4px 3.5px -2px rgba(152, 30, 246, 0.414),
        /* bottom shadow */
        0px 6px 8px -1px rgba(25, 96, 250, 0.414);

}

.ProdCard button:hover {
    transform: translateY(-5px);
}

.scrollwrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    mask-image: linear-gradient(to right, black 85%, transparent);
    -webkit-mask-image: linear-gradient(to right, black 85%, transparent);

}


.scrolltext {
    display: inline-block;
    white-space: nowrap;
    transform: translateX(0);
    transition: transform 0.3s ease;
    animation: none;
}

.ProdCard:hover .scrolltext {
    animation: scroll-loop 10s linear infinite;
}

@keyframes scroll-loop {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }

}














/* .scroll-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
  white-space: nowrap;

  mask-image: linear-gradient(to right, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, black 85%, transparent);
  z-index: -1; 
}

.scroll-content {
  display: inline-block;
  white-space: nowrap;
  transform: translateX(0);
  animation: none;
}

.ProdCard:hover .scroll-content {
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  
  }
}

.scroll-content .scroll-text {
  display: inline-block;
  width: 100%;
  margin: 0;
  padding: 0 1rem; 
  box-sizing: border-box;
} */
</style>