var fs = require('fs');

try { var files = fs.readdirSync(__dirname); }
catch(e) { return; }

var tracksString = '';

tracksString += 'var app = app || {}; ';
tracksString += 'app.arrOfTracks = [ ';

for (var i = 0; i < files.length; i++) {
    if (files[i].indexOf('.mp3') > 0) {
        tracksString += '\"' + files[i] + '\",'
    }
}

tracksString += '];';

fs.writeFileSync('arrOfTracks.js', tracksString);
