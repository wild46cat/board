// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store/store'
import axios from 'axios'
import resource from '../static/resource'

Vue.config.productionTip = false;
axios.defaults.headers.post['Content-Type'] = 'application/www-form-urlencoded';
axios.defaults.baseURL = resource.BASE_URL;
Vue.prototype.$ajax = axios;


Vue.use(Vuex);
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});



