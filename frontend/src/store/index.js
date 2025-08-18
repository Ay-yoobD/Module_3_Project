import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    user: null,
    products: null,
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setProds(state, payload) {
      state.products = payload
    },

  },

  actions: {
    async register({ commit }, userData) {
      const res = await axios.post('http://localhost:3000/api/auth/register', userData);
      return res.data;
    },
    async login({ commit }, credentials) {
      const res = await axios.post('http://localhost:3000/api/auth/login', credentials);
      commit('setUser', res.data.user);
      return res.data;
    },

    async getProductsTops({ commit }) {
      try {
        let data = await axios.get('http://localhost:3000/products/load/tops')
        console.log(data.data.prods)

        commit('setProds', data.data.prods)

      } catch (error) {
        console.error('Failed to fetch products:', error)
        alert('Error loading products. Please try again later.')

      }

    },

    async getProductsBottoms({ commit }) {
      try {
        let data = await axios.get('http://localhost:3000/products/load/bottoms')
        console.log(data.data.prods)

        commit('setProds', data.data.prods)

      } catch (error) {
        console.error('Failed to fetch products:', error)
        alert('Error loading products. Please try again later.')

      }

    },

    async getProductsSneakers({ commit }) {
      try {
        let data = await axios.get('http://localhost:3000/products/load/sneakers')
        console.log(data.data.prods)

        commit('setProds', data.data.prods)

      } catch (error) {
        console.error('Failed to fetch products:', error)
        alert('Error loading products. Please try again later.')

      }

    },

    async getProductsAccessories({ commit }) {
      try {
        let data = await axios.get('http://localhost:3000/products/load/accessories')
        console.log(data.data.prods)

        commit('setProds', data.data.prods)

      } catch (error) {
        console.error('Failed to fetch products:', error)
        alert('Error loading products. Please try again later.')

      }

    },

    async getProductsFeatured({ commit }) {
      try {
        let data = await axios.get('http://localhost:3000/products/load/featured')
        console.log(data.data.prods)

        commit('setProds', data.data.prods)

      } catch (error) {
        console.error('Failed to fetch products:', error)
        alert('Error loading products. Please try again later.')

      } 

    },

  },

  getters: {
    isLoggedIn: state => !!state.user
  }
});

export default store;
