var express = require('express');
var app = express();

app.use(express.static('static'));
app.use(express.static('build'));

app.listen(process.env.PORT, function() {
	console.log('App is listening on port');
})