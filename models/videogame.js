var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VideogameSchema =  Schema({
  identifier:Number,
  title:String,
  plataform:String,
  since:String
});

module.exports = mongoose.model('videojuegos', VideogameSchema);
