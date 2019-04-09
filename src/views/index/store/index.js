import Vue from 'vue'
import Vuex from 'vuex'

import user from './root/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  }
})
