var express = require('express');
var router = express.Router();

console.log('11111111')
router.get('/', function(req, res) {
	res.render('projects/front-end-navigation/index');
});

module.exports = router;

