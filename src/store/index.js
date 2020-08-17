import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    AllTodoLists: [
      {
        id: 1,
        title: 'yo',
        completed: false,
        todos: [{
          id: 1,
          title: 'yo',
          completed: false
        }]
      },
      {
        id: 2,
        title: 'yoyoyoyo',
        completed: false,
        todos: [{
          id: 1,
          title: '2424242фыы',
          completed: false
        },
        {
          id: 2,
          title: 'фывфывыфв',
          completed: false
        }]
      },
      {
        id: 15,
        title: 'Ы',
        completed: false,
        todos: [{
          id: 1,
          title: 'ження лох',
          completed: false
        },
        {
          id: 1,
          title: 'живе беларусь',
          completed: false
        }]
      }
    ]
  },
  mutations: {
  },
  actions: {
    // getTodo({commit}, todo) {
    //   commit(‘GET_TODO’, todo)
    // },
    // addTodo({commit}){
    //   commit(‘ADD_TODO’)
    // },
    // editTodo({commit}, todo){
    //   commit(‘EDIT_TODO’, todo)
    // },
    // removeTodo({commit}, todo){
    //   commit(‘REMOVE_TODO’, todo)
    // },
    // completeTodo({commit}, todo){
    //   commit(‘COMPLETE_TODO’, todo)
    // },
    // clearTodo({commit}){
    //   commit('CLEAR_TODO')
  },
  modules: {
  }
})
