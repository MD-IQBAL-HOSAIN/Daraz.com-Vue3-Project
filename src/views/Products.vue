<!-- src/views/Products.vue -->
<template>
  <div class="container-fluid products mt-2">
    <!-- <h2 class="text-center mb-4">Our Products</h2> -->
    <div class="row">
      <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
        <div class="card">
          <img :src="product.image" class="card-img-top" :alt="product.title" style="height: 200px; object-fit: contain;">
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">Price: ${{ product.price }}</p>
            <button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
        </ul>
        <p class="text-center text-body-secondary">&copy; 2024 Company, Inc</p>
      </footer>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Products',
  computed: {
    ...mapState(['products'])
  },
  methods: {
    ...mapActions(['fetchProducts', 'addToCart'])
  },
  mounted() {
    this.fetchProducts()
  }
}
</script>