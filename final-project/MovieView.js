export default class MovieView {
  renderMovieList(movieID) {
    
    const movieDetails = document.getElementById('movieDetails');

    const movieDetailsContainer = document.createElement('div');
    movieDetailsContainer.classList.add('detailsContainer');
    
    const poster = document.createElement("IMG");
    poster.setAttribute("src", `https://image.tmdb.org/t/p/w500${movieID.poster_path}`)
    
    // Creat the elements to add to the HTML
    const title = document.createElement('h2');
    title.innerHTML = `${movieID.title}`
    // console.log("")
    // console.log("The elements that will be added to html to dispaly to the user")
    // console.log(title);
    const release_date = document.createElement('h4');
    release_date.innerHTML = `Release Date: ${movieID.release_date}`;
    // console.log(release_date);
    const overview = document.createElement('p');
    overview.innerHTML = `${(movieID.overview)}`;
    // console.log(overview);
    
    movieDetailsContainer.appendChild(poster)
    movieDetailsContainer.appendChild(title)
    movieDetailsContainer.appendChild(release_date)
    movieDetailsContainer.appendChild(overview)

    movieDetails.innerHTML = "";
    movieDetails.appendChild(movieDetailsContainer);

    // console.log(movieID);
    
  }
  
}