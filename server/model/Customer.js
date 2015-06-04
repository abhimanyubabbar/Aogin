var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
    email: {type: String},
    password: {type: String},
    token: {type: String}
});

module.exports = mongoose.model('Customer', CustomerSchema);