var btn = document.getElementById("modal-btn"); 
var close = document.getElementById("close"); 
var modal = document.getElementById("modal"); 
var modalBtn = document.getElementById("modal-btn"); 
var display = document.getElementById("display"); 
var doc = document.getElementById("doc"); 
var item = document.getElementById("item"); 

var search = document.getElementById("search-input"); 
var searchBtn = document.getElementById("search-btn"); 

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

var titleInput = document.getElementById("title"); 
var ratingInput = document.getElementById("rating"); 
var genreInput = document.getElementById("genre"); 




btn.addEventListener('click', () => {
    let localMovies = JSON.parse(localStorage.getItem('localMovie')); 

    if(localMovies === null) {
        movies = []; 
    } else {
        movies = localMovies; 
    }


    var title = titleInput.value; 
    var rating = ratingInput.value; 
    var genre = genreInput.value; 

    

    var movie = addMovie(title, rating, genre, today); 

    movies.push(movie); 
    localStorage.setItem('localMovie', JSON.stringify(movies)) 

    showMovies(); 

    titleInput.value="";
    ratingInput.value=""; 
    genreInput.value=""; 
}); 

const showMovies = () => {
    let localMovies = JSON.parse(localStorage.getItem('localMovie')); 

    if(localMovies === null) {
        movies = []; 
    } else {
        movies = localMovies; 
    }


    let movie = ''; 

    movies.forEach((data, index) => {
        movie += `<tr>
        <td>Movie Title: ${data.title}</td>
        <td>Movie Genre: ${data.genre}</td>
        <td>Movie Rating: ${data.rating}/5</td>
        <td>Added: ${data.date}</td>
        <td><button class="delete" onClick="deleteItem(${index})">Delete</button></td>
        </tr>`
    }); 

    display.innerHTML = movie; 
}

showMovies(); 

const deleteItem = (index) => {
    let localMovies = JSON.parse(localStorage.getItem('localMovie')); 
    movies.splice(index, 1); 
    localStorage.setItem('localMovie', JSON.stringify(movies)); 
    showMovies(); 
}
const addMovie = (title, rating, genre, date) => {
    return { title:title, rating:rating, genre:genre, date:date }
}


