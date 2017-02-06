const express = require('express');
const router = express.Router();
const models = require('../db/models/index');
const authHelpers = require('../auth/auth-helpers');
const faveHelpers = require('../faves/fave-helpers');

/* GET users listing. */
router.get('/', authHelpers.loginRequired, faveHelpers.findFaves, (req, res, next) => {
  res.render('user/index', {
    user: req.user.dataValues,
    faves: res.locals.faves
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
router.get('/:id', faveHelpers.profileFaves, function(req, res, next) {
  models.User.findById(req.params.id).then(function(profile) {
    res.render('user/profile', {
      profile: profile,
      user: req.user.dataValues, // if user not logged in, this throws errors since nothing is being passed in..
      faves: res.locals.faves
    });
  });
});

module.exports = router;
