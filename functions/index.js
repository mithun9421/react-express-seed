const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(
	cors({
		origin: true
	})
);

app.get('/', (req, res) => {
	res.send('Hello from express hosted in cloud functions');
});

exports.expressAPI = functions.https.onRequest(app);
