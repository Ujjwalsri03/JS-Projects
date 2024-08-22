const API_KEY = "2bb1d121";
const searchInput = document.getElementById('search-input');
const movieList = document.getElementById('movie-list');

let timeoutId;

// Function to fetch movies from OMDb API
async function fetchMovies(query, page = 1) {
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    return data.Search ;
}


// Function to display movies
function displayMovies(movies) {
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.png'}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        `;
        movieList.appendChild(movieItem);
    });
}

// Debouncing function
function debounce(func, delay) {
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Event listener for search input
searchInput.addEventListener('input', debounce(async () => {
    const query = searchInput.value.trim();
    if (query) {
        const movies = await fetchMovies(query);
        displayMovies(movies);
    } else {
        movieList.innerHTML = '';
    }
}, 300)); // 500ms delay for debouncing



