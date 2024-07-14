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
