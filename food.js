var express = require('express');
var router = express.Router();

router.get('/:some', function(req, res) {
  res.send('Its good to eat '+req.params.some);
});


module.exports = router;