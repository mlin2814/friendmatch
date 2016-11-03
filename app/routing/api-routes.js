var surveyData = require('../data/friends.js');

module.exports = function (app) {
	// API GET Requests

	app.get('/api/friends', function (req, res) {
		res.json(surveyData);
	});

	app.post('/api/friends', function (req, res) {
		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table
			surveyData.push(req.body);
			res.json(true); // KEY LINE
		
	});