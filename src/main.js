import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

window.Vue = Vue

Vue.use(VueResource)

window.bus = new Vue();

new Vue({
    el: '#app',
    render: h => h(App)
})