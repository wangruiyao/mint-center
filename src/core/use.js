import Vue from 'vue'
import VueStorage from 'vue-ls'
import config from '@/config/defaultSettings'
import fastClick from 'fastclick'
import _ from 'lodash'
import 'lib-flexible'

Vue.use(VueStorage, config.storageOptions)
Vue.prototype.$lodash = _
fastClick.attach(document.body)
