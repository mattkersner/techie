const models = require('../db/models/index');

function findFaves(req, res, next) {
  models.sequelize.query('SELECT "Technologies"."name", "Users"."firstName", "Users"."lastName", "Users"."email", "Users"."github", "Users"."skills", "Technologies"."id", "Technologies"."category_name" FROM "Technologies" JOIN "Favorites" ON "Favorites"."tech_id" = "Technologies"."id" JOIN "Users" ON "Favorites"."user_id" = "Users"."id" WHERE "Users"."id" = :id;', {
    replacements: { id: req.user.dataValues.id },
    type: models.sequelize.QueryTypes.SELECT
  }).then((faves) => {
    res.locals.faves = faves;
    return next();
  })
}

module.exports = {
  findFaves
}
