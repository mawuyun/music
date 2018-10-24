// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import FastClick from 'fastclick';
import { Group } from 'vux';
import i18n from './language';
import { Loadmore } from 'mint-ui';
import http from './http';
import commonComponent from './components';

import 'common/less/index.less';

FastClick.attach(document.body);

Vue.config.productionTip = false;
Vue.component(Loadmore.name, Loadmore);
Vue.component('group', Group);
Vue.use(http);
Vue.use(commonComponent);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
});
