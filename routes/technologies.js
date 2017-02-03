var express = require('express');
var router = express.Router();
var models = require('../db/models/index');

router.get('/', function(req, res, next) {
  models.Technology.findAll({}).then(function(technology) {
    res.render('technology/list', {
      technology: technology
    });
  });
});

router.get('/:id', function(req, res, next) {
  models.Technology.findById(req.params.id).then(function(technology) {
    res.render('technology/details', { technology: technology });
  });
});

module.exports = router;
