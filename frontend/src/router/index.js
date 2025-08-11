import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Shop from '../views/Shop.vue';
import Contact from '../views/Contact.vue';
import Tops from '../views/ShopTops.vue';
import Bottoms from '../views/ShopBottoms.vue';
import Sneakers from '../views/ShopSneakers.vue';
import Accessories from '../views/ShopAccessories.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/register', name: 'Register', component: Register },
  { path: '/login', name: 'Login', component: Login },
  { path: '/shop', name: 'Shop', component: Shop },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/tops', name: 'Tops', component: Tops },
  { path: '/bottoms', name: 'Bottoms', component: Bottoms },
  { path: '/sneakers', name: 'Sneakers', component: Sneakers },
  { path: '/accessories', name: 'accessories', component: Accessories }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
