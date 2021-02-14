export default class ToDoList {
  constructor() {
    this.list = [];
  }

  getList() {
    return this.list;
  }

  // clearList() {
  //   this._list = [];
  // }

  addItem(itemObj) {
    this.list.push(itemObj);
  }

  removeItem(itemID) {
    const list = this.list;
    for (let i = 0; i > list.length; i++) {
      if (list[i]._id == id) {
        console.log(list);
        list.splice(i, 1);
        list[i]
        break;
      }
    }
  }
}