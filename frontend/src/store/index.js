import { createStore } from 'vuex';
import axios from 'axios';

const API = 'http://localhost:3000';

const store = createStore({
  state: {
    user: null,
    allProducts: [], 
    
    filters: {
      category: null,
      type: null, 
      style: null, 
      minPrice: 0,
      maxPrice: Infinity

    }
    
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;

    },

    setAllProducts(state, products) {
      state.allProducts = products;

    },

    setFilter(state, { key, value }) {
      state.filters[key] = value;

    },

    resetFilters(state) {
      state.filters.type = null;
      state.filters.style = null;
      state.filters.minPrice = 0;
      state.filters.maxPrice = Infinity;

    }

  },

  actions: {
    // ----------------- Auth -----------------
    async register({ commit }, userData) {
      const res = await axios.post(`${API}/api/auth/register`, userData);

      return res.data;

    },

    async login({ commit }, credentials) {
      const res = await axios.post(`${API}/api/auth/login`, credentials);
      commit('setUser', res.data.user);
  
      return res.data;

    },

    // ----------------- Load category products once -----------------
    async loadCategoryProducts({ commit }, category) {
      const { data } = await axios.get(`${API}/products/load/${category}`);
      commit('setAllProducts', data.prods);
      commit('setFilter', { key: 'category', value: category });

    }

  },

  getters: {
    isLoggedIn: (state) => !!state.user,

    filteredProducts(state) {
      return state.allProducts.filter(p => {
        const okType = !state.filters.type || p.type === state.filters.type;

        const okStyle = !state.filters.style || p.style === state.filters.style;

        const okPrice =
          p.price >= (state.filters.minPrice ?? 0) &&
          p.price <= (state.filters.maxPrice ?? Infinity);

        return okType && okStyle && okPrice;

      });

    }

  }

});

export default store;
