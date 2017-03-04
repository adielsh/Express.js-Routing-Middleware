var express = require('express');
var router = express.Router();

router.get('/:some', function(req, res) {
  res.send('Its good to eat '+req.params.some);
  console.log(+req.query.first+ +req.query.sec)
});


module.exports = router;