var displayShows = document.getElementById("display-shows"); 
var displayMovies = document.getElementById("display-movies"); 
var btnMovies = document.getElementById("link-text-movies"); 
var btnShows = document.getElementById("link-text-shows"); 



let localShows = JSON.parse(localStorage.getItem('localShow')); 
let localMovies = JSON.parse(localStorage.getItem('localMovie')); 



movies = localMovies; 

shows = localShows; 

const slicedMovies = movies.slice(0,5); 
const slicedShows = shows.slice(0,5); 

if (slicedMovies.length < 1){
    const noMovies = `<h3 class="no-content">You do not have any movies. Go add some!</h3>`;
    displayMovies.innerHTML = noMovies; 
    btnMovies.innerHTML = "Add Movies"; 
}

if (slicedShows.length < 1){
    const noShows = `<h3 clas="no-content">You do have have any movies. Go add some!</h3>`;
    displayShows.innerHTML = noShows;  
    btnShows.innerHTML = "Add Shows"; 
}

if (slicedMovies.length >= 1 && slicedMovies.length < 5){
    let movie = ''; 
    slicedMovies.forEach((data) => {
        movie += `<tr><td>${data.title}</td><td>${data.genre}</td><td>${data.rating}</td><td>${data.date}</td></tr>`
    }); 
    displayMovies.innerHTML = movie; 
}

if (slicedShows.length >= 1 && slicedShows.length < 5){
    let show = ''; 

    slicedShows.forEach((data) => {
        show += `<tr><td>${data.title}</td><td>${data.genre}</td><td>${data.rating}</td><td>${data.date}</td></tr>`
    }); 

    displayShows.innerHTML = show; 
}

if (slicedMovies.length > 1){
    let movie = ''; 
    slicedMovies.forEach((data) => {
        movie += `<tr><td>${data.title}</td><td>${data.genre}</td><td>${data.rating}</td><td>${data.date}</td></tr>`
    }); 
    displayMovies.innerHTML = movie; 

} 

if (slicedShows.length > 1) {
    let show = ''; 

    slicedShows.forEach((data) => {
        show += `<tr><td>${data.title}</td><td>${data.genre}</td><td>${data.rating}</td><td>${data.date}</td></tr>`
    }); 

    displayShows.innerHTML = show; 

}
