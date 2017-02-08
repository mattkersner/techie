const express = require('express');
const router = express.Router();
const models = require('../db/models/index');
const authHelpers = require('../auth/auth-helpers');
const faveHelpers = require('../faves/fave-helpers');
const reviews = require('../reviews/reviews');

/* GET users listing. */
router.get('/', authHelpers.loginRequired, reviews.dashReviews, faveHelpers.findFaves, (req, res, next) => {
  res.render('user/index', {
    user: req.user.dataValues,
    faves: res.locals.faves,
    reviews: res.locals.reviews
  });
});

router.get('/:id/edit', authHelpers.loginRequired, (req, res, next) => {
  res.render('user/edit', {
    user: req.user.dataValues
  });
});

router.put('/:id/edit', authHelpers.loginRequired, (req, res, next) => {
  models.User.update({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    description: req.body.description,
    profile: req.body.profile,
    skills: req.body.skills
  }, { where: { id: req.params.id} }).then(() => {
    res.redirect(`/user/`);
  });
});

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

// user deletes favorites from their dashboard
router.delete('/:id', function(req, res, next) {
  models.Favorites.destroy({
    where: { id: req.params.id }
  }).then(function(fave) {
    res.redirect('/user')
  });
});

// individual user profiles
router.get('/:id', faveHelpers.profileFaves, reviews.profileReviews, function(req, res, next) {
  models.User.findById(req.params.id).then(function(profile) {
    res.render('user/profile', {
      profile: profile,
      user: req.user.dataValues,
      faves: res.locals.faves,
      reviews: res.locals.reviews
    });
  });
});

module.exports = router;
