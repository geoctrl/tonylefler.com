import VueRouter from 'vue-router';

import { HomePage } from './home/home.component';

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '*', redirect: '/'}
];

export const router = new VueRouter({
  mode: 'history',
  routes
});