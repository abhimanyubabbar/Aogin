var express = require('express');
var app = express();



var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log(" Application Started Listening ... on " + port);
});


