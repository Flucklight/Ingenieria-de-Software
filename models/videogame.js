var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VideogameSchema =  Schema({
  id:Number,
  title:String,
  plataform:String,
  since:Number
});

module.exports = mongoose.model('videojuegos', VideogameSchema);
