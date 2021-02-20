const textButton = document.getElementById("number");
const apiButton = document.getElementById("chuck");
const outputDiv = document.getElementById("output");

const textURL = "http://numbersapi.com.random";
const apiUTL = "https://api.chucknorris.io/jokes/random";

textButton.addEventListener('click', () => {
  fetch(textURL)
  .then(response => {
    outputDiv.innerHTML = 'waiting for response...';
  if(response.ok) {
    return response;
  }
    throw Error(response.statusText);
  })
  .then( response => response.text() )
  .then( text => outputDiv.innerHTML = text )
  .catch( error => console.log('There was an error:', error))
},false);

