// import CompletedList from "./ToDoComplete.js"
// const completeList = new CompletedList();

export default class ToDoList {
  constructor() {
    this.list = [];
  }

  getList() {
    return this.list;
  }

  clearList() {
    this.list = [];
  }

  addItem(itemObj) {
    this.list.push(itemObj);
  }

  removeItem(id) {
    const list = this.list;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == id) {
        console.log(list)
        list.splice(i, 1);
        break;
      }
    }
  }
}