<template>
<div class="todo-list-wrap">
  <router-link :to="{ name: 'TodoListView', params: { todoList, id: todoList.id }}" class="todo-list-link">
    {{todoList.title}}
  </router-link>
  <div class="todo-list-title">{{todoList.id}}</div>
  <div class="todo-list-content">
    <ul class="todolist-content-ul">
    <li v-for="TodoItem in todoList.todos" :key="TodoItem.id" class="todolist-content-li">
      <span>{{TodoItem.title}}</span>
    </li>
    </ul>
    <button type="button" @click="removeTodoList(todoList)">Delete TODOLIST</button>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoList',
  data: function () {
    return {
      search: ''
    }
  },
  props: {
    todoList: {
      type: Object,
      require: true
    }
  },
  methods: {
    ...mapActions([
      'removeTodoList'
    ])
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
.todo-list-link {
  background: firebrick;
  display: block;
  color: #88bbce;
  font-size: 18px;
  font-weight: bold;
}
  .todo-list-content {
    box-shadow: 0 0 5px #aba7b2;
    background: #b2b181;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .todolist-content-ul {
    padding: 0 12px;
  }
  .todolist-content-li {
    display: flex;
    align-items: center;
    margin: 10px 0;
    border-bottom: 1px solid #979797;
  }
</style>
