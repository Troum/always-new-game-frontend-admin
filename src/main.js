import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify';
import '@/bootstrap/plugins.bootstrap';
import '@/bootstrap/components.bootstrap';
import '@/bootstrap/filters.bootstrap';
import '@/vee-validate';
import '@/scss/main.scss';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')