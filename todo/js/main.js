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
  clearListDisplay();
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
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute('width', '45');
  svg.setAttribute('height', '45');
  svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
  svg.classList.add("icon", "icon-cross");
  // Create path for SVG
  var svgPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  svgPath.setAttribute('d', "M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z");
  // Append path to SVG and SVG to button
  svg.appendChild(svgPath);
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