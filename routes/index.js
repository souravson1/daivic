var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/service', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.get('/news', function(req, res, next) {
  res.render('news', { title: 'News' });
});
router.get('/asicdesign', function(req, res, next) {
  res.render('asic-design', { title: 'News' });
});
router.get('/analog', function(req, res, next) {
  res.render('analog-design', { title: 'News' });
});
router.get('/physical', function(req, res, next) {
  res.render('physical-design', { title: 'News' });
});


module.exports = router;
