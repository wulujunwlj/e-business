var express = require('express');
var router = express.Router();
var fs = require('fs');
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var _User = new Schema({
// 	email: String,
// 	name: String,
// 	salt: String,
// 	password: String
// });

router.get('/', function(req, res) {
	fs.readFile(__dirname + '../../../public/javascript/projects/front-end-navigation/data/index.json', 
		function(err, data) {
			if(err) throw err;
				res.render('projects/front-end-navigation/index', {
					title: '首页',
					list: JSON.parse(data)
				});
		});

});

router.get('/aaa', function(req, res) {
	var currentPage = req.params('page');
	console.log(currentPage);

	res.send({'username': 'abc'});
})

module.exports = router;

