var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var videogameSchema = Schema({
  id:Number,
  tittle:String,
  plataform:String,
  age:Number
});

module.exports = mongoose.model('videogame', videogameSchema);