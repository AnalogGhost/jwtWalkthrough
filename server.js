var express = require('express');
var app = express();

app.get('/login',function (req,res,next) {
  res.send('/login');
});

app.listen(3000);
