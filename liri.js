// Declaring required NPM/varibles
var fs = require("fs");
var axios = require("axios");
var spotify = require("node-spotify-api");
//var inquirer = require("inquirer");
var env = require("dotenv").config();

var action = process.argv[2];

//Switch statement for different input actions
switch (action) {
    case "concert-this":
        bandsInTown();
        break;
    case "spotify-this-song":
        findTrack();
        break;
    case "movie-this":
        ombd();
        break;
    case "do-what-it-says":
        siri();
        break;
    default:
        console.log("Invalid request");
        break;
}

// Functions for switch cases
//Bands in town
function bandsInTown(){
    var artist = process.argv[3];
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            console.log(response.data);
        }
    )
};

//Spotify
function findTrack(banana) {
    var search;
    if (banana == " "){
        search = "My Life Zhu"
    } else {
        search = banana;
    }

    spotify.search({ type: 'track', query: search }, function (error, data) {
        if (error) {
            console.log("Error: " + error);
            return;
        }
        if (data.tracks.items.length == 0) {

        }
    })
};

//OMDB
function ombd() {
    axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=560a0cd&").then(
        function (response) {
            console.log(response.data);
        }
    )
};

//Search info
function siri() {
    fs.readFile("random.txt", text, (err) => {
        if (err) throw err;
        console.log("output");
    });
};