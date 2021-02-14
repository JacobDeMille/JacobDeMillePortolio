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
  const itemEntryForm = document.getElementById("add-task-form");
  itemEntryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    processSubmission();
  })

  // Procedural 
  // Load list object

  // refresh the page
  refreshPage();
};

const refreshPage = () => {
  // clearListDisplay();
  renderList();
  clearItemEntryField();
  setFocusOnItem();
};

const clearListDisplay = () => {
  const parentElement = document.getElementById("listItems");
  deleteContents(parentElement);
};

const deleteContents = (parentElement) => {
  let child = parentElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
};

const renderList = () => {
  const list = toDoList.getList();
  list.forEach(item => {
    buildListItem(item);
  });
};

const buildListItem = (item) => {
  const div = document.createElement("div");
  div.className = "task";
  const check = document.createElement('input');
  check.type = "checkbox";
  check.id = item.getId();
  const btn = document.createElement("button");
  btn.classList.add("btn", "remove-task");

  // Create element for SVG that acts as the remove button
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("icon", "icon-cross");
  svg.setAttribute('width', '30');
  svg.setAttribute('height', '30');
  svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
  svg.setAttribute("viewBox", "0 0 70 70")
  
  // Create path for SVG
  let use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#icon-cross');
  
  // Append path to SVG and SVG to button
  svg.appendChild(use);
  btn.appendChild(svg);

  addClickListenerToCheckBox(check);
  const label = document.createElement("lable");
  label.htmlFor = item.getId();
  label.textContent = item.getItem();
  div.appendChild(check);
  div.appendChild(label);
  div.appendChild(btn);
  const container = document.getElementById("listItems");
  container.appendChild(div);
};

const addClickListenerToCheckBox = (checkbox) => {
  checkbox.addEventListener('click', (event) => {
    toDoList.removeItem(checkbox.id);
    // Todo: remove from persistent data

    // setTimeOut(() => {
      // refreshPage();
    // }, 1000);
  })
};

const clearItemEntryField = () => {
  document.getElementById("new-task").value = "";
};

const setFocusOnItem = () => {
  document.getElementById("new-task").focus();
};

const processSubmission = () => {
  const newEntryText = getNewEntry();
  if (!newEntryText.length) return;
  const nextItemId = calcnNextItemId();
  const ToDoItem = createNewItem(nextItemId, newEntryText);
  toDoList.addItem(ToDoItem);
  // TODO: update persistant data
  refreshPage();
};

const getNewEntry = () => {
  return document.getElementById("new-task").value.trim();
}

const calcnNextItemId = () => {
  let nextItemId = 1;
  const list = toDoList.getList();
  if (list.length > 0) {
    nextItemId = list[list.length - 1].getId() + 1;
  }
  return nextItemId;
}

const createNewItem = (itemID, itemText) => {
  const toDo = new ToDoItem();
  toDo.setId(itemID);
  toDo.setItem(itemText);
  return toDo;
}