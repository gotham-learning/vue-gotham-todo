import { mount } from '@vue/test-utils'
import Index from '~/pages/index.vue'

describe('TodoApp', () => {
  const wrapper = mount(Index)

  describe('on-mounted', () => {
    it('creates component', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('has default todo list', () => {
      expect(wrapper.vm.$data.todoList).toEqual([
        'item 1',
        'item 2',
        'item 3'
      ])
    })

    it('has default newTodo as empty string', () => {
      expect(wrapper.vm.$data.newTodo).toEqual('')
    })
  })

  describe('todo list', () => {
    it('can display all todo items in todo list', () => {
      wrapper.setData({
        todoList: ['i1']
      })
      const wrappers = wrapper.findAll('.item-text').at(0).text()
      expect(wrappers).toBe('i1')
    })

    it('can add new todo to the todo todo list', () => {
      wrapper.setData({
        newTodo: 'test item'
      })
      wrapper.find('[data-test="addButton"]').trigger('submit')

      const result = wrapper.findAll('.item-text').at(1)
      expect(result.text()).toBe('test item')
    })

    xit('should clear new todo input once todo is added', () => { })
  })

  describe('todo item', () => {
    xit('can be marked as done', () => { })

    xit('can be deleted', () => { })
  })

  describe('filters', () => {
    xit('can filters only done items', () => { })

    xit('can filters only undone items', () => { })

    xit('can show all items', () => { })
  })
})
