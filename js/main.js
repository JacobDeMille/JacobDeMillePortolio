const links = [{
    label: "Week1 notes",
    url: "W01/#"
}];

const list = document.querySelector("ol");

for (const item of links) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', item.url);
    a.textContent = item.label;
    li.appendChild(a);

    list.appendChild(li);
}

// I like the way this function works but I am going to be working on this and making work better
// with what I am doing as we continue on in the course

// function createOL(array) {
//     // Create list element
//     var list = document.getElementById("list");

//     for (var i = 0; i < array.length; i++) {
//         // Create list item
//         var li = document.createElement("li");
//         // Set the Contents
//         li.appendChild(document.createTextNode(array[i]));
//         // Add to the list
//         list.appendChild(li);
//     }

//     return list;
// }

// document.getElementById('list').appendChild(createOL(links));

// createOL(links);