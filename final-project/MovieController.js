import Movie from "./Movie.js";
import MovieView from "./MovieView.js";

export default class MovieController {
  constructor(parent) {
    this.parent = parent;
    this.parentElement = null;
    this.genre = String;
    this.movie = new Movie();
    this.movieView = new MovieView();
  }

  async init() {
    this.parentElement = document.querySelector(this.parent);
    this.getMovieDetails();
    
  }

  async getMovieDetails() {
    this.genre = document.getElementById("genre").value;

    this.parentElement.innerHTML = `<li>Loading...</li>`;
    const movieList = await this.movie.getMovieDetails(this.genre)
    console.log(movieList)
  }
}