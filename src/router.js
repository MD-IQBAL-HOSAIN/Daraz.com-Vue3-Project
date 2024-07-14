// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import Cart from './views/Cart.vue'
import OrderHistory from './views/OrderHistory.vue'
import OrderDetails from './views/OrderDetails.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/cart',name: 'Cart', component: Cart },
  { path: '/order-history', name: 'OrderHistory', component: OrderHistory },
  { path: '/order-details/:id', name: 'OrderDetails', component: OrderDetails }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
