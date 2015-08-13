var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('projects/front-end-navigation/index', {'username': 'abc'});
});

router.get('/aaa', function(req, res) {
	var currentPage = req.params('page');
	console.log(currentPage);

	res.send({'username': 'abc'});
})

module.exports = router;

