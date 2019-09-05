import Vue from 'vue'
import Router from 'vue-router'

// import modules
import HomeRoutes from './modules/Home/router'
import HelloTypescriptRoutes from './modules/HelloTypescript/router';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...HomeRoutes,
    ...HelloTypescriptRoutes
  ]
})