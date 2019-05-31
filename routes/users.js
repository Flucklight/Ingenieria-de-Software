var express = require('express');
var router = express.Router();

var VideoGame = require('../models/videogame');

router.get('/', function(req, res, next) {
  VideoGame.find({}, function(err, datos) {
    res.status(200).json(datos);
  });
});


router.get('/:userId', function(req, res, next) {
  VideoGame.findOne({
    'identifier': req.params.userId
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

router.post('/', function(req, res, next) {
  var videojuego = VideoGame({
    identifier: req.body.identifier,
    title: req.body.title,
    plataform: {
      Nintendo: req.body.nintendo,
      PC: req.body.pc,
      Sony: req.body.sony,
      Microsoft: req.body.microsoft
    },
    since: req.body.since,
    image: req.body.image
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

router.delete('/:userId', function(req, res, next) {
  VideoGame.findOneAndDelete({
    'identifier': req.params.userId
  }, function(err, data) {
    if (err) {
      res.status(404).json(err);
    }
    res.status(200).json(data);
  });
});

router.delete('/',function(req,res,next){
  res.status(405).json({mensaje:'Accion no permitida'});
});

router.patch('/:userId', function(req, res, next) {
  VideoGame.findOneAndUpdate({
    identifier: req.params.userId
  },{
    $set:{identifier: 50 + req.params.userId}
  },
  function(err, datos) {
    if (datos == null) {
      res.status(404).json({
        mensaje: "No existe"
      });
    } else {
      res.status(200).json(datos);
    }
  });
});

router.patch('/',function(req,res,next){
  res.status(405).json({mensaje:'Accion no permitida'});
});

router.put('/:userId', function(req, res, next) {
  VideoGame.replaceOne({
    identifier: req.params.userId
  },{
    identifier: req.body.identifier,
    title: req.body.title,
    plataform: {
      Nintendo: req.body.nintendo,
      PC: req.body.pc,
      Sony: req.body.sony,
      Microsoft: req.body.microsoft
    },
    since: req.body.since,
    image: req.body.image
  },
  function(err, datos) {
    if (datos == null) {
      res.status(404).json({
        mensaje: "No existe"
      });
    } else {
      res.status(200).json({
        mensaje: "se ha cambiado exitosamente el VideoJuego"
      });
    }
  });
});

router.put('/',function(req,res,next){
  res.status(405).json({mensaje:'Accion no permitida'});
});

module.exports = router;
