var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Report = require('../../models/Report.js');

/* GET ALL Report */
router.get('/', function(req, res, next) {
  Report.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Report BY ID */
router.get('/name/:name', function(req, res, next) {
  Report.find({
    UserName: req.params.name
  }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/date/:date', function(req, res, next) {
  Report.find({
    Reg_Date_num: req.params.date
  }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/:name/:date', function(req, res, next) {
  Report.find({
    UserName: req.params.name,
    Reg_Date_num: req.params.date
  }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/:name/:date1/:date2', function(req, res, next) {
  Report.find({
    UserName: req.params.name,
    Reg_Date_num: {$gte:req.params.date1, $lte:req.params.date2}
  }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Report */
router.post('/', function(req, res, next) {   
  Report.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Report */
router.put('/:id', function(req, res, next) {  
  Report.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Report */
router.delete('/:id', function(req, res, next) {
  
  Report.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
