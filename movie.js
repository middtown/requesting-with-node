"use strict"

const request = require("./node_modules/request");
const http = require("http");
//specifies which local server number to use.
const PORT=3000;
// googleKey and googleId bring in secret password from outside file for safe keeping.
const googleKey = require("./env");
const googleId = require("./env");
//creates a server
const server = http.createServer(handleRequests);

//start the server
server.listen(PORT,function(){
	console.log("Listening on port", PORT); //this code is run whenthe server starts
});

function handleRequests(request,response){ 
	response.end("My favorite movie is");
	}

function getMovieTitle(title){
    request("https://www.googleapis.com/customsearch/v1?key="+googleKey.key+ "&cx="+googleId.id+"&q="+ title + "", 
    		function (error, response, body) {
      		//Inside that callback
      		var movieInfo = JSON.parse(body);
      		console.log("\n"+ movieInfo.items[0].title + "\n");
      		console.log("\n"+ movieInfo.items[0].snippet)+ "\n";
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


