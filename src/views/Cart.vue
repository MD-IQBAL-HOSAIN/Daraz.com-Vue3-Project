<!-- src/views/Cart.vue -->
<template>
  <div class="container cart">
    <div class="row">
      <div class="col-md-8">
        <h2 class="text-center">Your Cart</h2>
        <div class="table-responsive">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="cart.length === 0">
                <td colspan="4" class="text-center">Your cart is empty</td>
              </tr>
              <tr v-else v-for="item in cart" :key="item.id">
                <td>
                  <img :src="item.image" class="img-fluid rounded-start" :alt="item.title" style="max-width: 100px;">
                  {{ item.title }}
                </td>
                <td>${{ item.price }}</td>
                <td>
                  <button @click="decreaseQuantity(item.id)" class="btn btn-primary btn-sm" :disabled="item.quantity === 1">-</button>
                  {{ item.quantity }}
                  <button @click="increaseQuantity(item.id)" class="btn btn-primary btn-sm">+</button>
                </td>
                <td>
                  <button @click="removeFromCart(item.id)" class="btn btn-danger btn-sm">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="text-end">
          <h4 class="mt-3">Total: ${{ cartTotal }}</h4>
        </div>
      </div>
      <div class="col-md-4">
        <h2 class="text-center">Place Order</h2>
        <div class="alert alert-success mb-3" role="alert" v-if="orderPlaced">
          Order placed successfully!
        </div>
        <form @submit.prevent="submitOrder">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" v-model="order.name" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="order.email" required>
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Phone No.</label>
            <input type="number" class="form-control" id="phone" v-model="order.phone" required>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">Address</label>
            <textarea class="form-control" id="address" v-model="order.address" required></textarea>
          </div>
          <div class="mb-3">
            <label for="payment" class="form-label">Payment</label>
            <select class="form-select" id="payment" v-model="order.payment" required>
              <option value="bkash">Bkash</option>
              <option value="nagad">Nagad</option>
              <option value="rocket">Rocket</option>
              <option value="paypal">Paypal</option>
              <option value="debit_card">Debit Card</option>
              <option value="credit_card">Credit Card</option>
            </select>
          </div>
          <button type="submit" class="btn btn-success w-100" :disabled="cart.length === 0">Place Order</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: '',
  data() {
    return {
      order: {
        name: '',
        email: '',
        phone: '',
        address: '',
        payment: ''
      },
      orderPlaced: false
    }
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartTotal'])
  },
  methods: {
    ...mapActions(['removeFromCart', 'clearCart', 'decreaseQuantity', 'increaseQuantity', 'placeOrder']),
    submitOrder() {
      this.placeOrder(this.order)
      .then(() => {
        this.orderPlaced = true
        setTimeout(() => {
          this.orderPlaced = false
        }, 5000)
      })
      this.order = { name: '', email: '', phone: '', address: '',payment: '' }
    },
    decreaseQuantity(productId) {
      const item = this.cart.find(item => item.id === productId)
      if (item && item.quantity > 1) {
        item.quantity--
      }
    },
    increaseQuantity(productId) {
      const item = this.cart.find(item => item.id === productId)
      if (item) {
        item.quantity++
      }
    }
  }
}
</script>


