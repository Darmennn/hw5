const express= require("express");
const bodyParser = require('body-parser');
const path=require('path');

var app = express();

var parser = bodyParser.urlencoded({ extended: false});

app.set("view engine", "ejs");
app.set('Views', path.join(__dirname, 'Views'));


app.get('/form',function(req,res){
	res.render('form');
});

app.post('/form', parser, function(req,res){
	res.render('send', { data: req.body})
});

app.listen(3000);