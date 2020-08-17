<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{todoList.id}}</div>
    <div>{{todoList.title}}</div>
    <ul>
      <li v-for="TodoItem in todoList.todos" :key="TodoItem.id">
        {{TodoItem.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
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
