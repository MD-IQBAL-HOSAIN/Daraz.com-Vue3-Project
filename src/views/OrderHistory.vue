<!-- src/views/OrderHistory.vue -->
<template>
  <div class="order-history">
    <div class="container">
    <h2 class="text-center">Order History</h2>
    <hr>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Order ID</th>
          <th>Date</th>
          <th>Customer Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Payment</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.date">
          <td>{{ orders.indexOf(order) + 1 }}</td>
          <td>{{ order.id }}</td>
          <td>{{ order.date }}</td>
          <td>{{ order.name }}</td>
          <td>{{ order.phone }}</td>
          <td>{{ order.address }}</td>
          <td>{{ order.payment }}</td>
          <td>$ {{ order.total }}</td>
          <td>
            <router-link :to="{ name: 'OrderDetails', params: { id: order.id } }" class="btn btn-primary">Invioce</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <router-link :to="{ name: 'Cart' }" class="btn btn-primary">Back</router-link>
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
import { mapState } from 'vuex'

export default {
  name: 'OrderHistory',
  computed: {
    ...mapState(['orders']),
  },


}
</script>
