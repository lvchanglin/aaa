import "babel-polyfill";
import Vue from 'vue';
import App from './App.vue';
import router from "./router";

//引入mint-ui 
import MintUi from "mint-ui";
import "mint-ui/lib/style.css";

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
