import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Window.axios=require('axios');
new Vue({
  render: h => h(App)
  
}).$mount('#app')
