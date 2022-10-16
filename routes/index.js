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

module.exports = router;
