const express = require('express');
const router = express.Router();
const models = require('../db/models/index');

/* GET category listing */
router.get('/', function(req, res, next) {
  models.Categories.findAll({})
  .then(function(categories) {
    res.render('categories/index', {
      title: 'Categories',
      categories: categories
    });
  });
});

/* Categories: Renders views that connects to technologies database for each category */
//renders all tech names for specific category name
router.get('/Language', function(req, res, next) {
  models.Technology.findAll({
    where: { category_name: 'Language' }
  }).then((data) => {
      res.render('categories/Language', {
      techs: data
    });
  });
});

router.get('/Library', function(req, res, next) {
  models.Technology.findAll({
    where: { category_name: 'Library' }
  }).then((data) => {
    res.render('categories/library', {
      techs: data
    });
  });
});

router.get('/Framework', function(req, res, next) {
  models.Technology.findAll({
    where: { category_name: 'Framework' }
  }).then((data) => {
    res.render('categories/framework', {
      techs: data
    });
  });
});

router.get('/Styling', function(req, res, next) {
  models.Technology.findAll({
    where: { category_name: 'Styling' }
  }).then((data) => {
    res.render('categories/styling', {
      techs: data
    });
  });
});

router.get('/Module', function(req, res, next) {
  models.Technology.findAll({
    where: { category_name: 'Module' }
  }).then((data) => {
    res.render('categories/module', {
      techs: data
    });
  });
});


module.exports = router;
