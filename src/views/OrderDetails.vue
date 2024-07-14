<template>
    <div class="d-flex justify-content-center mt-2">
        <div v-if="order" class="card">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-md-4 order-md-first">
                        <h6 class="card-title">Invoice #{{ order.id }}</h6>
                        <span class="card-text">Date: {{ order.date }}</span><br>
                        <span class="card-text">Name: {{ order.name }}</span><br>
                        <span class="card-text">Phone: {{ order.phone }}</span><br>
                    </div>
                    <div class="col-md-8 order-md-last">
                        <img src="/assets/logo.png" alt="" height="60" width="200" style="border-radius: 30px;"><br>
                        <h3>Daraz.com</h3>
                        <small>shop address: Mirpur-10</small><br>
                        <small>shop contact: 0123456789</small><br>
                        <small>shop email: daraz@gmail.com</small>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-12">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Items</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in order.items" :key="index">
                                    <td>{{ item.title }}</td>
                                    <td>{{ item.quantity }}</td>
                                    <td>${{ item.price }}</td>
                                </tr>
                                <tr>
                                    <td colspan="2"><b>Total:</b></td>
                                    <td><b>${{ order.total }}</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="text-center">Invoice not found</p>
        </div>
    </div>
    <div class="row d-flex justify-content-center mt-2">
        <router-link :to="{ name: 'OrderHistory' }" class="col-md-2 btn btn-outline-primary">Back</router-link>
        <button class="col-md-2 btn btn-outline-success" @click="printOrder">Print</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'OrderDetails',
    params: ['id'],
    methods: {
        printOrder() {
            window.print();
        },
    },
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
