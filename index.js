
var express = require('express');
var food = require ('./food')

var app = express();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
app.use('/food', food);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/:name', function (req, res) {
  res.send('Hello '+req.params.name);
});
