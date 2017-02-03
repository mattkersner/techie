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
router.get('/Language', function(req, res, next) {
  res.render('categories/language');
});

module.exports = router;
