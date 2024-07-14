// src/store.js
import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    cart: [],
    orders: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id)
      if (existingProduct) {
        existingProduct.quantity++
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(state, productId) {
      const index = state.cart.findIndex(item => item.id === productId)
      if (index !== -1) {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity--
        } else {
          state.cart.splice(index, 1)
        }
      }
    },
    clearCart(state) {
      state.cart = []
    },
    placeOrder(state, order) {
      state.orders.push(order)
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        commit('setProducts', response.data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    addToCart({ commit }, product) {
      commit('addToCart', product)
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId)
    },
    clearCart({ commit }) {
      commit('clearCart')
    },
    placeOrder({ commit, state }, orderDetails) {
      // console.log(orderDetails)
      const order = {
        id: new Date().getTime(),
        ...orderDetails,
        items: [...state.cart],
        total: state.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2),
        date: new Date().toLocaleString()
      }
      console.log(order)
      commit('placeOrder', order)
      commit('clearCart')
    }
  },
  getters: {
    cartTotal: state => {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    },
    orders: state => {
      return state.orders
    }
  }
})
