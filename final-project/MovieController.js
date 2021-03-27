import Movie from "./Movie.js";
import MovieView from "./MovieView.js";

export default class MovieController {
  constructor(parent) {
    this.parent = parent;
    this.parentElement = null;
    this.genre = 0;
    this.rating = String;
    this.fightClub = 550; // 550 = Fight club. Using this right now for testing.
    this.movie = new Movie();
    this.movieView = new MovieView();
  }

  async init() {
    this.parentElement = document.querySelector(this.parent);
    this.getMovieDetails();
    
  }

  async initGenre() {
    this.parentElement = document.querySelector(this.parent);
    this.getMovieByGenre();
  }

  async getMovieDetails() {
    

    // this.parentElement.innerHTML = `<li>Loading...</li>`;
    // // const movieList = await this.movie.getMovieDetails(this.genre)
    // // console.log(movieList)
    // const fightTime = await this.movie.getMovieDetails(this.fightClub)
    // console.log(fightTime)
    // console.log(fightTime.poster_path)
    // this.movieView.renderMovieList(fightTime, this.parentElement);
  }

  async getMovieByGenre() {
    this.genre = document.getElementById("genre").value;
    this.rating = document.getElementById("rating").value;
    const newMovie = await this.movie.getMovieByGenre(this.genre);
    console.log(newMovie);
    const ratingsList = await this.movie.getMovieByRating(this.rating)
    const randomNumber = Math.floor(Math.random() * 20);
    console.log(randomNumber)
    console.log(ratingsList.results[randomNumber]);
    console.log(ratingsList.results[randomNumber].id);
    const newMovieID = ratingsList.results[randomNumber];
    this.movieView.renderMovieList(newMovieID)
    
  }
}
