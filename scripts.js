var displayShows = document.getElementById("display-shows"); 
var displayMovies = document.getElementById("display-movies"); 

let localShows = JSON.parse(localStorage.getItem('localShow')); 
let localMovies = JSON.parse(localStorage.getItem('localMovie')); 


movies = localMovies; 

shows = localShows; 

const slicedMovies = movies.slice(0,5); 
const slicedShows = shows.slice(0,5); 

let movie = ''; 
let show = ''; 

slicedMovies.forEach((data) => {
    movie += `<tr><td>${data.title}</td><td>${data.genre}</td><td>${data.rating}</td><td>${data.date}</td></tr>`
}); 

slicedShows.forEach((data) => {
    show += `<tr><td>${data.title}</td><td>${data.genre}</td><td>${data.rating}</td><td>${data.date}</td></tr>`
}); 

displayMovies.innerHTML = movie; 
displayShows.innerHTML = show; 

