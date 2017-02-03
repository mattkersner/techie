const models = require('../db/models/index');

function addFave(req, res, next) {
  // called if user is checked in
  if (req.user) {
    models.sequelize.query()
  }
  // redirects to login if user isn't logged in
  if (!req.user) res.redirect('/auth/login');
  return next();
}


module.exports = {
  addFave
}
