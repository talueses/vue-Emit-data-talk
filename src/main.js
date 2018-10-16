// Importing files, components, libs, etc...
//
// Absolute imports should come before relative imports
import router from '@/router';

// Importing vue...
import Vue from 'vue';
import App from './App.vue';
import store from './store';

// Importing styles
import './styles/index.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
