const dotenv = require("dotenv").config();
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const spotify = require('node-spotify-api');

// Set axios GET method

// Make userInput function for inquirer

function userInput() {
  inquirer.prompt([
    {
      name: "queryType",
      type: "list",
      message: "Do you want to search songs or upcoming concerts?",
      choices: ["Song", "Upcoming Concerts"]
    },
    {
      name: "queryString",
      message: "Enter song or artist/band for upcoming concerts"
    }
  ])
  .then(answers => {
    let queryUrl = ""; //This will be passed to the api call as the search term.
    if (answers.queryType === "Songs") {
      queryUrl = "";
    } else if (answers.queryType === "Artist/Band") {
      queryUrl = "https://api.seatgeek.com/2/events?client_id=process.env.SEATGEEK_ID";
    } else {
      console.log("Whoops, can't find that...");
    });
    
  }
}

// Set Spotify API and SeetGeek API as queries?

// Set response data as a variable and retrieve it as JSON

// Set spotify-this-song function

// Set concert-this function

// Have the userInput have a recursion function to allow user to make more queries while still in the app

// Set the default song to "Don't Turn Around by Ace of Base" if user does not provide a song in the Music Artist query.

// Set the default concert to "Don't Turn Around by Ace of Base" if user does not provide a song in the Music Artist query.

// Set query parameters in the userInput function

// Set divider variable to add in query parameters so results on the console are a litle more organized

// Make a fs function so every query is appended into a txt file

// Call functions 

// Explain entire process in README
userInput();
