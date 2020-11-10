import Vue from "vue";
import App from "./App.vue";
import router from './router'
Vue.config.productionTip = false;
Vue.config.productionTip = false;

// main.js
 
import store from "./index.js";
 

 
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
