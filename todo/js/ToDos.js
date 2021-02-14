// import CompletedList from "./ToDoComplete.js"
// const completeList = new CompletedList();

export default class ToDoList {
  constructor() {
    this._list = [];
  }

  getList() {
    return this._list;
  }

  clearList() {
    this._list = [];
  }

  addItem(itemObj) {
    this._list.push(itemObj);
  }

  removeItemFromList(id) {
    const list = this._list;
    for (let i = 0; i < list.length; i++) {
      if (list[i]._id == id) {
        console.log(list)
        
        list.splice(i, 1);
        // completeList.addItem(list[j]);
        // updatePersistantDataCompleted(completeList.getList());
        break;
      }
    }
    // loadCompleteObject();
  }
}

// const loadCompleteObject = () => {
  // const storedCompleted = localStorage.getItem("myCompletedList");
    // if (typeof storedCompleted !== "string") return;
    // const parsedComplete = JSON.parse(storedCompleted);
    // parsedComplete.forEach(compObj => {
    //   const newCompleteItem = 
    // })
  // }


// const updatePersistantDataCompleted = (listArray) => {
//   localStorage.setItem("myCompletedList", JSON.stringify(listArray));
// }