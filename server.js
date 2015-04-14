var express = require('express');
var path = require('path');
var server = express();

var allowCrossDomain = function (req, res, next) {
	req.header('Access-Control-Allow-Origin', '*');
	req.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	req.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	if (req.method === 'OPTIONS') {
		res.send(200);
	} else {
		next();
	}
};
server.use(allowCrossDomain);

server.use(express.static(__dirname + '/public'));
server.use(express.static(path.join(__dirname, 'public')));

server.get('', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

var port = 10001;

server.listen(port, function () {
	console.log('server listening on port ' + port);
});