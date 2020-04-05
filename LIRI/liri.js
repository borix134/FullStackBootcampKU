const axios = require("axios");
const fs = require("fs")
const Spotify = require('node-spotify-api');
const moment = require('moment');
require("dotenv").config();
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
var search = "";
search = process.argv.slice(3).toString().replace(","," ");

if (process.argv[2] === "do-what-it-says"){
    var parameters = fs.readFileSync("random.txt",'utf8').split(",");
    process.argv[2]=parameters[0];
    search = parameters[1];
}

switch (process.argv[2]){
    case ("concert-this"):
        if (!search)
            search = "Metallica"

        axios.get("https://rest.bandsintown.com/artists/" + search +
        "/events?app_id=codingbootcamp")
            .then((res) => {
                Object.values(res.data).forEach(value=>{
                    console.log("Venue: " + value.venue.name + "\nLocation: " + value.venue.city 
                    + ", " + value.venue.country + "\nTime and date: " +
                    moment(value.datetime).format('LLLL'))
                });
                if (res.data.length === 0){
                    console.log("Could find any results for " + artist + ".");
                }
            }).catch((err) => {
                console.log(err);
            });
        break;
    case ("spotify-this-song"):
        if (!search)
            search = "Ace of Base The Sign"

        spotify.search({ type: 'track', query: search }, (err, data) => {
            if (err)
                return console.log('Error occurred: ' + err);
                
            for (var i = 0; i < data.tracks.items[0].artists.length; i++){
                console.log("Artist(s): " + data.tracks.items[0].artists[i].name);
            }
            console.log("Song name: " + data.tracks.items[0].name);
            console.log("Link: " + data.tracks.items[0].href);
            console.log("Album: " + data.tracks.items[0].album.name);
        });

        break;
    case ("movie-this"):
        if (!search)
            search = "The Hangover"
        
        axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=bb84b8a2&t=" + search).then((res) => {
            console.log("Title: " + res.data.Title);
            console.log("Release year: " + res.data.Year);
            console.log("IMDB rating: " + res.data.imdbRating);
            console.log("Rotten Tomatoes rating: " + res.data.Ratings[1].Value);
            console.log("Country: " + res.data.Country);
            console.log("Language: " + res.data.Language);
            console.log("Plot: " + res.data.Plot);
            console.log("Actors: " + res.data.Actors);
        }).catch((err) => {
            console.log(err);
        });
        break;
    default:
        console.log("Please enter the action you want to perform.")
        console.log("Options: concert-this, spotify-this-song, movie-this, do-what-it-says");
        break;
}