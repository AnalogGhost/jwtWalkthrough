require('dotenv').config();
var express = require('express');
var jwt = require('jsonwebtoken');

var app = express();

app.use(express.static('public'));

app.get('/login',function (req,res,next) {
  var user = {
    name: "Nathan",
    cohort: "g[23]",
    isAdmin: false
  }
  res.json({token:jwt.sign(user,process.env.SECRET)});
});

app.listen(3000);
