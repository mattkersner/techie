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

router.get('/new', function(req, res, next) {
  res.render('technology/new', {

  });
});

router.post('/',function(req, res, next) {
  models.Technology.create({
    name: req.body.name,
    description: req.body.description,
    documentation: req.body.documentation,
    use_case: req.body.use_case,
    category_name: req.body.category_name
  }).then(function() {
    res.redirect('/technologies');
  });
});

router.get('/:id', function(req, res, next) {
  models.Technology.findById(req.params.id).then(function(technology) {
    res.render('technology/details', {
      technology: technology,
      user: req.user // passes in req user id
      });
  });
});

router.post('/favorites', function(req, res, next) {
  models.Favorites.create({
    user_id: req.user.id, // properly passing user id
    tech_id: req.params.id // null atm
  }).then(function() {
    res.redirect('/technologies');
  });
});

module.exports = router;
