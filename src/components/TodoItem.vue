<template>
<li class="todo-item-li">
  <div>
    <button
      @click="toggleCompleteTodoItem({todoItem, todoListID})"
      :class="{ 'btn-toggle-completed' : todoItem.completed }"
      class="btn-toggle"
    ></button>
  </div>
  <div
    :class="{ 'completed' : todoItem.completed }"
  >
    <div class="field">
      <div v-if="!isEditing">
        <span class='field-text' @dblclick="enableEditing">{{todoItem.title}}</span>
      </div>
      <div v-if="isEditing">
        <input
          v-model="tempTitle"
          class="todo-item-input"
          ref="todoInput"
          @keyup.enter="saveEdit({todoItem:todoItem, todoListID, tempTitle})"
          @keyup.escape="disableEditing"
          v-click-outside="disableEditing"/>
        <button @click="disableEditing"> Cancel </button>
        <button @click="saveEdit({todoItem:todoItem, todoListID, tempTitle})"> Save </button>
      </div>
    </div>
  </div>
  <button class="remove-item" type="button" @click="removeTodoItem({item:todoItem, parentID:todoListID})"></button>
</li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoItem',
  data: function () {
    return {
      isEditing: false,
      tempTitle: null
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
    ]),
    ...mapActions([
      'toggleCompleteTodoItem'
    ]),
    saveEdit: function (payload) {
      this.disableEditing()
      this.$store.dispatch('saveTodoItem', payload)
    },
    enableEditing: function () {
      this.tempTitle = this.todoItem.title
      this.isEditing = true
      this.$nextTick(() => {
        this.$refs.todoInput.focus()
      })
    },
    disableEditing: function () {
      this.tempTitle = null
      this.isEditing = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .completed {
    pointer-events: none;
    position: relative;
    &:before {
      position: absolute;
      content: '';
      width: 100%;
      border: 1px solid #4e4e4e;
      top: 50%;
      left: 0;
    }
  }
  .todo-item-li {
    display: flex;
    align-items: center;
    margin: 10px 0;
    border-bottom: 1px solid #979797;
  }
  .btn-toggle {
    position: relative;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border: 1px solid #979797;
    background: #e6fff5;
    border-radius: 50%;
  }
  .btn-toggle-completed {
    &:before {
      content: '';
      position: absolute;
      left: -1px;
      bottom: 7px;
      width: 10px;
      height: 3px;
      background: #5dcc75;
      -webkit-transform: rotate(50deg);
      transform: rotate(50deg);
    }
    &:after {
      content: '';
      position: absolute;
      width: 16px;
      height: 3px;
      left: 4px;
      bottom: 7px;
      background: #5dcc75;
      -webkit-transform: rotate(-50deg);
      transform: rotate(-50deg);
    }
  }
  .remove-item {
    position: relative;
    background: none;
    width: 20px;
    height: 20px;
    opacity: 1;
    border: none;
  }
  .remove-item:hover {
    opacity: 1;
  }
  .remove-item:before, .remove-item:after {
    bottom: 0;
    position: absolute;
    left: 20px;
    content: ' ';
    height: 20px;
    width: 4px;
    background-color: #ce434b;
  }
  .remove-item:before {
    transform: rotate(45deg);
  }
  .remove-item:after {
    transform: rotate(-45deg);
  }

  .field {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
