import { getJSON } from "./utilities.js";

export default class Movie {
  constructor() {
    this._details = [];
    this._genre = [];
    this._ratings = [];
  }

  // With the specific ID given from the Movie Controller, after it has been chosen and 
  // varified that it has not already been chosen before, we make a final call to the API
  // to get all of the details for the specific movie to then desplay to the user. 

  /* NO LONGER USED IN THE PROGRAM */
          // This could be used a future time though for a different function
  // async getMovieDetails(movieID) {
  //   const details = `https://api.themoviedb.org/3/movie/${movieID}?api_key=651dd06cfce5f626304367d5d45cb689&include_video=true&append_to_response=videos`;
  //   this._details = getJSON(details);
  //   console.log(this._details);
  //   return this._details;
  // }
  

  // Get a list of movies that are in the Ratings specified by the user
  async getMovieByRating(rating, genre, numberOfPages=1) {
    const min = 1;
    
    const page = getRandomPage(numberOfPages, min);
    console.log("")
    console.log(`The page number for this query will be: ${page}`)

    const ratingList = `https://api.themoviedb.org/3/discover/movie?api_key=651dd06cfce5f626304367d5d45cb689&with_genres=${genre}&certification_country=US&certification.lte=${rating}&certification.gte=${rating}&language=en-US&include_adult=false&include_video=true&page=${page}`;
    this._ratings = getJSON(ratingList);
    console.log(this._ratings);
    return this._ratings;
  }

  
}
// This function is used to get a random number. 
// when the call is made to get a list of movies from Genre, Ratings, etc, 
// the returned value has hundreds of different pages, each with 20 movies results per page. 
// This way we can make the selection of movies more random by specifying a random page and then 
// it will specify a random movie from the list on the random page to get a specific movie.
function getRandomPage(max, min=1) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min);
}