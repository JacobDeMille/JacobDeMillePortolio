export default class CompletedList {
  constructor() {
    this._completeList = [];
  }

  getList() {
    return this._completeList;
  }

  clearList() {
    this._completeList = [];
  }

  addItem(itemObj) {
    this._completeList.push(itemObj);
    console.log(this._completeList);
  }
}