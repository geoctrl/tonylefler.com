import Vue from 'vue';
import VueRouter from 'vue-router';

import './styles/main.scss';
import { router } from './pages/router';

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  template:
`<div>
    <router-view></router-view>
</div>`
});