<template>
<li>
  <div>{{todoItem.title}}{{isEditing}}</div><button @click="isEditing = true">EDIT</button>
  <p>айди предка {{todoListID}}</p>
  <button type="button" @click="removeTodoItem({item:todoItem, parentID:todoListID})">Delete TODO ITEM</button>
</li>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'TodoItem',
  data: function () {
    return {
      isEditing: false
    }
  },
  props: {
    todoItem: {
      type: Object,
      require: true
    },
    todoListID: {
      require: true
    }
  },
  methods: {
    ...mapActions([
      'removeTodoItem'
    ])
  }
}
</script>

<style scoped>

</style>
