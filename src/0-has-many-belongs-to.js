const { getId } = require('./utils');

class ToDoItem {
  constructor(chores, priorityLevel, isDone, description, name) {
    this.id = getId();
    this.chores = chores;
    this.description = description;
    this.priorityLevel = priorityLevel;
    this.isDone = isDone;
    this.name = name;
  }
  list() {
    let name = this.name
    return name;
  }
}


class ToDoList {
  #currentList = [];
  #day = [];
  static #allLists = [];

  constructor(name, day) {
    this.id = getId();
    this.name = name;
    this.day = day;
    ToDoList.#allLists.push(this)


  }
  createItem(chores, priorityLevel, description) {
    const addItem = new ToDoItem(chores, priorityLevel, description)
    this.#currentList.push(addItem);
    return addItem
  }
  getItems() {
    return [...this.#currentList]
  }
  getCompletedCount() {
    const complete = this.#currentList.filter((task) => {
      if (task.isDone === true)
        done.push(task)
      return task.reduce((total, items) => {
        return total + items.isDone
      }, 0)
    })


  }
  setDay(weekday) {
    this.day = weekday
  }
  static list() {
    return [...ToDoList.#allLists]
  }


  static findBy(id) {
    return ToDoList.#allLists.find((chores) => chores.id === id)
  }

  // vv last curly vv
}

module.exports = {
  ToDoItem,
  ToDoList
};