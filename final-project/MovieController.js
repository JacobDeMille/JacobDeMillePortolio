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
    this.movieDetails();
    
  }

  async initGenre() {
    this.parentElement = document.querySelector(this.parent);
    this.moviesByGenre();
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

  async moviesByGenre() {
    
      // Get a the genre specified by the user
    this.genre = document.getElementById("genre").value;
    // console.log(this.genre)
      // Get a list of movies by Genre
    // const newMovie = await this.movie.getMovieByGenre(this.genre, this.rating);
    // console.log("This is the list for the Genre specified")
    // console.log(newMovie);
    // this.moviesByRating(newMovie)


      // Get a rating specified by the user
    this.rating = document.getElementById("rating").value;
    // Get a new list of the movies that have a specific rating in the same Genre
    const ratingsList = await this.movie.getMovieByRating(this.rating, this.genre)
    console.log("")
    console.log("This is the list for the Ratings specified in the Genre")
    console.log(ratingsList);
    console.log(`The number of pages from the results: ${ratingsList.total_pages}`)

    let numberOfPages = ratingsList.total_pages;
    const ratingsListRandomPage = await this.movie.getMovieByRating(this.rating, this.genre, numberOfPages)
    console.log("")
    console.log("This is the NEW list for the Ratings, specifying the number of pages to give to the random page function")
    console.log(ratingsListRandomPage)


    
    
    // Get a random number to select a secific movie in the list of 20 movies returned in the list
    const randomNumber = Math.floor(Math.random() * 20);
    console.log(`Random number to get the random movie: ${randomNumber}`)
    console.log("")
    console.log(`The selected movie to use and dispaly to the user`)
    console.log(ratingsListRandomPage.results[randomNumber]);
    console.log(`Movie ID number: ${ratingsListRandomPage.results[randomNumber].id}`);
      // Get the ID for the Specific movie that is to be desplayed.
    const newMovieID = ratingsListRandomPage.results[randomNumber];
    console.log(ratingsListRandomPage.results[randomNumber])
    console.log(newMovieID)
      // Call renderMovieList to show the information to the user. 
    this.movieView.renderMovieList(newMovieID)
    
  }

}