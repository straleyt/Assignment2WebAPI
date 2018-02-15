//file: server.js

//node_modules required.
//Packages should be a dependency in the package.json 
var express = require('express');
var http = require('http');
var url = requiree('url');
var bodyParser = require('body-parser');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var port = 8080;

//Creating the node.js server
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

var router = express.Router();

app.post('/posts', function(req,res){
    //If no headers or body say so
    if(req.headers.empty){
        res.send("no headers sent");
    } else{
        res.send("Headers sent, lets read them out");
    }


});




//Important. On port 8080
app.use('/', router);
app.listen(process.env.PORT || port);
console.log("Server listening on port " + port);