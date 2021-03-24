import { getJSON } from "./utilities.js";

export default class Quake {
  constructor() {
    // this.baseUrl =
    //   'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';
    // // this is where we will store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
    // this._quakes = [];
    this._details = [];
  }

  async getMovieByGenre(genre) {
    // const newURL = this.baseUrl 
  }

  async getMovieDetails(movieID) {
    const details = `https://api.themoviedb.org/3/movie/${movieID}?api_key=651dd06cfce5f626304367d5d45cb689`
    this._details = getJSON(details)
    return this._details;
  }
}