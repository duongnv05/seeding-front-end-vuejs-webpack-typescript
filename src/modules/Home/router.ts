import routes from './routes'

export default [
  { path: routes.home, component: () => import('./components/Home.vue') }
]