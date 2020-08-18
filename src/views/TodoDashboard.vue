<template>
  <div class="hello">
    <div class="filter-by-name">
      <label for="searchInput">Search title:</label>
      <input type="text" v-model="searchText" placeholder="Search title.." id="searchInput"/>
    </div>
    <div class="sort-by-date">
      <button @click="sortByDateUp = !sortByDateUp">sort by Date</button>
    </div>
    <ul>
      <todo-list
        v-for="todoList in sortedItems"
        :key="todoList.id"
        :todoList="todoList"
      >
      </todo-list>
    </ul>
    <div>
          <input type="text" v-model="newTodoTitle">
        <button type="button" @click="addTodoList(newTodoTitle)">Add TODO LIST</button>
      <button
        class="button"
        @click="uuid = $uuid.v4()"
      >GEnerate {{uuid}}</button>
      <h3>{{v1}}</h3>
    </div>
  </div>
</template>

<script>
import { uuid as $uuid } from 'vue-uuid'
import { mapGetters, mapActions } from 'vuex'
import TodoList from '../components/TodoList'
export default {
  name: 'AllTodoLists',
  components: { TodoList },
  data: function () {
    return {
      newTodoTitle: '',
      searchText: '',
      sortByDateUp: true,
      v1: $uuid.v1(),
      uuid: 'null'
    }
  },
  computed: {
    ...mapGetters([
      'ALLTODOS'
    ]),
    filteredTODOList () {
      return this.ALLTODOS.filter(doctor => doctor.title.toLowerCase().includes(this.searchText.toLowerCase()))
    },
    sortedItems: function () {
      return [...this.filteredTODOList].sort((a, b) => {
        return this.sortByDateUp
          ? (a.createdAt) - (b.createdAt)
          : (b.createdAt) - (a.createdAt)
      })
    }
  },
  methods: {
    ...mapActions([
      'addTodoList'
    ]),
    ...mapActions([
      'removeTodoList'
    ])
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
