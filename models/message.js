var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content:{type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}  /*the Objectedid type is the internal type that mongoose use*/

});

module.exports = mongoose.model('Message', schema);