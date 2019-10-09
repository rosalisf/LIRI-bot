const dotenv = require("dotenv").config();
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const SpotifyConnect = require("./spotify.js");
const SeatGeek = require("./seatgeek.js");

// Set axios GET method

// Make userInput function for inquirer

function userInput() {
  inquirer
    .prompt([
      {
        name: "queryType",
        type: "list",
        message: "Do you want to search songs or artist/band?",
        choices: ["spotify-this-song", "concert-this"]
      },
      {
        name: "queryString",
        message: "Enter song or enter an artist/band for upcoming concerts"
      }
    ])

    // Set response data as a variable and retrieve it as JSON

    .then(answers => {
      if (answers.queryType === "spotify-this-song") {
        spotify.querySpotify(
          "track",
          answers.queryString,
          spotify.spotifyResponse
        );
      } else if (answers.queryType === "concert-this") {
        seatgeek.querySeatGeek(answers.queryString, seatgeek.responseCallback);
      } else {
        console.log("Whoops, can't find that...");
      }
      fs.appendFile(
        "SongsAndConcerts.txt",
        JSON.stringify(answers, null, 10),
        err => {
          if (err) {
            console.log(err);
          } else {
            console.log("SongsandConcerts.txt was updated!");
          }
        }
      );
      // inquirer
      //   .prompt([
      //     {
      //       name: "searchAgain",
      //       type: "confirm",
      //       message: "Would you like to search again?"
      //     }
      //   ])
      //   .then(answers => {
      //     if (answers.searchAgain) {
      //       userInput();
      //     } else {
      //       console.log("See ya later alligator!");
      //     }
      //   });
    })
    .catch(err => console.log(err));
}

const spotify = new SpotifyConnect(userInput);
const seatgeek = new SeatGeek(userInput);
// Set spotify-this-song function

// Set concert-this function

// Have the userInput have a recursion function to allow user to make more queries while still in the app

// Set the default song to "Don't Turn Around by Ace of Base" if user does not provide a song in the Music Artist query.

// Set the default concert to "Lady Gaga" if user does not provide an artist or band in the Music Artist query.

// Set query parameters in the userInput function

// Set divider variable to add in query parameters so results on the console are a litle more organized

// Make one last prompt to ask user if they want to make another query and if they say no the console will say goodbye and end the function

// Make a fs function so every query is appended into a txt file

// Call functions

// Explain entire process in README
userInput();
