var friends = require('../data/friends.js');
var path = require('path');
var parser = require('body-parser');


module.exports = function (app) {
	app.use(parser.json());
    app.use(parser.urlencoded({extended: true}));
    app.use(parser.text());

	app.get('/api/friends', function (req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function (req, res) {
		var answers = req.body;
      	console.log(answers);
      	friends.push(answers);

		var player1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		var player2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		var compare = 0;

			for (var i = 0; i < friends.length; i++){
			    compare += Math.abs(player1[i] - player2[i]);
			}
		friends.push(req.body);
			var bestResult = compare.indexOf(Math.min.apply(null,sum));
			var match = friends[bestResult]
			res.json(match); // KEY LINE	
	});