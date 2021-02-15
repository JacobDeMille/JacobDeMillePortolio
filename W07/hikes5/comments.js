export default class Comments {
  constructor() {
    this._comment = [{key:"key", value:"value"}];
    this._hike = String;
    this._date = new Date();
    this._conent = String;
  }

  getAllComments() {
    return this._commentArray;
  }

  renderCommentList(list) {
    const list = toDoList.getList();
    list.forEach(item => {
      const div = document.createElement("div");
      const name = document.createElement("h4");
      name.innerHTML = item.hike;
      const date = document.createElement("h5");
      date.innerHTML = item.newDate;
      const comment = document.createElement("p");
      comment.innerHTML = item.comment;
      div.appendChild(name);
      div.appendChild(date);
      div.appendChild(comment);
    });
    
    
  }

  filterCommentsByName(hike_name) {
    const hikeArray = [];
    const list = this.getAllComments();
    list.forEach(function(comment) {
      if (hike_name == comment._hike) {
        hikeArray.push(comment)
      }
    });
    return hikeArray;
  }

  addComment(name, comment) {
    this._hike = name;
    this._conent = comment;
    this.date = Date.now();
    this._comment.push({
      hike: this._hike,
      newDate: this.date,
      comment: this._conent
    })
  }

}