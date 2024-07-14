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