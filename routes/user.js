const express = require('express');
const router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const faveHelpers = require('../faves/fave-helpers');

/* GET users listing. */
router.get('/', authHelpers.loginRequired, faveHelpers.findFaves, (req, res, next) => {
  res.render('user/index', {
    user: req.user.dataValues,
    faves: res.locals.faves
  });
});

module.exports = router;
