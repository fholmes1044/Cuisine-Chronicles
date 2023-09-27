const express = require('express');
const router = express.Router();
const data = require('../data.json');

router.get('/reviews', (req, res) => {
  const reviews = require('../data.json').reviews;
  res.json(reviews);
});

router.post('/reviews', (req, res) => {
    const newReview = req.body;
    data.reviews.push(newReview);
    res.json(newReview);
  });

router.delete('/reviews/:id', (req, res) => {
    const reviewId = parseInt(req.params.id); // 
    const index = data.reviews.findIndex((review) => review.id === reviewId);

  if (index !== -1) {
    data.reviews.splice(index, 1);
    res.status(204).send(); 
  } else {
    res.status(404).json({ message: 'Review not found' });
  }

})
module.exports = router;
