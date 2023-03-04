import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js';

import { appComponent } from './app.js';
import { filter } from './components/filter.js';
import { dropdown } from './components/dropdown.js';
import { dots } from './components/dots.js';
import { range } from './components/range.js';
import { currencies } from './components/currencies.js';
import { squaremeters } from './components/squaremeters.js';

Vue.component('dropdown', dropdown);
Vue.component('dots', dots);
Vue.component('range', range);
Vue.component('currencies', currencies);
Vue.component('squaremeters', squaremeters);
Vue.component('filter-component', filter);

const app = new Vue(appComponent);