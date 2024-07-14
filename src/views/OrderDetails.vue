<template>
    <div class="order-details">
        <h2 class="text-center">Order Details</h2> <hr>
        <div>
        <router-link :to="{ name: 'OrderHistory' }" class="btn btn-primary">Back</router-link>
    </div>
        <div v-if="order" class="card mb-3">
            <div class="card-header">
                Order placed on {{ order.date }}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="(item, index) in order.items" :key="index">
                    Name: {{ item.title }} <br>
                    Quantity: {{ item.quantity }} <br>
                    Rate: $ {{ item.price }} <br> 
                    <!-- Total: ${{ (item.price * item.quantity).toFixed(2) }} -->
                </li>
                <li class="list-group-item">Total: ${{ order.total }}</li>
            </ul>
        </div>
        <div v-else>
            <p class="text-center">Order not found</p>
        </div>
    </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'OrderDetails',
    params: ['id'],
    computed: {
        ...mapState(['orders']),
        order() {
            if (!this.$route.params.id) {
                console.log('Order ID is not provided');
                return null;
            }
            const orderId = parseInt(this.$route.params.id);
            // console.log('Order ID:', orderId);
            const order = this.orders.find(orders => orders.id === orderId);
            // console.log('Order:', order);
            return order || null;
        },
    }
}
</script>
