var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var postsSchema = new Schema({

module.exports = mongoose.model('posts', postsSchema);