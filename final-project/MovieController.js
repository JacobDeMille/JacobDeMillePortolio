import Movie from "./Movie.js";
import MovieView from "./MovieView.js";
import LocalStorage from './local-storage.js';

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
    this.movieDetails();
    
  }

  async initGenre() {
    this.parentElement = document.querySelector(this.parent);
    this.moviesByGenre();
  }

  async moviesByGenre() {
    
      // Get a the genre specified by the user
    this.genre = document.getElementById("genre").value;
    /*console.log(this.genre)
      // Get a list of movies by Genre
    const newMovie = await this.movie.getMovieByGenre(this.genre, this.rating);
    console.log("This is the list for the Genre specified")
    console.log(newMovie);
    this.moviesByRating(newMovie)*/


      // Get a rating specified by the user
    this.rating = document.getElementById("rating").value;
    // Get a new list of the movies that have a specific rating in the same Genre

    this.yearStart = document.getElementById("startYear")
    const ratingsList = await this.movie.getMovieByRating(this.rating, this.genre)
    // console.log("")
    // console.log("This is the list for the Ratings specified in the Genre")
    // console.log(ratingsList);
    // console.log(`The number of pages from the results: ${ratingsList.total_pages}`)

    // Get the number of pages for the specified rating and Genre
    let numberOfPages = ratingsList.total_pages;
    // Call the movie rating function a second time with the parameter 
    // for the number of pages.
    const ratingsListRandomPage = await this.movie.getMovieByRating(this.rating, this.genre, numberOfPages)
    console.log("")
    console.log("This is the NEW list for the Ratings, specifying the number of pages to give to the random page function")
    console.log(ratingsListRandomPage)

    // Render the movie list
    this.renderMovieList(ratingsListRandomPage);
  }

  async renderMovieList(ratingsListRandomPage) {
    // Get a random number to select a secific movie in the list of 20 movies returned in the list
    const randomNumber = Math.floor(Math.random() * 20);
    console.log(`Random number to get the random movie: ${randomNumber}`)
    console.log("")
    console.log(`The selected movie to use and dispaly to the user`)
    console.log(ratingsListRandomPage.results[randomNumber]);

    const movieID = ratingsListRandomPage.results[randomNumber];
    // console.log(`This is the movie ID number: ${movieID}`)

    // If the Movie ID is in the local storage, then get a new movie by 
    // calling the moviesByGenre again. 
    if (localStorage.getItem(movieID.id) !== null) {
      // console.log("Movie has already been given. Lets get another one.")
      this.moviesByGenre()

    } 
    // If the Movie ID are not in the local storage, then add it to 
    // local storage and call the render movie list.
    if (localStorage.getItem(movieID.id) === null) {
      localStorage.setItem(movieID.id, movieID.title )
        // Get the ID for the Specific movie that is to be desplayed.
      const newMovieID = ratingsListRandomPage.results[randomNumber];
      // console.log(ratingsListRandomPage.results[randomNumber])
      // console.log(newMovieID)
        // Call renderMovieList to show the information to the user. 
      this.movieView.renderMovieList(newMovieID)
    }
  }
}