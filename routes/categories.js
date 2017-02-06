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
router.get('/Languages', function(req, res, next) {
  models.Technology.findAll({
    where: { category_name: 'Languages' }
  }).then((data) => {
      res.render('categories/Language', {
      techs: data
    });
  });
});

router.get('/Libraries', function(req, res, next) {
  models.Technology.findAll({
    where: { category_name: 'Libraries' }
  }).then((data) => {
    res.render('categories/library', {
      techs: data
    });
  });
});

router.get('/Frameworks', function(req, res, next) {
  models.Technology.findAll({
    where: { category_name: 'Frameworks' }
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

router.get('/Modules_and_Components', function(req, res, next) {
  models.Technology.findAll({
    where: { category_name: 'Modules_and_Components' }
  }).then((data) => {
    res.render('categories/module', {
      techs: data
    });
  });
});

router.get('/Plugins', function(req, res, next) {
  models.Technology.findAll({
    where: { category_name: 'Plugins' }
  }).then((data) => {
    res.render('categories/plugins', {
      techs: data
    });
  });
});

router.get('/APIs', function(req, res, next) {
  models.Technology.findAll({
    where: { category_name: 'APIs' }
  }).then((data) => {
    res.render('categories/api', {
      techs: data
    });
  });
});

router.get('/Collaboration_Tools', function(req, res, next) {
  models.Technology.findAll({
    where: { category_name: 'Collaboration%20Tools' }
  }).then((data) => {
    res.render('categories/collaboration', {
      techs: data
    });
  });
});

router.get('/Text_editors', function(req, res, next) {
  models.Technology.findAll({
    where: { category_name: 'Text_Editors' }
  }).then((data) => {
    res.render('categories/editors', {
      techs: data
    });
  });
});

router.get('/Productivity', function(req, res, next) {
  models.Technology.findAll({
    where: { category_name: 'Productivity' }
  }).then((data) => {
    res.render('categories/productivity', {
      techs: data
    });
  });
});


module.exports = router;
