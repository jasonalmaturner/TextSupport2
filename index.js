var express = require('express'),
	app = express(),
	firebase = require('firebase'),
	bodyParser = require('body-parser'),
	cors = require('cors')
	port = 9001;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, function(){
	console.log('listening at port ' + port);
})