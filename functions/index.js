const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
var apis = require('./apis/hello-world');
const app = express();
app.use(cors({ origin: true }));

// Any new file has to be below cors
app.use('/api', apis);
app.get('/', (req, res) => {
	res.json({ message: 'Hi from express' });
});

exports.expressAPI = functions.https.onRequest(app);
