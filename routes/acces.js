var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var videogame = require('../public/javascripts/model/videogame');

router.post('/', function(req, res, next) {
    var videojuego = videogame({
        id: req.body.id,
        tittle: req.body.tittle,
        plataform: req.body.plataform,
        age: req.body.age
    });
  
    videojuego.save(function(err, data) {
      if (err) {
        res.status(404).json({
          mensaje: "Error al guardar"
        });
      } else {
        res.status(201).json(data);
      }
    });
});

router.post('/:id',function(req, res, next){
    res.status(405).json({
        mensaje:'Accion no permitida'
    });
});

router.get('/', function(req, res, next) {
    User.find({}, function(err, datos) {
      res.status(200).json(datos);
    });
});
  
  
router.get('/:userId', function(req, res, next) {
    User.findOne({
      'id': req.params.userId
    }, function(err, datos) {
      if (datos == null) {
        res.status(404).json({
          mensaje: "No existe"
        });
      } else {
        res.status(200).json(datos);
      }
  
    });
});