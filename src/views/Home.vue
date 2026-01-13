<template>
  <div class="container-fluid" style="background-color:antiquewhite; border-radius: 10px">
    <h2 class="text-center text-primary">Welcome to Daraz.com</h2>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000"
      data-bs-wrap="true">
      <div class="carousel-inner" style="max-width: 100%;">
        <div class="carousel-item active">
          <img src="/assets/cc.webp" class="d-block" alt="Shopping Cart" style=" height: 500px; width: 100%;">
        </div>
        <div class="carousel-item">
          <img src="/assets/dd.webp" class="d-block" alt="Second Slide" style=" height: 500px; width: 100%;">
        </div>
        <div class="carousel-item">
          <img src="/assets/ee.png" class="d-block" alt="Third Slide" style=" height: 500px; width: 100%;">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>


    <div class="container-fluid">
  <h3 class="text-center text-primary my-4">Popular Products</h3>
  <div class="row">
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="/assets/bb.jpg" class="card-img-top" alt="Product Image">
        <div class="card-body text-center">
          <p class="card-text">Price: $110</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="/assets/p1.webp" class="card-img-top" alt="Product Image">
        <div class="card-body text-center">
          <p class="card-text">Price: $100</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="/assets/p3.jpg" class="card-img-top" alt="Product Image">
        <div class="card-body text-center">
          <p class="card-text">Price: $200</p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="/assets/p4.webp" class="card-img-top" alt="Product Image">
        <div class="card-body text-center">
          <p class="card-text">Price: $50</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="/assets/p5.webp" class="card-img-top" alt="Product Image">
        <div class="card-body text-center">
          <p class="card-text">Price: $190</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="/assets/p2.jpg" class="card-img-top" alt="Product Image">
        <div class="card-body text-center">
          <p class="card-text">Price: $150</p>
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
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      dummyProducts: [
        { id: 1, title: 'Product 1', price: 10, image: '/assets/aa.avif' },
        { id: 2, title: 'Product 2', price: 20, image: '/assets/aa.avif' },
        { id: 3, title: 'Product 3', price: 30, image: '/assets/aa.avif' }
      ]
    }
  },
  methods: {
    ...mapActions(['addToCart'])
  }
}
</script>

<style>
.home-page {
  padding-top: 50px;
}
</style>
