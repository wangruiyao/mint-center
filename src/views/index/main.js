import Vue from 'vue'
import App from './App.vue'
import router from 'src/views/index/router'
import store from 'src/views/index/store'

import 'src/plugins'
import 'core/use'

// import style files
import 'assets'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
