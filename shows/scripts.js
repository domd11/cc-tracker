var btn = document.getElementById("modal-btn"); 
var close = document.getElementById("close"); 
var modal = document.getElementById("modal"); 
var modalBtn = document.getElementById("modal-btn"); 
var display = document.getElementById("display"); 

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

var titleInput = document.getElementById("title"); 
var ratingInput = document.getElementById("rating"); 
var genreInput = document.getElementById("genre"); 


btn.addEventListener('click', () => {
    let localShows = JSON.parse(localStorage.getItem('localShow')); 

    if(localShows === null) {
        shows = []; 
    } else {
        shows = localShows; 
    }


    var title = titleInput.value; 
    var rating = ratingInput.value; 
    var genre = genreInput.value; 

    

    var show = addShow(title, rating, genre, today); 

    shows.push(show); 
    localStorage.setItem('localShow', JSON.stringify(shows)) 

    showShows(); 

    titleInput.value="";
    ratingInput.value=""; 
}); 

const showShows = () => {
    let localShows = JSON.parse(localStorage.getItem('localShow')); 

    if(localShows === null) {
        shows = []; 
    } else {
        shows = localShows; 
    }


    let show = ''; 

    shows.forEach((data, index) => {
        show += `<tr>
        <td>Show Title: ${data.title}</td>
        <td>Show Genre: ${data.genre}</td>
        <td>Ratings: ${data.rating}/5</td>
        <td>Added: ${data.date}</td>
        <td><button class="delete" onClick="deleteItem(${index})">Delete</button></td>
        </tr>`
    }); 

    display.innerHTML = show; 
}

const deleteItem = (index) => {
    let localShows = JSON.parse(localStorage.getItem('localShow')); 
    shows.splice(index, 1); 
    localStorage.setItem('localShow', JSON.stringify(shows)); 
    showShows(); 
}

showShows(); 
const addShow = (title, rating, genre, date) => {
    return { title:title, rating:rating, genre:genre, date:date }
}


