<template>

    <body>

        <aside id="filterside">
            <div class="ShopContainer">
                <div class="filterBar">
                    <div class="filterHead">
                        <button onclick="toggleSide">
                            <img src="../assets/filter.png" alt="filterbtn">

                        </button>

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



    </body>


</template>

<script>
import ShopNavBar from "../components/ShopNavBar.vue";

export default {
    data() {
        return {
            minPrice: 100,
            maxPrice: 900,

        };

    },

    components: {
        ShopNavBar
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
* {
    margin: 0;
    padding: 0;
}

/* --------------------------------Filter Bar CSS Styling:-------------------------------------- */
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

.filterSide {
    height: calc(100vh - 60px);
    top: 60px;
    position: sticky;
    grid-area: sidebar;
    border-right: 3px solid black;
}

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

/* --------------------------------------------------------------------------------------------- */
</style>