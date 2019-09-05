import Vue from 'vue'
// import { Vue } from 'vue-property-decorator'
import {install as VueCookies} from 'vue-cookies'
// import VueCookies from 'vue-cookies-ts'

import App from './App.vue'

import router from './router'
import store from './store'

Vue.use(VueCookies)

export const createApp = () => {
  const appRoot = new Vue({
    router,
    store,
    created() {
      console.log(this)
    },
    render: h => h(App)
  })

  return { appRoot, router }
}