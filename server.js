require('dotenv').config();
var express = require('express');
var jwt = require('jsonwebtoken');
var bearerToken = require('express-bearer-token');

var app = express();

app.use(bearerToken());
app.use(express.static('public'));

app.get('/login',function (req,res,next) {
  var user = {
    name: "Nathan",
    cohort: "g[23]",
    isAdmin: false
  }
  res.json({token:jwt.sign(user,process.env.SECRET)});
});

app.use(function (req,res,next) {
  jwt.verify(req.token, process.env.SECRET,function (err,decoded) {
    if (!err) {
      next();
    } else {
      res.status(400).send('Bad Request');
    }
  });
});

app.get('/api',function (req,res,next) {
  res.send("Accessed Granted!");
});

app.get('/ipa',function (req,res,next) {
  res.send("Sierra Nevada IPA for everyone on K C");
});

app.listen(3000);
