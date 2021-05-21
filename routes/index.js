var express = require('express');
var router = express.Router();

/* GET Login page. */
router.get('/', function(req, res) {
  res.render('login', { title: 'Login' });
});
/* GET Registration page*/
router.get('/register', function(req, res) {
  res.render('register', { title: 'Register' });
});
/* GET Recover password page*/
router.get('recoverpw', function(req, res) {
  res.render('recoverpw', { title: 'Recover Password' });
});

module.exports = router;
