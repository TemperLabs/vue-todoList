import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AllTodos',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoDashboard.vue')
  },
  {
    name: 'TodoListView',
    path: '/TodoList/:id',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoSingleView.vue')
  },
  { path: '/TodoList/:id', component: () => import(/* webpackChunkName: "about" */ '../components/TodoList.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
