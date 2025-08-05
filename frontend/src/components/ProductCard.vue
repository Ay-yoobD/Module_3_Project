<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <div class="product-details">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">R{{ product.price }}</p>
      <router-link :to="`/product/${product.id}`" class="view-button">View</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.product-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.product-details {
  padding: 16px;
  text-align: center;
}

.product-name {
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: #333;
}

.product-price {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #555;
}

.view-button {
  padding: 8px 16px;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.view-button:hover {
  background-color: #333;
}
</style>
