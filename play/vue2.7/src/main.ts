import Vue from 'vue';
import App from './App.vue';
// import Dui from '../../../packages/components';
// import '../../../packages/theme-chalk/src/index.css';
import Dui from 'dyq-ui';
import 'dyq-ui/index.css';
Vue.config.productionTip = false;

Vue.use(Dui);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
