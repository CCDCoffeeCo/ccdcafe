var express = require('express');
var router = express.Router();

/* MAPE different RUI */
var ctrlHome = require('../controllers/home');
var ctrlAbout = require('../controllers/about');
var ctrlFarmer = require('../controllers/farmer');
var ctrlHouse = require('../controllers/cafehouse');
var ctrlRoaster = require('../controllers/roaster');
var ctrlContact = require('../controllers/contact');

/* GET home page. */
router.get('/',ctrlHome.homelist);
router.get('/location', ctrlHome.locationInfo);
router.get('/location/review/new', ctrlHome.addReview);

/* About page */
router.get('/about', ctrlAbout.about);

/* Cafe farmer page */
router.get('/farmer', ctrlFarmer.farmer);

/* Cafe house pages */
router.get('/cafehouse', ctrlHouse.house);

/* Roaster pages */
router.get('/roaster', ctrlRoaster.roaster);

/* Contact pages */
router.get('/contact', ctrlContact.contact);

module.exports = router;
