var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.render('list-category');
});

router.get('/add', function(req, res, next) {
  res.render('add-category');
});

router.get('/edit', function(req, res, next) {
  res.render('add-category');
});

module.exports = router;
