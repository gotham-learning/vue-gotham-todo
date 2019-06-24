export class ToDoItem {
  name: string = ''
  isDone: boolean

  constructor(name: string) {
    this.name = name
    this.isDone = false
  }
}
