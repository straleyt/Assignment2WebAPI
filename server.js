//file: server.js

//node_modules required.
//Packages should be a dependency in the package.json 
var express = require('express');
var http = require('http');
var url = require('url');
var bodyParser = require('body-parser');
var authController = require('./auth');
var authJwtController = require('./auth_jwt');
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
        res.send("No headers sent");
    } else{
        var myHeaders = req.headers;
        Object.keys(myHeaders).forEach(function(key){
            console.log("Header Key: " + key + "    Value: " + myHeaders[key]);
            res.write("Header Key: " + key + "    Value: " + myHeaders[key] + '</br>');
        });
    }
    if(req.body.empty){
         res.send("No body sent");
    } else{
        var myBody = req.body;
        Object.keys(myBody).forEach(function(key){
            console.log("Body Key: " + key + "    Value: " + myBody[key]);
            res.write("Body Key: " + key + "    Value: " + myBody[key] + '</br>');
        });       
    }
});


app.get('/gets', function(req,res){
    //If no headers or body say so
    if(req.headers.empty){
        res.send("No headers sent");
    } else{
        var myHeaders = req.headers;
        Object.keys(myHeaders).forEach(function(key){
            console.log("Header Key: " + key + "    Value: " + myHeaders[key]);
            res.write("Header Key: " + key + "    Value: " + myHeaders[key] + '</br>');
        });
    }
    if(req.body.empty){
         res.send("No body sent");
    } else{
        var myBody = req.body;
        Object.keys(myBody).forEach(function(key){
            console.log("Body Key: " + key + "    Value: " + myBody[key]);
            res.write("Body Key: " + key + "    Value: " + myBody[key] + '</br>');
        });       
    }
});


app.use('*', function(req, res, next) {
    res.statusCode = 405;
    //Code to send back response for invalid verb
    console.log("Not a valid route");

});

//Important. On port 8080
app.use('/', router);
app.listen(process.env.PORT || port);
console.log("Server listening on port " + port);