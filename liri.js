const dotenv = require("dotenv").config();
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const Spotify = require("node-spotify-api");

// Set axios GET method

var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

// Make userInput function for inquirer

function userInput() {
  inquirer
    .prompt([
      {
        name: "queryType",
        type: "list",
        message: "Do you want to search songs or artist/band?",
        choices: ["Songs", "Artist/Band"]
      },
      {
        name: "queryString",
        message: "Enter song or artist/band for upcoming concerts"
      }
    ])
    .then(answers => {
      if (answers.queryType === "Songs") {
        spotify.search(
          { type: "track", query: answers.queryString, limit: 1 },
          function(err, data) {
            if (err) {
              return console.log("Error occurred: " + err);
            }
            // Song
            console.log(JSON.stringify(data.tracks.items[0].name, null, 10));

            // Artist
            console.log(
              JSON.stringify(
                data.tracks.items[0].album.artists[0].name,
                null,
                10
              )
            );
            // Album
            console.log(
              JSON.stringify(data.tracks.items[0].album.name, null, 10)
            );

            // Preview link
            console.log(
              JSON.stringify(data.tracks.items[0].preview_url, null, 10)
            );
          }
        );
      } else if (answers.queryType === "Artist/Band") {
        queryUrl =
          "https://api.seatgeek.com/2/events?client_id=process.env.SEATGEEK_ID";
      } else {
        console.log("Whoops, can't find that...");
      }
    });
}

// Set Spotify API and SeetGeek API as queries?

// Set response data as a variable and retrieve it as JSON

// Set spotify-this-song function

// Set concert-this function

// Have the userInput have a recursion function to allow user to make more queries while still in the app

// Set the default song to "Don't Turn Around by Ace of Base" if user does not provide a song in the Music Artist query.

// Set the default concert to "Lady Gaga" if user does not provide an artist or band in the Music Artist query.

// Set query parameters in the userInput function

// Set divider variable to add in query parameters so results on the console are a litle more organized

// Make a fs function so every query is appended into a txt file

// Call functions

// Explain entire process in README
userInput();
