import { mount } from '@vue/test-utils'
import Index from '~/pages/index.vue'
import { ToDoItem } from '~/types'

describe('TodoApp', () => {
  const wrapper = mount(Index, { attachToDocument: true })

  describe('on-mounted', () => {
    it('creates component', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('has default todo list', () => {
      expect(wrapper.vm.$data.todoList).toEqual([
        { name: 'item 1', isDone: false },
        { name: 'item 2', isDone: false },
        { name: 'item 3', isDone: false }
      ])
    })

    it('has default newTodo as empty string', () => {
      expect(wrapper.vm.$data.newTodo).toEqual('')
    })
  })

  describe('todo list', () => {
    it('can display all todo items in todo list', () => {})

    describe('can add new todo to the todo list', () => {
      it('submit new todo', async () => {
        //given
        wrapper.find('input').setValue('item 4')

        //when
        await wrapper.find('#submit-button').trigger('click')

        //then
        expect(wrapper.vm.$data.todoList).toEqual([
          new ToDoItem('item 1'),
          new ToDoItem('item 2'),
          new ToDoItem('item 3'),
          new ToDoItem('item 4')
        ])
      })
    })

    it('should clear new todo input once todo is added', () => {
      expect(wrapper.vm.$data.newTodo).toBe('')
    })
  })

  describe('todo item', () => {
    it('can be marked as done', () => {})

    xit('can be deleted', () => {})
  })

  describe('filters', () => {
    xit('can filters only done items', () => {})

    xit('can filters only undone items', () => {})

    xit('can show all items', () => {})
  })
})
