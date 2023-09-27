const express = require('express');
const router = express.Router();

router.get('/reviews', (req, res) => {
  const reviews = require('../data.json').reviews;
  res.json(reviews);
});

router.post('/reviews', (req, res) => {
    const newReview = req.body;
    const data = require('../data.json');
    data.reviews.push(newReview);
    res.json(newReview);
  });
  
module.exports = router;
