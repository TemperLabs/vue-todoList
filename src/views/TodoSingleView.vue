<template>
  <div class="todoList">
    <h1>title:{{todoList.title}}</h1>
    <h2>id:{{todoList.id}}</h2>
    <ul>
      <todo-item
        v-for="item in todoList.todos"
        :key="item.id"
        :todoItem="item"
        :todoListID="todoList.id"
      >
      </todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem'

export default {
  name: 'TodoList',
  components: { TodoItem },
  data: function () {
    return {
    }
  },
  props: {
    todoList: {
      type: Object
    }
  }
}
</script>

<style>
  .todoList {
    background: coral;
  }
</style>
