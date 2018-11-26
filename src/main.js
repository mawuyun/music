// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import FastClick from 'fastclick';
import { Group, XImg } from 'vux';
import i18n from './language';
import store from './store';
import {Loadmore} from 'mint-ui';
import http from './http';
import commonComponent from './common/baseComponent';

import 'common/less/index.less';

FastClick.attach(document.body);

Vue.component(Loadmore.name, Loadmore);

Vue.component('group', Group);
Vue.component('x-img', XImg);
Vue.use(http);
Vue.use(commonComponent);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  components: { App },
  template: '<App/>'
});
