import { getJSON } from "./utilities.js";

export default class Movie {
  constructor() {
    // this.baseUrl =
    //   'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';
    // // this is where we will store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
    // this._quakes = [];
    this._details = [];
    this._genre = [];
  }

  // async getMovieByGenre(genre) {
  //   // const newURL = this.baseUrl 
  // }

  async getMovieDetails(movieID) {
    const details = `https://api.themoviedb.org/3/movie/${movieID}?api_key=651dd06cfce5f626304367d5d45cb689&append_to_response=videos`
    this._details = getJSON(details)
    console.log(this._details)
    return this._details;
  }
  
  async getMovieByGenre(genre, rating) {
    const page = getRandomPage();
    const movie = `https://api.themoviedb.org/3/discover/movie?api_key=651dd06cfce5f626304367d5d45cb689&with_genres=${genre}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    this._genre = getJSON(movie)
    console.log(this._genre)
    return this._genre;
  }

  
}
function getRandomPage(min=1, max=500) {
    return Math.random() * (max - min) + min;
  }