import { getJSON } from "./utilities.js";

export default class Movie {
  constructor() {
    // this.baseUrl =
    //   'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';
    // // this is where we will store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
    // this._quakes = [];
    this._details = [];
    this._genre = [];
    this._ratings = [];
  }

  // async getMovieByGenre(genre) {
  //   // const newURL = this.baseUrl 
  // }

  async getMovieDetails(movieID) {
    const details = `https://api.themoviedb.org/3/movie/${movieID}?api_key=651dd06cfce5f626304367d5d45cb689&include_video=true&append_to_response=videos`;
    this._details = getJSON(details);
    console.log(this._details);
    return this._details;
  }
  
  async getMovieByGenre(genre) {
    const genreList = `https://api.themoviedb.org/3/discover/movie?api_key=651dd06cfce5f626304367d5d45cb689&with_genres=${genre}&language=en-US&include_adult=false&include_video=true`;
    this._genre = getJSON(genreList);
    console.log(this._genre);
    return this._genre;
  }

  async getMovieByRating(rating) {
    const page = getRandomPage();
    const ratingList = `https://api.themoviedb.org/3/discover/movie?api_key=651dd06cfce5f626304367d5d45cb689&certification_country=US&certification=${rating}&language=en-US&include_adult=false&include_video=true&page=${page}`;
    this._ratings = getJSON(ratingList);
    console.log(this._ratings);
    return this._ratings;
  }

  
}
function getRandomPage(min=1, max=237) {
    return Math.random() * (max - min) + min;
  }