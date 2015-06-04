var express = require('express');
var path = require('path');
var app = express();
var indexRouter = require('./server/routes/indexRoute');

app.use(express.static(path.join(__dirname, 'public')));
app.use("/", indexRouter);

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log(" Application Started Listening ... on " + port);
});