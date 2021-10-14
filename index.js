var express = require('express');
var app = express();

const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(
	require('webpack-dev-middleware')(compiler, {
		publicPath: config.output.publicPath
	})
);

app.get('/api', (req, res) => res.send('Hello World from Express!'));

app.get('*', function(req, res) {
	res.sendFile('dist/index.html', { root: __dirname });
});

app.listen(4000);
