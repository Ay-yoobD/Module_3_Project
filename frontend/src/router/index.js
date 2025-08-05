import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Shop from '../views/Shop.vue';
import Contact from '../views/Contact.vue';
import Women from '../views/ShopWomen.vue';
import Men from '../views/ShopMen.vue';
import Youth from '../views/ShopYouth.vue';
import Accessories from '../views/ShopAccessories.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/register', name: 'Register', component: Register },
  { path: '/login', name: 'Login', component: Login },
  { path: '/shop', name: 'Shop', component: Shop },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/women', name: 'Women', component: Women },
  { path: '/men', name: 'Men', component: Men },
  { path: '/youth', name: 'Youth', component: Youth },
  { path: '/accessories', name: 'accessories', component: Accessories }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
