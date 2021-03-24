import { Movie } from "./Movie.js";
import { MovieView } from "./MovieView.js";

export default class MovieController {
  constructor(parent) {
    this.parent = parent;
    this.parentElement = null;
    this.movie = new Movie();
    this.movieView = new MovieView();
  }

  async init() {
    this.parentElement = document.querySelector(this.parent);
    
  }
}