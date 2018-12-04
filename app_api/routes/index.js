const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

const ctrlLocations = require('../controllers/locations');
const ctrlReviews = require('../controllers/reviews');
const ctrlAuth = require('../controllers/authentication');

// Authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// CCD Cafe House Info list
router.get('/locations/:locationid', ctrlLocations.locationsReadOne);

// CCD Cafe House Reviews
//router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);
//router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
//router.put('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
//router.delete('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);

router
    .route('/locations/:locationid/reviews')
    .post(auth, ctrlReviews.reviewsCreate);

router
    .route('/locations/:locationid/reviews/:reviewid')
    .get(ctrlReviews.reviewsReadOne)
    .put(auth, ctrlReviews.reviewsUpdateOne)
    .delete(auth, ctrlReviews.reviewsDeleteOne);

module.exports = router;
