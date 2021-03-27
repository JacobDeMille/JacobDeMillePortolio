import { getJSON } from "./utilities.js";
import Movie from "./Movie.js";
import MovieController from "./MovieController.js";

// const movieURL = "https://api.themoviedb.org/3/movie/550?api_key=651dd06cfce5f626304367d5d45cb689"
// console.log(movieURL)
// const jsonResponse = getJSON(movieURL)
// console.log(jsonResponse)
// // console.log(jsonResponse.PromiseResult.poster_path)

// const genreURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=651dd06cfce5f626304367d5d45cb689&language=en-US"
// const genreResponse = getJSON(genreURL)
// console.log(genreResponse)
// console.log(genreResponse.genres)

// const discover = "https://api.themoviedb.org/3/discover/movie?api_key=651dd06cfce5f626304367d5d45cb689&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=125";
// const discoverResponse = getJSON(discover);
// console.log(discoverResponse)
// console.log(discoverResponse.results[3].backdrop_path)

// let poster = document.createElement("IMG");
// poster.setAttribute("src", jsonResponse.Pos)
// document.body.appendChild(poster);

// let newMovie = new Movie(550);
// console.log(newMovie)


// myMovieController.init();

document.getElementById("btn").addEventListener('click', getNewMovie)

function getNewMovie() {
  const myMovieController = new MovieController("#movieList");
  myMovieController.initGenre()
}