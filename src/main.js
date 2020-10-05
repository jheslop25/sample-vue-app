import Vue from 'vue'
import App from './App.vue'

const axios = require('axios').default;

Vue.use(axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
