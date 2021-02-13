import ToDoList from "./ToDos.js";
import ToDoItem from "./ToDoItem.js";

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

const initApp = () => {
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

const buildListItem = (item) => {
  const div = document.createElement("div");
  div.className = "task";
  const check = document.createElement('input');
  check.type = "checkbox";
  check.id = item.getId();
  const btn = document.createElement("button");
  btn.classList.add("btn", "remove-task");
  // addClickListenerToCheckBox(check);
  const label = document.createElement("lable");
  label.htmlFor = item.getId();
  label.textContent = item.getItem();
  div.appendChild(check);
  div.appendChild(label);
  div.appendChild(btn);
  const container = document.getElementById("listItems");
  container.appendChild(div);
}


/* <div class="task">
    <input type="checkbox" name="mark-complete" id="1">
    <label for="1" id="task-text">Example Task</label>
    <button id="remove-task" class="btn">X</button>
</div>
<div class="task">
    <input type="checkbox" name="mark-complete" id="2">
    <label for="2" id="task-text">Example Task</label>
    <button id="remove-task" class="btn">X</button>
</div> */