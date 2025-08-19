import { createStore } from 'vuex';
import axios from 'axios';

const API = 'http://localhost:3000';

const store = createStore({
  state: {
    user: null,
    products: null,
    filters: {
      category: null,
      maxPrice: null,
    },
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setProducts(state, products) {
      state.products = products;
    },
  },

  actions: {
    // ---------- AUTH ----------
    async register({ commit }, userData) {
      const res = await axios.post(`${API}/api/auth/register`, userData);
      return res.data;
    },
    async login({ commit }, credentials) {
      const res = await axios.post(`${API}/api/auth/login`, credentials);
      commit('setUser', res.data.user);
      return res.data;
    },

    // ---------- BASE LOADERS ----------
    async getProductsTops({ commit }) {
      const { data } = await axios.get(`${API}/products/load/tops`);
      commit('setProducts', data.prods);
    },
    async getProductsBottoms({ commit }) {
      const { data } = await axios.get(`${API}/products/load/bottoms`);
      commit('setProducts', data.prods);
    },
    async getProductsSneakers({ commit }) {
      const { data } = await axios.get(`${API}/products/load/sneakers`);
      commit('setProducts', data.prods);
    },
    async getProductsAccessories({ commit }) {
      const { data } = await axios.get(`${API}/products/load/accessories`);
      commit('setProducts', data.prods);
    },
    async getProductsFeatured({ commit }) {
      const { data } = await axios.get(`${API}/products/load/featured`);
      commit('setProducts', data.prods);
    },

    // ---------- SERVER-SIDE FILTERS (TOPS) ----------
    async getTopsByType({ commit }, type) {
      const { data } = await axios.get(`${API}/products/load/tops/type/${type}`);
      commit('setProducts', data.prods);
    },
    async getTopsByStyle({ commit }, style) {
      const { data } = await axios.get(`${API}/products/load/tops/style/${style}`);
      commit('setProducts', data.prods);
    },
    async getTopsByPrice({ commit }, { min, max }) {
      const params = new URLSearchParams();
      if (min != null) params.set('min', min);
      if (max != null) params.set('max', max);
      const { data } = await axios.get(`${API}/products/load/tops/price?${params.toString()}`);
      commit('setProducts', data.prods);
    },

    // ---------- SERVER-SIDE FILTERS (BOTTOMS) ----------
    async getBottomsByType({ commit }, type) {
      const { data } = await axios.get(`${API}/products/load/bottoms/type/${type}`);
      commit('setProducts', data.prods);
    },
    async getBottomsByStyle({ commit }, style) {
      const { data } = await axios.get(`${API}/products/load/bottoms/style/${style}`);
      commit('setProducts', data.prods);
    },
    async getBottomsByPrice({ commit }, { min, max }) {
      const params = new URLSearchParams();
      if (min != null) params.set('min', min);
      if (max != null) params.set('max', max);
      const { data } = await axios.get(`${API}/products/load/bottoms/price?${params.toString()}`);
      commit('setProducts', data.prods);
    },
  },

  getters: {
    isLoggedIn: (state) => !!state.user,
  },
});

export default store;
