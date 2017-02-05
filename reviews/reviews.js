// importing the model
const models = require('../db/models/index');

function getReviews(req, res, next) {
  models.sequelize.query('SELECT "Reviews"."review_text", "Users"."username" FROM "Reviews" JOIN "Technology" ON "Reviews"."tech_id" = "Technology"."tech_id" JOIN "Users" ON "Reviews"."user_id" = "Users"."user_id"  WHERE "Users"."id" = :id', {
    // replaces :id in the query
    replacements: { id: req.user.id },
    // don't need metadata in the response
    type: models.sequelize.QueryTypes.SELECT
  }).then((reviews) => {
    console.log(reviews);
    // setting res.locals object to access in the response
    res.locals.reviews = reviews;
    // next function
    return next();
  });
}

// exporting the function
module.exports = {
  getReviews
}
