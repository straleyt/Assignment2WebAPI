//file: server.js

//node_modules required.
//Packages should be a dependency in the package.json 
var express = require('express');
var http = require('http');
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

//When using http://localhost:8080/posts
router.route('/posts')
    .post( function (req, res) {
            console.log(req.body);
            res = res.status(200);
            if (req.get('Content-Type')) {
                console.log("Content-Type: " + req.get('Content-Type'));
                res = res.type(req.get('Content-Type'));
            }
            res.send(req.body);
        }
    );


//Important. On port 8080
app.use('/', router);
app.listen(process.env.PORT || port);
console.log("Server listening on port " + port);