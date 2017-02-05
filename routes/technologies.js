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

//render edit tech form
router.get('/:id/edit', function(req, res, next) {
  models.Technology.findById(req.params.id).then(function(tech) {
    res.render('technology/edit', { tech: tech });
  });
});

//put request to send tech edits to upodate tech table
router.put('/:id', function(req, res, next) {
  models.Technology.update({
    name: req.body.name,
    description: req.body.description,
    documentation: req.body.documentation,
    use_case: req.body.use_case,
    category_name: req.body.category_name
  }, { where: { id: req.params.id} }).then(() => {
    res.redirect(`/technologies/${req.params.id}`);
  });
});

router.post('/favorites', function(req, res, next) {
  models.Favorites.create({
    user_id: req.user.id, // properly passing user id
    tech_id: req.body.tech_id // pulling from views
  }).then(function() {
    res.redirect('/user');
  });
});

module.exports = router;
