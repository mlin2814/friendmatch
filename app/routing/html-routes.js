// DEPENDENCIES
// ===============================================================================
var path = require('path');

//Routing
//------------------
module.exports = function (app) {
	// HTML GET Requests
	// ---------------------------------------------------------------------------

	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	app.get('/home', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
		
	// If no matching route is found default to home
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
};