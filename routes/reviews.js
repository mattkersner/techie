const express = require('express');
const router = express.Router();
const models = require('../db/models/index');


//get route to render the review form
router.get('/', function(req, res) {
  res.render('review/reviewform');
})


//post route to add review form info to Reviews model
router.post('/', function(req, res) {
  models.Reviews.create({
    user_id: req.body.user_id,
    tech_id: req.body.tech_id,
    review_text: req.body.review_text
  }).then(() => {
    //where should I redirect? Have to add a loop to render comments on
    //specific tech details page
    res.redirect('/user')
  });
});




module.exports = router;
