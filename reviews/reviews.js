// importing the model
const models = require('../db/models/index');

function getReviews(req, res, next) {
  //query to retrieve reviews and username, join two tables
  models.sequelize.query('SELECT "Reviews"."title", "Reviews"."review_text", "Users"."username" FROM "Reviews" JOIN "Users" ON "Reviews"."user_id" = "Users"."id" JOIN "Technologies" ON "Reviews"."tech_id" = "Technologies"."id" WHERE "Technologies"."id" = :id', {
    // replaces :id in the query with the params of the tech page
    replacements: { id: req.params.id },
    type: models.sequelize.QueryTypes.SELECT
  }).then((reviews) => {
    // setting res.locals object to access in the response
    res.locals.reviews = reviews;
    return next();
  });
}

// exporting the function
module.exports = {
  getReviews
}
