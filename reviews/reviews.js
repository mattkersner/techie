// importing the model
const models = require('../db/models/index');

function getReviews(req, res, next) {
  console.log(req);
  models.sequelize.query('SELECT "Reviews"."title", "Reviews"."review_text", "Users"."username" FROM "Reviews" JOIN "Users" ON "Reviews"."user_id" = "Users"."id" JOIN "Technologies" ON "Reviews"."tech_id" = "Technologies"."id" WHERE "Technologies"."id" = :id', {
    // replaces :id in the query
    replacements: { id: req.params.id },
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
