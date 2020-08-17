<template>
<div>
  <div>{{TodoListItem.title}}</div>
  <button @click="deleteTodoListItem(todo)">Delete TODO</button>
</div>
</template>

<script>

export default {
  name: 'TodoListItem',
  props: {
    TodoListItem: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
