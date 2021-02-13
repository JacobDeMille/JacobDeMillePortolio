import ToDoList from "./ToDos";
import ToDoItem from "./ToDoItem";

// All of the code for the todo list application goes here

// todo lost data source: localStorage
// todo = { id : timestamp, content: string, completed: bool };
// toDoList = [toDo];

const toDoList = new ToDoList();

// Lauch app
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState == "complete") {
    initApp();
  }
});

const innitApp = () => {
  // Add Listeners

  // Procedural 
    // Load list object

    // refresh the page
    refreshPage();
};

const refreshPage = () => {
  clearListDisplay();
  // renderList();
  // clearItemEntryField)();
  // setFocusOnItem();
};

const clearListDisplay = () => {
  const parentElement = document.getElementById("listItems");
  deleteContents(parentElement);
};

const deleteContents = (parentElement) => {
  let child = parentElement.lastElementChild;
  while(child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
};

const renderList = () => {
  const list = toDoList.getList();
  list.forEach(item => {
    buildListItem(item);
  })
};

// const buildListItem = (item) => {
//   const div 
// }