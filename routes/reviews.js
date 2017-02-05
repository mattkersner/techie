const express = require('express');
const router = express.Router();
const models = require('../db/models/index');

router.post('/', function(req, res) {
  models.Reviews.create({
    user_id: req.body.user_id,
    tech_id: req.body.tech_id,
    review_text: req.body.review_text
  }).then(() => {
    res.redirect('/technology/details')
  });
});




module.exports = router;
