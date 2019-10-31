var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.render('list-product');
});

router.get('/add', function(req, res, next) {
  res.render('add-product');
});

router.get('/edit', function(req, res, next) {
  res.render('add-product');
});

module.exports = router;
