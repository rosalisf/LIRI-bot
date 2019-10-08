const Spotify = require("node-spotify-api");

module.exports = function SpotifyConnect() {
  this.queryLimit = 1;
  this.spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  });

  this.querySpotify = function(type, queryString, callback) {
    this.spotify.search(
      { type: type, query: queryString, limit: this.queryLimit },
      callback
    );
  };

  this.spotifyResponse = function(err, data) {
    if (err) {
      return console.log("Whoops, can't find that... " + err);
    }
    // Song
    console.log(
      JSON.stringify("Song Title: " + data.tracks.items[0].name, null, 10)
    );
    // Artist
    console.log(
      JSON.stringify(
        "Artist/Band: " + data.tracks.items[0].album.artists[0].name,
        null,
        10
      )
    );
    // Album
    console.log(
      JSON.stringify(
        "Album Title: " + data.tracks.items[0].album.name,
        null,
        10
      )
    );
    // Preview link
    console.log(
      JSON.stringify(
        "Spotify Preview Link: " + data.tracks.items[0].preview_url,
        null,
        10
      )
    );
  };
};
