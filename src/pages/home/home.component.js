import Vue from 'vue';

import { TitleHeaderComponent } from './components/title-header.component';

export const HomePage = Vue.component('homePage', {
  template:
`<div>
    <title-header></title-header>
    
    <p class="text-center">Site is under Construction - Come back soon.</p>
</div>`
});