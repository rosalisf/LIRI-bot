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
      message: "Do you want to search music artists or upcoming concerts?",
      choices: ["Music Artists", "Upcoming Concerts"]
    },
    {
      name: "queryString",
      message: "Enter your search"
    }
  ])
  .then(answers => {
    let queryUrl = ""; //This will be passed to the api call as the search term.
    if (answers.queryType === "Music Artists") {
      queryUrl = "";
    } else if (answers.queryType === "Upcoming Concerts") {
      queryUrl = "https://api.seatgeek.com/2/events?client_id=process.env.SEATGEEK_ID";
    } else {
      console.log("Whoops, can't find that...");
    });
    
  }
}

// Set Spotify API and SeetGeek API as queries?

// Set response data as a variable and retrieve it as JSON

// Have the userInput have a recursion function to allow user to make more queries while still in the app

// Set query parameters in the userInput function

// Set divider variable to add in query parameters so results on the console are a litle more organized

// Make a fs function so every query is appended into a txt file

// Call functions 

// Explain entire process in README
userInput();
