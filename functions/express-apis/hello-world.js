let express = require('express');
let router = express.Router();

router.get('/hello-world', function(req, res) {
	res.json({ username: 'Hello-World' });
});

module.exports = router;
