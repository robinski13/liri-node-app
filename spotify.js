function spotify() {

    if (value != false) {
        var spotify = require('spotify');

        spotify.search({
            type: 'track',
            query: value + '&limit=1&'
        }, function(error, data) {
            if (error) {
                console.log('Error occurred: ' + error);
                return;
            }

            console.log("The song you entered was " + value + ".");
            console.log("Track Title: " + data.tracks.items[0].name);
            console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
            console.log("Preview URL: " + data.tracks.items[0].preview_url);

        });
    } else {
        {
            var spotify = require('spotify');

            spotify.search({
                type: 'track',
                query: 'ace+of+base+sign' + '&limit=1&'
            }, function(error, data) {
                if (error) {
                    console.log('Error occurred: ' + error);
                    return;
                }

                console.log("Since you didnt enter a song here is the following: ");
                console.log("Track Title: " + data.tracks.items[0].name);
                console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
                console.log("Preview URL: " + data.tracks.items[0].preview_url);

            });
        }

    }
}