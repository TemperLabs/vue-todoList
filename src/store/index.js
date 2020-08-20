import Vue from 'vue'
import Vuex from 'vuex'
import { uuid as $uuid } from 'vue-uuid'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    AllTodoLists: [
      {
        id: 'dajsdhjkshdkj',
        title: 'yo',
        createdAt: 1597717925952,
        todos: [{
          id: 17,
          title: 'hello',
          completed: false
        }]
      },
      {
        id: 'dajssaakshdkj',
        title: 'yoyoyoyo',
        createdAt: 1597718063978,
        todos: [{
          id: $uuid.v1(),
          title: 'ytoiyu',
          completed: false
        },
        {
          id: $uuid.v1(),
          title: 'dasdsadsa',
          completed: true
        }]
      },
      {
        id: 'daajsppkshdkj',
        title: 'parent',
        createdAt: 1597728863491,
        todos: [{
          id: $uuid.v1(),
          title: 'title343243',
          completed: false
        },
        {
          id: $uuid.v1(),
          title: 'title2',
          completed: false
        }]
      }
    ]
  },
  getters: {
    ALLTODOS: state => {
      return state.AllTodoLists
    }
  },
  mutations: {
    REMOVE_TODO_LIST: (state, todoList) => {
      const index = state.AllTodoLists.findIndex(t => t.id === todoList.id)
      state.AllTodoLists.splice(index, 1)
    },
    REMOVE_TODO_ITEM: (state, payload) => {
      const List = state.AllTodoLists.find(l => l.id === payload.parentID).todos
      const index = List.findIndex(t => t.id === payload.item.id)
      List.splice(index, 1)
    },
    ADD_TODO_ITEM: (state, payload) => {
      const list = state.AllTodoLists.find(l => l.id === payload.LIST_ID).todos
      const newTodoItem = {
        id: $uuid.v1(),
        title: payload.newTodoTitle,
        completed: false
      }
      list.push(newTodoItem)
    },
    ADD_TODO_LIST: (state, newTodoTitle) => {
      const newTodo = {
        id: $uuid.v1(),
        title: newTodoTitle,
        createdAt: Date.now(),
        todos: []
      }
      state.AllTodoLists.push(newTodo)
    },
    SAVE_TODO_ITEM: (state, payload) => {
      const list = state.AllTodoLists.find(l => l.id === payload.todoListID).todos
      list.find(t => t.id === payload.todoItem.id).title = payload.tempTitle
    },
    TOGGLE_COMPLETE_TODO_ITEM: (state, payload) => {
      const list = state.AllTodoLists.find(l => l.id === payload.todoListID).todos
      const todo = list.find(t => t.id === payload.todoItem.id)
      todo.completed = !todo.completed
    }
  },
  actions: {
    addTodoList ({ commit }, newTodoTitle) {
      commit('ADD_TODO_LIST', newTodoTitle)
    },
    addTodoItem ({ commit }, newTodoTitle) {
      commit('ADD_TODO_ITEM', newTodoTitle)
    },
    removeTodoList ({ commit }, todoList) {
      commit('REMOVE_TODO_LIST', todoList)
    },
    removeTodoItem ({ commit }, payload) {
      commit('REMOVE_TODO_ITEM', payload)
    },
    completeTodo ({ commit }, todo) {
      commit('COMPLETE_TODO_ITEM', todo)
    },
    saveTodoItem ({ commit }, payload) {
      commit('SAVE_TODO_ITEM', payload)
    },
    toggleCompleteTodoItem ({ commit }, payload) {
      commit('TOGGLE_COMPLETE_TODO_ITEM', payload)
    }
  },
  modules: {
  }
})
