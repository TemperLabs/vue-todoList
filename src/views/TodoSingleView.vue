<template>
  <div class="todoList">
    <h1>{{todoList.title}}</h1>
    <label>
      <select v-model="options">
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </label>
    <ul>
      <todo-item
        v-for="item in filteredTODOS"
        :key="item.id"
        :todoItem="item"
        :todoListID="todoList.id"
      >
      </todo-item>
    </ul>
    <label>
      <input type="text" v-model="newTodoTitle">
    </label>
    <button type="button" @click="updateTodoTitle({newTodoTitle, LIST_ID:todoList.id})">Add TODO ITEM</button>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem'
import { mapGetters } from 'vuex'

export default {
  name: 'TodoList',
  components: { TodoItem },
  data: function () {
    return {
      newTodoTitle: '',
      options: 'all',
      list: null,
      todoList: ''
    }
  },
  props: {
    todoListProp: {
      type: Object
    }
  },
  methods: {
    updateTodoTitle: function (payload) {
      this.$store.dispatch('addTodoItem', payload)
      this.newTodoTitle = ''
    }
  },
  computed: {
    filteredTODOS: function () {
      let resultData = this.todoList.todos
      if (this.options === 'completed') {
        resultData = resultData.filter(item => item.completed === true)
      }
      if (this.options === 'active') {
        resultData = resultData.filter(item => item.completed === false)
      }
      return resultData
    },
    ...mapGetters([
      'ALLTODOS'
    ])
  },
  created () {
    if (!this.todoListProp) {
      const list = this.ALLTODOS.find(list => list.id === this.$route.params.id)
      this.todoList = list
    } else {
      this.todoList = this.todoListProp
    }
  }
}
</script>

<style>
  .todoList {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #e6fff5;
    max-width: 560px;
    padding: 20px 10px;
    margin: 0 auto;
    border-radius: 10px;
    border: 1px solid #000000;
  }
</style>
