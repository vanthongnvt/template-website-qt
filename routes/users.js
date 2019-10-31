var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('list-user');
});

router.get('/edit', function(req, res, next) {
  res.render('edit-user');
});


module.exports = router;
