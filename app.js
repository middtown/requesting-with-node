//bringing in function getMovieTitle();.
var movie = require("./movie");
var threeFavoriteMovies = ["get out", "the secret life of bees", "citizen kane" ];
//runs loop through array using .forEach()... grabs function from movie.js folder
threeFavoriteMovies.forEach(function(film){
movie(film);
});
