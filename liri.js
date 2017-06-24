
var request = require("request");

var nodeArgs = process.argv;

var movieName = "";

for (var i = 2; i < nodeArgs.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
    } else {
        movieName += nodeArgs[i];
    }
}

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

console.log(queryUrl);
request(queryUrl, function(error, response, body) {
  
    if (!error && response.statusCode === 200) {
   
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("The movie's title is: " + JSON.parse(body).Title);
        console.log("The movie's rating is: " + JSON.parse(body).Rated);
        console.log("The movie's language is: " + JSON.parse(body).Language);
        console.log("The movie's plot: " + JSON.parse(body).Plot);
        console.log("The movie's actors: " + JSON.parse(body).Actors);
    }
});

