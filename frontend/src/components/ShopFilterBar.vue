<template>
  <aside id="filterside" :class="{ show: isFilterOpen }" class="PageTargetter">
    <div class="ShopContainer">
      <div class="filterBar">
        <div class="filterHead">
          <h3 class="display-5">Filters:</h3>
        </div>

        <hr style="width: 200px; margin-left: 15px;" class="my-2" />

        <ul>
          <li>
            <h4>Type:</h4>
            <div class="TypeFilter">
              <ul>
                <li>
                  <input type="radio" name="type" value="Male" v-model="selectedGender" @change="applyGender" /> Male
                </li>
                
                <li>
                  <input type="radio" name="type" value="Female" v-model="selectedGender" @change="applyGender" /> Female
                </li>

                <li>
                  <input type="radio" name="type" value="Youth" v-model="selectedGender" @change="applyGender" /> Youth
                </li>

              </ul>

            </div>

          </li>

          <br/>

          <li>
            <h4>Style:</h4>
            <div class="StyleFilter">
              <ul>
                <li>
                  <input type="radio" name="style" value="Casual" v-model="selectedStyle" @change="applyStyle" /> Casual
                </li>

                <li>
                  <input type="radio" name="style" value="SmartCasual" v-model="selectedStyle" @change="applyStyle" /> Smart Casual
                </li>

                <li>
                  <input type="radio" name="style" value="Formal" v-model="selectedStyle" @change="applyStyle" /> Formal
                </li>

                <li>
                  <input type="radio" name="style" value="Sport" v-model="selectedStyle" @change="applyStyle" /> Sporty
                </li>

              </ul>

            </div>

          </li>

          <br/>

          <li>
            <h4>Price:</h4>
            <div class="PriceRangeFilter">
              <ul>
                <li>
                  <label for="minPrice">Minimum Price:</label>
                  R<span id="minVal">{{ minPrice }}</span>
                  <br />
                  <input id="minPrice" type="range" min="0" max="1500" step="5" v-model.number="minPrice" @change="applyPrice" />
                </li>

                <li>
                  <label for="maxPrice">Maximum Price:</label>
                  R<span id="maxVal">{{ maxPrice }}</span>
                  <br />
                  <input id="maxPrice" type="range" min="0" max="15000" step="5" v-model.number="maxPrice" @change="applyPrice" />
                </li>

              </ul>

            </div>

          </li>

          <br />

          <li>
            <button @click="resetFilters" class="filter-toggle">Clear Filters</button>
          </li>

        </ul>

      </div>

    </div>

  </aside>

</template>

<script>
export default {
  props: {
    category: { type: String, required: true }
  },

  data() {
    return {
      selectedGender: null,
      selectedStyle: null,
      minPrice: 100,
      maxPrice: 9000
    };
  },

  mounted() {
    this.$store.dispatch('loadCategoryProducts', this.category.toLowerCase());

  },

  methods: {
    applyGender() {
      this.$store.commit('setFilter', { key: 'type', value: this.selectedGender });

    },

    applyStyle() {
      this.$store.commit('setFilter', { key: 'style', value: this.selectedStyle });

    },

    applyPrice() {
      if (this.minPrice >= this.maxPrice) {
        this.minPrice = this.maxPrice - 5;
      }

      this.$store.commit('setFilter', { key: 'minPrice', value: this.minPrice });
      this.$store.commit('setFilter', { key: 'maxPrice', value: this.maxPrice });

    },

    resetFilters() {
      this.selectedGender = null;
      this.selectedStyle = null;
      this.minPrice = 100;
      this.maxPrice = 9000;
      this.$store.commit('resetFilters');
      this.$store.dispatch('loadCategoryProducts', this.category.toLowerCase());

    }

  }

};

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    font-family: FontInter;
}

/* --------------------------------Filter Bar CSS Styling:-------------------------------------- */

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

.filter-btn-container {
  padding: 0.5rem;
  background: #f8f8f8;
  text-align: center;
  display: none;
}

.filter-toggle {
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(to right, #3315dec4, rgb(54, 142, 237)); 
  /*   background: linear-gradient(100deg, #000000, #3b3b3c, #f9750f);*/
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  width: 100px;
  display: inline-flex;
  box-shadow:
        /* right shadow */
        6px 0px 10px -1px rgba(25, 96, 250, 0.414),
        /* left shadow*/ 
        -4px 0px 3.5px -2px rgba(152, 30, 246, 0.414),
        /* top shadow */
        0px -4px 3.5px -2px rgba(152, 30, 246, 0.414),
        /* bottom shadow */
        0px 6px 8px -1px rgba(25, 96, 250, 0.414);
        transition: transform 0.3s ease;
        
  
}

.filter-toggle:hover{
  transform: translateY(-5px); 
}

.filter-toggle img {
  width: 20px;
  height: 20px;
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


.PriceRangeFilter input {
    -webkit-appearance: none;
    appearance: none;
    background-color: linear-gradient(to right, #3315dec4, rgb(54, 142, 237));
      /* background: linear-gradient(100deg, #000000, #3b3b3c, #f9750f); */
}

.PriceRangeFilter input::-webkit-slider-runnable-track {
    background: linear-gradient(to right, #3315dec4, rgb(54, 142, 237));
      /* background: linear-gradient(100deg, #000000, #3b3b3c, #f9750f); */
    border-radius: 50px;
    height: 6px;
    /* box-shadow:
        /* right shadow *
        6px 0px 10px -1px rgba(250, 141, 25, 0.738),
        /* left shadow *
        -4px 0px 3.5px -2px rgba(22, 22, 22, 0.738),
        /* top shadow *
        0px -4px 3.5px -2px rgba(22, 22, 22, 0.738),
        /* bottom shadow *
        0px 6px 8px -1px rgba(250, 141, 25,0.738)  ; */
    box-shadow:
        /* right shadow */
        6px 0px 10px -1px rgba(25, 96, 250, 0.414),
        /* left shadow*/ 
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
    /* background: linear-gradient(100deg, #000000, #3b3b3c, #f9750f); */
    border: solid rgb(0, 0, 0) 2.5px;
    border-radius: 50px;
    cursor: pointer;
    margin-top: -4px;
    transition: background 0.3s;


}

/* --------------------------------------------------------------------------------------------- */
</style>