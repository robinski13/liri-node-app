
var fs = require('fs');
var Twitter = require('twitter');
var keys = require('./keys.js');
var twit = new Twitter(keys);
var argument = process.argv[2];
var value = process.argv[3];
var dataText = process.argv[4];

var params = { 
  "screen_name": "chadlcook3",
  "count": 20
}

if(argument === "my-tweets"){
  twit.get('statuses/user_timeline', params, gotData);
  function gotData(error, data, response){
    var tweets = data; 
    for(var i = 0; i < tweets.length; i++){
      console.log(tweets[i].text); 
      console.log(tweets[i].created_at); 
    }
  };
  
}