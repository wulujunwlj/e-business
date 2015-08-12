var express = require('express');
var router = express.Router();

// music-index
router.get('/', function(req, res) {
	res.render('projects/music.163.com/index');
});

module.exports = router;