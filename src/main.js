import Vue from 'vue'
import App from './App.vue'
import vuePagination from './lib/index.js' 

Vue.use(vuePagination)
new Vue({
  el: '#app',
  render: h => h(App)
})
