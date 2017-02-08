// importing the model
const models = require('../db/models/index');

function getReviews(req, res, next) {
  //query to retrieve reviews and username, join two tables
  models.sequelize.query('SELECT "Reviews"."title", "Reviews"."review_text", "Reviews"."user_id", "Reviews"."id", "Technologies"."id" AS "tech_id", "Users"."username" FROM "Reviews" JOIN "Users" ON "Reviews"."user_id" = "Users"."id" JOIN "Technologies" ON "Reviews"."tech_id" = "Technologies"."id" WHERE "Technologies"."id" = :id', {
    // replaces :id in the query with the params of the tech page
    replacements: { id: req.params.id },
    type: models.sequelize.QueryTypes.SELECT
  }).then((reviews) => {
    // setting res.locals object to access in the response
    res.locals.reviews = reviews;
    return next();
  });
}

function dashReviews(req, res, next) {
  // retrieve logged in users reviews for dashboard
  models.sequelize.query('SELECT "Reviews"."title", "Reviews"."review_text", "Reviews"."user_id", "Reviews"."id", "Technologies"."id" AS "tech_id", "Technologies"."name" AS "tech_name", "Users"."username" FROM "Reviews" JOIN "Users" ON "Reviews"."user_id" = "Users"."id" JOIN "Technologies" ON "Reviews"."tech_id" = "Technologies"."id" WHERE "Users"."id" = :id', {
    // WHERE :id is logged in users id
    replacements: { id: req.user.dataValues.id },
    type: models.sequelize.QueryTypes.SELECT
  }).then((reviews) => {
    // setting res.locals object to access in the response
    res.locals.reviews = reviews;
    return next();
  });
}

function profileReviews(req, res, next) {
  // retrieve profile users faves
  models.sequelize.query('SELECT "Reviews"."title", "Reviews"."review_text", "Reviews"."user_id", "Reviews"."id", "Technologies"."id" AS "tech_id", "Technologies"."name" AS "tech_name", "Users"."username" FROM "Reviews" JOIN "Users" ON "Reviews"."user_id" = "Users"."id" JOIN "Technologies" ON "Reviews"."tech_id" = "Technologies"."id" WHERE "Users"."id" = :id', {
    // WHERE :id is id of user profile
    replacements: { id: req.params.id },
    type: models.sequelize.QueryTypes.SELECT
  }).then((reviews) => {
    // setting res.locals to access
    res.locals.reviews = reviews;
    return next();
  });
}

// exporting the function
module.exports = {
  getReviews,
  dashReviews,
  profileReviews
}
