var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'dist')));

let PORT = process.env.PORT || 4000;
const APIBASEURL = process.env.APIBASEURL || '/api';
const WILDCARD = '*';

// Any api call will go thorough this
app.get(APIBASEURL, (req, res) => res.send('Hello World from Express!'));

// Index html served via express
app.get(WILDCARD, function(req, res) {
	console.log('Get *');
	res.sendFile('dist/index.html', { root: __dirname });
});

app.listen(PORT, () => {
	console.log(`App serving at http://localhost:${PORT}`);
});
