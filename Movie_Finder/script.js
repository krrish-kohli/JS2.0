// www.omdbapi.com/?apikey=&

http: document.addEventListener("DOMContentLoaded", () => {
  const movieForm = document.getElementById("movieForm");
  const movieResults = document.getElementById("movieResults");
  movieForm.addEventListener("submit", (e) => {
    const movieName = document.getElementById("movieInput").value;
    // prevent the browser default
    e.preventDefault();
    searchMovies(movieName);
  });

  // Search for movies
  async function searchMovies(movieName) {
    try {
      // loading
      movieResults.innerHTML = '<div class="loading">Searching movies...</div>';
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=[yourapikey]=${movieName}`
      );
      const data = await response.json();
      if (data.Response === "False") {
        throw new Error("No movies found");
      }
      displayMovies(data.Search);
    } catch (error) {
      movieResults.innerHTML = `<div class='error-message'>"Error Fetching movies. Please try again."</div>`;
    }
  }

  // display all the movies
  function displayMovies(movies) {
    movieResults.innerHTML = `
        <div class='movies-grid'>
            ${movies
              .map(
                (movie) =>
                  `
                <div class='movie-card'>
                    <img
                        src="${movie.Poster}"
                        alt="${movie.Title}"
                        class="movie-poster"
                    />
                    <div class="movie-info">
                        <h3 class="movie-title">${movie.Title}</h3>
                        <div class="movie-year">${movie.Year}</div>
                    </div>
                </div>
            `
              )
              .join("")}
        </div>
    `;
  }
});
