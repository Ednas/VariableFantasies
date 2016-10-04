var express = require('express');
var router = express.Router();
var _storieModel = require('../models/stories');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Welcome To Stories API!!!!');
});


router.post('/newStory', function(req, res, next) {
  var story = req.body;
  
  var _newStory = new _storieModel(story);
  
      _newStory.save(function (err) {
        if(err){
            console.log(err)
        }
            res.status(201).json({status: "Ok", transaction: "PAID"});
        });

});
    
router.get('/all', function(req, res, next) {
  var story = req.body;
  
    _storieModel.find({}, function(err, data){
        console.log(data);
        res.status(200).json({status: 'Ok', transaction: 'Paid', data: data})
    })

});

module.exports = router;
