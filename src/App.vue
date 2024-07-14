<!-- src/App.vue -->
<template>
  <div class="container-fluid" id="app">
    <nav class="navbar navbar-expand-lg" style="background-color: orange; border-radius: 30px;">
      <div class="container">
        <router-link to="/"><img src="/assets/logo.png" alt="" height="60" width="150" style="border-radius: 30px;"></router-link>
        &nbsp;&nbsp;&nbsp;
        <router-link class="navbar-brand text-white" to="/"><b>Daraz.com</b></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/products">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/cart">Cart ({{ cartItemCount }})</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/order-history">Order History</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['cart']),
    cartItemCount() {
      return this.cart.reduce((total, item) => total + item.quantity, 0)
    }
  }
}
</script>
