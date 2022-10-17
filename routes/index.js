/*File name: index.js
  Student name: Glenn Dacara
  Student ID: 301125864
  Date: October 10 2022 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET About Page */
router.get('/about_me', function(req,res,next){
  res.render('about_me');
});

/* Get services page*/
router.get('/services', function(req,res,next){
  res.render('services');
});

/* Get services page*/
router.get('/contact', function(req,res,next){
  res.render('contact');
});

module.exports = router;
