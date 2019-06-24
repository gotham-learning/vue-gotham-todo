<template>
  <div class="section is-vcentered is-hcentered">
    <div class="new-todo-container">
      <form v-on:submit.prevent="addItem">
        <input v-model="newTodo" type="text" class="input">
        <button type="submit" data-test="addButton" class="button is-primary">Add</button>
      </form>
    </div>
    <div class="todo-list-container">
      <ul>
        <li v-for="(item, index) in todoList" :key="index">
          <input type="checkbox">
          <span class="item-text">{{ item }}</span>
          <button class="button">Delete</button>
        </li>
      </ul>
    </div>
    <div class="filter-container">
      <button type="button" class="button is-success is-rounded">Show All</button>
      <button type="button" class="button is-info is-rounded">All Done</button>
      <button type="button" class="button is-info is-rounded">All Un-Done</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator'

export default Vue.extend({
  data() {
    return {
      todoList: ['item 1', 'item 2', 'item 3'],
      newTodo: ''
    }
  },
  computed: {},
  methods: {
    addItem() {
      this.todoList.push(this.newTodo)
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
