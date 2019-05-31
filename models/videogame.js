var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VideogameSchema =  Schema({
  identifier:Number,
  title:String,
  plataform:{
    Nintendo:String,
    PC:String,
    Sony:String,
    Microsoft:String
  },
  since:String,
  image:String
});

module.exports = mongoose.model('videojuegos', VideogameSchema);
