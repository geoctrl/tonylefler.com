import Vue from 'vue';
import VueRouter from 'vue-router';

import './styles/main.scss';
import { router } from './pages/router';
import './components/background';

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  template:
`<div>
    <tl-background></tl-background>
    <router-view></router-view>
</div>`
});