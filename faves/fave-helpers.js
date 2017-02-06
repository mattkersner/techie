const models = require('../db/models/index');

// finds logged in users faves to render on dashboard
function findFaves(req, res, next) {
  models.sequelize.query('SELECT "Technologies"."name", "Users"."firstName", "Users"."lastName", "Users"."email", "Users"."github", "Users"."skills", "Technologies"."id", "Technologies"."category_name", "Favorites"."id" AS fave_id FROM "Technologies" JOIN "Favorites" ON "Favorites"."tech_id" = "Technologies"."id" JOIN "Users" ON "Favorites"."user_id" = "Users"."id" WHERE "Users"."id" = :id;', {
    replacements: { id: req.user.dataValues.id },
    type: models.sequelize.QueryTypes.SELECT
  }).then((faves) => {
    res.locals.faves = faves;
    return next();
  })
}

// finds faves for individual user profiles
// bonus: maybe eventually sort by categories on user pages
function profileFaves(req, res, next) {
  models.sequelize.query('SELECT "Technologies"."name", "Users"."firstName", "Users"."lastName", "Users"."email", "Users"."github", "Users"."skills", "Technologies"."id", "Technologies"."category_name", "Favorites"."id" AS fave_id FROM "Technologies" JOIN "Favorites" ON "Favorites"."tech_id" = "Technologies"."id" JOIN "Users" ON "Favorites"."user_id" = "Users"."id" WHERE "Users"."id" = :id;', {
    replacements: { id: req.params.id },
    type: models.sequelize.QueryTypes.SELECT
  }).then((faves) => {
    res.locals.faves = faves;
    return next();
  })
}

module.exports = {
  findFaves,
  profileFaves
}
