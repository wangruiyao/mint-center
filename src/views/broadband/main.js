import Vue from 'vue'
import Broadband from './Broadband'
import router from 'src/views/broadband/router'

import 'src/plugins'
import 'core/use'

// import style files
import 'assets'

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(Broadband)
}).$mount('#broadband')
