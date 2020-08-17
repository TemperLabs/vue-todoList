<template>
  <div class="hello">
    <input type="text" value="msg" placeholder="введите текст">
    <input type="text" value="msg2" placeholder="введите текст">
    <ul>
      <todo-list
        v-for="todoList in AllTodoLists"
        :key="todoList.id"
        :todoList="todoList"
      >
      </todo-list>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TodoList from './TodoList'
export default {
  name: 'AllTodoLists',
  components: { TodoList },
  data: function () {
    return {
      msg: String,
      msg2: String
    }
  },
  computed: {
    ...mapState([
      'AllTodoLists'
    ])
  },
  mounted () {
    console.log(this.AllTodosList)
    console.log(typeof this.AllTodosList)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
