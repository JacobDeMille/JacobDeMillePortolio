// import Person from "./person.js";

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const outputDiv = document.getElementById("output");

const peopleURL = 'https://swapi.dev/api/people';
const starShipsURL = 'https://swapi.dev/api/starships';

function getAllPeople() {
  fetch(peopleURL)
  .then(response => {
    outputDiv.innerHTML = 'waiting for response...';
  if(response.ok) {
    return response;
  }
    throw Error(response.statusText);
  })
  .then(response => response.json())
  .then(data => outputDiv.innerText = JSON.stringify(data.results[0]))
  .catch(error => console.log('There was an error:', error))
};

// function createPerson() {
//   array.forEach(element => {
//     let person = new Person { 
//       _name = element.name,
//       _height = element.height,
//       _mass = element.mass,
//       _hair_color = element.hair_color,
//       _skin_color = element.skin_color,
//       _eye_color = element.eye_color,
//       _birth_year = element.birth_year,
//       _gender = element.gender,
//      };
//   });
// }

// prevButton.addEventListener('click', () => {
//   fetch(starShipsURL)
//   .then( response => {
//     outputDiv.innerHTML = 'Waiting for resonse...';
//   if(response.ok) {
//     return response;
//   }
//   throw Error(response.statusText);
//   })
//   .then(response => response.json())
//   .then(data => outputDiv.innerText = data.value)
//   .catch(error => console.log('There was an error:', error))
// },false);