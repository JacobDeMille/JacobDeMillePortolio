// code from the local storage activity durring week 4

// function loadStory() {
//   let storyName = document.getElementById("name_input").value;
//   let storyHTML = localStorage.getItem(storyName);
//   document.getElementById("story_editor").value = storyHTML;
// }
// function saveStory() {
//   let storyName = document.getElementById("name_input").value;
//   let storyHTML = document.getElementById("story_editor").value;
//   localStorage.setItem(storyName, storyHTML);
// }
// function displayStory() {
//   console.log(story_editor)
//   let storyHTML = document.getElementById("story_editor").value;
//   document.getElementById("story_display").innerHTML = storyHTML;
// }

export default class localStorage {
  constructor() {
    this.storageList = [];
  }

  getList() {
    return this.storageList;
  }

  clearList() {
    this.storageList = [];
  }

  addItem(itemObj) {
    this.storageList.push(itemObj);
  }

  removeItem(id) {
    const list = this.storageList;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == id) {
        console.log(list)
        list.splice(i, 1);
        break;
      }
    }
  }
}