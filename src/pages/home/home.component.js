import Vue from 'vue';
import { Scene, PerspectiveCamera, WebGLRenderer, LineBasicMaterial, Vector3, Geometry, Line, FogExp2, Euler } from 'three';

import '../../components/hero';
const colors = ['#E0D4BC', '#05C4B4', '#FF9D00', '#AF5CC6', '#45D2EF', '#CC3F3F'];

export const HomePage = Vue.component('homePage', {
  template:
      `<div class="home-page">
    <hero></hero>
    <!--<p class="text-center">Site is under Construction - Come back soon.</p>-->
</div>`
});