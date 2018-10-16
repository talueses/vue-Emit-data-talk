import Vue from 'vue';
import Router from 'vue-router';
// @ is an alias to /src
import Home from '@/views/Home/index.vue';
import Talk from '@/views/Talk/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/talk',
      name: 'talk',
      component: Talk,
    },
  ],
});
