const express = require('express');
const router = express.Router();
const models = require('../db/models/index');


//get route to render the review form
router.get('/:id', function(req, res) {
  res.render('review/reviewform', {tech_id: req.params.id});
})


//post route to add review form info to Reviews model
router.post('/', function(req, res) {
  console.log(req.body);
  models.Reviews.create({
    user_id: req.user.id,
    tech_id: req.body.techId,
    review_text: req.body.review_text,
    title: req.body.title
  }).then(() => {
    //where should I redirect? Have to add a loop to render comments on
    //specific tech details page
    res.redirect('/user')
  });
});




module.exports = router;
