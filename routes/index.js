var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.get('/marksheet', function(req, res, next) {
  res.render('marksheet', { title: 'Express' });
});

router.post('/process', function(req, res, next) {
  var a = parseInt(req.body.txt1);
  var b = parseInt(req.body.txt2);
  var c = a + b;
  console.log("sum is " + c)
  res.render('ans', { mya:a,myb:b,myc:c});
});

router.post('/marksheet', function(req, res, next) {
  var eg = parseInt(req.body.txt1);
  var c = parseInt(req.body.txt2);
  var os = parseInt(req.body.txt3);
  var coa = parseInt(req.body.txt4);
  var total = parseInt(req.body.txt5);
  var total = eg + c + os + coa;
  console.log("sum is " + c)
  res.render('total', { yeg:eg,yc:c,yos:os,ycoa:coa,ytotal:total});
});


module.exports = router;
