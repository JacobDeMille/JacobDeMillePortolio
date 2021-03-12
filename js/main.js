const notes = [{
        label: "Week 01 Notes",
        url: "W01/"
    },
    {
        label: "Week 02 Notes",
        url: "W02/"
    },
    {
        label: "Week 03 Notes",
        url: "W03/"
    },
    {
        label: "Week 04 Notes",
        url: "W04/"
    },
    {
        label: "Week 05 Notes",
        url: "W05/"
    },
    {
        label: "Week 06 Notes",
        url: "W06/"
    },
    {
        label: "Week 07 Notes",
        url: "W07/"
    },
    {
        label: "Week 08 Notes",
        url: "W08/"
    },
    {
        label: "Week 09 Notes",
        url: "W09/"
    },    
    {
        label: "Week 10 Notes",
        url: "W10/"
    },    
];

const exercise = [{
        label: "Week 2 Team Activity",
        url: "W02/w02-team-activity.html"
    },
    {
        label: "Week 3 Team Actvity",
        url: "coding-exercises/javascript-30/array-cardio-day1"
    },
    {
        label: "Week 4 Team Activity",
        url: "W04/w04-team.html"
    },
    {
        label: "Quiz Ninja Project",
        url: "coding-exercises/quizninja/"
    },
    {
        label: "Local Storage Exercise",
        url: "coding-exercises/local-storage/"
    },
    {
        label: "Drum Kit Exercises from JavaScript30",
        url: "coding-exercises/javascript-30/javascript-drumkit/"
    },

    {
        label: "JavaScript Calculator using 'this'",
        url: "W03/calculator.html"
    },
    {
        label: "Dice Roller App",
        url: 'coding-exercises/dnd-dice-roller'
    },
    {
        label: "Mortgage Calculator Form",
        url: "coding-exercises/forms/index.html"
    },
    {
        label: "Week 5 Team Activity",
        url: "W05/hikes/"
    },
    {
        label: "ToDo List Application",
        url: "todo/"
    },
    {
        label: "Advanced CSS Style Guide Template",
        url: "coding-exercises/advanced-css/"
    },
    
];

const note = document.getElementById("notes");


for (const item of notes) {
    // Create list element
    const li = document.createElement('li');
    // Create list item
    const a = document.createElement('a');
    // Set the Contents
    a.setAttribute('href', item.url);
    a.textContent = item.label;
    // Add to the list
    li.appendChild(a);

    // Add item to the ol list
    note.appendChild(li);
}

const code = document.getElementById("code");

for (const item of exercise) {
    // Create list element
    const li = document.createElement('li');
    // Create list item
    const a = document.createElement('a');
    // Set the Contents
    a.setAttribute('href', item.url);
    a.textContent = item.label;
    // Add to the list
    li.appendChild(a);

    // Add item to the ol list
    code.appendChild(li);
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
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