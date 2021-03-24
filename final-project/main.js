import { getJSON } from "./utilities.js";
import Movie from "./Movie.js";
import MovieController from "./MovieController.js";

const movieURL = "https://api.themoviedb.org/3/movie/550?api_key=651dd06cfce5f626304367d5d45cb689"
console.log(movieURL)
const genreURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=651dd06cfce5f626304367d5d45cb689&language=en-US"

const jsonResponse = getJSON(movieURL)
console.log(jsonResponse)
console.log(jsonResponse.backdrop_path)
const genreResponse = getJSON(genreURL)
console.log(genreResponse)
console.log(genreResponse.genres)

let poster = document.createElement("IMG");
poster.setAttribute("src", jsonResponse.backdrop_path)
document.body.appendChild(poster);

let newMovie = new Movie(550);
console.log(newMovie)

const myMovieController = new MovieController("#movieList");
myMovieController.init();