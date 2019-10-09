const axios = require("axios");
const moment = require("moment");
const dotenv = require("dotenv").config();
const utf8 = require("utf8");

module.exports = function SeatGeek(recurse) {
  var self = this;
  this.recurse = recurse;
  this.defaultConcert = "Lady-Gaga";
  this.querySeatGeek = function(artist, callback) {
    const queryURL =
      "https://api.seatgeek.com/2/events?performers.slug=" +
      // https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string
      (utf8.encode(artist.toLowerCase().replace(new RegExp(/ /g), "-")) ||
        this.defaultConcert) +
      "&client_id=" +
      process.env.SEATGEEK_ID;
    console.log(queryURL);
    axios
      .get(queryURL)
      .then(response => callback(response))
      .catch(error => {
        console.log(error);
        self.recurse();
      });
  };
  this.responseCallback = function(response) {
    const events = response.data.events;
    for (let index = 0; index < events.length; index++) {
      const element = events[index].venue;
      const time = events[index].datetime_utc;
      console.log("=======================");
      console.log(element.name_v2);
      console.log(element.display_location);
      console.log(moment(time, "YYYY-MM-DDTHH:mm:SS").format("MM/DD/YYYY"));
      console.log("=======================");
    }
    self.recurse();
  };
};
