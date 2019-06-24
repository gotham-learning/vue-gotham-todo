<template>
  <div class="section is-vcentered is-hcentered">
    <div class="new-todo-container">
      <form @submit.prevent="addTodoItem">
        <input v-model="newTodo" type="text" class="input" />
        <button type="submit" class="button is-primary" id="submit-button">
          Add
        </button>
      </form>
    </div>
    <div class="todo-list-container">
      <ul>
        <li v-for="(item, index) in todoList" :key="index">
          <input type="checkbox" />
          <span class="item-text">{{ item.name }}</span>
          <button class="button">Delete</button>
        </li>
      </ul>
    </div>
    <div class="filter-container">
      <button type="button" class="button is-success is-rounded">
        Show All
      </button>
      <button type="button" class="button is-info is-rounded">All Done</button>
      <button type="button" class="button is-info is-rounded">
        All Un-Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator'
import { ToDoItem } from '~/types'

export default Vue.extend({
  data() {
    return {
      todoList: [
        new ToDoItem('item 1'),
        new ToDoItem('item 2'),
        new ToDoItem('item 3')
      ],
      newTodo: ''
    }
  },
  computed: {},
  methods: {
    addTodoItem() {
      const todoItem = new ToDoItem(this.$data.newTodo)
      this.$data.todoList.push(todoItem)
      this.clearDataInput()
    },
    clearDataInput() {
      this.$data.newTodo = ''
    }
  }
})
</script>

<style scoped>
.new-todo-container .input {
  display: inline-block;
  width: 50%;
}

.new-todo-container .button {
  display: inline-block;
}

.todo-list-container {
  padding: 30px;
}

.item-text {
  display: inline-block;
  width: 600px;
}

.filter-container {
  width: 600px;
}

.filter-container .button {
}
</style>
