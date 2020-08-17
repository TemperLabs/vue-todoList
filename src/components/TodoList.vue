<template>
<div class="todo-list-wrap">
  <div class="todo-list-title">{{todoList.title}}</div>
  <router-link :to="{ name: 'TodoList', params: { todoList, id: todoList.id }}">
    Todo List
  </router-link>
  <div class="todo-list-title">{{todoList.id}}</div>
  <div class="todo-list-content">
    <ul>
    <li v-for="TodoItem in todoList.todos" :key="TodoItem.id">
      {{TodoItem.title}}
    </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todoList: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>
  .todo-list-wrap {
    width: 180px;
    margin: 20px;
    display: inline-flex;
    flex-direction: column;
  }
.todo-list-title {
  background: firebrick;
  padding: 10px 0;
  box-shadow: 0 0 5px #aba7b2;
}
  .todo-list-content {
    box-shadow: 0 0 5px #aba7b2;
    background: #314bb2;
    height: 140px;
  }
</style>
