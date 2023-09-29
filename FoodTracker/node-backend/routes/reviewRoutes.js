const express = require('express');
const router = express.Router();
const data = require('../data.json');
const { v4: uuidv4 } = require('uuid');

router.get('/reviews', (req, res) => {
  const reviews = require('../data.json').reviews;
  res.json(reviews);
});

router.post('/reviews', (req, res) => {
    const newReview = req.body;
    newReview.id = uuidv4();
    data.reviews.push(newReview);
    res.json(newReview);
    
  });

router.delete('/reviews/:id', (req, res) => {
    const reviewId = req.params.id; 
    const index = data.reviews.findIndex((review) => review.id === reviewId);

  if (index !== -1) {
    data.reviews.splice(index, 1);
    res.status(204).send(); 
  } else {
    res.status(404).json({ message: 'Review not found' });
  }

})
module.exports = router;