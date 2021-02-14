export default class ToDoItem {
  constructor() {
    this._id = null;
    this._item = null;
    this._completed = false;
  }

  getId() {
    return this._id;
  }

  setId(id) {
    this._id = id;
  }

  getItem() {
    return this._item;
  }

  setItem(item) {
    this._item = item;
  }

  getStatus() {
    return this._completed;
  }

  setStatus(status) {
    this._completed = status;
  }
}




