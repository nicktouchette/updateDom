function printToDom(data) {
  document.getElementById('names').innerHTML += data;
}

var movies = [];

function formAdd() {
  addMovie(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('img').value);
}

function addMovie(title, desc, img) {
  var movie = {
    'title': title,
    'description': desc,
    'img': img
  };
  movies.push(movie);
  printToDom("<img src=" + movie.img + "/>" + "<h1>" + movie.title + "</h1><h2>" + movie.description + "</h2><hr>");
}


addMovie('The Shawshank Redemption', 'A movie about prison.', 'http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UY67_CR0,0,45,67_AL_.jpg');
addMovie('The Godfather', 'A movie about the mafia.', 'http://ia.media-imdb.com/images/M/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_UX45_CR0,0,45,67_AL_.jpg');
addMovie('The Dark Knight', 'A movie about a man dressed as a bat.', 'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg');
addMovie('Pulp Fiction', 'Violence and Redemption', 'http://ia.media-imdb.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UY67_CR0,0,45,67_AL_.jpg');
addMovie('Fight Club', 'Rule number one is to not talk about fight club', 'http://ia.media-imdb.com/images/M/MV5BMjIwNTYzMzE1M15BMl5BanBnXkFtZTcwOTE5Mzg3OA@@._V1_UY67_CR0,0,45,67_AL_.jpg');
