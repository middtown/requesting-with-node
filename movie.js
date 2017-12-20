"use strict"

const request = require("./node_modules/request");
const http = require("http");
const PORT=3000;
const googleKey = require("./env");
const googleId = require("./env");
//create a server
const server = http.createServer(handleRequests);

//start the server
server.listen(PORT,function(){
	console.log("Listening on port", PORT); //this code is run whenthe server starts
});

function handleRequests(request,response){ 
	response.end("<h1> My favorite movie is </h1>");
	}

function getMovieTitle(title){
    request("https://www.googleapis.com/customsearch/v1?key="+googleKey.key+ "&cx="+googleId.id+"&q="+ title + "", 
    		function (error, response, body) {
      		//Inside that callback
      		var movieInfo = JSON.parse(body);
      		console.log(movieInfo.items[0].title);
    });
}

//The actual request sending
module.exports=getMovieTitle;


// ------------------------------------- GRAVEYARD ---------------------------------------------- //

// request("https://www.googleapis.com/customsearch/v1?key=" +googleKey+ "&cx="+ googleId +":wy_idqwaufg&q=face+off+movie", 
// 		function (error, response, body) {
//  		//Inside that callback
//  		var stuff = JSON.parse(body);
//  		console.log(stuff.person);
// });



// request("https://www.googleapis.com/customsearch/v1?key=" +googleKey+ "&cx="+ googleId +":wy_idqwaufg&q=face+off+movie", 
// 		function hndlr(error, response, body) {
//       		for (var i = 0; i < 5; i++) {
//         	var item = response.items[i];
//         	console.log(item);
//         	// in production code, item.htmlTitle should have the HTML entities escaped.
//         	// document.getElementById("content").innerHTML += "<br>" + item.htmlTitle;
//       		}
//     	});


