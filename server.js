var express = require('express');
var path = require('path');
var app = express();
var indexRouter = require('./server/routes/indexRoute');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({}));

app.use(function(req, res, next){

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

    next();
});

app.use("/", indexRouter);
app.post('/authenticate', authenticateFn);


function authenticateFn(req, resp){
	
}


var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log(" Application Started Listening ... on " + port);
});