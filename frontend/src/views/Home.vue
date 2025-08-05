<template>
    <div class="home">
        <!-- Navbar -->
        <header class="navbar">
            <div class="container nav-content">
                <div class="logo" @click="$router.push('/')">Fashion Hub</div>

                <nav class="nav-links">
                    <router-link to="/" exact>Home</router-link>
                    <router-link to="/about">About</router-link>
                    <router-link to="/shop">Shop</router-link>
                    <router-link to="/contact">Contact</router-link>
                </nav>

                <div class="auth-section">
                    <template v-if="!user">
                        <router-link to="/login">Login</router-link>
                        <router-link to="/register">Register</router-link>
                    </template>

                    <!-- welcome message after log in with the logout button -->
                    <!-- this below only displays after a user has logged in -->
                    <template v-else>
                        <span>Welcome, <b>{{ user.name }}!</b></span>
                        <button @click="logout">Logout</button>
                    </template>
                </div>
            </div>
        </header>

        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <h1>Discover Your Style</h1>
                <p>Shop the latest fashion trends now</p>
                <button @click="$router.push('/shop')">Shop Now</button>
            </div>
        </section>

        <!-- featured products -->
        <!-- must still add to the backend database then import it here -->
        <section class="featured-products">
            <h2 class="section-title">Featured Products</h2>
            <div class="product-grid">
                <ProductCard v-for="product in featuredProducts" :key="product.id" :product="product" />
            </div>
        </section>



        <!-- Promo Section -->
        <!-- what we offer -->
        <h2 class="section-title">What We Offer</h2>
        <section class="promos">
            <div class="promo-card">
                <img src="../assets/freed.png" alt="Free Delivery" />
                <h3>Free Delivery</h3>
                <p>On all orders over R500</p>
            </div>
            <div class="promo-card">
                <img src="../assets/24_7.jpg" alt="24/7 Support" />
                <h3>24/7 Support</h3>
                <p>Customer support anytime</p>
            </div>
            <div class="promo-card">
                <img src="../assets/easy_returns.png" alt="Easy Returns" />
                <h3>Easy Returns</h3>
                <p>30-day return policy</p>
            </div>
        </section>

        <!-- testimonials section -->

        <section class="testimonials">
            <div class="container">
                <h2>What Our Customers Say</h2>
                <div class="testimonial-grid">
                    <div class="testimonial-card" v-for="review in testimonials" :key="review.id">
                        <p>"{{ review.text }}"</p>
                        <h4>- {{ review.name }}</h4>
                    </div>
                </div>
            </div>
        </section>

        <!-- newsletter -->
        <section class="newsletter">
            <div class="container">
                <h3>Stay in the Loop</h3>
                <p>Subscribe to get exclusive offers and updates.</p>
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </section>

        <!-- footer -->
        <footer class="footer">
            <div class="container">
                <div class="footer-columns">
                    <div>
                        <h4>Fashion Hub</h4>
                        <p>Where style meets simplicity.</p>
                    </div>
                    <div>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/shop">Shop</router-link></li>
                            <li><router-link to="/contact">Contact</router-link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <p>Email: support@fashionhub.com</p>
                        <p>Phone: +27 123 456 7890</p>
                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import ProductCard from '../components/ProductCard.vue';



export default {
    components: {
        ProductCard
    },
    data() {
        return {
            featuredProducts: [
                {
                    id: 1,
                    title: 'Classic Denim Jacket',
                    image: '../assets/logo.png',
                    price: 899.99,
                },
                {
                    id: 2,
                    title: 'Streetwear Hoodie',
                    image: '../assets/logo.png',
                    price: 499.99,
                },
                {
                    id: 3,
                    title: 'Retro Sneakers',
                    image: '../assets/logo.png',
                    price: 1199.99,
                },
                // other product must still be added here , for now , but later it will be fetched from the backend sql database
            ]
        };
    },
    computed: {
        ...mapState(['user'])
    },
    methods: {
        ...mapMutations(['setUser']),
        logout() {
            this.setUser(null);
            this.$router.push('/');
        }
    }
};
</script>

<style scoped>
.container {
    max-width: 1200px;
    margin: auto;
    padding: 0 20px;
}

/* Navbar */
.navbar {
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    padding: 15px 0;
    position: sticky;
    top: 0;
    z-index: 999;
}

.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
}

/* Nav links */
.nav-links {
    display: flex;
    gap: 15px;
}

.nav-links a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    position: relative;
    padding-bottom: 4px;
    transition: color 0.3s;
}

.nav-links a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: #111;
    transition: width 0.3s ease;
}

.nav-links a:hover {
    color: #111;
}

.nav-links a:hover::after {
    width: 100%;
}

.nav-links a.router-link-exact-active {
    color: #42b983;
    font-weight: bold;
}

/* Auth section (login | register)*/
.auth-section {
    display: flex;
    align-items: center;

}

.auth-section a {
    margin-left: 10px;
    color: #444;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s;
}

.auth-section a:hover {
    color: #1d1d1d;
}

/* logout button */
.auth-section button {
    margin-left: 10px;
    padding: 6px 12px;
    background: #333;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
}

.auth-section button:hover {
    background: #111;
}

/* Hero */
.hero {
    background: url('../assets/hero.jpg') center/cover no-repeat;
    height: 90.6vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.hero-content {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 40px;
    border-radius: 12px;
    color: white;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 10px;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.hero-content button {
    padding: 12px 24px;
    font-size: 1rem;
    background: transparent;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
}

.hero-content button:hover {
    background: #ffffff;
    color: #111;
}

/* Product cards grid style*/
.featured-products {
    padding: 2rem 1rem;
    text-align: center;
}

.section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
}

.product-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* Promos - what we offer*/
.promos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    padding: 50px 20px;
    background-color: #f9f9f9;
    text-align: center;
}

.promo-card {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
}

.promo-card:hover {
    transform: translateY(-5px);
}

.promo-card img {
    width: 60px;
    margin-bottom: 15px;
}

.promo-card h3 {
    margin-bottom: 10px;
    font-size: 1.2rem;
}
</style>
