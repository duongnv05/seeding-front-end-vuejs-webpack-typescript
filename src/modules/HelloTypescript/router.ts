import routes from './routes'

export default [
  { path: routes.helloTypeScript, component: () => import('./components/HelloTypescript.vue') }
] 