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

router.delete('/:id', function(req, res, next) {
  models.Favorites.destroy({
    where: { id: req.params.id }
  }).then(function(fave) {
    res.redirect('/user')
  });
});

module.exports = router;
