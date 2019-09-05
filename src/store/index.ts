import Vue from 'vue'
import Vuex from 'vuex'

import { isProduction } from '../config'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: !{isProduction},
  modules: {}
})